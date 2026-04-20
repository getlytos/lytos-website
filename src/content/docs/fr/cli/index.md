---
title: Le CLI Lytos
description: Un simple npm install qui scaffold .lytos/ dans n'importe quel projet, le valide, déplace les issues dans le kanban, et les ferme une par une ou en batch. Installé comme `lytos-cli`, avec `lyt` comme binaire court.
---

Le CLI est la façon dont Lytos atterrit dans un vrai dépôt. Un `lyt init` scaffold les cinq piliers en dossiers, détecte votre stack, écrit le bon fichier d'adaptateur pour votre outil IA (`CLAUDE.md`, `.cursorrules`, `AGENTS.md`…), et installe un hook pre-commit pour que le nommage des branches reste cohérent.

## Installation

```bash
npm install -g lytos-cli
```

Ou sans installation :

```bash
npx lytos-cli init
```

Le binaire `lyt` est le nom court (on peut aussi utiliser `lytos` ou `lytos-cli` si vous préférez).

## Commandes

| Commande | Ce qu'elle fait |
|----------|-----------------|
| `lyt init` | Scaffold `.lytos/` — interactif, détecte votre stack, propose EN ou FR |
| `lyt board` | Régénère `BOARD.md` à partir du frontmatter des issues |
| `lyt lint` | Valide la structure et le contenu de `.lytos/` |
| `lyt doctor` | Diagnostic complet — fichiers manquants, liens cassés, mémoire obsolète, score de santé |
| `lyt show ISS-XXXX` | Affiche le détail d'une issue avec une barre de progression |
| `lyt start ISS-XXXX` | Démarre une issue — la déplace en in-progress, crée la branche, met à jour le board |
| `lyt claim ISS-XXXX` | S'assigne une issue (vérifie aussi la fraîcheur d'origin pour éviter les claims concurrents) |
| `lyt close ISS-XXXX` | Ferme une issue — la déplace en 5-done |
| `lyt close` | Ferme en batch toutes les issues de `4-review/` — demande confirmation, `--yes` skippe |
| `lyt upgrade` | Met à jour les skills et rules bundlés dans `.lytos/` |

## Pages clés

| | |
|--|--|
| [Vue d'ensemble](/fr/cli/overview/) | Ce que fait le CLI, en un coup d'œil |
| [`lyt init`](/fr/cli/init/) | Tout ce que fait le scaffolder — fichiers d'adaptateur, détection de stack, hook pre-commit |
| [`lyt board`](/fr/cli/board/) | Comment la vue kanban est régénérée à partir du frontmatter |

## Principes de conception

- **Offline-first** — toutes les commandes sauf `lyt init` (qui récupère les fichiers bundlés) et `lyt claim`/`start` (qui vérifient origin) fonctionnent sans réseau.
- **Sortie pour humains ET machines** — chaque commande a une sortie par défaut pour humain et un flag `--json` pour CI et scripts.
- **Échouer avec du contexte** — les erreurs disent ce qui ne va pas, où, et comment le corriger.
- **Une responsabilité par commande** — `lint` valide, `doctor` diagnostique, ils ne se recouvrent pas.
