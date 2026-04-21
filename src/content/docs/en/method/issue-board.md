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
├── 6-private-notes/            # Local-only drafts (git-ignored)
└── templates/
    ├── issue-feature.md
    └── issue-task.md
```

> `6-private-notes/` is protected by a `.lytos/.gitignore` shipped by `lyt init`. Anything you drop there stays on your machine — ideal for launch drafts, personal roadmap notes, or work-in-progress thoughts that shouldn't land in a public repo.

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
0-icebox → 1-backlog → 2-sprint → 3-in-progress → 4-review → 5-done → archive/<quarter>/
```

Each transition is typically triggered by a CLI command:

| From → To | Command | Who |
|-----------|---------|-----|
| `1-backlog` → `3-in-progress` | `lyt claim ISS-XXXX` or `lyt start ISS-XXXX` | Developer picking up the work |
| `3-in-progress` → `4-review` | Performed by the AI agent at the end of coding (via the session-start skill) | Agent, once the definition of done is met |
| `4-review` → `5-done` | `lyt close ISS-XXXX` (single) or `lyt close` (batch, with confirm) | Human, after validation |
| `5-done` → `archive/<quarter>/` | [`lyt archive`](/en/cli/archive/) (default: older than 7 days) | Human, when the retention window has passed |

The `4-review/` folder is a **waiting room**: the code is done but has not yet been validated (human review, peer review, CI green, manual QA — whatever the team's gate is). Running `lyt close` without arguments promotes every issue in 4-review at once; `lyt close ISS-XXXX` closes one specifically and can also act as a skip-review shortcut on an issue still in 3-in-progress.

The `5-done/` folder is a **retention window**: closed issues stay visible for 7 days by default so retros, PR cross-references and rollback verification still have them at hand. `lyt archive` moves them to `archive/<quarter>/` once old enough — archival is explicit and does not ride on `lyt board`.

`lyt board` regenerates `BOARD.md` from the frontmatter of all issues. It is read-only on the filesystem — it never moves files.

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
