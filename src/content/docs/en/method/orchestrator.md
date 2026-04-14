---
title: Orchestrator
description: How tasks are ordered, launched, and verified.
---

The orchestrator is the planning logic that reads the sprint, analyzes dependencies, and decides which tasks to launch. It is not a special agent — it is a set of rules.

## Principle

> Tasks without dependencies start immediately.
> Tasks with dependencies wait for their prerequisites to complete.

It works like a `Makefile` or a CI pipeline: a directed acyclic graph (DAG) of tasks.

## The 4-phase lifecycle

Every task follows 4 phases:

### Phase 1 — Bootstrap
The agent loads context: manifest, memory, rules, board, and the issue.

### Phase 2 — Execute
The agent applies the assigned skill (main + auxiliary) to produce its output.

### Phase 3 — Verify
The agent checks its own work: tests pass, no security violations, code follows rules, self-review done.

### Phase 4 — Close
Update issue frontmatter, move the issue file, update BOARD.md, write to memory if learning occurred.

## Event-driven execution

The orchestrator does not work in rigid waves. As soon as a task has all its dependencies completed, it starts:

```
ISS-0001 (no depends)    → starts immediately
ISS-0001 done            → ISS-0002 unblocked → starts
ISS-0002 done            → ISS-0003 AND ISS-0004 unblocked → start in parallel
ISS-0004 done            → ISS-0005 unblocked → starts (without waiting for ISS-0003)
```

## Quality gates

| Transition | Gate | Who validates |
|-----------|------|---------------|
| in-progress → review | Tests pass, self-review done, CI green | Agent |
| review → done | Code review approved | Human |
| Sprint completion | All quality criteria met | Human |

## Orchestrator rules

1. Never launch a task whose dependencies are not completed
2. Launch as soon as ready — no artificial waves
3. One main skill per task, with optional auxiliary skills
4. The human validates quality gates
5. When in doubt, ask — a blocked agent asks rather than guessing
6. The YAML frontmatter is the source of truth
7. Security is a default auxiliary skill for non-documentation tasks
