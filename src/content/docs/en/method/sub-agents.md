---
title: Sub-agents
description: Why personas are useless — and what actually makes the difference.
---

## Sub-agents don't exist

Your "React expert", your "senior architect", your "DevOps specialist" — it's the same LLM wearing a different costume.

The AI industry invented agent personas the way companies invent job titles: it feels reassuring, it looks like structure, but it changes nothing about the output. A language model doesn't code better because you told it it's senior.

This page says out loud what practitioners already know.

## The drill

Take a drill. The same tool can bore through:

- **wood** — soft material, no effort needed
- **concrete** — medium material, requires power
- **metal** — hard material, requires precision

To get there, you don't change drills. You change the **bit**. A wood bit for wood. A masonry bit for concrete. An HSS bit for metal. Same tool, right accessory.

Now dress your drill in a carpenter's outfit. Stick a label on it that says "Certified Craftsman". Add a badge: "10 years of experience".

It won't drill a better or worse hole.

> *"An agent dressed as a senior dev doesn't know your code. It knows the word 'senior'."*

This is exactly what the industry does with sub-agents. Take an LLM, slap a system prompt on it that says *"You are a senior developer with 15 years of React experience"*, and call it a specialized agent.

The model hasn't changed. Its capabilities haven't changed. Its "experience" is a textual fiction.

What makes the difference is **the bit** — the model chosen for the task:

| Task | Right bit | Wrong bit |
|------|----------|-----------|
| Complex architecture analysis | Opus (deep reasoning) | Haiku (too lightweight) |
| Boilerplate generation | Haiku (fast, cheap) | Opus (overkill, slow) |
| Code review | Sonnet (good balance) | Haiku (misses subtleties) |
| Critical refactoring | Opus (maximum precision) | Sonnet (risk of approximation) |

Choosing the wrong model for a task is like drilling concrete with a wood bit. No costume will fix a wrong bit.

## The persona illusion

The idea is seductive: create a "QA agent", an "architect agent", a "writer agent". Give them personalities, specializations, communication styles.

Except it doesn't work.

**A persona doesn't create competence.** Telling a model it's a security expert doesn't give it new security knowledge. Its weights haven't changed. Its training hasn't changed. All that changes is the probability distribution of its output tokens — it will *talk* like an expert, not *reason* like one.

**Personas add noise.** A 500-token system prompt describing a personality is 500 fewer tokens for useful context. And the model has to maintain the coherence of this fiction on top of solving the actual problem.

**What works is a model strategy.** Not "which costume for my agent", but "which model for which task". It's an engineering decision, not a casting call.

Lytos doesn't create personas. Lytos defines a strategy:

1. **Identify the nature of the task** — deep reasoning, fast execution, quality/cost balance
2. **Choose the right model** — Opus, Sonnet, or Haiku based on actual complexity
3. **Provide the right context** — manifest, memory, rules, relevant skills

The result doesn't depend on who the agent "is". It depends on what it knows and what it can do.

## What actually matters

If personas do nothing, what makes the difference between an agent that produces a mediocre result and one that produces an excellent one?

Two things. Only two.

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

Instead of creating 15 "specialized agents" that are all the same model in different costumes, Lytos does three things:

**1. Choose the right model for the task.** This is the bit. The decision with the most impact on the result.

**2. Provide rich, structured context.** This is the working material. The more precise the context — manifest, memory, rules, issue — the more relevant the result.

**3. Give a clear procedure.** This is the skill. Not "be an expert", but "here are the steps, here is the checklist, here are the validation criteria".

The result: agents without costumes but with deep context, a clear procedure, and the right engine under the hood.

No fiction. No casting. Engineering.
