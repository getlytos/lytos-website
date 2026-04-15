---
title: Lead Developer Guide
description: How to architect, supervise, and scale AI-assisted development with Lytos.
---

## Your new role

You are no longer a code reviewer. You are a **system architect**.

The old model: read every PR, check style, catch bugs, enforce conventions. With Lytos, the AI does this — it follows skills, respects rules, and applies patterns from memory.

Your new job: **define the system that makes the AI produce good work.** The manifest, the rules, the sprint, the memory. This is higher leverage than reading diffs.

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

You don't read code line by line anymore. You validate at a higher level:

| Old review (code) | New review (Lytos) |
|-------------------|-------------------|
| Check variable names | Are the rules followed? (`lyt lint` will automate this) |
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

Each sprint leaves behind:
- Issues resolved (progress)
- Memory updated (knowledge)
- Rules refined (quality)
- Patterns documented (consistency)

After 5 sprints, your AI is not the same AI. It has your project's context, your team's decisions, your domain knowledge. It doesn't guess anymore — it knows.

**That's the lead's real job: build a system that gets smarter over time.**
