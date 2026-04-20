---
title: "Kanban in Git for AI projects: a folder-based board"
description: "Track work on an AI-assisted project without leaving Git: one folder per status, one markdown file per issue, YAML frontmatter as the source of truth."
---

*Keeping the board in the repo means the agent reads the same source of truth as your team.*

## The short answer

To run a kanban in Git for AI projects, use one folder per status (`0-icebox/`, `1-backlog/`, `2-sprint/`, `3-in-progress/`, `4-review/`, `5-done/`), one markdown file per issue with YAML frontmatter as the source of truth, and a generated `BOARD.md` that the AI reads at session start. Moving a file between folders changes its status. No external Jira, no API call — just git.

## Why keep the board in the repo

Classic issue trackers — Jira, Linear, GitHub Issues — work well for human coordination. They become awkward the moment an AI agent enters the loop: the agent either needs API keys, a plugin, and vendor-specific knowledge, or it ends up working blind while the board lives elsewhere.

A folder-based kanban puts the board next to the code. Any agent that can read a file can read the board. Every move is a commit, which means the board has real history, real diffs, and real code review. When two people (or a person and an agent) disagree about an issue's status, git shows exactly what changed and when.

This pattern will not replace Jira for a 200-person organization. For a team that already lives in git and wants the AI to see what the humans see, it tends to hold up well.

## The concrete structure

```
.lytos/issue-board/
├── BOARD.md                    # Generated index — visual overview
├── 0-icebox/                   # Ideas, not prioritized
├── 1-backlog/                  # Prioritized, not started
├── 2-sprint/                   # Committed to the current sprint
├── 3-in-progress/              # Currently being worked on
├── 4-review/                   # In review or testing
├── 5-done/                     # Completed
└── templates/
    ├── issue-feature.md
    └── issue-task.md
```

Each issue is a markdown file with YAML frontmatter. The frontmatter is the **source of truth** — `BOARD.md` is regenerated from it.

```yaml
---
id: ISS-0042
title: "Add rate limiting to the public API"
type: feature
priority: P1-high
effort: M
skill: api-design
skills_aux: [security, testing]
status: 2-sprint
branch: "feat/ISS-0042-rate-limit"
depends: [ISS-0038]
created: 2026-04-14
---

# ISS-0042 — Add rate limiting to the public API

## Context
Public endpoints are currently unthrottled; abuse has been observed on /search.

## Checklist
- [ ] Design the rate-limit policy
- [ ] Implement middleware
- [ ] Add integration tests
- [ ] Document the new headers
```

A single CLI call regenerates the visual board:

```bash
lyt board
```

The command walks the folders, reads the frontmatter, and writes a `BOARD.md` that is easy to scan in a PR. Because the board is a file, it can be reviewed, rolled back, and diffed like any other code change.

## Common questions

**Q: How does the AI agent use this?**
A: The agent reads `BOARD.md` at session start to see what is in flight, then reads the frontmatter of the specific issue it is working on. The `skill` field tells it which procedure to follow; the `depends` field flags blocked work.

**Q: What about parallel work and merge conflicts?**
A: One issue per file keeps conflicts rare. Status changes are file moves, which git handles cleanly. The frontmatter is the only place where two people might edit the same line, and that is usually caught in review.

**Q: Can this coexist with GitHub Issues?**
A: Yes. Some teams mirror high-level epics on GitHub for public visibility and keep the working-level kanban in the repo. The issue ID (`ISS-0042`) is the bridge.

**Q: What if my team already uses Jira?**
A: Keep Jira if it serves you. A folder-based board can run alongside, scoped to the AI-assisted work. This is a complement, not a replacement.

## Learn more

- Read the parent pillar: [Issue Board](/en/method/issue-board/)
- [Writing a CLAUDE.md that works](/en/method/manifest/writing-claude-md-that-works/) — the file where the AI reads its first instructions
- [AI coding memory across sessions](/en/method/memory/ai-coding-memory-across-sessions/) — the durable knowledge the AI reads each session
- External: [GitHub's guide to managing work in a repo](https://docs.github.com/en/issues/tracking-your-work-with-issues)

## Try Lytos in 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

See the CLI on [npm](https://www.npmjs.com/package/lytos-cli) · The method on [GitHub](https://github.com/getlytos/lytos-method).
