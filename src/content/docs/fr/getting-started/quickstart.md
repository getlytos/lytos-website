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

Utilise le [starter template](https://github.com/getlytos/starter) → clique **"Use this template"** sur GitHub.

## Configurer avec ton IA

Ouvre ton outil IA et dis-lui :

> **"Aide-moi à configurer Lytos pour ce projet."**

L'IA lit le briefing (`.lytos/LYTOS.md`), comprend la méthode, et t'aide à remplir ton manifest : nom du projet, pourquoi il existe, stack technique, principes de décision, modèles IA à utiliser.

Tu n'as pas besoin de tout remplir toi-même — l'IA détecte ta stack en lisant ton `package.json`, `requirements.txt` ou `go.mod`.

## Et ensuite ?

| Quand tu veux... | Fais ça |
|------------------|---------|
| Poser des critères de qualité | Lis `.lytos/rules/default-rules.md` |
| Structurer tes tâches | Crée ton premier sprint depuis `.lytos/templates/sprint.md` |
| Suivre une procédure précise | Charge un skill depuis `.lytos/skills/` |
| Suivre l'avancement | Utilise `.lytos/issue-board/BOARD.md` |

Tout est optionnel. Le manifest + la memory suffisent pour commencer.
