---
title: CLI Overview
description: The command-line tool for Lytos — install, validate, and visualize.
---

The Lytos CLI removes friction from adopting the method. One command to install, one command to validate, one command to visualize.

## Install

```bash
npm install -g lytos-cli
```

Or use without installing:

```bash
npx lytos-cli init
```

## Commands

| Command | What it does |
|---------|--------------|
| `lyt init` | Scaffold `.lytos/` in your project (interactive, detects your stack) |
| `lyt board` | Regenerate `BOARD.md` from issue frontmatter (read-only on the filesystem) |
| [`lyt archive`](/en/cli/archive/) | Move completed issues from `5-done/` to `archive/<quarter>/` (default: older than 7 days). `--all`, `--older-than`, `--dry-run` |
| `lyt lint` | Validate `.lytos/` structure and content |
| `lyt doctor` | Full diagnostic — missing files, broken links, stale memory, health score |
| `lyt show` | Display issue detail with progress bar |
| `lyt start` | Start an issue — move to in-progress, create branch, update board |
| `lyt close` | Explicitly close a validated issue or batch-close `4-review/` — check the checklist and update the board |
| `lyt claim` | Assign an issue to yourself |
| `lyt upgrade` | Update method files in `.lytos/` from the bundled version |
| `lyt update` | Update the Lytos CLI itself to the latest version |

## Design principles

- **Offline-first** — no network needed (except `lytos init` to download templates)
- **Zero lock-in** — plain markdown files, works with any AI tool
- **No telemetry** — no tracking, no analytics, ever
- **Human-first** — the CLI never modifies files without explicit user action

## Source code

The CLI is open source: [github.com/getlytos/lytos-cli](https://github.com/getlytos/lytos-cli)

Built with TypeScript, Commander.js, and zero runtime dependencies beyond Commander.
