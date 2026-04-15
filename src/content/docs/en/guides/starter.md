---
title: How It Works
description: Understand how you and your AI work together with Lytos — in 2 minutes.
---

## You talk. The AI works. Lytos keeps track.

That's the whole idea. You describe what you want to build. The AI creates tasks, codes, tests, and documents. Lytos makes sure nothing is lost between sessions.

---

## What's an issue?

An issue is a **task written down clearly enough that your AI can execute it**.

Think of it like a sticky note — but one that says exactly what to do, why, and how to know when it's done.

**One issue = one thing.** Like building a house: you don't put "pour the foundation" and "install the roof" on the same sticky note. Each issue has a single responsibility. If you say "add login and also redesign the homepage", your AI will ask you to split it into two issues — and it's right.

You don't write issues. You describe what you want, and your AI creates them for you.

---

## The workflow

### Step 1 — Talk about what you want

```
You:  "I want a landing page with an email signup form for a waitlist."
```

### Step 2 — The AI asks the right questions

```
AI:   "What happens when someone signs up? Just save the email?
       Do you need duplicate checking?"

You:  "Yes, save in database, check for duplicates, show a success message."
```

### Step 3 — The AI creates the issue

The AI turns your conversation into a structured task:

> **ISS-0001 — Landing page with waitlist signup**
>
> - [ ] Create HTML page with signup form
> - [ ] Create API endpoint to save emails
> - [ ] Add duplicate email check
> - [ ] Show success message after signup
> - [ ] Write tests

### Step 4 — You review and refine

> **This step matters.** Take 30 seconds to read the issue. Is something missing? An edge case? A constraint? Add it now — it saves hours later.

```
You:  "Add a check that the email format is valid before saving."

AI:   → Updates the checklist
```

### Step 5 — The AI builds it

```
You:  "Let's start."
```

The AI follows the checklist step by step. It codes, tests, and tells you when it's done.

### Step 6 — Close and move on

```
You:  "Close this issue. What's next?"
```

The AI marks it as done, updates the board, and suggests the next task.

---

## See where you stand

At any point, run:

```bash
lyt board
```

You'll see all your tasks organized by status — what's planned, what's in progress, what's done. It's your project dashboard.

---

## What the AI remembers

Each session, the AI reads your project context:
- **What** you're building (the manifest)
- **How** you work (the skills and rules)
- **What happened before** (the memory)

You never re-explain your project. The AI picks up where it left off.

---

## The golden rule

**The better you describe what you want, the better the AI delivers.**

| What you say | What you get |
|-------------|-------------|
| "Make an app" | Generic code, wrong assumptions |
| "Make a task app with drag-and-drop, user login, and dark mode" | Precise plan, targeted code |

You don't need to be technical. You need to be specific.

---

## Real example — idea to done in 4 exchanges

```
You:  "I want a landing page with an email signup form."

AI:   "Waitlist or newsletter? Need email validation?"

You:  "Waitlist. Just save the email. No validation for now.
       But add a duplicate check."

AI:   → Creates the issue with full checklist
       → "Ready to start?"

You:  "Go."

       ... AI builds, tests pass ...

AI:   → "Done. Issue closed. Board updated. Next issue?"
```

4 exchanges. You talked, the AI worked.

---

## Go further

- [Install Lytos](/en/getting-started/installation/) — if you haven't set up yet
- [Developer Guide](/en/guides/developer/) — daily workflow, interaction examples, best practices
- [Lead Developer Guide](/en/guides/lead/) — supervise your team, define the method
