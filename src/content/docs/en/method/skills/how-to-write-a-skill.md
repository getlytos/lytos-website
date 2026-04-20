---
title: "How to write an agent skill: a practical guide to the agentskills.io format"
description: "An agent skill is a folder with a SKILL.md file that has two frontmatter fields (name, description) and free-form markdown. Here is the template, a working example, and how progressive disclosure loads it on demand."
---

*A skill is the "how" of a task — imperative, short, reusable across sessions and across tools.*

## The short answer

To write a skill for an AI coding agent, create a folder named after the skill, with a `SKILL.md` file inside. The file has two required frontmatter fields — `name` and `description` — followed by free-form markdown instructions. The format is the open [agentskills.io](https://agentskills.io) standard, supported natively by Claude Code, Cursor, Codex, Gemini CLI, GitHub Copilot, Goose, and most other modern AI coding tools. Keep the body imperative and concrete, one skill per task type.

## Why a standard format, and not a prompt

A prompt is something you write once, in the moment, and lose. A skill is a procedure you write once and reuse across every session that needs it. Because the file format is standardized, the same skill works whether the session runs in Claude Code on your laptop, in Cursor on a teammate's machine, or in a CI job driven by OpenAI Codex.

Skills replace tribal knowledge. In teams that rely on AI-assisted development, quality depends heavily on who is at the keyboard — because the "how" of a review, of an API design, of a deploy, often lives in one person's head. A skill moves that knowledge into a file everyone (human or AI) can read, and the agentskills.io format makes that file portable between tools.

A good skill is narrow. It covers one kind of task, does not try to be a manifesto, and trusts the manifest and rules to carry project context.

## The format

A skill is a **folder**, not a flat file:

```
my-skill/
├── SKILL.md          # Required: instructions + metadata
├── scripts/          # Optional: executable helpers
├── references/       # Optional: detailed reference material
└── assets/           # Optional: templates, data files
```

The `SKILL.md` file has two mandatory frontmatter fields and a markdown body with no format restrictions:

```markdown
---
name: code-review
description: Perform a structured code review — what to check, in what order, and how to formulate constructive feedback. Use before merging a PR, on demand for a specific file or module, or for end-of-sprint quality audits.
---

# Skill — Code Review

## When to invoke this skill

- Before each PR merge
- On explicit human request, on a file or module
- At end of sprint, for a global quality audit

## Procedure

1. Read the issue's frontmatter; confirm the scope matches the PR.
2. Run `lyt lint` and confirm it passes.
3. For each changed file:
   - Check against `.lytos/rules/default-rules.md`.
   - Check against project-specific rules.
   - Flag anything above the complexity threshold.
4. Verify tests cover new behavior.
5. Write review comments in the standard format.

## Output

A review comment on the PR, or an approval, following the format:
`[<severity>] <file>:<line> — <issue> — <suggested fix>`

## Checklist

- [ ] All rules in `default-rules.md` checked
- [ ] Tests verified for every new code path
- [ ] No secrets or hardcoded values slipped in
- [ ] PR size is under the 400-line threshold (or justified)
```

A skill that fits this shape is roughly 40 to 200 lines. Beyond 500 lines (the recommended soft cap in the agentskills.io spec), it usually means two skills are pretending to be one, or that rules and skills are getting mixed up — move detail out to a `references/` subfolder.

### The `description` field matters more than you think

The description is what the AI tool uses at session startup to decide whether the skill is relevant. It should cover both **what** the skill does and **when** to use it, and it should include concrete keywords the agent can match against task descriptions.

A weak description (`Helps with reviews.`) leaves the tool guessing. A strong description (`Structured code review — what to check, in what order. Use before merging a PR, on demand for a file or module, or for end-of-sprint quality audits.`) tells the agent exactly when to load it.

## Progressive disclosure: how the agent picks the skill

You don't have to tell the agent which skill to use. Modern tools discover skills automatically using **progressive disclosure**:

1. **Metadata load** (~100 tokens per skill) — at session startup, the tool reads only the `name` and `description` of every available skill.
2. **Activation** — when the current task matches a skill's description, the tool loads the full `SKILL.md` body into context.
3. **Deep dive** — if the SKILL.md references a script or a file in `references/`, the tool loads it only if needed.

The practical effect: even if you have dozens of skills, the agent pays the full context cost of only the one that matters for the task at hand.

## Validating your skill

Use the official reference library to check that your format is clean:

```bash
npx skills-ref validate ./my-skill
```

It checks the frontmatter constraints (name follows the spec, description is non-empty and under 1024 chars) and the file layout.

## Common questions

**Q: When should I create a new skill versus extending an existing one?**
A: Create a new skill when the **kind of task** is different — reviewing code, writing tests, designing an API, shipping a deploy are distinct. Extend an existing skill when the procedure gains a step that always applied.

**Q: How does the agent choose which skill to load?**
A: Progressive disclosure. At startup the tool reads every skill's name + description. When a task comes in, it matches that task against every description and loads the full `SKILL.md` of the match. If you want to pin a specific skill for a borderline task, most issue trackers (including Lytos issues) accept an optional `skill:` field as a hint.

**Q: Should skills reference rules?**
A: Yes — but reference, do not duplicate. `rules/` is the source of truth for thresholds. The skill says "check against default-rules.md"; it does not re-list the rules.

**Q: How do I version skills over time?**
A: Skills live in git. Every change is a commit. For meaningful shifts, add a short "Changelog" section at the bottom of the SKILL.md — the agent can read it, and so can future contributors. You can also use the optional `metadata.version` frontmatter field.

**Q: Can skills call other skills?**
A: Informally, yes — a skill can reference another one. Keep the references explicit and the chains short.

**Q: What about scripts or data files a skill needs?**
A: Put them in `scripts/` or `assets/` inside the skill folder. The SKILL.md body can reference them with relative paths. The tool only loads them when the SKILL.md says to.

## Learn more

- Read the parent pillar: [Skills](/en/method/skills/)
- [Alternative to Claude sub-agents](/en/method/sub-agents/alternative-to-claude-sub-agents/) — why one well-contextualized agent often beats a cast of personas
- [Writing a CLAUDE.md that works](/en/method/manifest/writing-claude-md-that-works/) — the file where the AI reads its first instructions
- [AI coding rules examples](/en/method/rules/ai-coding-rules-examples/) — verifiable thresholds the AI respects before handing back code
- External: [agentskills.io specification](https://agentskills.io/specification) — the full format reference
- External: [Anthropic's example skills](https://github.com/anthropics/skills) — a starting library of skills you can adapt

## Try Lytos in 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

See the CLI on [npm](https://www.npmjs.com/package/lytos-cli) · The method on [GitHub](https://github.com/getlytos/lytos-method).
