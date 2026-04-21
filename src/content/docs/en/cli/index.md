---
title: The Lytos CLI
description: A single npm install that scaffolds .lytos/ in any project, validates it, moves issues through the kanban, and closes them one by one or in batch. Installed as `lytos-cli` with `lyt` as the short binary.
---

The CLI is how Lytos lands in a real repository. One `lyt init` scaffolds the five pillars as folders, detects your stack, writes the right adapter file for your AI tool (`CLAUDE.md`, `.cursorrules`, `AGENTS.md`…), and installs a pre-commit hook so branch naming stays consistent.

## Install

```bash
npm install -g lytos-cli
```

Or without installing:

```bash
npx lytos-cli init
```

The `lyt` binary is the short name (also `lytos` and `lytos-cli` if you prefer).

## Commands

| Command | What it does |
|---------|--------------|
| `lyt init` | Scaffold `.lytos/` — interactive, detects your stack, offers EN or FR |
| `lyt board` | Regenerate `BOARD.md` from the issue frontmatter |
| `lyt lint` | Validate the `.lytos/` structure and content |
| `lyt doctor` | Full diagnostic — missing files, broken links, stale memory, health score |
| `lyt show ISS-XXXX` | Display issue detail with progress bar |
| `lyt start ISS-XXXX` | Start an issue — move to in-progress, create branch, update board |
| `lyt claim ISS-XXXX` | Assign an issue to yourself (also checks origin freshness to avoid concurrent claims) |
| `lyt close ISS-XXXX` | Close a validated issue — promote it to `5-done` from `4-review` (or explicitly from `3-in-progress`) |
| `lyt close` | Batch-close every issue in `4-review/` — asks to confirm, `--yes` skips |
| `lyt upgrade` | Pull the latest bundled skills and rules into `.lytos/` |

## Key references

| | |
|--|--|
| [Overview](/en/cli/overview/) | What the CLI does, at a glance |
| [`lyt init`](/en/cli/init/) | Everything the scaffolder does — adapter files, stack detection, pre-commit hook |
| [`lyt board`](/en/cli/board/) | How the kanban view is regenerated from issue frontmatter |

## Design principles

- **Offline-first** — every command except `lyt init` (fetches bundled files) and `lyt claim`/`start` (checks origin) works without network.
- **Output for humans AND machines** — every command has a human default and a `--json` flag for CI and scripting.
- **Fail with context** — errors say what's wrong, where, and how to fix it.
- **Single responsibility per command** — `lint` validates, `doctor` diagnoses, they don't overlap.
