---
title: The ideal Lytos team
description: The repo is the project. Not Jira. Not Notion. Not the meetings. The team that works from that premise looks different.
---

> *"The repo is the project. Not Jira. Not Notion. Not the meetings."*

## The problem Agile created

Agile didn't fail. It solved a real coordination problem — and it worked for twenty years.

But it solved it by building a management layer **above** the code. Story points, sprint ceremonies, Jira tickets, burndown charts — a parallel world that tracks the project without touching it. A world where the people responsible for delivery spend a significant part of their time in tools that don't know what a commit is.

The repo — where the project actually lives — became a detail. Something developers dealt with. Something managers projected onto a board elsewhere.

Lytos starts from the opposite premise.

## The repo is the project

Rules live in the repo. The issue board lives in the repo. Memory lives in the repo. The manifest — what the project is, what it isn't, what quality means — lives in the repo.

Not because it's clever. Because it's where the work happens. An AI agent that reads `.lytos/` before every session knows the project. A new team member who clones the repo has the full context. A decision recorded in an ADR is auditable two years later.

No external tool required. No sync needed. No drift between what's written and what's built.

## Governed Velocity

This is the paradigm shift in one sentence: **the speed of a builder, the quality of a lead dev, without the ceremony overhead**.

Agile answered *"waterfall plans too much — let's ship fast."* Lytos answers *"AI executes fast but without traceability — let's govern without slowing down."* Not Agile 2.0. A new premise.

## Does this sound familiar?

Most teams that adopted AI tools in 2024–2025 are in this situation: the AI is fast, the output is uneven, nobody really knows why a decision was made, and context disappears between sessions. If you recognize yourself in the middle column, that's the problem Lytos solves.

| | Before AI | Most teams today | With Lytos |
|---|---|---|---|
| **Project memory** | In heads, Confluence, meetings | The AI knows nothing the next morning — same briefing every session | In the repo, reloaded automatically every session |
| **Auditability** | Ticket + PR — partial | Nobody can answer in code review: who generated this, with which model, on which prompt? | Issue + ADR + commit — reconstructible two years later |
| **Delivery speed** | Limited by human coordination | Fast, but unpredictable — significant rework | Fast and consistent — the frame prevents rework |
| **Code quality** | Depends on the human reviewer | Two developers, the same prompt, two different architectures | `rules/` applied every session — consistency is structural |
| **Conventions** | Verbal, in Confluence, rarely enforced | Reinterpreted at every session — or simply ignored | Versioned in `rules/`, enforced automatically |
| **AI hallucination** | N/A | Undetectable until review — the AI invents decisions, ignores constraints | Manifest + rules reduce drift — every session restarts from the same constraints |
| **Sovereignty** | Data locked in a SaaS vendor | Context locked in the AI provider's chat history | Everything in Git — you own it, portable, no vendor lock-in |
| **Switching AI providers** | N/A | Change Claude for GPT = all context lost, start over | Switch the engine, keep the frame — zero context loss |
| **AI cost** | N/A | Constant rebriefing = wasted tokens every session | Structured context = predictable cost, cacheable |
| **Reproducibility** | Processes documented, hard to replay | Prompts are throwaway — impossible to reproduce what was produced | Issue + skill + rules = reproducible, transmissible workflow |
| **Onboarding** | Weeks of context transfer | Each new AI session — or new team member — starts from zero | Clone the repo, read `.lytos/` — immediately operational |

## The ideal team

This premise has a natural consequence for how a team is structured.

**The PO** stays close to the user. They define what to build and why — outcomes, not tickets. They don't write stories for developers who need hand-holding. They don't attend standups. They know the user.

**The Gouvernant** owns the frame. They write the manifest, the rules, the architectural decisions. They define what "correct" means for this project, once, in the repo. Every AI session and every Builder operates inside that frame. The Gouvernant doesn't need to be present for every task — the frame does the work.

**The Builders** direct execution. They write clear issues, give the AI the right context, review the output, and commit. Their value isn't typing speed. It's judgment — knowing when the AI got it right and when it didn't.

That's the team. Three roles. No Scrum Master. No ceremonies.

## Agile → Lytos: who becomes what

| Agile role | Status | Lytos equivalent |
|---|---|---|
| Product Owner | Refocused | **PO** — outcome strategist, close to the user |
| Lead Developer | Elevated | **Gouvernant** — writes the frame, not the code |
| Developer | Redefined | **Builder** — directs AI, reviews, commits |
| Scrum Master | → Feature | Process lives in the repo. Role is optional. |
| QA | → Tooling | Absorbed by `rules/` + `lyt lint` |
| Agile Coach | Disappears | The method is in the repo, not in a consultant |

## Agile → Lytos: what becomes what

| Agile artifact / ceremony | Status | Lytos equivalent |
|---|---|---|
| Jira / Linear tickets | → Repo | Issues in `.lytos/issue-board/` |
| Confluence / Notion docs | → Repo | `manifest.md`, `memory/`, ADRs |
| Verbal coding conventions | → Repo | `rules/` — versioned, applied every session |
| Definition of Done | → Repo | `review` field in issue frontmatter |
| Sprint planning | Disappears | Priorities set in the board, always current |
| Daily stand-up | Disappears | Board state in Git reflects reality |
| Retrospective | Disappears | Issues and ADRs capture what matters |
| Onboarding sessions | Disappears | Clone the repo, read `.lytos/` |

## What this enables

A team of three to five people, working repo-first, can move faster and ship cleaner than a Scrum team twice its size — because there's no management layer to maintain.

That's not a feature of AI. It's a feature of removing the gap between where the project lives and where the work happens.

## Two tensions worth naming

**The Builder is a high bar.** Directing AI well requires domain knowledge, technical judgment, and the ability to evaluate output. Someone arriving at Lytos without that background will struggle. Two answers: either the Gouvernant's rules are strong enough to compensate, or Lytos helps Builders develop judgment through tool feedback — a poorly structured issue is flagged with an explanation, not just blocked.

**Governance must disappear into the gesture.** If it feels like overhead, it gets bypassed. An issue drop that triggers the right gitflow, an issue that opens with the right context pre-loaded — that's the central challenge of any repo-first workflow. The frame only works if working inside it is faster than working around it.
