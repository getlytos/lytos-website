---
title: Dev roles in the AI era
description: How skills might evolve as AI becomes part of day-to-day work — a reading, not a prophecy.
---

> *"Agile structured human collaboration. AI is likely shifting some of that balance — without making the roles obsolete."*

**This is neither a prophecy nor a manifesto about the end of a profession.** It's a reading, grounded in what we see every day: teams integrating AI into their work, practices adjusting, skills being recomposed. Nothing is settled. Everything may take a different trajectory depending on projects, team cultures, and tools.

Our stance: the skills people have today don't become obsolete. They're the foundation on which the new practices are built. A developer who can read a complex system, a PO who can listen to a client, a Scrum Master who can unblock a team — these know-hows remain precious. What changes is where they apply.

## The agile precedent

Agile created roles. Scrum Master, Product Owner, Agile Coach, Release Train Engineer. These didn't exist before 2001. They were born to solve a real problem: structuring collaboration between humans in an uncertain environment.

It worked. For more than twenty years.

Agile structured collaboration **between humans**. When part of the work is gradually taken on by a tool — a fast, consistent executor without its own judgment — practices designed to handle human dynamics are likely to adjust. Not disappear: adjust.

## What shifts

We're not saying "these roles are dead". We're saying: it's possible that the problems they solve change in nature, and that the value of these roles concentrates on different dimensions.

### The Scrum Master

**Today:** facilitates ceremonies, unblocks the team, enforces process, shields the team from disruption.

**What could recenter:** some of the process tends to move into the repo (versioned rules, generated board, orchestrator handling dependencies). Human facilitation — helping a team reach mutual understanding, arbitrate, hold a direction — remains essential. What changes is probably the ratio between time spent animating a process and time spent building the frame in which the team and the AI collaborate.

On some projects, this evolution will make the function more strategic. On others, it will require acquiring a context-engineering skill that wasn't previously expected.

### The execution-focused developer

**Today:** picks up a ticket, codes, submits a PR. Repeats.

**What could evolve:** with good framing (manifest, rules, skills), AI can produce a portion of the code faster and more consistently than a team of developers with varied styles. A developer's value then shifts toward what AI does poorly: framing a problem, verifying that a result actually matches the intent, arbitrating between approaches, understanding a business context.

This isn't the end of development. It's the refocus of the developer on the irreplaceable part of the craft: judgment. Typing at a keyboard was already a minority fraction of a good developer's time.

### The style reviewer

**Today:** checks naming, function size, code consistency during review.

**What could evolve:** mechanically verifiable rules benefit from being verified mechanically. `lyt lint` and classic linters catch in seconds what a human takes a while to spot. Code review keeps its full meaning for what only a human can judge: is the solution relevant, is the intent clear, does it hold against an unexpected case, does it align with the architecture.

Review isn't threatened. It deepens because it's relieved of mechanical tasks.

## What could transform

Some roles might evolve from a production register to a design register. Three hypotheses — to be verified team by team.

### Product Owner → Intent Architect

| Current practice | Possible direction |
|---|---|
| Writes user stories | Refines the need in dialogue with the AI |
| Formats acceptance criteria | Validates the manifest and AI-generated issues |
| Prioritizes a backlog | Defines the sprint, the AI structures dependencies |
| Bridges dev ↔ business | Still the translator of client needs, with the AI as the technical counterpart |

**The shift:** from writing to steering. A PO could spend less time formatting tickets, more time thinking about the real need. Client knowledge remains irreplaceable.

### Lead dev → System Architect

| Current practice | Possible direction |
|---|---|
| Reads every PR line by line | Defines the manifest, rules, and skills |
| Checks style and conventions | Defines conventions; the AI applies them |
| Catches bugs in review | Validates that the issue is well-resolved, not only that the code is clean |
| Enforces conventions verbally | Writes them once in rules; they apply every session |

**The shift:** from control to design. The lead would define more of the world in which the team and the AI produce — without disappearing from strategic review.

### Developer → AI Pilot

| Current practice | Possible direction |
|---|---|
| Produces code | Describes the need, challenges the AI, validates the result |
| Personal style | Code aligned with a shared manifest and rules |
| Expertise = syntax mastery | Expertise = understanding the problem and being able to formulate it |
| Value = speed and rigor at the keyboard | Value = quality of thought and soundness of judgment |

**The shift:** from production to direction of production. A developer who asks the right questions could deliver more than a fast typist — without the typist losing their place; their habits will be precious for verifying and teaching.

### QA → Standards Guardian

| Current practice | Possible direction |
|---|---|
| Tests manually, writes test cases | Defines criteria in rules, the AI writes tests |
| Verifies after the fact | Standards apply during development |
| Finds bugs | Designs the conditions that make them rare |

**The shift:** from execution to strategy. QA would no longer only hunt bugs — it would also design the system that makes them rare. Both remain useful; the balance between them may shift.

## What could emerge

We see a need that doesn't have a stable name yet.

### The context engineer

Someone who structures and maintains a project's `.lytos/`. Who adjusts the manifest to be precise without being verbose. Who consolidates memory to keep it relevant. Who designs project-appropriate skills. Who chooses the right model for each task type.

It's a mix of lead dev, PO, and knowledge manager. Today this work is often done by the lead or whoever is most comfortable with AI in the team. On complex projects it could become a distinct role. It isn't forced to become one everywhere.

We don't claim this as a "new Lytos job title". We observe the need and note that no current role fully covers it.

## A pattern, not a rule

The history of technological transformations often follows a similar pattern: a wave removes part of the mechanical execution and shifts value toward design and coordination.

| Wave | What it strengthened | What it reduced |
|---|---|---|
| **Agile** (2000s) | Scrum Master, PO, Coach | The traditional top-down project manager |
| **DevOps** (2010s) | SRE, Platform Engineer | Sysadmin isolated from development |
| **AI + Lytos** (now) | Intent architect, context engineer | The mechanical part of development and facilitation |

This pattern isn't a law. Each team, each culture, each project type moves at its own pace. Previous transformations didn't replace every role they touched — they redrew them.

## For your team

If this page leaves you wondering "what about me", a few directions — to weigh against your actual context:

- **Scrum Master?** Your understanding of team dynamics is a rare skill. It could combine with a new practice: structuring the AI's context (manifest, rules, memory). Many Scrum Masters we've met find this an additional lever of impact.

- **Product Owner?** Your knowledge of client needs is irreplaceable — AI won't take it. What may change is the ratio between time spent writing tickets and time spent building and challenging the need in dialogue with the AI.

- **Developer?** Your experience with code is a foundation, not a fading asset. What might amplify is the premium on the ability to formulate a problem and judge a result. The patterns you've internalized over the years are exactly what you bring to the AI to guide it.

- **Lead dev?** The system architect role already existed — AI gives it new tools. Defining a clear frame (rules, skills, manifest) could become as structuring for a team as a good software architecture is today.

These transformations aren't threats or guarantees. They're possible shifts, which will depend as much on the technology as on how each team chooses to integrate it. Lytos aims to offer a vocabulary and tools to accompany this evolution — without claiming to dictate it.
