---
title: "How to write a skill for an AI agent: a practical guide"
description: "A skill for an AI agent is a short markdown file with four sections — Purpose, Procedure, Output, Checklist. Here is the template and a working example."
---

*A skill is the "how" of a task — imperative, short, reusable across sessions.*

## The short answer

To write a skill for an AI agent, create a short markdown file — usually under 200 lines — with four sections: **Purpose** (when to use it), **Procedure** (numbered steps), **Output** (what "done" looks like), and **Checklist** (verifiable items before handing back). Keep it imperative and concrete. One skill per task type, not one skill per role.

## Why skills, and not prompts

A prompt is something you write once, in the moment, and lose. A skill is a procedure you write once and reuse across every session that needs it. When the agent picks up a code review task, it loads `code-review.md` and follows the same steps your team agreed on — whether the session happens today, next month, or with a different team member at the keyboard.

Skills replace tribal knowledge. The pattern we see in teams starting with AI-assisted development is that quality depends heavily on who is at the keyboard — because the "how" of a review, or of an API design, or of a deploy, lives in one person's head. A skill moves that knowledge into a file everyone (human or AI) can read.

A good skill is narrow. It covers one kind of task, does not try to be a manifesto, and trusts the manifest and rules to carry project context.

## The template

```markdown
# Skill: <name>

## Purpose

When to use this skill. One or two sentences. Example:
"Use this skill when reviewing a pull request, whether self-review
or review of another contributor's work."

## Procedure

Numbered, imperative steps. No narrative.

1. Read the issue's frontmatter; confirm the scope matches the PR.
2. Run `lyt lint` and confirm it passes.
3. For each changed file:
   - Check against `.lytos/rules/default-rules.md`.
   - Check against project-specific rules.
   - Flag anything above the complexity threshold.
4. Verify tests cover new behavior (see `testing.md`).
5. Write review comments in the standard format (see Output).

## Output

What "done" looks like for this skill:
- A review comment on the PR, or an approval.
- The review comment follows the format:
  `[<severity>] <file>:<line> — <issue> — <suggested fix>`

## Checklist

Before marking done:
- [ ] All rules in `default-rules.md` checked
- [ ] Tests verified for every new code path
- [ ] No secrets or hardcoded values slipped in
- [ ] PR size is under the 400-line threshold (or justified)
```

A skill that fits this template is roughly 40 to 150 lines. Beyond 200 lines, it usually means two skills are pretending to be one, or that rules and skills are getting mixed up.

## Common questions

**Q: When should I create a new skill versus extending an existing one?**
A: Create a new skill when the **kind of task** is different — reviewing code, writing tests, designing an API, shipping a deploy are distinct. Extend an existing skill when the procedure gains a step that always applied.

**Q: How does the agent know which skill to load?**
A: Issues in the board declare a `skill:` field in their frontmatter (and optional `skills_aux:`). The session-start skill reads that field and loads the matching procedure. No guessing.

**Q: Should skills reference rules?**
A: Yes — but reference, do not duplicate. `rules/` is the source of truth for thresholds. The skill says "check against default-rules.md"; it does not re-list the rules.

**Q: How do I version skills over time?**
A: Skills live in git. Every change is a commit. For meaningful shifts, add a short "Changelog" section at the bottom of the skill file — the agent can read it, and so can future contributors.

**Q: Can skills call other skills?**
A: Informally, yes — a skill can reference another ("see `testing.md` for test-writing procedure"). Keep the references explicit and the chains short.

## Learn more

- Read the parent pillar: [Skills](/en/method/skills/)
- [Alternative to Claude sub-agents](/en/method/sub-agents/alternative-to-claude-sub-agents/) — why one well-contextualized agent often beats a cast of personas
- [Writing a CLAUDE.md that works](/en/method/manifest/writing-claude-md-that-works/) — the file where the AI reads its first instructions
- [AI coding rules examples](/en/method/rules/ai-coding-rules-examples/) — verifiable thresholds the AI respects before handing back code
- External: [Anthropic's documentation on agent skills](https://docs.anthropic.com/en/docs/claude-code/overview)

## Try Lytos in 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

See the CLI on [npm](https://www.npmjs.com/package/lytos-cli) · The method on [GitHub](https://github.com/getlytos/lytos-method).
