---
title: Démarrage rapide
description: Démarrer avec Le Socle en 5 minutes.
---

## Installer

### Avec le CLI (recommandé)

```bash
npm install -g le-socle
socle init
```

Ou sans installer :

```bash
npx le-socle init
```

Le CLI demande le nom du projet et l'outil IA, détecte la stack, et crée tout.

### Avec le script d'installation

```bash
curl -fsSL https://raw.githubusercontent.com/le-socle/socle/main/install.sh -o install.sh
bash install.sh
```

### Avec le template GitHub (pas besoin de terminal)

Utilise le [starter template](https://github.com/le-socle/starter) → clique **"Use this template"** sur GitHub.

## Configurer avec ton IA

Ouvre ton outil IA et dis-lui :

> **"Aide-moi à configurer le Socle pour ce projet."**

L'IA lit le briefing (`.socle/SOCLE.md`), comprend la méthode, et t'aide à remplir ton manifest : nom du projet, pourquoi il existe, stack technique, principes de décision, modèles IA à utiliser.

Tu n'as pas besoin de tout remplir toi-même — l'IA détecte ta stack en lisant ton `package.json`, `requirements.txt` ou `go.mod`.

## Et ensuite ?

| Quand tu veux... | Fais ça |
|------------------|---------|
| Poser des critères de qualité | Lis `.socle/rules/default-rules.md` |
| Structurer tes tâches | Crée ton premier sprint depuis `.socle/templates/sprint.md` |
| Suivre une procédure précise | Charge un skill depuis `.socle/skills/` |
| Suivre l'avancement | Utilise `.socle/issue-board/BOARD.md` |

Tout est optionnel. Le manifest + la memory suffisent pour commencer.
