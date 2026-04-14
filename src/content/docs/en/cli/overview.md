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

| Command | What it does | Status |
|---------|-------------|--------|
| `lytos init` | Scaffold `.lytos/` in your project | Available |
| `lytos board` | Regenerate BOARD.md from issue frontmatter | Available |
| `lytos lint` | Validate `.lytos/` structure and content | Coming soon |
| `lytos doctor` | Full diagnostic — missing files, broken links, stale memory | Coming soon |
| `lytos status` | Display sprint DAG in terminal | Coming soon |

## Design principles

- **Offline-first** — no network needed (except `lytos init` to download templates)
- **Zero lock-in** — plain markdown files, works with any AI tool
- **No telemetry** — no tracking, no analytics, ever
- **Human-first** — the CLI never modifies files without explicit user action

## Source code

The CLI is open source: [github.com/getlytos/lytos-cli](https://github.com/getlytos/lytos-cli)

Built with TypeScript, Commander.js, and zero runtime dependencies beyond Commander.
