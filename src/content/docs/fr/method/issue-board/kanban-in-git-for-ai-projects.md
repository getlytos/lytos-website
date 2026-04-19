---
title: "Kanban dans Git pour projets IA : un board en dossiers"
description: "Suivre le travail sur un projet assisté par IA sans quitter Git : un dossier par statut, un fichier markdown par issue, frontmatter YAML comme source de vérité."
---

*Garder le board dans le dépôt, c'est faire lire à l'agent la même source de vérité que l'équipe.*

## La réponse courte

Pour tenir un kanban dans Git pour un projet IA, utilisez un dossier par statut (`0-icebox/`, `1-backlog/`, `2-sprint/`, `3-in-progress/`, `4-review/`, `5-done/`), un fichier markdown par issue avec un frontmatter YAML comme source de vérité, et un `BOARD.md` généré que l'IA lit au démarrage de session. Déplacer un fichier d'un dossier à un autre change son statut. Pas de Jira externe, pas d'appel API — juste git.

## Pourquoi garder le board dans le dépôt

Les outils de ticketing classiques — Jira, Linear, GitHub Issues — fonctionnent bien pour la coordination humaine. Ils deviennent gênants dès qu'un agent IA entre en jeu : l'agent a besoin de clés d'API, d'un plugin et d'un savoir propre au vendor, ou alors il travaille à l'aveugle pendant que le board vit ailleurs.

Un kanban en dossiers place le board à côté du code. Tout agent qui sait lire un fichier sait lire le board. Chaque mouvement est un commit, ce qui donne au board un vrai historique, de vrais diffs, et une vraie review. Quand deux personnes (ou une personne et un agent) ne sont pas d'accord sur le statut d'une issue, git montre exactement ce qui a changé et quand.

Ce pattern ne remplacera pas Jira dans une organisation de 200 personnes. Pour une équipe qui vit déjà dans git et qui veut que l'IA voie ce que les humains voient, il tend à bien tenir.

## La structure concrète

```
.lytos/issue-board/
├── BOARD.md                    # Index généré — vue d'ensemble
├── 0-icebox/                   # Idées, non priorisées
├── 1-backlog/                  # Priorisées, non démarrées
├── 2-sprint/                   # Engagées dans le sprint en cours
├── 3-in-progress/              # En cours de travail
├── 4-review/                   # En review ou en test
├── 5-done/                     # Terminées
└── templates/
    ├── issue-feature.md
    └── issue-task.md
```

Chaque issue est un fichier markdown avec un frontmatter YAML. Le frontmatter est la **source de vérité** — `BOARD.md` est régénéré à partir de lui.

```yaml
---
id: ISS-0042
title: "Ajouter du rate limiting à l'API publique"
type: feature
priority: P1-high
effort: M
skill: api-design
skills_aux: [security, testing]
status: 2-sprint
branch: "feat/ISS-0042-rate-limit"
depends: [ISS-0038]
created: 2026-04-14
---

# ISS-0042 — Ajouter du rate limiting à l'API publique

## Contexte
Les endpoints publics ne sont pas throttlés ; des abus ont été observés sur /search.

## Checklist
- [ ] Concevoir la politique de rate-limit
- [ ] Implémenter le middleware
- [ ] Ajouter les tests d'intégration
- [ ] Documenter les nouveaux headers
```

Une seule commande régénère le board visuel :

```bash
lyt board
```

La commande parcourt les dossiers, lit les frontmatters, et écrit un `BOARD.md` facile à parcourir dans une PR. Comme le board est un fichier, il peut être relu, revert, diffé comme n'importe quel autre changement de code.

## Questions fréquentes

**Q : Comment l'agent IA utilise-t-il ce board ?**
R : L'agent lit `BOARD.md` au démarrage de session pour voir ce qui est en cours, puis lit le frontmatter de l'issue sur laquelle il travaille. Le champ `skill` lui indique quelle procédure suivre ; le champ `depends` signale le travail bloqué.

**Q : Et le travail en parallèle, les conflits de merge ?**
R : Une issue par fichier rend les conflits rares. Les changements de statut sont des déplacements de fichier, que git gère proprement. Le frontmatter est le seul endroit où deux personnes pourraient éditer la même ligne, et c'est généralement attrapé en review.

**Q : Peut-on coexister avec GitHub Issues ?**
R : Oui. Certaines équipes miroitent les epics de haut niveau sur GitHub pour la visibilité publique et gardent le kanban de travail dans le dépôt. L'ID de l'issue (`ISS-0042`) fait le pont.

**Q : Et si mon équipe utilise déjà Jira ?**
R : Gardez Jira s'il vous sert. Un board en dossiers peut coexister, limité au travail assisté par IA. C'est un complément, pas un remplacement.

## Pour aller plus loin

- Lire le pilier parent : [Issue Board](/fr/method/issue-board/)
- Voir aussi : [Comment organiser la mémoire de Claude Code entre sessions](/fr/method/memory/ai-coding-memory-across-sessions/)
- Lien externe : [Guide GitHub pour gérer le travail dans un dépôt](https://docs.github.com/en/issues/tracking-your-work-with-issues)

## Essayer Lytos en 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

Voir le CLI sur [npm](https://www.npmjs.com/package/lytos-cli) · La méthode sur [GitHub](https://github.com/getlytos/lytos-method).
