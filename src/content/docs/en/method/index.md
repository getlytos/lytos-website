---
title: The Method
description: Lytos is a human-first method for working with AI coding agents. It's built around five pillars — manifest, skills, rules, issue board, memory — each a plain folder of markdown that lives in your project.
---

Lytos defines the framework in which AI coding agents operate, rather than trying to make them play roles. The method has five pillars, each materialised as a folder of plain markdown in your repository. Every pillar answers a specific question an agent has when it opens your project.

## The five pillars

| Pillar | Folder | What it tells the agent |
|--------|--------|-------------------------|
| [Manifest](/en/method/manifest/) | `manifest.md` | Who we are, what we're building, and what principles guide our decisions |
| [Skills](/en/method/skills/) | `skills/` | How to perform recurring tasks — code review, testing, deployment, etc. — in the [agentskills.io](https://agentskills.io) open format |
| [Rules](/en/method/rules/) | `rules/` | The non-negotiable quality criteria the agent must respect before handing back code |
| [Issue board](/en/method/issue-board/) | `issue-board/` | The kanban flow, with every issue a markdown file whose YAML frontmatter is the source of truth |
| [Memory](/en/method/memory/) | `memory/` | What the team has learned — architectural decisions, patterns, past bugs — so sessions don't start blank |

## Two companion pieces

| | |
|--|--|
| [Orchestrator](/en/method/orchestrator/) | A light coordination model for multi-issue sprints — who picks up what, how dependencies are respected, when to merge |
| [Sub-agents](/en/method/sub-agents/) | How Lytos handles the sub-agent question — the short answer is: one well-contextualised agent usually beats a cast of personas |

## Works with your existing tool

Lytos doesn't replace your AI assistant — it configures your project so any compatible tool reads the same context. [Compatibility](/en/method/compatibility/) lists the current integrations: Claude Code, Cursor, Codex, with Copilot, Gemini CLI and Windsurf coming next.

## Where to start

- If you're new to the method, read the [Manifest](/en/method/manifest/) first — it's the entry point every session opens.
- If you want to understand the "why", the [Philosophy](/en/philosophy/) section covers the design principles.
- If you want to try it on a project right now, [Quick Start](/en/getting-started/quickstart/) runs you through `lyt init` in two minutes.
