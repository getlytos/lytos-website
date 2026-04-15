---
title: Your First Session
description: Start using Lytos in 5 minutes — no technical knowledge required.
---

## Install Lytos

```bash
npm install -g lytos-cli
cd your-project
lyt init
```

Answer the 4 questions. Done. You have a `.lytos/` directory in your project.

---

## Open your AI tool and say:

```
"Read .lytos/LYTOS.md and help me configure this project."
```

The AI will:
1. Read the method
2. Ask you about your project (what it does, what stack, what constraints)
3. Fill in the manifest for you

**You just talk. The AI writes the files.**

---

## Describe what you want to build

```
"I want to build a task management app with user authentication."
```

The AI will:
1. Ask clarifying questions ("Web or mobile? Which auth provider?")
2. Create issues (structured tasks) in your board
3. Prioritize them and suggest where to start

**You don't need to know what an issue is.** The AI creates them in the right format. You just validate.

> **Tip:** Take 2 minutes to read the issues the AI created. Add details if something is missing. A well-described issue saves hours of back-and-forth later. The AI structures — you validate and refine.

---

## Start building

```
"Let's start with the first issue."
```

The AI reads the issue, follows the procedure, and builds. When it's done:

```
"Close this issue and show me the board."
```

Run `lyt board` at any time to see where you stand:

```bash
lyt board
```

---

## That's it

The full cycle:

```
1. Describe what you want     → AI creates issues
2. Pick an issue               → AI builds it
3. Validate and close          → AI updates the board
4. Repeat                      → AI remembers what it learned
```

Each session, your AI knows more about your project. No re-explaining. No starting over.

---

## Real example — from idea to done in 4 exchanges

```
You:  "I want a landing page with an email signup form."

AI:   "What should happen when someone signs up? Newsletter? Waitlist?
       Do you need email validation?"

You:  "Waitlist. Just save the email in a database. No validation for now."

AI:   → Creates ISS-0001 "Create landing page with waitlist signup"
       → Checklist: HTML page, form, API endpoint, database table, success message
       → Priority: P1-high, Effort: M

You:  "Looks good but add a duplicate email check."

AI:   → Updates the checklist, adds the check
       → "Ready to start?"

You:  "Go."

       ... AI builds it, tests pass ...

AI:   → "Done. Issue closed. Board updated. Want to see the next issue?"
```

4 exchanges. No YAML. No config file to edit. You talked, the AI worked.

---

## Want to go further?

- [Developer Guide](/en/guides/developer/) — daily workflow, interaction examples, best practices
- [Lead Developer Guide](/en/guides/lead/) — define the method, supervise the team, scale
