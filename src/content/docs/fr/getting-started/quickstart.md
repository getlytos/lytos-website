---
title: Démarrage rapide
description: Démarrer avec Lytos en 5 minutes.
---

## Installer

### Avec le CLI (recommandé)

```bash
npm install -g lytos-cli
lytos init
```

Ou sans installer :

```bash
npx lytos init
```

Le CLI demande le nom du projet et l'outil IA, détecte la stack, et crée tout.

### Avec le script d'installation

```bash
curl -fsSL https://raw.githubusercontent.com/lytos/lytos/main/install.sh -o install.sh
bash install.sh
```

### Avec le template GitHub (pas besoin de terminal)

Utilisez le [starter template](https://github.com/getlytos/starter) → cliquez sur **"Use this template"** sur GitHub.

## Configurer avec votre IA

Ouvrez votre outil IA et dites-lui :

> **"Aide-moi à configurer Lytos pour ce projet."**

L'IA lit le briefing (`.lytos/LYTOS.md`), comprend la méthode, et vous aide à remplir votre manifest : nom du projet, pourquoi il existe, stack technique, principes de décision, modèles IA à utiliser.

Vous n'avez pas besoin de tout remplir vous-même — l'IA détecte votre stack en lisant votre `package.json`, `requirements.txt` ou `go.mod`.

## Et ensuite ?

| Quand vous voulez... | Faites ça |
|------------------|---------|
| Poser des critères de qualité | Lisez `.lytos/rules/default-rules.md` |
| Structurer vos tâches | Créez votre premier sprint depuis `.lytos/templates/sprint.md` |
| Suivre une procédure précise | Chargez un skill depuis `.lytos/skills/` |
| Suivre l'avancement | Utilisez `.lytos/issue-board/BOARD.md` |

Tout est optionnel. Le manifest + la memory suffisent pour commencer.
