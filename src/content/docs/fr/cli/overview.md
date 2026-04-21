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

| Commande | Ce qu'elle fait |
|----------|-----------------|
| `lyt init` | Génère `.lytos/` dans votre projet (interactif, détecte la stack) |
| `lyt board` | Régénère `BOARD.md` depuis le frontmatter des issues (read-only sur le système de fichiers) |
| [`lyt archive`](/fr/cli/archive/) | Déplace les issues terminées de `5-done/` vers `archive/<quarter>/` (défaut : plus de 7 jours). `--all`, `--older-than`, `--dry-run` |
| `lyt lint` | Valide la structure et le contenu de `.lytos/` |
| `lyt doctor` | Diagnostic complet — fichiers manquants, liens cassés, mémoire obsolète, score de santé |
| `lyt show` | Affiche le détail d'une issue avec sa progression |
| `lyt start` | Démarre une issue — déplace vers in-progress, crée la branche, met à jour le board |
| `lyt close` | Clôt explicitement une issue validée ou batch-clôture `4-review/` — vérifie la checklist et met à jour le board |
| `lyt claim` | Attribue une issue à vous-même |
| `lyt upgrade` | Met à jour les fichiers méthode dans `.lytos/` depuis la version bundled |
| `lyt update` | Met à jour le CLI Lytos lui-même vers la dernière version |

## Principes de conception

- **Offline-first** — pas de réseau nécessaire (sauf `lytos init` pour télécharger les templates)
- **Zéro lock-in** — fichiers markdown, fonctionne avec n'importe quel outil IA
- **Pas de télémétrie** — pas de tracking, pas d'analytics, jamais
- **Human-first** — le CLI ne modifie jamais de fichiers sans action explicite de l'utilisateur

## Code source

Le CLI est open source : [github.com/getlytos/lytos-cli](https://github.com/getlytos/lytos-cli)

Construit avec TypeScript, Commander.js, et zéro dépendance runtime en dehors de Commander.
