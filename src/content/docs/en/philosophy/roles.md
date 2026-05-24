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
