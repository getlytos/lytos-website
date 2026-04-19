---
title: "AGENTS.md vs CLAUDE.md vs cursor rules : lequel utiliser"
description: "AGENTS.md, CLAUDE.md et cursor rules sont trois conventions vendor pour la même idée. Comparaison, et comment les garder synchronisés sans dupliquer le contenu."
---

*Trois fichiers, une seule question : où l'IA lit-elle ses instructions ?*

## La réponse courte

AGENTS.md, CLAUDE.md et cursor rules sont trois conventions vendor pour la même idée — un fichier d'instructions au niveau du projet que l'IA lit au démarrage de session. On ne choisit pas vraiment entre eux : on génère celui (ou ceux) dont les outils de l'équipe ont besoin, et on garde le contenu substantiel dans un seul endroit partagé pour qu'ils pointent tous vers la même source de vérité.

## Pourquoi cette confusion existe

Chaque grand outil IA de codage a atterri sur sa propre convention avant qu'un standard ait pu émerger :

- **Claude Code d'Anthropic** lit `CLAUDE.md` à la racine du dépôt.
- **Codex d'OpenAI et la communauté AGENTS.md** lisent `AGENTS.md`.
- **Cursor** lit des fichiers de règles dans `.cursor/rules/`.
- **GitHub Copilot** lit `.github/copilot-instructions.md`.
- **Google Gemini Code Assist** a son propre format de config.

Aucun n'a tort. Chacun résout le même problème — "comment l'agent sait-il ce qu'est ce projet ?" — avec un emballage légèrement différent. Le risque pour les équipes : le contenu dérive d'un fichier à l'autre, et l'IA finit par lire des instructions obsolètes ou contradictoires selon l'outil ouvert.

## Comparaison rapide

| Convention | Vendor / outil | Chemin | Casse | Limite notable |
|---|---|---|---|---|
| CLAUDE.md | Anthropic Claude Code | racine du repo | majuscules | aucune publiée |
| AGENTS.md | Codex OpenAI, communauté | racine du repo | majuscules | plafond ~32 KiB dans certains harnais |
| cursor rules | Cursor | `.cursor/rules/*.mdc` | minuscules | par fichier, chargés par pattern |
| copilot-instructions.md | GitHub Copilot | `.github/copilot-instructions.md` | minuscules | budget de taille modeste |

Ce sont des conventions, pas des standards. Elles évoluent — vérifiez la doc à jour de chaque vendor avant de vous appuyer sur des limites précises.

## Le pattern qui les garde synchronisés

L'approche qui fonctionne dans la pratique : garder le vrai contenu à un seul endroit (un dossier `.lytos/`), et laisser chaque fichier vendor être une passerelle fine qui y pointe.

```
/
├── CLAUDE.md              # 20 lignes, pointe vers .lytos/
├── AGENTS.md              # 20 lignes, mêmes pointeurs
├── .cursor/
│   └── rules/
│       └── lytos.mdc      # Règle Cursor, mêmes pointeurs
└── .lytos/
    ├── manifest.md        # La vraie constitution du projet
    ├── memory/
    ├── rules/
    └── skills/
```

Chaque fichier passerelle fait le même travail : "voici le projet, lis ces fichiers `.lytos/` dans cet ordre, voici la procédure". Le contenu substantiel — décisions d'architecture, règles de codage, vocabulaire métier — vit une seule fois dans `.lytos/` et est mis à jour à un seul endroit.

`lyt init --tool claude,cursor,codex` génère toutes les passerelles d'un coup pour qu'elles restent cohérentes. Quand une nouvelle convention vendor apparaît, vous ajoutez une passerelle ; vous ne réécrivez pas les instructions du projet.

Le contenu est ce qui est portable. La passerelle est la pièce propre à chaque outil.

## Questions fréquentes

**Q : Si j'utilise seulement Claude Code, ai-je quand même besoin d'AGENTS.md ?**
R : Pas strictement. Mais ajouter un AGENTS.md de 20 lignes coûte très peu et garde la porte ouverte si quelqu'un de l'équipe essaie Codex ou un nouvel agent.

**Q : Un fichier peut-il être un symlink vers un autre ?**
R : Certaines équipes le font. Ça marche pour Claude/AGENTS si le contenu est identique, mais le format `.cursor/rules/` de Cursor est suffisamment différent pour qu'un vrai fichier soit plus simple à maintenir.

**Q : Que se passe-t-il si les fichiers divergent ?**
R : L'agent lit celui que son outil est configuré pour lire — et ignore les autres. C'est exactement le problème de dérive que le dossier `.lytos/` partagé cherche à éviter.

**Q : Faut-il commiter ces fichiers dans git ?**
R : Oui. Ils font partie des conditions de travail du projet et doivent se versionner avec le code.

## Pour aller plus loin

- Lire le pilier parent : [Manifest](/fr/method/manifest/)
- Voir aussi : [Comment écrire un CLAUDE.md efficace](/fr/method/manifest/writing-claude-md-that-works/)
- Lien externe : [Spécification communautaire AGENTS.md](https://agents.md/) · [Documentation des règles Cursor](https://docs.cursor.com/context/rules)

## Essayer Lytos en 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

Voir le CLI sur [npm](https://www.npmjs.com/package/lytos-cli) · La méthode sur [GitHub](https://github.com/getlytos/lytos-method).
