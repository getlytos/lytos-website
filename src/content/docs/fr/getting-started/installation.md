---
title: Installation
description: Toutes les façons d'installer Lytos.
---

## 3 façons d'installer

Choisis le chemin qui correspond à ta façon de travailler :

### 1. CLI (développeurs avec un terminal)

```bash
npm install -g lytos-cli
lytos init
```

Le CLI détecte ta stack, demande le nom du projet et l'outil IA, puis crée tout. Interactif ou avec des options :

```bash
lytos init --name "Mon API" --tool claude --yes
```

### 2. Script d'installation (léger, pas de npm)

```bash
curl -fsSL https://raw.githubusercontent.com/lytos/lytos/main/install.sh -o install.sh
bash install.sh
```

Même résultat que le CLI, mais télécharge les fichiers depuis GitHub.

### 3. Template GitHub (vibe coders, pas de terminal)

Utilise le [starter template](https://github.com/getlytos/starter) → clique **"Use this template"** → ouvre dans Claude Code ou Codex → dis **"Aide-moi à configurer Lytos."**

Parfait pour les développeurs qui codent directement depuis les apps IA.

## Ce qui est créé

```
.lytos/
├── LYTOS.md              ← briefing IA (lu une fois)
├── manifest.md           ← la constitution du projet
├── memory/
│   ├── MEMORY.md         ← index de la mémoire
│   └── cortex/           ← zones spécialisées
├── skills/               ← 9 procédures opérationnelles
├── rules/                ← critères de qualité
├── issue-board/          ← board Kanban (dossier = statut)
├── templates/            ← template de sprint
└── scripts/              ← outils d'automatisation
```

Plus un `CLAUDE.md` ou `.cursorrules` à la racine du projet.

## Après l'installation

Ouvre ton outil IA et dis-lui :

> **"Aide-moi à configurer Lytos pour ce projet."**

L'IA lit le briefing, comprend la méthode, et te guide pour remplir le manifest.
