---
title: lytos board
description: Regenerate BOARD.md from issue YAML frontmatter.
---

`lytos board` reads all issue files in `issue-board/` and regenerates `BOARD.md` — a visual index of all issues grouped by status.

## Usage

```bash
lytos board
```

## What it does

1. Scans all `.md` files in `issue-board/` subfolders
2. Reads the YAML frontmatter of each issue
3. Groups issues by status (icebox, backlog, sprint, in-progress, review, done)
4. Generates a formatted `BOARD.md` with tables

## Example output

```markdown
### 2-sprint (committed)

| # | Title | Priority | Effort | Depends |
|---|-------|----------|--------|---------|
| ISS-0012 | Implement user auth | P1-high | M | ISS-0008 |
| ISS-0013 | Add rate limiting | P2-normal | S | ISS-0012 |

### 5-done (completed)

| # | Title | Completed |
|---|-------|-----------|
| ISS-0008 | Setup database | 2026-04-10 |
```

## Source of truth

The YAML frontmatter in each issue file is the source of truth — not `BOARD.md`. The board is a generated view that can be regenerated at any time.

If you update an issue's status by moving it to a different folder, run `lytos board` to refresh the index.
