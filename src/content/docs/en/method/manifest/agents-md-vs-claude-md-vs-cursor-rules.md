---
title: "AGENTS.md vs CLAUDE.md vs cursor rules: which to use"
description: "AGENTS.md, CLAUDE.md and cursor rules are three vendor conventions for the same idea. A short comparison, and how to keep them in sync without duplicating content."
---

*Three files, one question: where does the AI read its instructions?*

## The short answer

AGENTS.md, CLAUDE.md and cursor rules are three vendor conventions for the same idea — a project-level instructions file the AI reads at session start. You do not really choose between them. You generate the one (or several) your team's tools need, and you keep the substantive content in one shared place so they all point at the same source of truth.

## Why this confusion exists

Each major AI coding tool landed on its own convention before a standard could emerge:

- **Anthropic's Claude Code** reads `CLAUDE.md` at the repository root.
- **OpenAI Codex and the AGENTS.md community** read `AGENTS.md`.
- **Cursor** reads rule files under `.cursor/rules/`.
- **GitHub Copilot** reads `.github/copilot-instructions.md`.
- **Google Gemini Code Assist** reads its own config format.

None of these are wrong. They each solve the same problem — "how does the agent know what this project is?" — with slightly different packaging. The risk for teams is that the content drifts across files, and the AI ends up reading stale or contradictory instructions depending on which tool is open.

## A comparison at a glance

| Convention | Vendor / tool | File path | Casing | Notable limit |
|---|---|---|---|---|
| CLAUDE.md | Anthropic Claude Code | repo root | uppercase | none published |
| AGENTS.md | OpenAI Codex, community | repo root | uppercase | ~32 KiB soft cap in some harnesses |
| cursor rules | Cursor | `.cursor/rules/*.mdc` | lowercase | per-file, loaded by pattern |
| copilot-instructions.md | GitHub Copilot | `.github/copilot-instructions.md` | lowercase | modest size budget |

These are conventions, not standards. They evolve — check each vendor's current docs before relying on specific limits.

## The pattern that keeps them in sync

The approach we have seen work is: keep the real content in one place (a `.lytos/` folder), and let each vendor file be a thin bridge that points at it.

```
/
├── CLAUDE.md              # 20 lines, points at .lytos/
├── AGENTS.md              # 20 lines, same pointers
├── .cursor/
│   └── rules/
│       └── lytos.mdc      # Cursor rule, same pointers
└── .lytos/
    ├── manifest.md        # The actual project constitution
    ├── memory/
    ├── rules/
    └── skills/
```

Each bridge file does the same job: "here is the project, read these `.lytos/` files in this order, here is the procedure". The substantive content — architecture decisions, coding rules, domain vocabulary — lives once in `.lytos/` and gets updated in one place.

`lyt init --tool claude,cursor,codex` generates all the bridge files at once so they stay consistent. When a new vendor convention appears, you add a bridge; you do not rewrite your project's instructions.

The content is what is portable. The bridge is the per-tool fixture.

## Common questions

**Q: If I only use Claude Code, do I still need AGENTS.md?**
A: Not strictly. But adding a 20-line AGENTS.md costs very little and keeps the door open when someone on the team tries Codex or a new agent.

**Q: Can one file just symlink to another?**
A: Some teams do this. It works for Claude/AGENTS if the content is identical, but Cursor's `.cursor/rules/` format is different enough that a real file is easier to reason about.

**Q: What happens if the files disagree?**
A: The agent reads whichever file its tool is configured to read — and ignores the others. That is exactly the drift problem the shared `.lytos/` folder is designed to prevent.

**Q: Should these files be committed to git?**
A: Yes. They are part of the project's working conditions and should version with the code.

## Learn more

- Read the parent pillar: [Manifest](/en/method/manifest/)
- Related: [Writing a CLAUDE.md that works](/en/method/manifest/writing-claude-md-that-works/)
- External: [AGENTS.md community specification](https://agents.md/) · [Cursor rules documentation](https://docs.cursor.com/context/rules)

## Try Lytos in 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

See the CLI on [npm](https://www.npmjs.com/package/lytos-cli) · The method on [GitHub](https://github.com/getlytos/lytos-method).
