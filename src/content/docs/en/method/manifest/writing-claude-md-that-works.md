---
title: "How to write a CLAUDE.md that works"
description: "A short, imperative CLAUDE.md that points at deeper files is more respected than a long one. Here is what to include, what to leave out, and a working example."
---

*What ends up in CLAUDE.md determines what the agent actually reads — most files try to do too much.*

## The short answer

A CLAUDE.md that works is short, imperative, and points at deeper files. It is an **index**, not a dumping ground. Fifteen to twenty lines is usually enough: tell the agent what project this is, which files to read at session start, and the procedure to follow when it picks up a task. Keep prose, personas, and self-praise out of it — they dilute the signal Claude Code actually uses.

## Why short beats long

Claude Code reads `CLAUDE.md` at the start of every session. The file sits at the top of the context window, so every token in it is paid for, every time. A 2,000-line CLAUDE.md stuffed with onboarding narrative tends to get skimmed — by the model and by human contributors.

The pattern that holds across the teams we have worked with: **CLAUDE.md points, other files explain**. The agent loads CLAUDE.md, follows its pointers to a manifest, skills, rules and memory, and only pulls in what the current task needs. That keeps the root file stable, cheap to read, and easy to review in code review.

If a new contributor needs 500 lines of onboarding, those 500 lines belong in `.lytos/memory/` or in a dedicated onboarding doc — not in the file the AI reads every single session.

## What a working CLAUDE.md looks like

Here is a concrete example, close to what `lyt init` generates:

```markdown
# CLAUDE.md

This project uses **Lytos** — a method for working with AI agents.

## Every session

Read in order, before doing anything else:

1. `.lytos/manifest.md` — project constitution
2. `.lytos/memory/MEMORY.md` — accumulated knowledge (then load relevant cortex/ files)
3. `.lytos/rules/default-rules.md` — universal quality criteria
4. `.lytos/rules/project-rules.md` — project-specific rules

## To work on a task

5. `.lytos/issue-board/BOARD.md` — current board state
6. `.lytos/sprint.md` — current sprint
7. `.lytos/skills/session-start.md` — full session procedure

## Rules of engagement

- The YAML frontmatter of issues is the source of truth
- Don't interpret silently — ask if an instruction is ambiguous
- At end of task: update frontmatter, move the issue file, update BOARD.md
- Every commit references its issue: `Refs: ISS-XXXX`
```

That is roughly 20 lines. It tells the agent exactly what to read, in what order, and how to behave at the edges.

## What to keep out

A few things commonly appear in CLAUDE.md and usually should not:

- **Long project narrative.** Belongs in `.lytos/manifest.md` or `memory/cortex/architecture.md`.
- **Personas.** "You are an expert senior developer…" does not change what the model can do. It only burns tokens.
- **Praise for the project.** "This is a cutting-edge, world-class platform" is not information.
- **Duplicated rules.** If rules live in `.lytos/rules/`, don't re-list them here — just point.
- **Conversation-specific instructions.** "Always use French" or "be concise" tend to belong in a user-level preference, not in a file your entire team commits.

## Common questions

**Q: Does this also apply to AGENTS.md and Cursor rules?**
A: Yes. The same "be an index, point at deeper files" principle works for AGENTS.md (Codex, OpenAI agents) and for `.cursor/rules/`. The bridge file is per-tool; the `.lytos/` content it points at is shared.

**Q: Should CLAUDE.md be committed to git?**
A: Yes. It is part of your project's instructions, and everyone — human or AI — benefits from the same starting point.

**Q: What if the project has no `.lytos/` folder yet?**
A: Start smaller — a CLAUDE.md with just the tech stack, the coding conventions, and a one-paragraph "why this project exists". Grow it toward the index-of-pointers pattern as your `.lytos/` structure matures.

## Learn more

- Read the parent pillar: [Manifest](/en/method/manifest/)
- Related: [AGENTS.md vs CLAUDE.md vs cursor rules](/en/method/manifest/agents-md-vs-claude-md-vs-cursor-rules/)
- External: [Anthropic's Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/overview)

## Try Lytos in 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

See the CLI on [npm](https://www.npmjs.com/package/lytos-cli) · The method on [GitHub](https://github.com/getlytos/lytos-method).
