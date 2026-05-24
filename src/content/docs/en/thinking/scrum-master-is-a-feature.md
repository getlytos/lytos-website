---
title: The Scrum Master is becoming a feature
description: Agile built a management layer above the code. That layer is now the bottleneck. The repo was always the project.
---

At some point, software teams started managing their work in tools that don't know what a commit is.

Jira doesn't know your test suite is failing. Notion doesn't know the last three features touched the same module. Confluence doesn't know the architectural decision from eight months ago was reversed in a PR no one documented. These tools track a projection of the project — a copy, maintained manually, that drifts from the real thing the moment someone forgets to update it.

Agile formalized this separation. It gave the projection a vocabulary: epics, stories, sprints, velocity, burndown. It gave the projection its own roles: Scrum Master, Product Owner, Release Train Engineer. And it asked developers to maintain both worlds — the code and the copy of the code — while shipping.

That was a reasonable trade-off in 2001. The tools available then couldn't do better. You needed the external structure to coordinate a room full of people who couldn't see each other's work in real time.

## The trade-off is no longer reasonable

Today, the repo can hold everything. Rules. Memory. The issue board. The manifest — what the project is, what it isn't, what quality means for this specific codebase. Not as a workaround. As the actual source of truth.

And when you pair that with an AI agent that reads the repo before every session, something changes: the agent knows the project. Not because you briefed it. Because the project is in the repo, and the repo is what the agent reads.

The external management layer doesn't add information anymore. It duplicates it — imperfectly, with a lag.

## What a repo-first team looks like

Remove the duplication and the team looks different.

**The PO** is close to the user. They define what to build and why — outcomes, not ticket queues. They're not a translator between business and development. They're the person who knows what the user actually needs, and that knowledge lives in the manifest, not in a slide deck.

**The Gouvernant** owns the frame. They write the manifest, the rules, the architectural decisions — once, in the repo. Every AI session and every team member operates inside that frame automatically. The Gouvernant doesn't need to be in every meeting because the frame does the coordination work.

**The Builders** direct execution. They write clear issues, load the right context, direct the AI, review the output, commit. Their skill is judgment — knowing when the result is right and when it isn't. Not typing speed.

Three roles. No ceremonies. The process lives in the repo.

A team of three to five people working this way can move faster than a Scrum team twice its size — not because of AI, but because there's no management layer to maintain in parallel with the actual work.

## What happens to the Scrum Master

The Scrum Master was solving a real problem: without someone stewarding the process, it degrades. Stand-ups drift, the board goes stale, the Definition of Done becomes fiction.

In a repo-first team, that problem is solved differently. The board is generated from Git. The rules are enforced by the tool. The Definition of Done is the review field in the issue frontmatter. The process doesn't need a steward because it's not a social agreement — it's a file.

The facilitation work that remains — helping a team reach understanding, hold direction under pressure, navigate a difficult decision — that's genuinely human and doesn't go anywhere. But it's a fraction of what the Scrum Master role became in most organizations.

The role doesn't disappear. The overhead does.

## The real shift

Agile moved the project into a management layer. Lytos moves the management layer back into the project.

That's it. That's the shift.

The repo was always where the project actually lived. Every other tool was a copy. Lytos stops maintaining the copy.

---

*[Lytos](https://lytos.org) is a human-centered method for AI-assisted development. The method is open source. [Try it.](https://github.com/getlytos/lytos-cli)*
