---
title: Quick Start
description: Get started with Le Socle in 5 minutes.
---

## Install

### With the CLI (recommended)

```bash
npm install -g le-socle
socle init
```

Or without installing:

```bash
npx le-socle init
```

The CLI asks your project name and AI tool, detects your stack, and creates everything.

### With the install script

```bash
curl -fsSL https://raw.githubusercontent.com/le-socle/socle/main/install.sh -o install.sh
bash install.sh
```

### With the GitHub template (no terminal needed)

Use the [starter template](https://github.com/le-socle/starter) → click **"Use this template"** on GitHub.

## Configure with your AI

Open your AI tool and say:

> **"Help me configure Le Socle for this project."**

The AI reads the briefing (`.socle/SOCLE.md`), understands the method, and helps you fill your manifest: project name, why it exists, tech stack, decision principles, AI models to use.

You don't need to fill everything yourself — the AI detects your stack from `package.json`, `requirements.txt`, or `go.mod`.

## What's next

| When you want to... | Do this |
|---------------------|---------|
| Set quality criteria | Read `.socle/rules/default-rules.md` |
| Structure your tasks | Create your first sprint from `.socle/templates/sprint.md` |
| Follow a precise procedure | Load a skill from `.socle/skills/` |
| Track progress visually | Use `.socle/issue-board/BOARD.md` |

Everything is optional. The manifest + memory are enough to start.
