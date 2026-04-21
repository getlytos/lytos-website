---
title: lytos archive
description: Déplace les issues terminées de 5-done/ vers archive/<quarter>/ avec une fenêtre de rétention.
---

`lyt archive` déplace les issues terminées de `5-done/` vers `archive/<quarter>/`. Il remplace l'archivage implicite qui tournait sur chaque `lyt board` — l'archivage est désormais explicite et temporisé, pour que les fermetures récentes restent visibles assez longtemps pour servir en rétro, référencement de PR, ou vérification de rollback.

## Utilisation

```bash
lyt archive                     # archive les issues fermées depuis ≥ 7 jours (défaut)
lyt archive --older-than 30d    # fenêtre de rétention différente
lyt archive --all               # archive tout 5-done/ sans tenir compte de l'âge
lyt archive --dry-run           # preview sans toucher au système de fichiers
```

## Ce que ça fait

1. Scanne `5-done/` pour les issues dont le `updated` du frontmatter est plus vieux que le seuil de rétention.
2. Déplace chaque issue correspondante vers `archive/<quarter>/` où le trimestre est dérivé de **la date `updated` de l'issue elle-même**, pas d'aujourd'hui. Une issue fermée en mars 2026 atterrit dans `2026-Q1/` même si vous l'archivez en avril.
3. Met à jour `archive/INDEX.md` avec les nouvelles entrées.
4. Régénère `BOARD.md` pour que le compteur "archived" reste à jour — pas besoin d'une deuxième commande.

## Flags

| Flag | Description |
|------|-------------|
| `--older-than <age>` | Seuil de rétention. Accepte `<N>d` (ex : `7d`, `0d`, `30d`). Défaut : `7d`. |
| `--all` | Raccourci pour `--older-than 0d`. Archive tout `5-done/` sans tenir compte de l'âge. |
| `--dry-run` | Affiche ce qui serait déplacé et ce qui est trop récent, sans toucher aux fichiers. |

`--older-than` et `--all` sont mutuellement exclusifs ; `--all` l'emporte si les deux sont passés.

## Pourquoi un archivage manuel (et différé)

Avant cette commande, `lyt board` archivait à chaque exécution. Une issue fermée disparaissait du board en quelques secondes, ce qui créait trois problèmes récurrents :

- **Rétros et références PR** avaient souvent besoin du travail récemment fermé pour contexte.
- **Vérification de rollback** nécessitait de relire l'issue qui avait introduit une régression.
- **Side-effect destructif implicite** sur une commande annoncée comme "regenerate BOARD.md".

`lyt archive` fait de l'archivage une action explicite et volontaire avec une fenêtre de rétention. Les issues restent visibles dans `5-done/` pendant une semaine par défaut — assez long pour les cérémonies de sprint, assez court pour que le board ne gonfle pas indéfiniment.

## Patterns courants

### Batch fin de sprint

```bash
lyt archive --dry-run      # voir ce qui bougera
lyt archive                # appliquer si la preview est correcte
```

### Reset d'un repo démo

```bash
lyt archive --all          # tout ce qui est terminé part vers l'archive
```

### Fenêtre plus longue pour projets audités

```bash
lyt archive --older-than 30d   # cadence mensuelle
```

## Relation avec `lyt board`

`lyt board` ne déplace plus aucun fichier. Il régénère `BOARD.md` et les compteurs d'archive — read-only sur le système de fichiers. Utilisez `lyt archive` quand vous voulez effectivement promouvoir les issues terminées hors du board vivant.

Si vous voulez le comportement pré-0.11 (archive à chaque board regen), lancez les deux commandes à la suite :

```bash
lyt board && lyt archive --all
```
