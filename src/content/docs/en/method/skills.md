---
title: Skills
description: Reusable procedures for recurring tasks — Design, the second pillar of Lytos.
---

Skills are the second pillar of Lytos: **Design**.

A skill is a step-by-step procedure that tells the AI agent *how* to perform a specific type of task. Not vague advice — concrete steps.

> *"Role-play doesn't replace context."*

## The 9 built-in skills

| Skill | What it covers |
|-------|---------------|
| **session-start** | Session startup, context loading, task closure |
| **code-review** | Code review with checklist, self-review, PR size limits |
| **testing** | Unit, integration, E2E tests, mocking strategy |
| **documentation** | Docstrings, ADR, API docs, changelog, memory |
| **git-workflow** | Branches, commits, CI checks, hooks, semantic versioning |
| **code-structure** | SOLID, 300-line rule, dependency injection, naming |
| **deployment** | Pre/post-deploy, observability, SLOs, migrations, incidents |
| **security** | OWASP Top 10, authentication, authorization, secrets |
| **api-design** | REST conventions, pagination, error format, rate limiting |

## How skills work

Each issue in the board has a `skill` field that defines which procedure the agent follows:

```yaml
skill: code-structure
skills_aux: [testing, security]
```

- The **main skill** defines what the agent produces
- **Auxiliary skills** add constraints and checks (e.g., security rules applied during development)

## Skill composition

Different tasks require different skill combinations:

| Task type | Main skill | Auxiliary skills |
|-----------|-----------|-----------------|
| New feature | `code-structure` | `testing`, `security` |
| API endpoint | `api-design` | `code-structure`, `security`, `testing` |
| Bug fix | `code-structure` | `testing` |
| Code review | `code-review` | `security` |
| Documentation | `documentation` | — |

## Adding custom skills

You can create your own skills in `skills/`. A skill is a markdown file with:

1. A clear **purpose** (when to use this skill)
2. A **procedure** (numbered steps)
3. A **checklist** (verification before marking done)

Skills are reusable across projects. The 9 built-in skills cover most software development tasks.
