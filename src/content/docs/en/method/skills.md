---
title: Skills
description: Reusable procedures for recurring tasks — Design, the second pillar of Lytos. Lytos task skills follow the agentskills.io open standard, so Claude Code, Cursor, Codex, Gemini CLI, Copilot and others discover them natively.
---

Skills are the second pillar of Lytos: **Design**.

A skill is a step-by-step procedure that tells the AI agent *how* to perform a specific type of task. Not vague advice — concrete steps.

> *"Role-play doesn't replace context."*

## The agentskills.io open standard

Lytos task skills follow the [agentskills.io](https://agentskills.io) open standard — the format originated by Anthropic and adopted by Claude Code, Claude, OpenAI Codex, Cursor, Gemini CLI, GitHub Copilot, VS Code, Goose, JetBrains Junie, OpenHands, and most other modern AI coding tools.

Each skill lives in its own folder with a `SKILL.md` file inside:

```
.lytos/skills/
├── session-start.md            # Lytos bootstrap protocol (kept flat)
├── code-review/
│   └── SKILL.md
├── testing/
│   └── SKILL.md
└── ...
```

The `SKILL.md` starts with minimal YAML frontmatter — `name` and `description` — and a free-form markdown body:

```markdown
---
name: testing
description: Write and review tests — unit, integration, and E2E — following the Testing Trophy model. Use after writing a feature, after fixing a bug (regression test required), during refactoring, or during a quality audit.
---

# Skill — Testing

## When to invoke this skill

...
```

## Progressive disclosure

Because the format is standard, modern AI tools discover Lytos task skills natively via **progressive disclosure**:

1. At session startup, the tool loads only the `name` + `description` of every skill (~100 tokens each) — just enough to know when each one is relevant.
2. When the current task matches a skill's description, the tool loads that skill's full body into context.
3. Scripts and referenced files are loaded only when needed.

The net effect: the agent has access to every skill, but only pays the context cost of the one that applies to the task at hand.

## The 9 built-in skills

| Skill | What it covers | Layout |
|-------|---------------|--------|
| **session-start** | Session startup, context loading, task closure — a Lytos bootstrap protocol | `skills/session-start.md` (flat) |
| **code-review** | Code review with checklist, self-review, PR size limits | `skills/code-review/SKILL.md` |
| **testing** | Unit, integration, E2E tests, mocking strategy | `skills/testing/SKILL.md` |
| **documentation** | Docstrings, ADRs, API docs, changelog, memory | `skills/documentation/SKILL.md` |
| **git-workflow** | Branches, commits, CI checks, hooks, semantic versioning | `skills/git-workflow/SKILL.md` |
| **code-structure** | SOLID, module size, dependency injection, naming | `skills/code-structure/SKILL.md` |
| **deployment** | Pre/post-deploy, observability, SLOs, migrations, incidents | `skills/deployment/SKILL.md` |
| **security** | OWASP Top 10, authentication, authorization, secrets | `skills/security/SKILL.md` |
| **api-design** | REST conventions, pagination, error format, rate limiting | `skills/api-design/SKILL.md` |

## Startup depth — lightweight vs standard

`session-start` reads the current issue's frontmatter to pick how much context the AI loads before coding.

- **Lightweight startup** is allowed *only* when the issue is explicitly `effort: XS` **and** `complexity: light`. The AI still loads the mandatory safety baseline — manifest, `memory/MEMORY.md`, default rules, `BOARD.md`, and the issue file itself — but defers cortex notes, project-specific rule files, and broad codebase exploration until the issue clearly needs them.
- **Standard startup** remains mandatory for every other combination. If either field is missing, the AI defaults to standard. If the task grows mid-session, it immediately upgrades from lightweight to standard.

This is how small issues stay fast without burning the context window, and why the `effort` and `complexity` fields in issue frontmatter are load-bearing — they are not just prioritization hints.

## How skills are selected for a task

The `skill` field in an issue's frontmatter is now **optional** — a hint for borderline tasks:

```yaml
skill: code-structure      # optional hint
skills_aux: [testing, security]
```

- If present, it tells the tool "for this issue, prefer the named skill" — useful when the task sits between two categories.
- If absent, the tool decides via progressive disclosure based on the issue's title, description, and the skill descriptions.

## Skill composition

Different tasks usually benefit from multiple skills:

| Task type | Likely main skill | Useful auxiliary skills |
|-----------|-------------------|-------------------------|
| New feature | `code-structure` | `testing`, `security` |
| API endpoint | `api-design` | `code-structure`, `security`, `testing` |
| Bug fix | `code-structure` | `testing` |
| Code review | `code-review` | `security` |
| Documentation | `documentation` | — |

With progressive disclosure, the tool will often load several of these in sequence as the task unfolds, without you having to list them up front.

## Adding custom skills

Create your own skills under `skills/<name>/SKILL.md`:

```markdown
---
name: my-skill
description: One or two sentences covering what the skill does AND when to use it. Include keywords the agent will match against task descriptions.
---

# Skill — My Skill

## When to invoke this skill

...

## Procedure

1. ...
2. ...
```

Validate your skill with the official reference library:

```bash
npx skills-ref validate .lytos/skills/my-skill
```

Skills are reusable across projects and across tools — they work with any AI assistant that implements the agentskills.io standard.

## Learn more

- [How to write a skill for an AI agent](/en/method/skills/how-to-write-a-skill/) — the agentskills.io format explained, with a working example.
