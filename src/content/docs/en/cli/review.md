---
title: lytos review
description: Cross-model audit for issues in 4-review/. Prints a self-contained prompt or ingests a returned audit block.
---

`lyt review` is Lytos's cross-model audit primitive. An issue in `4-review/` is code-complete per the implementer. `lyt review` produces a self-contained prompt that a **different** AI session can follow cold — no repo context needed — to return a `GO` or `NO_GO` verdict in a fixed block format. The command then writes that verdict back into the issue file and, on `NO_GO`, moves the issue to `3-in-progress/` with the concrete list of points to fix.

## Usage

```bash
lyt review                                  # list pending reviews
lyt review ISS-0050                         # print the audit prompt (stdout)
lyt review ISS-0050 --export > prompt.md    # save the prompt to a file
lyt review --all --export                   # batch: write .lytos/review/<id>.prompt.md per pending issue
lyt review ISS-0050 --accept audit.md       # ingest a returned audit from a file
pbpaste | lyt review ISS-0050 --accept -    # ingest from the clipboard / stdin
lyt review ISS-0050 --accept - --overwrite  # replace a previous audit block (re-audit)
```

## The two flows

### Flow A — Agentic auditor (has shell + file tools)

A fresh AI session (Claude Code, Codex CLI, Cursor Agent, Windsurf Cascade…) runs `lyt review ISS-XXXX` itself — the terminal is its tool. The printed prompt tells it exactly what to do:

1. Read the listed files.
2. Inspect the diff.
3. Apply the code-review skill.
4. Write the audit block at the end of the issue file.
5. If `NO_GO`, move the file to `3-in-progress/` and update the frontmatter.

The human watches but does not copy-paste. This is the preferred flow when the auditor tool has filesystem access.

### Flow B — Chat / web auditor

A fresh ChatGPT, Gemini web, or similar chat without filesystem tools can still audit. The human plays the carrier:

```bash
lyt review ISS-0050 --export > /tmp/prompt.md
# Paste /tmp/prompt.md into the chat UI.
# The chat returns an audit block.
# Save its response to /tmp/audit.md, then:
lyt review ISS-0050 --accept /tmp/audit.md
# or pipe directly:
pbpaste | lyt review ISS-0050 --accept -
```

The CLI parses the audit block, writes it to the issue file, and handles the `NO_GO` transition.

## Why the auditor must not be the implementer

This is the whole point of the command — and it is worth stating directly four different ways, because teams used to single-session workflows tend to skip it.

1. **Cognitive biases are model-specific.** A model that audits its own code reads its own reasoning as obviously correct. The blind spot that caused any mistake remains invisible to the same blind spot.
2. **Nobody validates their own PR.** Code review exists because distance matters. A fresh auditor restores that distance, even when the two reviewers are AI.
3. **Compliance and traceability.** Many regulated contexts (finance, health, public sector) require review independence. An auditor model distinct from the implementer produces an artifact a compliance officer can point at.
4. **Proves Lytos's model-independence promise.** The point of putting the context in the repo is that any capable model can pick it up. Alternating vendors per review is the cleanest live demonstration that you are not locked in.

Concretely: if Claude Code implemented an issue, audit it with GPT-5 or Codex or Gemini. If GPT wrote the code, audit with Claude or Gemini. The pairing matters less than the principle: **never the same session that wrote the code**.

## What a good audit block looks like

The prompt asks for this exact shape and the CLI parses it to decide the transition:

```markdown
## Audit — 2026-04-22

**Verdict:** GO

### Checks
- [x] Tests pass (134/134 via `npm test`)
- [x] Issue checklist complete
- [x] Rules respected (file ≤ 300 lines, fn ≤ 30, coverage ≥ 80%)
- [x] Documentation aligned (README + /cli/archive page)

### Notes
src/commands/archive.ts stays under the file-size threshold. The --dry-run path is unit-tested. One minor style nit in applyAudit() noted but non-blocking.
```

A `NO_GO` variant carries a concrete fix list:

```markdown
## Audit — 2026-04-22

**Verdict:** NO_GO

### Checks
- [x] Tests pass
- [ ] Documentation aligned — README commands table not updated

### Notes
The feature works but the user-facing README does not show it. A dev scanning the README will miss it entirely.

### To fix before next review
- [ ] Add a `lyt archive` row to README.md commands table
- [ ] Mirror the row in docs/fr/README.md
```

The `- [ ]` checkboxes matter: they let the implementer tick them off during the rework, and a re-audit sees at a glance what's done.

## Re-auditing an issue

If an issue already has an `## Audit —` block (previous verdict), `--accept` refuses to silently overwrite — the old audit is historical signal. Pass `--overwrite` to replace it:

```bash
# First audit came back NO_GO, implementer fixed the points, moved back to 4-review.
# Second audit:
lyt review ISS-0050 --accept - --overwrite
```

The old block and everything up to the next top-level section is replaced with the new one. Subsequent parts of the issue body are preserved.

## Relationship with the Lytos workflow

```
3-in-progress        4-review                 5-done        archive/
     │                  │                       │              │
     │ dev finishes     │ lyt review            │ lyt close    │ lyt archive
     │ coding           │ (cross-model audit)   │ (human)      │ (7d retention)
     ▼                  ▼                       ▼              ▼
   (branch)         PR opened              merged to main     long-term
```

`lyt review` sits right before the human runs `lyt close`. Think of it as the unit test for "is this PR actually good?" — except the unit tester is a different AI, not the one that wrote the code.

## See also

- [Lytos workflow](/en/workflow/) — the full lifecycle with the Reviewer step
- [`lyt close`](/en/cli/overview/) — the human validation step after `lyt review` returns GO
- [`lyt archive`](/en/cli/archive/) — the retention-based archival that follows done
