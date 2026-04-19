---
title: Sub-agents
description: A critical reading of personas — and what seems to make the difference.
---

## Sub-agents: an approach that feels limited to us

The "React expert", "senior architect", "DevOps specialist" you meet in many frameworks usually rely on the same LLM with a different system prompt.

Agent personas brought a form of organization to a new landscape; they offer a familiar vocabulary and a sense of structure. Our observation from practice: that disguise layer changes the outcome less than what plays out elsewhere — choice of model and quality of context.

This page lays out a reading, not a general truth.

## The drill

Take a drill. The same tool can bore through:

- **wood** — soft material, no effort needed
- **concrete** — medium material, requires power
- **metal** — hard material, requires precision

To get there, you don't change drills. You change the **bit**. A wood bit for wood. A masonry bit for concrete. An HSS bit for metal. Same tool, right accessory.

Now dress your drill in a carpenter's outfit. Stick a label on it that says "Certified Craftsman". Add a badge: "10 years of experience".

It won't drill a better or worse hole.

> *"An agent dressed as a senior dev doesn't know your code. It knows the word 'senior'."*

You find this pattern in many sub-agent setups. Take an LLM, add a system prompt like *"You are a senior developer with 15 years of React experience"*, and present it as a specialized agent.

The model itself hasn't changed. Its capabilities haven't either. The "experience" on display is a textual construction.

What makes the difference is **the bit** — the model chosen for the task:

| Task | Right bit | Wrong bit |
|------|----------|-----------|
| Complex architecture analysis | Opus (deep reasoning) | Haiku (too lightweight) |
| Boilerplate generation | Haiku (fast, cheap) | Opus (overkill, slow) |
| Code review | Sonnet (good balance) | Haiku (misses subtleties) |
| Critical refactoring | Opus (maximum precision) | Sonnet (risk of approximation) |

Choosing the wrong model for a task is like drilling concrete with a wood bit. No costume will fix a wrong bit.

## The limits of personas

The idea is seductive: create a "QA agent", an "architect agent", a "writer agent". Give them personalities, specializations, communication styles.

Our reading, from practice, is more nuanced.

**A persona doesn't create new competence.** Telling a model it's a security expert doesn't give it security knowledge it didn't already have. Its weights haven't changed, and neither has its training. What changes is the probability distribution of its output tokens — it will *sound* more like an expert, without necessarily reasoning differently.

**Personas have a context cost.** A 500-token system prompt describing a personality takes tokens away from useful context. The model also has to maintain the coherence of that fiction.

**What Lytos favors is a model strategy.** Less "which costume for my agent", more "which model for which task". An engineering decision, as a complement to existing framing practices.

Lytos doesn't create personas. Lytos defines a strategy:

1. **Identify the nature of the task** — deep reasoning, fast execution, quality/cost balance
2. **Choose the right model** — Opus, Sonnet, or Haiku based on actual complexity
3. **Provide the right context** — manifest, memory, rules, relevant skills

The result doesn't depend on who the agent "is". It depends on what it knows and what it can do.

## What seems to matter

If personas have a limited effect, what — in our experience — makes the difference between a mediocre result and a satisfying one?

Two dimensions seem decisive to us.

### The model

This is raw capability. A more powerful model reasons better, sees more nuance, maintains coherence over long tasks. Choosing the right model for the right task is choosing the right bit.

### The context

This is the information available at execution time. A brilliant model with poor context will produce a generic result. A decent model with rich context will produce a precise, tailored result.

The formula is simple:

> **Result = Model x Context**

Not `Result = Persona + Prompt`.

And this is exactly what Lytos structures:

- The **manifest** provides project context — what we're building, why, with what constraints
- **Memory** provides accumulated context — past decisions, patterns that work, mistakes not to repeat
- **Rules** provide quality criteria — what's acceptable and what isn't
- **Skills** provide the procedure — how to execute each type of task, step by step

None of these tell the agent "who it is". They all tell it **what it needs to know** and **how to work**.

## The Lytos approach

Rather than multiplying "specialized agents" that share the same model under the hood, Lytos suggests focusing on three levers:

**1. Choose the right model for the task.** This is the bit. The decision with the most impact on the result.

**2. Provide rich, structured context.** This is the working material. The more precise the context — manifest, memory, rules, issue — the more relevant the result.

**3. Give a clear procedure.** This is the skill. Not "be an expert", but "here are the steps, here is the checklist, here are the validation criteria".

The result: sessions without costumes but with deep context, a clear procedure, and a model chosen for the task.

Less fiction, more engineering — as a complement to what already works for you.

## Learn more

- [Alternative to Claude sub-agents: one agent, rich context](/en/method/sub-agents/alternative-to-claude-sub-agents/) — why multiplying personas rarely improves output, and what structured context does instead.
