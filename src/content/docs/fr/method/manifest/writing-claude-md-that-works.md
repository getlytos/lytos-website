---
title: "Comment écrire un CLAUDE.md efficace"
description: "Un CLAUDE.md court et impératif qui pointe vers des fichiers plus profonds est mieux respecté qu'un long. Ce qu'il faut mettre, ce qu'il faut laisser, un exemple."
---

*Ce qui se retrouve dans CLAUDE.md détermine ce que l'agent lit vraiment — la plupart des fichiers en font trop.*

## La réponse courte

Un CLAUDE.md efficace est court, impératif, et pointe vers des fichiers plus profonds. C'est un **index**, pas un fourre-tout. Quinze à vingt lignes suffisent en général : dites à l'agent de quel projet il s'agit, quels fichiers lire au démarrage de session, et la procédure à suivre quand il prend une tâche. Laissez la prose, les personas et l'auto-éloge dehors — ils diluent le signal que Claude Code utilise réellement.

## Pourquoi court bat long

Claude Code lit `CLAUDE.md` au début de chaque session. Le fichier siège en haut de la fenêtre de contexte, donc chaque token qu'il contient est payé, à chaque fois. Un CLAUDE.md de 2 000 lignes bourré de narratif d'onboarding tend à être survolé — par le modèle comme par les contributeurs humains.

Le pattern qui tient dans les équipes que nous avons accompagnées : **CLAUDE.md pointe, les autres fichiers expliquent**. L'agent charge CLAUDE.md, suit les pointeurs vers un manifest, des skills, des rules et une memory, et ne charge que ce dont la tâche a besoin. Le fichier racine reste stable, peu coûteux à lire, et facile à relire en review de code.

Si un nouveau contributeur a besoin de 500 lignes d'onboarding, ces 500 lignes appartiennent à `.lytos/memory/` ou à un doc d'onboarding dédié — pas au fichier que l'IA lit à chaque session.

## À quoi ressemble un CLAUDE.md qui marche

Un exemple concret, proche de ce que `lyt init` génère :

```markdown
# CLAUDE.md

Ce projet utilise **Lytos** — une méthode pour travailler avec des agents IA.

## À chaque session

À lire dans l'ordre, avant toute autre chose :

1. `.lytos/manifest.md` — constitution du projet
2. `.lytos/memory/MEMORY.md` — savoir accumulé (puis charger les fichiers cortex/ pertinents)
3. `.lytos/rules/default-rules.md` — critères qualité universels
4. `.lytos/rules/project-rules.md` — règles propres au projet

## Pour travailler sur une tâche

5. `.lytos/issue-board/BOARD.md` — état du board
6. `.lytos/sprint.md` — sprint en cours
7. `.lytos/skills/session-start.md` — procédure complète de session

## Règles d'engagement

- Le frontmatter YAML des issues est la source de vérité
- Ne pas interpréter silencieusement — demander si une instruction est ambiguë
- En fin de tâche : mettre à jour le frontmatter, déplacer le fichier, mettre à jour BOARD.md
- Chaque commit référence son issue : `Refs: ISS-XXXX`
```

Une vingtaine de lignes. Cela dit à l'agent exactement quoi lire, dans quel ordre, et comment se tenir aux bords.

## Ce qu'il faut laisser dehors

Quelques éléments qu'on retrouve souvent dans CLAUDE.md et qui n'y ont pas leur place :

- **Le narratif long du projet.** Il appartient à `.lytos/manifest.md` ou à `memory/cortex/architecture.md`.
- **Les personas.** "Tu es un développeur senior expert…" ne change pas ce que le modèle sait faire. Ça ne fait que brûler des tokens.
- **L'éloge du projet.** "Cette plateforme est une plateforme de pointe" n'est pas une information.
- **Les règles dupliquées.** Si les rules vivent dans `.lytos/rules/`, ne les reprenez pas ici — pointez.
- **Les instructions de conversation.** "Toujours répondre en français" ou "sois concis" appartiennent plutôt à une préférence utilisateur, pas à un fichier que toute l'équipe commite.

## Questions fréquentes

**Q : Est-ce que cela vaut aussi pour AGENTS.md et les règles Cursor ?**
R : Oui. Le même principe "être un index, pointer vers des fichiers plus profonds" fonctionne pour AGENTS.md (Codex, agents OpenAI) et pour `.cursor/rules/`. Le fichier passerelle est propre à chaque outil ; le contenu `.lytos/` qu'il référence est partagé.

**Q : Faut-il commiter CLAUDE.md dans git ?**
R : Oui. Il fait partie des instructions du projet, et tout le monde — humain ou IA — bénéficie du même point de départ.

**Q : Et si le projet n'a pas encore de dossier `.lytos/` ?**
R : Commencez plus petit — un CLAUDE.md avec juste la stack technique, les conventions de codage, et un paragraphe "pourquoi ce projet existe". Faites-le évoluer vers le pattern d'index à mesure que votre structure `.lytos/` mûrit.

## Pour aller plus loin

- Lire le pilier parent : [Manifest](/fr/method/manifest/)
- [AGENTS.md vs CLAUDE.md vs cursor rules](/fr/method/manifest/agents-md-vs-claude-md-vs-cursor-rules/) — comment les trois grandes conventions se comparent
- [Comment organiser la mémoire de Claude Code entre sessions](/fr/method/memory/ai-coding-memory-across-sessions/) — le savoir durable que l'IA lit à chaque session
- [Exemples de règles pour IA de codage](/fr/method/rules/ai-coding-rules-examples/) — des seuils vérifiables que l'IA respecte avant de rendre le code
- Lien externe : [Documentation Claude Code d'Anthropic](https://docs.anthropic.com/en/docs/claude-code/overview)

## Essayer Lytos en 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

Voir le CLI sur [npm](https://www.npmjs.com/package/lytos-cli) · La méthode sur [GitHub](https://github.com/getlytos/lytos-method).
