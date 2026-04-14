---
title: Memory
description: Accumulated knowledge that persists across sessions — Memory, the fifth pillar of Lytos.
---

Memory is the fifth pillar of Lytos: **Memory**.

AI agents are stateless — they forget everything between sessions. Memory gives them persistent knowledge about your project, stored in files you own.

## Structure

```
memory/
├── MEMORY.md              # Index — read every session
└── cortex/                # Specialized zones — loaded on demand
    ├── architecture.md
    ├── patterns.md
    ├── bugs.md
    ├── sprints.md
    ├── frontend.md
    ├── backend.md
    └── business.md
```

## How it works

### MEMORY.md — The index

Read at every session. Contains a table of contents pointing to cortex files, plus a short living summary of the project's current state.

The agent reads the index, identifies which cortex files are relevant to the current task, and loads only those.

### Cortex files — Specialized knowledge

Each cortex file covers a domain:

| File | Content | Load when... |
|------|---------|--------------|
| `architecture.md` | Tech choices, structure decisions | Any structural task |
| `patterns.md` | Code patterns that work well | Code review, new features |
| `bugs.md` | Recurring problems and solutions | Debugging, fixes |
| `sprints.md` | Sprint history and retrospectives | Planning |
| `frontend.md` | UI/UX decisions, component patterns | Frontend tasks |
| `backend.md` | API decisions, data model choices | Backend tasks |
| `business.md` | Domain knowledge, business rules | Any domain-related task |

## What to store in memory

- Architecture decisions and their rationale
- Patterns that work well in this project
- Recurring bugs and their root causes
- Domain-specific knowledge the AI needs

## What NOT to store

- Code snippets (they live in the code)
- Git history (use `git log`)
- Temporary task details (use the issue board)

## Why it matters

Without memory, the AI makes the same mistakes twice. It suggests patterns you've already rejected. It doesn't know that you tried Redis and switched to PostgreSQL for good reasons.

Memory is what makes Lytos **sovereign** — your project knowledge lives in files you own, not in a vendor's conversation history.
