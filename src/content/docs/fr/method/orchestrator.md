---
title: Orchestrateur
description: Comment les tâches sont ordonnées, lancées et vérifiées.
---

L'orchestrateur est la logique de planification qui lit le sprint, analyse les dépendances, et décide quelles tâches lancer. Ce n'est pas un agent spécial — c'est un ensemble de règles.

## Principe

> Les tâches sans dépendances démarrent immédiatement.
> Les tâches avec dépendances attendent que leurs prérequis soient terminés.

Ça fonctionne comme un `Makefile` ou un pipeline CI : un graphe acyclique dirigé (DAG) de tâches.

## Le cycle de vie en 4 phases

Chaque tâche suit 4 phases :

### Phase 1 — Bootstrap
L'agent charge le contexte : manifest, memory, rules, board et l'issue.

### Phase 2 — Exécution
L'agent applique le skill assigné (principal + auxiliaires) pour produire son output.

### Phase 3 — Vérification
L'agent vérifie son propre travail : tests passent, pas de violations de sécurité, code conforme aux rules, self-review faite.

### Phase 4 — Clôture
Mettre à jour le frontmatter de l'issue, déplacer le fichier, mettre à jour BOARD.md, écrire dans la memory si un apprentissage a eu lieu.

## Exécution événementielle

L'orchestrateur ne fonctionne pas en vagues rigides. Dès qu'une tâche a toutes ses dépendances terminées, elle démarre :

```
ISS-0001 (pas de dépendance) → démarre immédiatement
ISS-0001 terminée            → ISS-0002 débloquée → démarre
ISS-0002 terminée            → ISS-0003 ET ISS-0004 débloquées → démarrent en parallèle
ISS-0004 terminée            → ISS-0005 débloquée → démarre (sans attendre ISS-0003)
```

## Quality gates

| Transition | Gate | Qui valide |
|-----------|------|------------|
| in-progress → review | Tests passent, self-review faite, CI verte | Agent |
| review → done | Code review approuvée | Humain |
| Fin de sprint | Tous les critères qualité remplis | Humain |

## Règles de l'orchestrateur

1. Ne jamais lancer une tâche dont les dépendances ne sont pas terminées
2. Lancer dès que prêt — pas de vagues artificielles
3. Un skill principal par tâche, avec des skills auxiliaires optionnels
4. L'humain valide les quality gates
5. En cas de doute, demander — un agent bloqué demande plutôt que de deviner
6. Le frontmatter YAML est la source de vérité
7. La sécurité est un skill auxiliaire par défaut pour les tâches non-documentation
