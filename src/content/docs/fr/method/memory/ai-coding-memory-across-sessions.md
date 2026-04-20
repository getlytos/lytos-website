---
title: "Comment organiser la mémoire de Claude Code entre sessions"
description: "Un pattern simple pour garder Claude Code, Cursor et Codex au courant des décisions de votre projet entre les sessions — sans tout ré-expliquer à chaque fois."
---

*Un guide court pour les équipes fatiguées de recoller le même résumé d'architecture dans chaque nouvelle conversation.*

## La réponse courte

Pour arrêter de tout ré-expliquer à l'IA à chaque session, commitez un dossier `memory/` dans votre dépôt et demandez à l'agent de le lire au démarrage. Le dossier contient le savoir stable — décisions d'architecture, bugs récurrents, patterns de code, vocabulaire métier — pour que la mémoire de Claude Code entre sessions se reconstitue depuis le disque à chaque nouvelle conversation.

## Pourquoi c'est important

Les assistants IA de codage sont stateless. Chaque nouvelle session Claude Code, Cursor ou Codex commence vierge. Le modèle ne se souvient pas que vous avez essayé Redis au trimestre dernier avant de passer à PostgreSQL, que votre module de facturation utilise volontairement un pattern en cohérence éventuelle, ou que `Customer` a un sens précis dans votre domaine.

Les équipes réagissent en général de trois façons : elles recollent le même résumé dans chaque chat, elles s'appuient sur un long `CLAUDE.md` qui dérive de la réalité, ou elles acceptent que l'IA re-propose de temps en temps des patterns déjà rejetés. Aucune de ces approches ne tient vraiment au-delà de quelques semaines de travail.

La friction n'est pas dans le modèle. La friction vient du fait que le savoir utile du projet vit dans la tête des gens — ou dans des threads Slack que l'IA ne peut pas lire. Un dossier de mémoire versionné tend à résoudre ce point pour la plupart des équipes que nous avons vues, parce qu'il place le contexte à côté du code.

## La structure concrète

Le pattern : un fichier index plus des fichiers "cortex" spécialisés, chargés à la demande.

```
.lytos/memory/
├── MEMORY.md              # Index — lu à chaque session
└── cortex/                # Zones spécialisées — chargées à la demande
    ├── architecture.md
    ├── patterns.md
    ├── bugs.md
    ├── domain.md
    ├── frontend.md
    └── backend.md
```

`MEMORY.md` reste court : une table des matières, un paragraphe sur l'état du projet, et des pointeurs vers chaque fichier cortex avec une indication "charger quand...". Les fichiers cortex portent le détail — chacun centré sur un domaine, pour que l'agent ne charge que ce dont la tâche actuelle a besoin.

Chaque outil IA découvre le dossier via un petit fichier passerelle à la racine du dépôt :

- **Claude Code** lit `CLAUDE.md`, qui pointe vers `.lytos/memory/MEMORY.md`
- **Cursor** lit des règles dans `.cursor/rules/`, qui font la même chose
- **Codex / agents OpenAI** lisent `AGENTS.md`, avec les mêmes pointeurs

La passerelle est propre à chaque outil ; la mémoire elle-même est le même fichier pour tout le monde. C'est ce qui rend ce savoir portable d'un agent à l'autre.

## Questions fréquentes

**Q : Ce n'est pas déjà ce que proposent les Projects de Claude ou la memory de Cursor ?**
R : Ces fonctions stockent le contexte chez un vendor, dans un workspace. Un dossier `memory/` commité vit dans votre dépôt, se versionne avec votre code, et peut être lu par n'importe quel agent que votre équipe ajoutera demain.

**Q : Jusqu'où peut grossir la mémoire avant que ça pose problème ?**
R : L'index (`MEMORY.md`) devrait rester court — sous 150 lignes est un plafond raisonnable. Les fichiers cortex peuvent grossir ; l'agent ne charge que les pertinents.

**Q : Qui écrit ces fichiers ?**
R : Celui qui clôt une tâche ayant produit une connaissance réutilisable. Un lead dev est souvent responsable de l'index. L'agent lui-même peut proposer des entrées en fin de session, que vous relisez avant de commiter.

**Q : Est-ce que ça marche pour un développeur solo ?**
R : Oui — et le gain arrive sans doute plus vite, puisque c'est aussi vous qui retaperiez le contexte sinon.

## Pour aller plus loin

- Lire le pilier parent : [Memory](/fr/method/memory/)
- [Comment écrire un CLAUDE.md efficace](/fr/method/manifest/writing-claude-md-that-works/) — le fichier qui oriente l'IA vers votre dossier memory
- [Kanban dans Git pour projets IA](/fr/method/issue-board/kanban-in-git-for-ai-projects/) — comment l'état du projet (memory + board) survit aux sessions
- [Comment écrire un skill pour un agent IA](/fr/method/skills/how-to-write-a-skill/) — les skills font référence à la memory pour rester à jour du projet
- Lien externe : [Documentation Claude Code d'Anthropic](https://docs.anthropic.com/en/docs/claude-code/overview)

## Essayer Lytos en 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

Voir le CLI sur [npm](https://www.npmjs.com/package/lytos-cli) · La méthode sur [GitHub](https://github.com/getlytos/lytos-method).
