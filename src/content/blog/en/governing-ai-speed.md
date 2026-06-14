---
title: "Governing AI speed"
description: "AI accelerates execution, but it does not naturally provide traceability. Lytos proposes a different team model: smaller, clearer, and governed by the repo."
date: 2026-05-24
author: Frédéric Galliné
category: Organization
tags:
  - AI
  - Organization
  - Repo-first
lang: en
---

AI changed the speed of software execution before it changed the structure of teams.

A Builder can produce in a day what used to take a week. A prototype becomes a feature. A refactor can be attempted without a committee. The problem is no longer only how to ship faster. The problem becomes: **how do you stay in control when execution accelerates?**

Teams already feel this tension. Code arrives faster than review capacity. Decisions happen in chats that disappear. Conventions shift depending on the model, the session, the prompt, or the person at the keyboard. AI increases velocity, but it does not naturally produce governance.

That is where the Lytos model sits.

## Agile was not built for this problem

Agile answered a different era: waterfall planned too much, teams needed to learn how to ship more often. The main cost was human coordination between siloed roles.

AI moves the problem. Today, execution is no longer the only bottleneck. The new risk is fast execution with weak traceability: nobody knows exactly why a choice was made, which constraints were given to the model, which quality rules were applied, or whether the next session will restart from the same frame.

In short: Agile optimized cadence. Lytos optimizes **governed velocity**.

## Governed velocity

The promise fits in one sentence: **builder speed, lead dev quality, without ceremonies**.

This is not a new process layer above the work. It is the opposite movement: process moves back into the repo. The manifest describes intent. Rules describe what "correct" means. Memory preserves what the project learns. The issue board tracks work. ADRs make decisions reconstructible.

The repo stops being only where the code lives. It becomes where the project governs itself.

## Why the team can become smaller

In a classic Scrum team, part of the team size compensates for coordination cost: planning, clarification, tracking, synchronization, reporting, context transfer. These activities exist because information lives in multiple places and must constantly be stitched back together.

With Lytos, much of that coordination becomes structural.

The board is not a manual mirror of the project: it lives in Git. The Definition of Done is not an oral agreement: it lives in frontmatter and rules. Decisions are not only discussed in meetings: they are versioned. AI context does not depend on chat memory: it is reloaded from `.lytos/`.

This does not remove responsibilities. It removes part of the machinery that existed to keep those responsibilities afloat.

## The three advantages that really change the team

The first advantage is **less context loss**. A new agent, a new Builder, or a new session starts from the repo, not from a fragile summary. It is less spectacular than an AI demo, but it is what makes the model hold over time.

The second is **native auditability**. In an AI-assisted team, the question "who produced what, under which frame, and why?" becomes central. An issue, a commit, a rule, and a versioned decision are stronger than a chat history that is hard to reconstruct.

The third is **no lock-in**. If project context lives in a SaaS product, a chat, or a proprietary tool, the team becomes dependent on that container. If context lives in `.lytos/`, the model can change. Claude today, GPT tomorrow, something else later. The frame remains.

These advantages are not only technical. They reshape the organization.

## The roles move

The PO recenters on outcomes. They are not there to transform the customer voice into detailed tickets. They define what the product should accomplish.

The Gouvernant moves up in abstraction. They are not only the strongest developer on the team. They write the frame in which Builders and agents operate: manifest, rules, ADRs, architecture principles.

The Builder becomes an agent director. Their value is not typing speed. It is their ability to write a good issue, load the right context, challenge AI output, and decide whether the result is acceptable.

The Scrum Master largely becomes a feature. Not because human facilitation is useless. But because a large part of process can live directly in the tool and the repo.

The full model is described in [the ideal Lytos team](/en/philosophy/roles/). This article emphasizes the central point: this is not a Scrum optimization. It is a response to AI-assisted execution.

## The tension to name

This model asks a lot of the Builder. They need domain understanding, code literacy, technical judgment, and the ability to reject output that looks plausible but is wrong. AI does not lower the bar. It moves the bar toward judgment.

That is why governance cannot feel external. If it slows people down, it will be bypassed. If it is integrated into the work gesture — creating an issue, starting a branch, loading context, reviewing output — it becomes faster than improvisation.

The Lytos promise is not "less discipline." It is the opposite: discipline integrated enough that it no longer feels like overhead.

## The repo as the new team unit

An AI-first team should not start by asking which board to use, which ceremony to add, or which role to hire. It should ask: **does the repo contain enough context for a human and an agent to understand the project without a meeting first?**

If the answer is no, the team will continue to compensate with process.

If the answer is yes, something changes: the team can be smaller, decisions clearer, AI sessions more consistent, and speed less dangerous.

That is governed velocity.
