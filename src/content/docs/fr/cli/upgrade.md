---
title: lytos upgrade
description: Récupère les derniers fichiers méthode dans .lytos/ et migre les conventions héritées.
---

`lyt upgrade` rafraîchit les fichiers méthode bundlés dans un `.lytos/` existant — skills, rules, `LYTOS.md`, templates du issue-board, et tout ce qui évolue entre les releases du CLI. Il **ne touche jamais** à `manifest.md`, à la mémoire spécifique au projet, ni aux issues ouvertes : uniquement les fichiers mécaniques côté méthode.

Il rattrape aussi la structure que des projets plus anciens pourraient ne pas avoir (comme le dossier Kanban `6-private-notes/` introduit en ISS-0049) et peut migrer des conventions héritées quand l'écosystème outil évolue.

## Utilisation

```bash
lyt upgrade                     # interactif — demande pour chaque fichier modifié
lyt upgrade --dry-run           # preview des changements, n'écrit rien
lyt upgrade --force             # remplace tous les fichiers modifiés sans demander
lyt upgrade --migrate-cursor    # migre aussi un .cursorrules hérité
```

## Flags

| Flag | Description |
|------|-------------|
| `--dry-run` | Affiche ce qui serait ajouté/mis à jour sans toucher au système de fichiers. |
| `--force` | Écrase tous les fichiers modifiés sans confirmation. |
| `--migrate-cursor` | Convertit un `.cursorrules` hérité à la racine du projet vers `.cursor/rules/lytos.mdc`, en enveloppant le contenu original avec le front-matter moderne de Cursor. |

## Ce qu'il met à jour

L'ensemble est fixé et volontaire — tout ce qui n'est pas dans cette liste reste intact :

- `skills/session-start.md`
- Task skills sous `skills/<name>/SKILL.md` (9 bundlés : `code-review`, `testing`, `documentation`, `git-workflow`, `code-structure`, `deployment`, `security`, `api-design`)
- `rules/default-rules.md`, `rules/README.md`
- `LYTOS.md` (référence de la méthode)
- `.lytos/.gitignore`
- `templates/sprint.md`
- `issue-board/templates/issue-feature.md`, `issue-board/templates/issue-task.md`

Il s'assure en plus que chaque dossier Kanban (`0-icebox/` … `6-private-notes/`) existe avec un `.gitkeep`, pour que les projets plus anciens scaffoldés avant l'introduction d'une colonne la récupèrent automatiquement.

## Migration Cursor — `--migrate-cursor`

Le format de règles actuel de Cursor est des fichiers `.mdc` par règle sous `.cursor/rules/` avec front-matter YAML (`alwaysApply`, `globs`, `description`). `lyt init --tool cursor` livre ce layout. Les projets scaffoldés plus tôt, ou les règles écrites à la main quand Cursor utilisait encore un seul fichier plat `.cursorrules` à la racine, tournent sur la convention héritée.

`lyt upgrade --migrate-cursor` :

1. Cherche `.cursorrules` à la racine du projet.
2. S'il est présent (et que `.cursor/rules/lytos.mdc` n'existe **pas** déjà), lit son contenu, l'enveloppe avec le front-matter moderne, écrit le résultat dans `.cursor/rules/lytos.mdc`, et supprime le fichier hérité.
3. Si **les deux** fichiers existent déjà, ne fait rien et avertit — l'utilisateur doit réconcilier à la main.
4. Si aucun n'existe, ne fait rien.

Vos règles originales sont préservées verbatim — la migration est une mise à jour de format, pas une remise à zéro.

### Auto-détection

Un `lyt upgrade` sans flag ne laisse **pas** silencieusement un `.cursorrules` hérité en place. Quand il en voit un à la racine du projet et qu'aucun `.cursor/rules/lytos.mdc` n'existe encore, il affiche un avertissement qui vous renvoie vers `lyt upgrade --migrate-cursor`. L'avertissement est informatif — le fichier hérité reste en place pour que la migration reste opt-in.

### Idempotent et sans risque

Lancer `--migrate-cursor` deux fois est sans risque : la seconde invocation ne voit pas de fichier hérité et affiche `No legacy .cursorrules to migrate`. À combiner avec `--dry-run` pour previewer.

## Relation avec `lyt init --overwrite-bridges`

`lyt upgrade` touche les fichiers méthode dans `.lytos/` — jamais les bridges IA à la racine du projet (`CLAUDE.md`, `.cursor/rules/lytos.mdc`, etc.). Si vous voulez que le template bundled de bridge remplace celui en place, c'est le territoire de `lyt init --force --overwrite-bridges`, pas de `lyt upgrade`.

La migration Cursor est la seule exception : `--migrate-cursor` est une **conversion de format one-shot** qui déplace spécifiquement le fichier plat hérité vers le chemin moderne `.mdc`. Ce n'est pas un overwrite de template — votre contenu reste.
