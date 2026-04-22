---
title: lytos init
description: Créer le répertoire .lytos/ dans votre projet.
---

`lytos init` crée le répertoire `.lytos/` dans votre projet avec les 5 piliers pré-configurés.

## Utilisation

```bash
lyt init                                       # interactif
lyt init --name "Acme API" --tool claude --yes # non-interactif, un seul outil
lyt init --tool claude,cursor,copilot --yes    # multi-outils : plusieurs bridges en une passe
lyt init --all-tools --yes                     # tous les adaptateurs shippants
```

La commande est interactive par défaut. Elle vous demande :

1. **Nom du projet** — utilisé dans le manifest
2. **Outil(s) IA** — Claude Code, Cursor, Codex (OpenAI), GitHub Copilot, Gemini CLI, Windsurf, Plusieurs (CSV), Tous les outils, ou Aucun. Chaque choix génère le fichier d'adaptateur que cet outil lit au démarrage de session (`CLAUDE.md`, `.cursor/rules/lytos.mdc`, `AGENTS.md`, `.github/copilot-instructions.md`, `GEMINI.md`, ou `.windsurfrules`).

### Repos avec équipe mixte

Si plusieurs développeurs utilisent des outils IA différents sur le même repo, générez tous les bridges en une seule fois. Chaque bridge pointe vers le même dossier `.lytos/`, donc changer d'outil ne demande aucune reconfiguration du projet.

```bash
lyt init --tool claude,cursor,copilot   # CSV exactement ce que l'équipe utilise
lyt init --all-tools                    # les six adaptateurs shippants
```

`none` peut apparaître dans la CSV en no-op (pour que des scripts puissent passer `"none,claude"` sans cas particulier). Les valeurs inconnues sortent en erreur avant qu'aucun fichier ne soit écrit.

## Ce que ça crée

```
.lytos/
├── manifest.md              # Intent — remplissez l'identité de votre projet
├── LYTOS.md                 # Référence de la méthode
├── sprint.md                # Template de sprint
├── skills/                  # Design — 9 procédures réutilisables
│   ├── session-start.md
│   ├── code-structure.md
│   ├── code-review.md
│   ├── testing.md
│   ├── documentation.md
│   ├── git-workflow.md
│   ├── deployment.md
│   ├── security.md
│   └── api-design.md
├── rules/                   # Standards — critères de qualité
│   └── default-rules.md
├── issue-board/             # Progress — kanban board
│   ├── BOARD.md
│   ├── 0-icebox/
│   ├── 1-backlog/
│   ├── 2-sprint/
│   ├── 3-in-progress/
│   ├── 4-review/
│   └── 5-done/
└── memory/                  # Memory — savoir accumulé
    ├── MEMORY.md
    └── cortex/
```

## Options

| Flag | Description |
|------|-------------|
| `--name <nom>` | Nom du projet (saute le prompt) |
| `--tool <outils>` | Valeur unique ou CSV : `claude`, `cursor`, `codex`, `copilot`, `gemini`, `windsurf`, `none`. Exemple : `--tool claude,cursor,copilot` |
| `--all-tools` | Génère les bridges de tous les adaptateurs shippants (claude, cursor, codex, copilot, gemini, windsurf) |
| `--yes` | Accepte tous les prompts, utilise les défauts détectés |
| `--force` | Écraser un répertoire `.lytos/` existant |
| `--dry-run` | Afficher ce qui serait créé sans toucher au système de fichiers |
| `--lang <en\|fr>` | Langue du contenu markdown généré |
| `--profile <vibe-coder\|developer\|lead>` | Profil de briefing affiché après init |

## Migration depuis le legacy `.cursorrules`

L'ancienne convention Cursor était un fichier plat `.cursorrules` à la racine du projet. Le layout moderne (`.cursor/rules/*.mdc` avec front-matter) est celui que `lyt init --tool cursor` livre aujourd'hui. Si votre projet porte encore le fichier hérité, lancez :

```bash
lyt upgrade --migrate-cursor
```

Cette commande déplace votre contenu `.cursorrules` existant vers `.cursor/rules/lytos.mdc`, en l'enveloppant avec le front-matter moderne. Le contenu original est préservé — c'est une conversion de format, pas une remise à zéro. Voir [`lyt upgrade`](/fr/cli/upgrade/) pour le comportement complet.

## Détection de stack

`lytos init` détecte automatiquement votre stack technique en regardant :

- `package.json` → Node.js / TypeScript
- `requirements.txt` / `pyproject.toml` → Python
- `go.mod` → Go
- `Cargo.toml` → Rust

La stack détectée est pré-remplie dans le manifest.

## Après init

Ouvrez votre outil IA et dites : **"Aide-moi à configurer Lytos pour ce projet."**

L'IA lira le manifest et vous aidera à remplir les détails spécifiques au projet.
