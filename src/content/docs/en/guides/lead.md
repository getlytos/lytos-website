---
title: Lead Developer Guide
description: How to architect, supervise, and scale AI-assisted development with Lytos.
---

## A role that can shift

The lead dev role remains valuable — this guide describes how it can be enriched with Lytos, without replacing what you already do.

The historical core: read important PRs, call the shots on style, catch subtle bugs, arbitrate conventions. This work remains useful, especially on design decisions. What can shift: part of the mechanical checks (style, basic conventions) can move into rules, freeing time for substantive review.

A new part of the role may emerge: **define the system that helps the AI and the team produce good work.** The manifest, the rules, the sprint, the memory. It's a complementary lever to line-by-line review, not a replacement.

---

## Your 4 responsibilities

### 1. Define the Intent (manifest)

The manifest is the highest-leverage file you'll write. A good manifest means every AI session starts with the right context. A bad manifest means every session starts with guessing.

**Write it like a briefing for a new hire:**
- What this project is (and what it's NOT)
- The tech stack and why these choices
- Constraints that are non-negotiable
- Development principles as trade-offs: "we prefer X over Y because Z"

**Update it when the project evolves.** A stale manifest is worse than no manifest — the AI will follow outdated instructions with confidence.

### 2. Set the Standards (rules)

Default rules cover the basics (300-line files, no magic numbers, test coverage). Your job is to add **project-specific rules** that encode your team's decisions.

Good project rules:
```markdown
| Rule | Detail |
|------|--------|
| API responses | Always use the ResponseDTO wrapper |
| Error codes | Must follow our error catalog in docs/errors.md |
| Database | No raw SQL — use the query builder |
| Naming | Services are verbs (createUser), models are nouns (User) |
```

Bad rules: "write clean code", "follow best practices", "be careful with performance". These are not verifiable.

**The test: could a linter check this rule?** If yes, it's a good rule.

### 3. Plan the Progress (sprint)

Your sprint is the AI's roadmap. When you define issues well, the AI executes well.

**For each issue, define:**
- `skill` — which procedure the AI follows
- `skills_aux` — which additional constraints apply
- `depends` — what must be done first
- `effort` — S/M/L (if XL, split it)
- `complexity` — light/standard/heavy (determines which model tier to use)

**The dependency graph matters.** Run `lyt board` to see it. Issues without dependencies can be parallelized. Issues with dependencies must be sequenced.

### 4. Maintain the Memory

Memory is what makes the 10th sprint better than the 1st. Your job is to ensure it stays clean and relevant.

**After each sprint:**
```
"Review memory/cortex/. What's outdated? What should we consolidate?"
"Update memory/cortex/sprints.md with this sprint's retrospective."
```

**Consolidate regularly.** 20 entries about the same topic should become 1 well-written synthesis. Memory should grow in quality, not just quantity.

---

## How to review AI-produced work

Line-by-line review keeps its full meaning when it brings judgment — architecture, design choices, edge cases. What Lytos adds is a layer of validation at a higher level:

| Classic review (code) | Review with Lytos (complement) |
|-------------------|-------------------|
| Check variable names | Are the rules followed? (`lyt lint` can help) |
| Check code style | Is the manifest up to date? |
| Read the diff | Is the issue well resolved? Does the result match the intent? |
| Catch bugs | Do tests pass? Is coverage adequate? |
| Enforce conventions | Should the memory be updated? |

**Your review checklist:**
1. Does the result match the issue's definition of done?
2. Were any checklist items skipped?
3. Should this produce a follow-up issue?
4. Did the AI learn something that should go to memory?
5. Is the manifest still accurate after this change?

---

## Talking to your AI — lead examples

### Sprint planning

```
"Read the backlog and suggest which issues to pull into the next sprint."
"What's the dependency graph? Show me the critical path."
"ISS-0042 is too big. Split it into 2-3 smaller issues."
"Estimate effort for each issue in the sprint."
```

### Supervision

```
"lyt board — where are we?"
"Which issues are blocked? Why?"
"Are there any issues in progress that should have been closed?"
"Show me what changed in memory this sprint."
```

### Architecture decisions

```
"We need to decide between [A] and [B]. Analyze trade-offs."
"Document this decision in memory/cortex/architecture.md."
"Update the manifest — we've changed our approach to [X]."
```

### Onboarding a new dev

```
"Read the manifest and explain this project to a new developer."
"What are the 3 most important rules for this project?"
"Show the sprint board and explain what each issue does."
```

---

## Scaling to a team

### One board per repo

Each repo has its own `.lytos/issue-board/` with independent numbering. For cross-repo work, create one issue per repo and link them in the context section.

### Assignments

When `lyt claim` is available, each developer claims their issue. The board shows who's working on what. No two developers on the same issue.

### Sprint discipline

- Sprint starts with a clear scope (issues in `2-sprint`)
- Daily: `lyt board` to see progress
- End of sprint: all issues either done or moved back to backlog with a note
- Retrospective: update memory, consolidate learnings

---

## The compound effect

Each sprint can leave behind:
- Issues resolved (progress)
- Memory updated (knowledge)
- Rules refined (quality)
- Patterns documented (consistency)

After a few sprints, the context available to the AI grows denser: team decisions, domain knowledge, project patterns. It guesses less because it leans more on recorded context.

**It's one possible dimension of the lead's role: to build, in addition to reviews, a system that grows richer over time.**

---

## Team consistency — convergence that becomes more accessible

In traditional development, it's hard to get ten developers to code identically — conventions, linters, and code reviews reduce gaps without erasing them. Part of a team's richness comes precisely from that diversity of styles.

With AI and a shared frame like Lytos, some of that homogeneity becomes more accessible. One manifest, one set of rules, one set of skills — shared by the team. Each developer brainstorms and validates. Part of the code is produced with the same context.

The result: a project where differences of form narrow, while differences of judgment continue to be what the humans who write it contribute.

> *"The developer brainstorms. Lytos helps harmonize."*

> *"The human doesn't always write every line. They also define the frame."*
