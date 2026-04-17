---
title: Trainer Kit
description: All the talking points you need to integrate Lytos into your agile and AI training sessions.
---

This page is your toolbox. Everything you need to present Lytos in a training session — the story, the concepts, the arguments, the answers to objections. Take what you need, adapt to your context.

## The blanquette story

A developer is coding with an AI agent "ultra-specialized" in creating Gutenberg blocks for WordPress. The agent has a detailed persona, an 800-token system prompt, a defined role.

The developer switches to the wrong window. He asks this specialized agent to remind him of the recipe for blanquette de veau (a classic French stew).

The agent gives him the recipe. Without hesitation.

That's the moment everything falls apart. If an agent "specialized in Gutenberg" can give a cooking recipe without flinching, it's not specialized. It's playing a role. The costume changes nothing about the model underneath.

> *"An agent dressed as a senior dev doesn't know your code. It knows the word 'senior'."*

This moment sparked Lytos. If personas are useless, what actually makes the difference? The answer: **context and structure**.

## Why the name Lytos

**λυτός** (lytós) — from ancient Greek. Means "unbound", "detached", "freed".

From the verb **λύειν** (lyein): to unfasten, to free. It's the root of **analysis** (ana-lysis: decompose to understand) and **catalysis** (accelerate a reaction without being consumed).

The name carries the philosophy:
- **Unbound** from vendors — your context belongs to you, not to a provider
- **Detached** from models — switch AI engines without losing your foundation
- **Freed** from personas — no fiction, just engineering

> *"Choose your AI. Don't belong to it."*

## The pitch — 3 versions

### 30-second version
Lytos is an AI-assisted development method. Instead of dressing up AI in a persona, you give it what actually makes it better: structured project context that persists across sessions. Everything lives in Markdown in your Git repo. Portable, sovereign, model-independent.

### 2-minute version
Agile structured collaboration between humans. But when working with AI, there's nothing. Every session starts from zero. The developer re-explains the project. The AI forgets everything. The output is generic.

The industry responded by creating "specialized agents" — an architect agent, a tester agent, a reviewer agent. In reality, it's the same model in different costumes. It's comforting. It doesn't work.

Lytos flips the problem. Rather than dressing up the AI, we structure what it receives: a project manifest, reusable procedures, verifiable quality criteria, a task board, and memory that persists. The AI doesn't guess anymore — it knows.

### Workshop version (5 minutes — with the metaphor)
Take a drill. The same tool bores through wood, concrete, and metal. To get there, you change the bit, not the tool. If you put a carpenter's costume on the drill, it won't drill a better hole.

This is exactly what we do with AI sub-agents. Take an LLM, slap a prompt on it that says "You are a React expert with 15 years of experience", and call it a specialized agent. The model hasn't changed. Its capabilities haven't changed.

What makes the difference is two things: the model chosen for the task (the bit) and the context provided (the working material). That's what Lytos structures.

> *"Role-play doesn't replace context."*

## The Agile → Lytos bridge

This table is designed to be projected in training. It shows that Lytos doesn't replace agile — it extends its principles to working with AI.

| Agile Concept | Lytos Equivalent | What changes |
|---|---|---|
| User Story | Issue (.md in issue-board/) | The AI creates it from a conversation, the human validates |
| Definition of Done | Rules (rules/*.md) | Automatically verifiable criteria, not subjective |
| Sprint Backlog | Sprint (sprint.md) + Board (BOARD.md) | Git-native, no SaaS needed |
| Retrospective | Memory (memory/cortex/) | Knowledge persists across sprints, not just meeting notes |
| Daily standup | `lyt board` | Project status in one command |
| Scrum Master | Orchestrator | Planning rules, not another human role |
| Onboarding | Manifest (manifest.md) | A new developer (or AI) understands the project in 2 minutes |

> *"Agile structured human collaboration. Lytos structures collaboration with AI."*

## The 5 pillars — Trainer version

### 1. Intent — The manifest

**What:** The project's constitution. What we're building, why, with what constraints.

**Why:** Without a manifest, the AI produces generic code. It doesn't know if it's a library or a SaaS, if you prefer REST or GraphQL.

**How:** A single file `manifest.md` at the root of `.lytos/`. Read by the agent at the start of every session.

**Workshop question:** *"If a new developer joined your team tomorrow, what are the 5 things they absolutely need to know before coding?"* — That's a manifest.

### 2. Design — Skills

**What:** Reusable step-by-step procedures. How to do a code review, a deployment, a refactor.

**Why:** AI has no intuition. It needs concrete steps, not "do your best".

**How:** Files in `skills/`. 9 built-in skills cover 90% of development tasks.

**Workshop question:** *"How do you explain to a junior how to do a code review? List the steps."* — That's a skill.

### 3. Standards — Rules

**What:** Non-negotiable quality criteria. File size, test coverage, forbidden patterns.

**Why:** "Write clean code" is not verifiable. "Files under 300 lines" is.

**How:** Files in `rules/`. Default rules + project-specific rules.

> *"What can't be verified won't be respected."*

**Workshop question:** *"What are the 3 rules you always enforce in code review?"* — Formalize them. Those are your rules.

### 4. Progress — The issue board

**What:** A Git-native kanban. Tasks live in folders (backlog, sprint, in-progress, done).

**Why:** The AI knows where the project stands. No need to re-explain context every session.

**How:** `.md` files in `issue-board/`. YAML frontmatter is the source of truth. `lyt board` regenerates the view.

**Workshop question:** *"How much time do you spend re-explaining context to your AI each session?"* — The issue board eliminates that.

### 5. Memory — The memory

**What:** Accumulated project knowledge. Architecture decisions, patterns that work, recurring bugs.

**Why:** Without memory, the AI makes the same mistakes twice. It suggests solutions you've already rejected.

**How:** An index `MEMORY.md` + specialized files in `memory/cortex/`. The agent loads only what's relevant.

> *"Quality doesn't come from the prompt. It comes from context."*

**Workshop question:** *"Does your AI know you tried Redis and switched to PostgreSQL? No? That's a memory problem."*

## Sovereignty — Convincing decision-makers

Trainers often have decision-makers in the room. This section gives you the arguments.

**The problem:** Models change every 3-6 months. GPT-4 → GPT-4o → o1 → o3. Claude 2 → 3 → 3.5 → 4. Without portable structure, every model change means starting over.

**The vendor lock-in argument:** It's the same problem we've seen with AWS, Salesforce, and Adobe. Except this one changes four times a year.

**The Lytos answer:** Everything is Markdown in Git. The AI is an engine. Engines get swapped. The foundation is what persists.

| Without Lytos | With Lytos |
|---|---|
| Context in chat history | Context in versioned files |
| Workflow tied to one tool | Works with any AI tool |
| Vendor change = start over | Vendor change = swap engine |
| No audit trail | Everything in Git |

**The line that convinces:** *"Today it's Claude. Tomorrow it might be GPT, Gemini, or a local model. With Lytos, you swap the engine. You don't start over."*

## Handling objections

### "We already use Cursor / Copilot, isn't that the same?"
Cursor and Copilot are **tools**. Lytos is a **method**. Cursor doesn't know why your project exists. It doesn't know your architecture decisions. It doesn't remember the previous sprint. Lytos gives any tool the context it needs. In fact, Lytos works **with** Cursor — it generates a `.cursor/rules` file automatically.

### "Doesn't this add bureaucracy?"
`lyt init` generates everything in 30 seconds. The manifest is 50-100 lines. The rules already exist — you just repeat them verbally in code review. Lytos writes them once. It's **less** work, not more, because you stop repeating yourself.

### "Isn't it simpler to just write better prompts?"
The best prompt in the world can't fix empty context. If the AI doesn't know your project uses PostgreSQL, that you rejected GraphQL, and that files must be under 300 lines — no prompt will compensate. The prompt is ephemeral. Context is durable.

> *"Delegating to AI without structure is outsourcing without a brief."*

### "Does it only work with Claude?"
No. The manifest, skills, rules, memory — it's all Markdown. It works with Claude Code, Cursor, GPT, Gemini, Mistral, or a local LLM. Lytos has native adapters for major tools. That's the very principle of sovereignty: **no dependency on any model or vendor**.

### "Our developers won't adopt yet another process."
Developers hate processes that serve no purpose. They adopt ones that save them time. With Lytos, they stop re-explaining their project. The AI respects their conventions. Recurring bugs don't come back. Resistance usually drops after the first sprint.

## Workshop exercise — Option A: the tutorial project (recommended)

**Duration:** 20 minutes
**Goal:** Experience the full Lytos workflow on a real project.

**Preparation:** ask participants to install the CLI before the session (`npm install -g lytos-cli`).

1. **Clone the tutorial project (2 min)** — `git clone https://github.com/getlytos/lytos-learn.git && cd lytos-learn`

2. **Explore the board (3 min)** — `lyt board`. Show issues in every status, dependencies, the overview. Then `lyt show ISS-0006` to see the 50% progress bar.

3. **Start an issue (2 min)** — `lyt start ISS-0002`. Show what happens: file moved, branch created, board updated.

4. **Code with AI (8 min)** — Each participant opens their AI tool and says: "Read .lytos/manifest.md and the issue ISS-0002, then implement it." Observe: the AI understands the project immediately thanks to context.

5. **Close and debrief (5 min)** — `lyt close ISS-0002`. Show the final board. Key point: every participant got a consistent result because the context was the same.

**The tutorial project**: [github.com/getlytos/lytos-learn](https://github.com/getlytos/lytos-learn)

## Workshop exercise — Option B: the comparison

**Duration:** 15 minutes
**Goal:** Make participants feel the difference between a prompt and structured context.

1. **Without Lytos (5 min)** — Ask participants to prompt an AI to create an API endpoint. Just a free prompt. Observe: everyone gets a different, generic result with default choices.

2. **With a manifest (5 min)** — Give them a 30-line manifest (stack, constraints, conventions). Same request. Observe: results converge, respect constraints, are tailored to the project.

3. **Debrief (5 min)** — The difference between the two is context. The prompt didn't change. The model didn't change. Only the structure around it changed. That's Lytos.

**The key point in both exercises:** results converge. In traditional coding, 10 developers produce 10 different styles. With AI + a shared manifest, the code is consistent. For the first time, a 10-developer project can speak **with one voice**.

> *"The developer brainstorms. Lytos harmonizes."*

## Punchlines to remember

All key phrases in one place, ready to reuse in training:

| Theme | Punchline |
|---|---|
| Vision | *"Agile structured human collaboration. Lytos structures collaboration with AI."* |
| Personas | *"Role-play doesn't replace context."* |
| Personas | *"An agent dressed as a senior dev doesn't know your code. It knows the word 'senior'."* |
| Sovereignty | *"Choose your AI. Don't belong to it."* |
| Process | *"A project without process is a conversation. Not a delivery."* |
| Process | *"Without process, every session starts from zero. With Lytos, every session builds on the last."* |
| Context | *"Quality doesn't come from the prompt. It comes from context."* |
| Context | *"Delegating to AI without structure is outsourcing without a brief."* |
| Rules | *"What can't be verified won't be respected."* |
| Lead | *"The human doesn't write every line. They define the world."* |
| Team | *"The developer brainstorms. Lytos harmonizes."* |
| Formula | **Result = Model x Context** |

## Resources to share

- Website: [lytos.org](https://lytos.org)
- Method: [github.com/getlytos/lytos-method](https://github.com/getlytos/lytos-method)
- CLI: `npm install -g lytos-cli` then `lyt init`
- First project: [Quick Start guide](/en/getting-started/quickstart/)
