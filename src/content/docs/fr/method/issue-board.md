---
title: Issue Board
description: Suivre ce qui avance et ce qui bloque — Progress, le quatrième pilier de Lytos.
---

L'issue board est le quatrième pilier de Lytos : **Progress**.

Il suit ce qui doit être fait, ce qui est en cours, et ce qui est terminé. C'est un kanban board implémenté sous forme de dossiers, avec le frontmatter YAML comme source de vérité.

## Structure

```
issue-board/
├── BOARD.md                    # Index généré (vue d'ensemble)
├── 0-icebox/                   # Idées, pas priorisées
├── 1-backlog/                  # Priorisées, pas commencées
├── 2-sprint/                   # Engagées pour le sprint en cours
├── 3-in-progress/              # En cours de développement
├── 4-review/                   # En revue ou test
├── 5-done/                     # Terminées
└── templates/
    ├── issue-feature.md
    └── issue-task.md
```

## Format d'une issue

Chaque issue est un fichier markdown avec un frontmatter YAML :

```yaml
---
id: ISS-0012
title: "Implémenter l'authentification"
type: feature
priority: P1-high
effort: M
skill: api-design
skills_aux: [security, testing]
status: 2-sprint
branch: "feat/ISS-0012-user-auth"
depends: [ISS-0008]
created: 2026-04-14
---
```

## Comment ça marche

- **Le dossier est le statut.** Déplacer une issue de `2-sprint/` vers `3-in-progress/` change son statut.
- **Le frontmatter YAML est la source de vérité.** `BOARD.md` est généré à partir de celui-ci.
- **Les dépendances sont explicites.** Le champ `depends` liste les issues qui doivent être terminées avant.
- **Une branche par issue.** Le champ `branch` lie l'issue à sa branche git.

## Cycle de vie

```
0-icebox → 1-backlog → 2-sprint → 3-in-progress → 4-review → 5-done
```

Chaque transition est typiquement déclenchée par une commande CLI :

| De → Vers | Commande | Qui |
|-----------|----------|-----|
| `1-backlog` → `3-in-progress` | `lyt claim ISS-XXXX` ou `lyt start ISS-XXXX` | Le développeur qui prend la tâche |
| `3-in-progress` → `4-review` | Effectuée par l'agent IA en fin de codage (via le skill session-start) | L'agent, une fois la definition of done atteinte |
| `4-review` → `5-done` | `lyt close ISS-XXXX` (une) ou `lyt close` (batch, avec confirmation) | L'humain, après validation |

Le dossier `4-review/` est une **salle d'attente** : le code est fini mais n'a pas encore été validé (review humaine, review par un pair, CI au vert, QA manuelle — peu importe la barrière définie par l'équipe). `lyt close` sans argument promeut toutes les issues de 4-review en une fois ; `lyt close ISS-XXXX` en ferme une spécifique et peut aussi servir de raccourci "skip review" sur une issue encore en 3-in-progress.

La commande `lytos board` régénère `BOARD.md` à partir du frontmatter de toutes les issues.

## Niveaux de priorité

| Priorité | Signification |
|----------|---------------|
| P0-critical | Doit être fait immédiatement |
| P1-high | Doit être fait ce sprint |
| P2-normal | Devrait être fait bientôt |
| P3-low | Agréable à avoir |

## Tailles d'effort

| Effort | Durée | Guidance |
|--------|-------|----------|
| XS | < 15 min | Peut être groupé avec d'autres XS |
| S | 15-30 min | Tâche autonome |
| M | 30 min - 2h | Tâche dédiée |
| L | 2h - 4h | Envisager de découper |
| XL | > 4h | Doit être découpé |

## En savoir plus

- [Kanban dans Git pour projets IA : un board en dossiers](/fr/method/issue-board/kanban-in-git-for-ai-projects/) — comment le dossier `issue-board/` fonctionne en pratique, ce que contient le frontmatter YAML, et comment l'IA lit le board au démarrage de session.
