---
title: lytos init
description: Scaffold the .lytos/ directory in your project.
---

`lytos init` creates the `.lytos/` directory in your project with all 5 pillars pre-configured.

## Usage

```bash
lyt init                                       # interactive
lyt init --name "Acme API" --tool claude --yes # non-interactive, single tool
lyt init --tool claude,cursor,copilot --yes    # multi-tool: several bridges at once
lyt init --all-tools --yes                     # every shipping adapter
```

The command is interactive by default. It will ask you:

1. **Project name** — used in the manifest
2. **AI tool(s)** — Claude Code, Cursor, Codex (OpenAI), GitHub Copilot, Gemini CLI, Windsurf, Multiple (CSV), All tools, or None. Each choice generates the adapter file that tool reads at session start (`CLAUDE.md`, `.cursor/rules/lytos.mdc`, `AGENTS.md`, `.github/copilot-instructions.md`, `GEMINI.md`, or `.windsurfrules`).

### Mixed-team repos

If several developers use different AI tools on the same repo, generate every bridge in one run. Each bridge points at the same `.lytos/` directory, so switching tools does not require reconfiguring the project.

```bash
lyt init --tool claude,cursor,copilot   # CSV of exactly what the team uses
lyt init --all-tools                    # all six shipping adapters
```

`none` can appear in the CSV as a no-op (so scripts can pass `"none,claude"` without a special case). Unknown values exit with an error before any file is written.

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
| `--tool <tools>` | Single value or CSV: `claude`, `cursor`, `codex`, `copilot`, `gemini`, `windsurf`, `none`. Example: `--tool claude,cursor,copilot` |
| `--all-tools` | Scaffold bridges for every shipping adapter (claude, cursor, codex, copilot, gemini, windsurf) |
| `--yes` | Accept all prompts, use detected defaults |
| `--force` | Overwrite an existing `.lytos/` directory |
| `--dry-run` | Print what would be created without touching the filesystem |
| `--lang <en\|fr>` | Content language for generated markdown |
| `--profile <vibe-coder\|developer\|lead>` | Briefing profile printed after init |

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
