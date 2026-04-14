---
title: Memory
description: Le savoir accumulé qui persiste entre les sessions — Memory, le cinquième pilier de Lytos.
---

La memory est le cinquième pilier de Lytos : **Memory**.

Les agents IA sont stateless — ils oublient tout entre les sessions. La memory leur donne un savoir persistant sur ton projet, stocké dans des fichiers que tu possèdes.

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
- Historique git (utilise `git log`)
- Détails temporaires de tâches (utilise l'issue board)

## Pourquoi c'est important

Sans memory, l'IA fait les mêmes erreurs deux fois. Elle suggère des patterns que tu as déjà rejetés. Elle ne sait pas que tu as essayé Redis et que tu es passé à PostgreSQL pour de bonnes raisons.

La memory est ce qui rend Lytos **souverain** — ton savoir projet vit dans des fichiers que tu possèdes, pas dans l'historique de conversation d'un vendor.
