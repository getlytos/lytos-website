---
title: lytos board
description: Régénérer BOARD.md depuis le frontmatter YAML des issues.
---

`lytos board` lit tous les fichiers d'issues dans `issue-board/` et régénère `BOARD.md` — un index visuel de toutes les issues groupées par statut.

## Utilisation

```bash
lytos board
```

## Ce que ça fait

1. Scanne tous les fichiers `.md` dans les sous-dossiers de `issue-board/`
2. Lit le frontmatter YAML de chaque issue
3. Groupe les issues par statut (icebox, backlog, sprint, in-progress, review, done)
4. Génère un `BOARD.md` formaté avec des tableaux

## Exemple de sortie

```markdown
### 2-sprint (committed)

| # | Title | Priority | Effort | Depends |
|---|-------|----------|--------|---------|
| ISS-0012 | Implémenter l'auth | P1-high | M | ISS-0008 |
| ISS-0013 | Ajouter le rate limiting | P2-normal | S | ISS-0012 |

### 5-done (completed)

| # | Title | Completed |
|---|-------|-----------|
| ISS-0008 | Setup base de données | 2026-04-10 |
```

## Source de vérité

Le frontmatter YAML de chaque fichier d'issue est la source de vérité — pas `BOARD.md`. Le board est une vue générée qui peut être régénérée à tout moment.

Si vous modifiez le statut d'une issue en la déplaçant dans un autre dossier, lancez `lytos board` pour rafraîchir l'index.
