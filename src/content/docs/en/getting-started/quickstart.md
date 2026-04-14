---
title: Quick Start
description: Get started with Lytos in 5 minutes.
---

## Install

### With the CLI (recommended)

```bash
npm install -g lytos-cli
lytos init
```

Or without installing:

```bash
npx lytos init
```

The CLI asks your project name and AI tool, detects your stack, and creates everything.

### With the install script

```bash
curl -fsSL https://raw.githubusercontent.com/lytos/lytos/main/install.sh -o install.sh
bash install.sh
```

### With the GitHub template (no terminal needed)

Use the [starter template](https://github.com/getlytos/starter) → click **"Use this template"** on GitHub.

## Configure with your AI

Open your AI tool and say:

> **"Help me configure Lytos for this project."**

The AI reads the briefing (`.lytos/LYTOS.md`), understands the method, and helps you fill your manifest: project name, why it exists, tech stack, decision principles, AI models to use.

You don't need to fill everything yourself — the AI detects your stack from `package.json`, `requirements.txt`, or `go.mod`.

## What's next

| When you want to... | Do this |
|---------------------|---------|
| Set quality criteria | Read `.lytos/rules/default-rules.md` |
| Structure your tasks | Create your first sprint from `.lytos/templates/sprint.md` |
| Follow a precise procedure | Load a skill from `.lytos/skills/` |
| Track progress visually | Use `.lytos/issue-board/BOARD.md` |

Everything is optional. The manifest + memory are enough to start.
