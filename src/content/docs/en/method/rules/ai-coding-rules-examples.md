---
title: "AI coding rules examples: verifiable criteria that hold"
description: "Concrete AI coding rules examples: file size, function size, naming, test coverage, secrets. What makes a good rule, and how to integrate with lint and CI."
---

*Rules the AI can check before it hands back code — measurable, narrow, and worth defending.*

## The short answer

Good AI coding rules are **verifiable**: the AI (or a linter) can decide pass/fail without taste. File size under 300 lines. Functions under 30 lines. No hardcoded secrets. 80% test coverage on public functions. These are the rules worth writing down, because the agent can check them before returning a diff — and humans can audit them in code review.

## What a good rule looks like

A rule is worth writing when three things are true: it is measurable, it is narrow enough to apply to a single change, and you can defend it when challenged.

- **Measurable** — "max 30 lines per function" is measurable. "Keep functions short" is a preference.
- **Narrow** — "no magic numbers" applies file by file. "Follow clean architecture" does not.
- **Defensible** — someone will push back. A good rule has a two-sentence justification (readability, review cost, runtime budget).

Rules that fail any of these three end up being ignored or argued about in every PR. We see this pattern across the teams we work with: teams with 40 vague rules get less consistent code than teams with 10 sharp ones.

## A working `default-rules.md`

Here is a concrete example — a cut-down version of what `lyt init` generates:

```markdown
# Default rules

These rules are verifiable. The AI checks them before handing back code.
`lyt lint` also checks them in CI.

## Code structure

| Rule | Threshold | Why |
|------|-----------|-----|
| Max file size | 300 lines | Keeps files reviewable in one screen |
| Max function size | 30 lines (50 absolute max) | Forces single responsibility |
| Max nesting depth | 3 levels | Deeper nesting usually hides a missing function |
| Parameters per function | 4 max | Beyond 4, pass an object |

## Hardcoded values — forbidden

| Forbidden | Replacement |
|-----------|-------------|
| Magic numbers | Named constant (`MAX_RETRIES = 3`) |
| Hardcoded URLs | Environment variable |
| Hardcoded colors | CSS variable or theme token |

## Error handling

- No silent failures — every error handled explicitly.
- No empty `catch` blocks.
- Error messages state what failed and why.

## Tests

| Rule | Threshold |
|------|-----------|
| Unit coverage on public functions | 80% minimum |
| Every new feature | Tests required before merge |
| Every fix | A test that proves the bug does not recur |

## Security

- No secrets in code — API keys, tokens, passwords in `.env` only.
- User inputs escaped at the boundary.
- Dependencies with known CVEs block the merge.

## Git

- Commit format: `type(scope): message`
- Branch per issue: `type/ISS-XXXX-slug`
- No direct push to main — everything through PR.
```

Each line above is a rule the AI can literally check. The agent reads this file at session start, and the `session-start` skill instructs it to verify the rules before handing back a change.

## What a bad rule looks like

A few examples of rules we have seen in practice that tend not to hold:

- "Write clean code." — Not measurable. Clean according to whom?
- "Use clean architecture." — Narrow? No. Defensible? Not without 20 pages of context.
- "Prefer functional style." — Taste-based. Will be argued about on every PR.
- "Comments should be helpful." — Every rule should be.

These aren't wrong as aspirations; they are wrong as rules. They belong in a style guide or in the manifest, not in a file that claims pass/fail authority.

## Integrating with lint and CI

Rules that overlap with what a linter can do should be verified by the linter. ESLint, Ruff, golangci-lint, rubocop — each enforces a slice of the rules file mechanically. The AI rule file then becomes the **specification** that the linter implements, plus the rules a linter cannot easily check (secrets, test coverage thresholds, "no TODO left in production").

`lyt lint` walks the rules and runs both: the linter checks, plus a handful of repo-level checks (secrets, file-size thresholds, coverage minimums). In CI, the command runs on every PR. Locally, the AI runs it before handing back a change.

## Common questions

**Q: Should rules ever differ between projects?**
A: Yes. Keep `default-rules.md` universal and add `project-rules.md` for project-specific thresholds (a realtime system may have different latency rules than a batch job).

**Q: What if my team disagrees on a rule?**
A: Arguments are useful — they expose whether the rule is defensible. Keep the ones with a clear justification; drop the ones that are only habit.

**Q: Can rules be per-language?**
A: Yes — a rule file per language is fine (`rules/python.md`, `rules/typescript.md`), loaded from the index.

## Learn more

- Read the parent pillar: [Rules](/en/method/rules/)
- [How to write a skill for an AI agent](/en/method/skills/how-to-write-a-skill/) — procedures the AI follows, replacing personas
- [Writing a CLAUDE.md that works](/en/method/manifest/writing-claude-md-that-works/) — the file where the AI reads its first instructions
- External: [Google engineering practices documentation](https://google.github.io/eng-practices/)

## Try Lytos in 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

See the CLI on [npm](https://www.npmjs.com/package/lytos-cli) · The method on [GitHub](https://github.com/getlytos/lytos-method).
