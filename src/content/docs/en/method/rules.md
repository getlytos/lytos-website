---
title: Rules
description: Non-negotiable quality criteria — Standards, the third pillar of Lytos.
---

Rules are the third pillar of Lytos: **Standards**.

Rules define what "well done" means. They are verifiable criteria, not vague recommendations.

> *"What can't be verified won't be respected."* An AI agent reads them before every task and applies them without exception.

## Default rules

Lytos ships with `default-rules.md` covering:

### Code structure
| Rule | Threshold |
|------|-----------|
| Maximum file size | 300 lines |
| Maximum function size | 30 lines (50 max) |
| Maximum nesting | 3 levels |
| Parameters per function | 4 max |

### Documentation
- Mandatory docstrings on every public function
- Inline comments only to explain the *why*, never the *what*

### Hardcoded values — forbidden
| Forbidden | Replacement |
|-----------|-------------|
| Magic numbers | Named constant (`MAX_RETRIES`, `SECONDS_PER_DAY`) |
| Hardcoded URLs | Environment variable or config file |
| Hardcoded colors | CSS variable or theme constant |

### Error handling
- No silent failures — every error must be handled explicitly
- No empty `catch` blocks
- Clear error messages: what failed and why

### Tests
| Rule | Threshold |
|------|-----------|
| Unit test coverage | 80% of public functions minimum |
| Tests for every new feature | Mandatory before merge |
| Tests for every fix | Must prove the bug doesn't recur |

### Security
- No secrets in code — API keys, tokens, passwords in `.env` only
- User inputs escaped — protection against injection, XSS
- Dependencies up to date — no known vulnerabilities

### Git
- Commit format: `type(scope): message`
- Branch per issue: `type/ISS-XXXX-slug`
- No direct push to main — everything through PR

## Adding project-specific rules

Create additional files in `rules/` to complement the defaults:

```
rules/
├── default-rules.md      # Universal (ships with Lytos)
└── api-rules.md           # Your project-specific rules
```

Project-specific rules **complement** the defaults — they do not replace them.

## Learn more

- [AI coding rules examples: verifiable criteria that hold](/en/method/rules/ai-coding-rules-examples/) — a worked set of rules (file size, function size, coverage, naming) and the anatomy of a rule that your AI will actually respect.
