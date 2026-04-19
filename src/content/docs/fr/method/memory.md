---
title: Memory
description: Le savoir accumulé qui persiste entre les sessions — Memory, le cinquième pilier de Lytos.
---

La memory est le cinquième pilier de Lytos : **Memory**.

Les agents IA sont stateless — ils oublient tout entre les sessions. La memory leur donne un savoir persistant sur votre projet, stocké dans des fichiers que vous possédez.

## Structure

```
memory/
├── MEMORY.md              # Index — lu à chaque session
└── cortex/                # Zones spécialisées — chargées à la demande
    ├── architecture.md
    ├── patterns.md
    ├── bugs.md
    ├── sprints.md
    ├── frontend.md
    ├── backend.md
    └── business.md
```

## Comment ça marche

### MEMORY.md — L'index

Lu à chaque session. Contient une table des matières pointant vers les fichiers cortex, plus un résumé vivant de l'état actuel du projet.

L'agent lit l'index, identifie quels fichiers cortex sont pertinents pour la tâche en cours, et ne charge que ceux-là.

### Fichiers cortex — Le savoir spécialisé

Chaque fichier cortex couvre un domaine :

| Fichier | Contenu | Charger quand... |
|---------|---------|------------------|
| `architecture.md` | Choix techniques, décisions de structure | Toute tâche structurelle |
| `patterns.md` | Patterns de code qui fonctionnent bien | Code review, nouvelles features |
| `bugs.md` | Problèmes récurrents et solutions | Debug, fixes |
| `sprints.md` | Historique des sprints | Planification |
| `frontend.md` | Décisions UI/UX, patterns de composants | Tâches frontend |
| `backend.md` | Décisions API, choix de modèle de données | Tâches backend |
| `business.md` | Connaissances métier, règles business | Toute tâche liée au domaine |

## Quoi stocker dans la memory

- Décisions d'architecture et leur justification
- Patterns qui fonctionnent bien dans ce projet
- Bugs récurrents et leurs causes racines
- Connaissances métier spécifiques dont l'IA a besoin

## Quoi NE PAS stocker

- Snippets de code (ils vivent dans le code)
- Historique git (utilisez `git log`)
- Détails temporaires de tâches (utilisez l'issue board)

## Pourquoi c'est important

> *"La qualité ne vient pas du prompt. Elle vient du contexte."*

Sans memory, l'IA fait les mêmes erreurs deux fois. Elle suggère des patterns que vous avez déjà rejetés. Elle ne sait pas que vous avez essayé Redis et que vous êtes passé à PostgreSQL pour de bonnes raisons.

La memory est ce qui rend Lytos **souverain** — votre savoir projet vit dans des fichiers que vous possédez, pas dans l'historique de conversation d'un vendor.

## En savoir plus

- [Comment organiser la mémoire de Claude Code entre sessions](/fr/method/memory/ai-coding-memory-across-sessions/) — guide pratique du dossier `memory/`, avec des exemples concrets et comment Claude Code, Cursor et Codex le lisent au démarrage de session.
