---
title: lytos init
description: Créer le répertoire .lytos/ dans votre projet.
---

`lytos init` crée le répertoire `.lytos/` dans votre projet avec les 5 piliers pré-configurés.

## Utilisation

```bash
lytos init
```

La commande est interactive. Elle vous demande :

1. **Nom du projet** — utilisé dans le manifest
2. **Outil IA** — Claude Code, Cursor, ou aucun (crée le fichier de config approprié)

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
| `--tool <outil>` | Outil IA : `claude`, `cursor`, ou `none` |
| `--force` | Écraser le répertoire `.lytos/` existant |

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
