---
title: Manifest
description: The project's constitution — Intent, the first pillar of Lytos.
---

The manifest is the first pillar of Lytos: **Intent**.

It answers the question every AI agent needs before doing anything useful: *what is this project, and why does it exist?*

## What it contains

The manifest is a single file — `manifest.md` — placed at the root of `.lytos/`. It defines:

| Section | What it answers |
|---------|----------------|
| **Identity** | Name, description, owner, repo, version |
| **Why this project exists** | The problem it solves, the value it creates |
| **What it is / is not** | Clear boundaries to prevent scope creep |
| **Tech stack** | Language, framework, database, CI/CD, hosting |
| **Project vocabulary** | Domain terms the AI must understand |
| **Fundamental constraints** | Non-negotiable rules (offline-first, zero deps, no telemetry...) |
| **Development principles** | How to decide when two approaches seem equal |

## Why it matters

> *"Delegating to AI without structure is outsourcing without a brief."*

Without a manifest, an AI agent produces generic code. It doesn't know if your project is a library or a SaaS, if you prefer REST or GraphQL, if you deploy to AWS or a Raspberry Pi.

The manifest is read at the start of **every session**. It's the first thing the agent loads, before skills, rules, or memory.

## Example

```markdown
## Identity

| Field | Value |
|-------|-------|
| Name | bookshelf-api |
| Description | REST API for managing book collections |
| Owner | Jane Doe (@janedoe) |
| Stack | Python 3.12, FastAPI, PostgreSQL, Docker |

## Why this project exists

Libraries need a modern API to manage their collections.
The existing system is a 15-year-old PHP monolith.

## Fundamental constraints

- All endpoints must return JSON
- No breaking changes without a deprecation period
- Response time < 200ms for read operations
```

## Best practices

- **Be specific, not aspirational.** Write what the project *is*, not what you wish it were.
- **Update it when the project evolves.** The manifest is a living document.
- **Keep it under 150 lines.** If it's longer, some content belongs in memory or rules.
