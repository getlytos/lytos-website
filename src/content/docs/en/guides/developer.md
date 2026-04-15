---
title: Developer Guide
description: How to work effectively with AI using Lytos — a practical guide for developers.
---

## Your new workflow

With Lytos, your AI agent reads your project context at the start of every session. It knows your stack, your conventions, your rules, and what happened last sprint. Your job is to direct it well.

The quality of your AI output depends on one thing: **the quality of your issues.**

A well-written issue with context, checklist, and definition of done = precise, testable code on the first try. A vague issue = generic code that needs 3 rounds of corrections.

---

## The daily cycle

### 1. Start your session

Open your AI tool. The AI reads `.lytos/manifest.md`, `memory/MEMORY.md`, and `rules/`. It already knows your project.

Say:
```
"Show me the board — what should I work on next?"
```

Or run `lyt board` yourself to see the project state.

### 2. Claim an issue

Pick an issue from the sprint or backlog. Tell your AI:
```
"I'm taking ISS-0042. Read the issue and let's start."
```

The AI reads the issue, loads the relevant skill, and begins work.

### 3. Work on the issue

Follow the issue's checklist. The AI applies the skill assigned to the issue (code-structure, api-design, testing...) and respects the rules.

If something unexpected comes up:
```
"There's an edge case on [X], add it to the checklist."
"This is bigger than expected. Should we split this issue?"
```

### 4. Close the issue

When the checklist is complete:
```
"All items are done. Close the issue, update the board, and save what we learned to memory."
```

The AI will:
- Update the issue frontmatter to `5-done`
- Move the file to `5-done/`
- Regenerate BOARD.md
- Write to memory if learning occurred

---

## Talking to your AI — practical examples

### Before coding (brainstorm & architecture)

```
"Analyze the current architecture and propose an approach for [feature]."
"What are the trade-offs between [option A] and [option B]?"
"Create an issue with a technical checklist for [task]."
"How would you implement [feature] given our manifest constraints?"
"Look at memory/cortex/architecture.md — what decisions have we made about [topic]?"
```

### During coding

```
"What's the next issue to work on?"
"Show me the board: lyt board"
"Run the tests before we continue."
"This function is getting too long — refactor it following our rules."
"Check the security skill — are we handling input validation correctly?"
```

### After coding

```
"Close the issue and update the board."
"What did we learn? Save it to memory."
"Are there any unchecked items in the checklist?"
"Create a follow-up issue for [thing we didn't finish]."
```

### When something goes wrong

```
"Check memory/cortex/bugs.md — have we seen this error before?"
"This approach isn't working. What are our alternatives given the manifest constraints?"
"Let's roll back and try a different approach. Create an issue for the new approach."
```

---

## Creating issues — easier than you think

**You don't write issues. You describe what you want. The AI structures it for you.**

The YAML frontmatter, the checklist, the definition of done — you don't have to learn that. The AI knows the template and creates the issue in the right format.

### What you do: brainstorm

```
"I want to add a login system with Google OAuth."
```

The AI asks the right questions:
- "Should we support email/password too or just Google?"
- "Do you need role-based access (admin, user)?"
- "Which endpoints need to be protected?"

Then it creates the issue with the full structure, the right priority, and a detailed checklist. You just validate.

### What matters: the quality of your description

| What you say | What happens |
|-------------|-------------|
| "Add login" | AI guesses everything — generic result |
| "Add Google OAuth login with JWT tokens, protect /api/* endpoints" | AI creates a precise issue — targeted result |

You don't need to know YAML. You need to know what you want to build.

### The brainstorm → issue cycle

```
You: "I need rate limiting on the API."
AI:  "What limits do you want? Per user? Per endpoint? What happens when exceeded?"
You: "Per endpoint, 100 req/min, return 429 with retry-after header."
AI:  → Creates ISS-0042 with full checklist, assigns skill api-design + security
You: "Looks good. Let's start."
```

### Common mistakes

| Mistake | Problem | Fix |
|---------|---------|-----|
| "Fix the API" | Too vague — the AI will guess | Describe the specific problem and expected behavior |
| Skipping the brainstorm | AI creates a shallow issue | Take 2 minutes to discuss before creating |
| Accepting without reading | Issue may miss edge cases | Read the checklist, add what's missing |
| Too big | AI loses focus | Ask: "Can we split this into smaller issues?" |

---

## Using `lyt board`

`lyt board` is your project cockpit. Run it often.

```bash
lyt board           # Visual overview + regenerate BOARD.md
lyt board --json    # Machine-readable output
lyt board --check   # CI check: is BOARD.md up to date?
```

The board shows:
- Issues by status (icebox → backlog → sprint → in progress → review → done)
- Dependencies between issues (tree view)
- Priority colors (P0 red, P1 yellow, P2 blue)
- Done count (not the full list — that's in the archive)

---

## Memory — make your AI smarter over time

After each task, ask yourself: did we learn something the AI should remember next time?

**Save to memory:**
- Architecture decisions and their rationale
- Patterns that work well in this project
- Bugs and their root causes
- Domain-specific knowledge

**Don't save:**
- Code snippets (they live in the code)
- Git history (use `git log`)
- Temporary details (they live in the issue)

Tell your AI:
```
"Save to memory/cortex/patterns.md: we use [pattern] for [reason]."
```

---

## Rules — your quality autopilot

Rules are enforced automatically. You don't need to remind the AI. But you should know what they are:

- Read `.lytos/rules/default-rules.md` once
- If your project needs specific rules, add them in `rules/`
- Rules complement each other — project rules don't replace defaults

The most impactful rules are the ones specific to your project. Generic rules catch generic mistakes. Your rules catch your mistakes.
