---
title: Skills
description: Les procédures réutilisables — Design, le deuxième pilier de Lytos.
---

Les skills sont le deuxième pilier de Lytos : **Design**.

Un skill est une procédure étape par étape qui dit à l'agent IA *comment* effectuer un type de tâche spécifique. Pas des conseils vagues — des étapes concrètes.

> *"Le role-play ne remplace pas le contexte."*

## Les 9 skills intégrés

| Skill | Ce qu'il couvre |
|-------|----------------|
| **session-start** | Démarrage de session, chargement du contexte, clôture |
| **code-review** | Revue de code avec checklist, self-review, taille de PR |
| **testing** | Tests unitaires, intégration, E2E, stratégie de mocking |
| **documentation** | Docstrings, ADR, documentation API, changelog, mémoire |
| **git-workflow** | Branches, commits, CI checks, hooks, semantic versioning |
| **code-structure** | SOLID, règle des 300 lignes, injection de dépendances, nommage |
| **deployment** | Pré/post-deploy, observabilité, SLOs, migrations, incidents |
| **security** | OWASP Top 10, authentification, autorisation, secrets |
| **api-design** | Conventions REST, pagination, format d'erreurs, rate limiting |

## Comment ça marche

Chaque issue du board a un champ `skill` qui définit quelle procédure l'agent suit :

```yaml
skill: code-structure
skills_aux: [testing, security]
```

- Le **skill principal** définit ce que l'agent produit
- Les **skills auxiliaires** ajoutent des contraintes et vérifications

## Composition de skills

| Type de tâche | Skill principal | Skills auxiliaires |
|---------------|----------------|-------------------|
| Nouvelle feature | `code-structure` | `testing`, `security` |
| Endpoint API | `api-design` | `code-structure`, `security`, `testing` |
| Bug fix | `code-structure` | `testing` |
| Code review | `code-review` | `security` |
| Documentation | `documentation` | — |

## Ajouter des skills custom

Vous pouvez créer vos propres skills dans `skills/`. Un skill est un fichier markdown avec :

1. Un **objectif** clair (quand utiliser ce skill)
2. Une **procédure** (étapes numérotées)
3. Une **checklist** (vérification avant de marquer comme fait)

Les skills sont réutilisables entre projets. Les 9 skills intégrés couvrent la majorité des tâches de développement.
