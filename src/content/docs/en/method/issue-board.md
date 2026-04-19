---
title: Issue Board
description: Track what's moving and what's blocked — Progress, the fourth pillar of Lytos.
---

The issue board is the fourth pillar of Lytos: **Progress**.

It tracks what needs to be done, what's in progress, and what's completed. It's a kanban board implemented as folders, with YAML frontmatter as the source of truth.

## Structure

```
issue-board/
├── BOARD.md                    # Generated index (visual overview)
├── 0-icebox/                   # Ideas, not prioritized
├── 1-backlog/                  # Prioritized, not started
├── 2-sprint/                   # Committed to current sprint
├── 3-in-progress/              # Currently being worked on
├── 4-review/                   # In review or testing
├── 5-done/                     # Completed
└── templates/
    ├── issue-feature.md
    └── issue-task.md
```

## Issue format

Each issue is a markdown file with YAML frontmatter:

```yaml
---
id: ISS-0012
title: "Implement user authentication"
type: feature
priority: P1-high
effort: M
skill: api-design
skills_aux: [security, testing]
status: 2-sprint
branch: "feat/ISS-0012-user-auth"
depends: [ISS-0008]
created: 2026-04-14
---

# ISS-0012 — Implement user authentication

## Context
...

## Checklist
- [ ] Create auth middleware
- [ ] Add JWT token validation
- [ ] Write integration tests

## Definition of done
...
```

## How it works

- **The folder is the status.** Moving an issue from `2-sprint/` to `3-in-progress/` changes its status.
- **The YAML frontmatter is the source of truth.** `BOARD.md` is generated from it.
- **Dependencies are explicit.** The `depends` field lists issues that must be completed first.
- **One branch per issue.** The `branch` field links the issue to its git branch.

## Issue lifecycle

```
0-icebox → 1-backlog → 2-sprint → 3-in-progress → 4-review → 5-done
```

The `lytos board` command regenerates `BOARD.md` from the frontmatter of all issues.

## Priority levels

| Priority | Meaning |
|----------|---------|
| P0-critical | Must be done immediately |
| P1-high | Must be done this sprint |
| P2-normal | Should be done soon |
| P3-low | Nice to have |

## Effort sizes

| Effort | Duration | Guidance |
|--------|----------|----------|
| XS | < 15 min | Can be grouped with other XS |
| S | 15-30 min | Standalone task |
| M | 30 min - 2h | Dedicated task |
| L | 2h - 4h | Consider splitting |
| XL | > 4h | Must be split |

## Learn more

- [Kanban in Git for AI projects: a folder-based board](/en/method/issue-board/kanban-in-git-for-ai-projects/) — how the `issue-board/` layout works in practice, what goes in the YAML frontmatter, and how the AI reads the board at session start.
