---
title: Installation
description: All the ways to install Le Socle.
---

## 3 ways to install

Choose the path that fits your workflow:

### 1. CLI (developers with a terminal)

```bash
npm install -g le-socle
socle init
```

The CLI detects your stack, asks your project name and AI tool, then scaffolds everything. Interactive or with flags:

```bash
socle init --name "My API" --tool claude --yes
```

### 2. Install script (lightweight, no npm)

```bash
curl -fsSL https://raw.githubusercontent.com/le-socle/socle/main/install.sh -o install.sh
bash install.sh
```

Same result as the CLI, but downloads files from GitHub instead of using the npm package.

### 3. GitHub template (vibe coders, no terminal)

Use the [starter template](https://github.com/le-socle/starter) → click **"Use this template"** → open in Claude Code or Codex → say **"Help me configure Le Socle."**

Perfect for developers who code directly from AI web apps.

## What gets created

```
.socle/
├── SOCLE.md              ← AI briefing (read once)
├── manifest.md           ← your project's constitution
├── memory/
│   ├── MEMORY.md         ← memory index
│   └── cortex/           ← specialized zones
├── skills/               ← 9 operational procedures
├── rules/                ← quality criteria
├── issue-board/          ← Kanban board (folder = status)
├── templates/            ← sprint template
└── scripts/              ← automation tools
```

Plus a `CLAUDE.md` or `.cursorrules` at your project root (depending on your AI tool choice).

## After installation

Open your AI tool and say:

> **"Help me configure Le Socle for this project."**

The AI reads the briefing, understands the method, and guides you through filling the manifest.
