---
title: "Alternative to Claude sub-agents: one agent, rich context"
description: "A practical alternative to Claude sub-agents: one well-contextualized agent reading a shared manifest, memory and rules — often more consistent than personas."
---

*A reading from practice, not a dismissal of anyone else's work.*

## The short answer

The most practical alternative to Claude sub-agents is a single agent reading a shared `.lytos/` folder — manifest, memory, rules, and a task-specific skill. Personas multiply the same underlying model into costumes that do not change its capability. One agent with rich context tends to produce more consistent results across a codebase than several personas sharing the same weights.

## Why the sub-agent pattern deserves a second look

Sub-agent frameworks are a legitimate exploration. They bring a familiar vocabulary — "the architect", "the QA agent", "the security reviewer" — and give teams a sense of structure around a new kind of collaborator. On paper, each persona feels specialized.

In practice, three things tend to show up across the teams we have observed. First, each persona is the same model with a different system prompt, so the underlying reasoning does not actually change. Second, personas cost context — a 500-token "you are a senior developer" preamble is tokens not spent on your code. Third, handoffs between sub-agents introduce coordination overhead that a single session does not have.

None of this means sub-agents are wrong. It means we have landed on a different trade-off — one that concentrates effort on context rather than on roleplay.

## What a single-agent, rich-context setup looks like

The metaphor we keep returning to is the drill. You do not change drills to bore wood, concrete or metal — you change the **bit** (the model) and you choose the right **material** (the context). A persona is a costume on the drill. It does not drill a better hole.

Concretely, a single Claude Code or Cursor session reads this structure at startup:

```
.lytos/
├── manifest.md              # What the project is, why it exists
├── memory/
│   ├── MEMORY.md            # Index of accumulated knowledge
│   └── cortex/              # Architecture, patterns, bugs, domain
├── rules/
│   ├── default-rules.md     # Universal quality criteria
│   └── project-rules.md     # Project-specific thresholds
└── skills/
    ├── code-review.md       # Procedure for a review
    ├── testing.md           # Procedure for tests
    └── api-design.md        # Procedure for an endpoint
```

For a given task, the agent loads the manifest (always), the relevant cortex files (on demand), the rules (always), and the skill that matches the task type. No persona. The "specialization" comes from what it reads, not from what it is told it is.

The model choice becomes the explicit decision it always was: Opus for deep reasoning, Sonnet for balance, Haiku for fast generation. That is a real lever — unlike a costume.

## Edge cases and honest limits

**Q: Are there cases where sub-agents win?**
A: Possibly, when you genuinely need parallelism — running five reviews in parallel on five independent modules, for instance. The gain there is concurrency, not persona quality.

**Q: Doesn't the context get too long without sub-agents?**
A: The point of the cortex pattern is that only the relevant memory files load. A session on the billing module does not need the frontend patterns.

**Q: What if my team already uses a sub-agent framework?**
A: Keep it if it works. Lytos is a complement to what you already use. The `.lytos/` folder is readable by any agent, sub-agent frameworks included.

**Q: How does this scale to many contributors?**
A: The manifest, rules, and memory are versioned in git. Everyone — human or AI — reads the same source of truth. That is harder to guarantee with personas that live in a framework's config.

## Learn more

- Read the parent pillar: [Sub-agents](/en/method/sub-agents/)
- Related: [AI coding memory across sessions](/en/method/memory/ai-coding-memory-across-sessions/)
- External: [Anthropic's guidance on agent design](https://www.anthropic.com/engineering/building-effective-agents)

## Try Lytos in 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

See the CLI on [npm](https://www.npmjs.com/package/lytos-cli) · The method on [GitHub](https://github.com/getlytos/lytos-method).
