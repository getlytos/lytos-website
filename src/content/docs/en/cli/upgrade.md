---
title: lytos upgrade
description: Pull the latest method files into .lytos/ and migrate legacy conventions.
---

`lyt upgrade` refreshes the bundled method files inside an existing `.lytos/` — skills, rules, `LYTOS.md`, issue-board templates, and other material that evolves between CLI releases. It **never** touches `manifest.md`, project-specific memory, or open issues: only the mechanical, method-side files.

It also backfills structure that older projects may be missing (like the `6-private-notes/` Kanban folder introduced in ISS-0049) and can migrate legacy conventions when the surrounding tool ecosystem changes.

## Usage

```bash
lyt upgrade                     # interactive — prompts on each changed file
lyt upgrade --dry-run           # preview what would change, write nothing
lyt upgrade --force             # replace all changed files without asking
lyt upgrade --migrate-cursor    # also migrate legacy .cursorrules
```

## Flags

| Flag | Description |
|------|-------------|
| `--dry-run` | Print what would be added/updated without touching the filesystem. |
| `--force` | Overwrite all changed files without confirmation. |
| `--migrate-cursor` | Convert a legacy `.cursorrules` at the project root into `.cursor/rules/lytos.mdc`, wrapping the original content with modern Cursor front-matter. |

## What it updates

The set is fixed and intentional — anything not on this list is left alone:

- `skills/session-start.md`
- Task skills under `skills/<name>/SKILL.md` (9 bundled: `code-review`, `testing`, `documentation`, `git-workflow`, `code-structure`, `deployment`, `security`, `api-design`)
- `rules/default-rules.md`, `rules/README.md`
- `LYTOS.md` (method reference)
- `.lytos/.gitignore`
- `templates/sprint.md`
- `issue-board/templates/issue-feature.md`, `issue-board/templates/issue-task.md`

It additionally ensures every Kanban folder (`0-icebox/` … `6-private-notes/`) exists with a `.gitkeep`, so older projects scaffolded before the column was introduced pick it up automatically.

## Cursor migration — `--migrate-cursor`

Cursor's current rule format is per-rule `.mdc` files under `.cursor/rules/` with YAML front-matter (`alwaysApply`, `globs`, `description`). `lyt init --tool cursor` ships in this layout. Projects scaffolded earlier, or rules hand-written when the tool still used a single flat `.cursorrules` at the repo root, run on the legacy convention.

Running `lyt upgrade --migrate-cursor`:

1. Looks for `.cursorrules` at the project root.
2. If found (and `.cursor/rules/lytos.mdc` does **not** already exist), reads its content, wraps it with the modern front-matter, writes the result to `.cursor/rules/lytos.mdc`, and removes the legacy file.
3. If **both** files exist already, does nothing and warns — the user must reconcile by hand.
4. If neither exists, does nothing.

Your original rules are preserved verbatim — the migration is a format upgrade, not a reset.

### Idempotent and safe

Running `--migrate-cursor` twice is harmless: the second invocation sees no legacy file and prints `No legacy .cursorrules to migrate`. Combine with `--dry-run` to preview.

## Relationship with `lyt init --overwrite-bridges`

`lyt upgrade` touches method files inside `.lytos/` — never the AI bridges at the project root (`CLAUDE.md`, `.cursor/rules/lytos.mdc`, etc.). If you want the bundled bridge template to replace your current one, that is `lyt init --force --overwrite-bridges` territory, not `lyt upgrade`.

The Cursor migration is the one exception: `--migrate-cursor` is a **one-shot format conversion** that specifically moves the legacy flat file to the modern `.mdc` path. It is not a template overwrite — your content stays.
