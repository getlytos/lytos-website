---
title: Vue d'ensemble
description: L'outil en ligne de commande pour Lytos — installer, valider et visualiser.
---

Le CLI Lytos élimine les frictions pour adopter la méthode. Une commande pour installer, une pour valider, une pour visualiser.

## Installation

```bash
npm install -g lytos-cli
```

Ou utiliser sans installer :

```bash
npx lytos-cli init
```

## Commandes

| Commande | Ce qu'elle fait | Statut |
|----------|----------------|--------|
| `lytos init` | Scaffold `.lytos/` dans ton projet | Disponible |
| `lytos board` | Régénérer BOARD.md depuis le frontmatter des issues | Disponible |
| `lytos lint` | Valider la structure et le contenu de `.lytos/` | Bientôt |
| `lytos doctor` | Diagnostic complet — fichiers manquants, liens cassés, memory obsolète | Bientôt |
| `lytos status` | Afficher le DAG du sprint dans le terminal | Bientôt |

## Principes de conception

- **Offline-first** — pas de réseau nécessaire (sauf `lytos init` pour télécharger les templates)
- **Zéro lock-in** — fichiers markdown, fonctionne avec n'importe quel outil IA
- **Pas de télémétrie** — pas de tracking, pas d'analytics, jamais
- **Human-first** — le CLI ne modifie jamais de fichiers sans action explicite de l'utilisateur

## Code source

Le CLI est open source : [github.com/getlytos/lytos-cli](https://github.com/getlytos/lytos-cli)

Construit avec TypeScript, Commander.js, et zéro dépendance runtime en dehors de Commander.
