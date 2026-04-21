---
title: lytos archive
description: Move completed issues from 5-done/ to archive/<quarter>/ with a retention window.
---

`lyt archive` moves completed issues from `5-done/` to `archive/<quarter>/`. It replaces the implicit archival that used to ride on every `lyt board` run — archival is now explicit and time-gated, so fresh closures stay visible long enough to be used in retros, PR cross-references, and rollback verification.

## Usage

```bash
lyt archive                     # archive issues closed ≥ 7 days ago (default)
lyt archive --older-than 30d    # use a different retention window
lyt archive --all               # archive everything in 5-done/ regardless of age
lyt archive --dry-run           # preview moves without touching the filesystem
```

## What it does

1. Scans `5-done/` for issues whose frontmatter `updated` date is older than the retention threshold.
2. Moves each matching issue to `archive/<quarter>/` where the quarter is derived from **the issue's own `updated` date**, not today's date. An issue closed in March 2026 lands in `2026-Q1/` even if you archive it in April.
3. Updates `archive/INDEX.md` with the new entries.
4. Regenerates `BOARD.md` so the "archived" counter stays in sync — no second command needed.

## Flags

| Flag | Description |
|------|-------------|
| `--older-than <age>` | Retention threshold. Accepts `<N>d` (e.g. `7d`, `0d`, `30d`). Default: `7d`. |
| `--all` | Shortcut for `--older-than 0d`. Archives every issue in `5-done/` regardless of age. |
| `--dry-run` | Print what would move and which entries are too recent, without touching files. |

`--older-than` and `--all` are mutually exclusive; `--all` wins if both are passed.

## Why archival is manual (and delayed)

Prior to this command, `lyt board` archived issues on every run. A closed issue would disappear from the live board within seconds, which created three recurring problems:

- **Retros and PR references** often needed recently closed work for context.
- **Rollback verification** needed to re-read the issue that introduced a regression.
- **Implicit destructive side-effect** on a command advertised as "regenerate BOARD.md".

`lyt archive` makes archival an explicit, deliberate action with a retention window. Issues stay visible in `5-done/` for a week by default — long enough for sprint ceremonies, short enough that the board does not swell indefinitely.

## Common patterns

### End-of-sprint batch

```bash
lyt archive --dry-run      # see what will move
lyt archive                # apply if the preview looks right
```

### Reset a demo repo

```bash
lyt archive --all          # push everything completed to the archive
```

### Keep a longer window for audited projects

```bash
lyt archive --older-than 30d   # monthly cadence
```

## Relationship with `lyt board`

`lyt board` no longer moves any files. It regenerates `BOARD.md` and the archive counts — read-only on the filesystem. Use `lyt archive` when you actually want to promote completed issues out of the live board.

If you want the pre-0.11 behavior (archive on every board regen), run the two commands sequentially:

```bash
lyt board && lyt archive --all
```
