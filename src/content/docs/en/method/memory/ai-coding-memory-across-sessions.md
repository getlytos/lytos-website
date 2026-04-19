---
title: "How to organize Claude Code memory across sessions"
description: "A simple pattern for keeping Claude Code, Cursor and Codex aware of your project decisions between sessions — without re-explaining context every time."
---

*A short guide for teams tired of pasting the same architecture summary into every new chat.*

## The short answer

To stop re-explaining your project to the AI every session, commit a `memory/` folder to your repository and tell the agent to read it at session start. The folder holds the stable knowledge — architecture decisions, recurring bugs, code patterns, domain vocabulary — so Claude Code memory is restored from disk on every new conversation.

## Why this matters

AI coding assistants are stateless. Each new Claude Code, Cursor or Codex session starts blank. The model does not remember that you tried Redis last quarter and moved to PostgreSQL, that your billing module uses an eventual-consistency pattern on purpose, or that `Customer` means something specific in your domain.

Teams usually react in one of three ways: they re-paste the same summary into every chat, they rely on a long `CLAUDE.md` that drifts from reality, or they accept that the AI will occasionally re-suggest patterns they have already rejected. None of these scale well past a few weeks of work.

The friction is not the model. The friction is that useful project knowledge lives in people's heads — or in Slack threads the AI cannot read. A small, version-controlled memory folder tends to resolve this for most teams we have worked with, because it puts the context next to the code.

## The concrete structure

The pattern is a single index file plus specialized "cortex" files, loaded on demand:

```
.lytos/memory/
├── MEMORY.md              # Index — read every session
└── cortex/                # Specialized zones — loaded on demand
    ├── architecture.md
    ├── patterns.md
    ├── bugs.md
    ├── domain.md
    ├── frontend.md
    └── backend.md
```

`MEMORY.md` is short: a table of contents, a one-paragraph status of the project, and pointers to each cortex file with a "load when..." hint. The cortex files are where the detail lives — each one focused on a single domain so the agent only loads what the current task needs.

Each AI tool discovers the folder through a small bridge file at the repository root:

- **Claude Code** reads `CLAUDE.md`, which points to `.lytos/memory/MEMORY.md`
- **Cursor** reads rules under `.cursor/rules/`, which do the same
- **Codex / OpenAI agents** read `AGENTS.md`, with identical pointers

The bridge is per-tool; the memory itself is the same file for everyone. That is what makes the knowledge portable across agents.

## Common questions

**Q: Isn't this what Claude Projects or Cursor's memory already do?**
A: Those features store context on a vendor's server, scoped to a workspace. A committed `memory/` folder lives in your repository, versions with your code, and is readable by any agent your team adds tomorrow.

**Q: How big should memory get before it becomes a problem?**
A: The index (`MEMORY.md`) should stay short — under 150 lines is a reasonable ceiling. Cortex files can grow; the agent only loads the relevant ones.

**Q: Who writes these files?**
A: Whoever closes a task that produced a reusable insight. A lead dev typically curates the index. The agent itself can draft entries at the end of a session, which you review before committing.

**Q: Does this work for solo developers?**
A: Yes — and arguably it pays off faster, since you are also the one who would otherwise re-type the context.

## Learn more

- Read the parent pillar: [Memory](/en/method/memory/)
- Related: [Writing a CLAUDE.md that works](/en/method/manifest/writing-claude-md-that-works/)
- External: [Anthropic's Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/overview)

## Try Lytos in 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

See the CLI on [npm](https://www.npmjs.com/package/lytos-cli) · The method on [GitHub](https://github.com/getlytos/lytos-method).
