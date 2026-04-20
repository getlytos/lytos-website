---
title: La Méthode
description: Lytos est une méthode human-first pour travailler avec des agents IA de code. Elle s'articule autour de cinq piliers — manifest, skills, rules, issue board, memory — chacun un simple dossier de markdown qui vit dans votre projet.
---

Lytos définit le cadre dans lequel les agents IA de code opèrent, plutôt que d'essayer de leur faire jouer des rôles. La méthode a cinq piliers, chacun matérialisé par un dossier de markdown dans votre dépôt. Chaque pilier répond à une question précise que l'agent se pose quand il ouvre votre projet.

## Les cinq piliers

| Pilier | Dossier | Ce qu'il dit à l'agent |
|--------|---------|------------------------|
| [Manifest](/fr/method/manifest/) | `manifest.md` | Qui nous sommes, ce qu'on construit, et les principes qui guident nos décisions |
| [Skills](/fr/method/skills/) | `skills/` | Comment effectuer les tâches récurrentes — revue de code, tests, déploiement, etc. — au format ouvert [agentskills.io](https://agentskills.io) |
| [Rules](/fr/method/rules/) | `rules/` | Les critères de qualité non négociables que l'agent doit respecter avant de rendre le code |
| [Issue board](/fr/method/issue-board/) | `issue-board/` | Le flux kanban, où chaque issue est un fichier markdown dont le frontmatter YAML est la source de vérité |
| [Memory](/fr/method/memory/) | `memory/` | Ce que l'équipe a appris — décisions d'architecture, patterns, bugs passés — pour qu'une session ne démarre jamais à zéro |

## Deux pièces complémentaires

| | |
|--|--|
| [Orchestrateur](/fr/method/orchestrator/) | Un modèle de coordination léger pour les sprints multi-issues — qui prend quoi, comment les dépendances sont respectées, quand merger |
| [Sub-agents](/fr/method/sub-agents/) | Comment Lytos traite la question des sub-agents — la réponse courte : un agent bien contextualisé l'emporte souvent sur un casting de personas |

## Compatible avec votre outil actuel

Lytos ne remplace pas votre assistant IA — il configure votre projet pour que n'importe quel outil compatible lise le même contexte. La page [Compatibilité](/fr/method/compatibility/) liste les intégrations actuelles : Claude Code, Cursor, Codex, avec Copilot, Gemini CLI et Windsurf à venir.

## Par où commencer

- Si vous êtes nouveau sur la méthode, lisez d'abord le [Manifest](/fr/method/manifest/) — c'est le point d'entrée de chaque session.
- Si vous voulez comprendre le "pourquoi", la section [Philosophie](/fr/philosophy/) couvre les principes de conception.
- Si vous voulez l'essayer sur un projet tout de suite, le [Démarrage rapide](/fr/getting-started/quickstart/) vous fait passer par `lyt init` en deux minutes.
