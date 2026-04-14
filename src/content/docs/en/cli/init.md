---
title: lytos init
description: Scaffold the .lytos/ directory in your project.
---

`lytos init` creates the `.lytos/` directory in your project with all 5 pillars pre-configured.

## Usage

```bash
lytos init
```

The command is interactive. It will ask you:

1. **Project name** — used in the manifest
2. **AI tool** — Claude Code, Cursor, or none (creates the appropriate config file)

## What it creates

```
.lytos/
├── manifest.md              # Intent — fill in your project identity
├── LYTOS.md                 # Method reference
├── sprint.md                # Current sprint template
├── skills/                  # Design — 9 reusable procedures
│   ├── session-start.md
│   ├── code-structure.md
│   ├── code-review.md
│   ├── testing.md
│   ├── documentation.md
│   ├── git-workflow.md
│   ├── deployment.md
│   ├── security.md
│   └── api-design.md
├── rules/                   # Standards — quality criteria
│   └── default-rules.md
├── issue-board/             # Progress — kanban board
│   ├── BOARD.md
│   ├── 0-icebox/
│   ├── 1-backlog/
│   ├── 2-sprint/
│   ├── 3-in-progress/
│   ├── 4-review/
│   └── 5-done/
└── memory/                  # Memory — accumulated knowledge
    ├── MEMORY.md
    └── cortex/
```

## Options

| Flag | Description |
|------|-------------|
| `--name <name>` | Project name (skip the prompt) |
| `--tool <tool>` | AI tool: `claude`, `cursor`, or `none` |
| `--force` | Overwrite existing `.lytos/` directory |

## Stack detection

`lytos init` automatically detects your tech stack by looking at:

- `package.json` → Node.js / TypeScript
- `requirements.txt` / `pyproject.toml` → Python
- `go.mod` → Go
- `Cargo.toml` → Rust

The detected stack is pre-filled in the manifest.

## After init

Open your AI tool and say: **"Help me configure Lytos for this project."**

The AI will read the manifest and help you fill in the project-specific details.
