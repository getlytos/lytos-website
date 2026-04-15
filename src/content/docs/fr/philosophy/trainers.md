---
title: Kit formateur
description: Tous les éléments de langage pour intégrer Lytos dans vos formations agile et IA.
---

Cette page est votre boîte à outils. Tout ce qu'il faut pour présenter Lytos en formation — l'histoire, les concepts, les arguments, les réponses aux objections. Prenez ce qui vous sert, adaptez à votre contexte.

## L'histoire de la blanquette

Un développeur est en train de coder avec un agent IA "ultra-spécialisé" en création de blocs Gutenberg pour WordPress. L'agent a un persona détaillé, un system prompt de 800 tokens, un rôle défini.

Le développeur se trompe de fenêtre. Il demande à cet agent spécialisé de lui rappeler la recette de la blanquette de veau.

L'agent lui donne la recette. Sans hésiter.

C'est le moment où tout s'effondre. Si un agent "spécialisé en Gutenberg" peut donner une recette de cuisine sans broncher, c'est qu'il n'est pas spécialisé. Il joue un rôle. Le costume ne change rien au modèle en dessous.

> *"Un agent déguisé en senior dev ne connaît pas ton code. Il connaît le mot 'senior'."*

Ce déclic a lancé Lytos. Si les personas ne servent à rien, qu'est-ce qui fait la différence ? La réponse : **le contexte et la structure**.

## Pourquoi le nom Lytos

**λυτός** (lytós) — du grec ancien. Signifie "délié", "détaché", "libéré".

Du verbe **λύειν** (lyein) : détacher, libérer. C'est la racine d'**analyse** (ana-lysis : décomposer pour comprendre) et de **catalyse** (accélérer une réaction sans être consommé).

Le nom porte la philosophie :
- **Délié** des vendors — ton contexte t'appartient, pas à un fournisseur
- **Détaché** des modèles — change de moteur IA sans perdre ta fondation
- **Libéré** des personas — pas de fiction, de l'ingénierie

> *"Choisis ton IA. Ne lui appartiens pas."*

## Le pitch — 3 versions

### Version 30 secondes
Lytos est une méthode de développement assisté par IA. Au lieu de déguiser l'IA en persona, on lui donne ce qui la rend vraiment meilleure : un contexte projet structuré qui persiste entre les sessions. Tout vit en Markdown dans le repo Git. Portable, souverain, indépendant du modèle.

### Version 2 minutes
L'agile a structuré la collaboration entre humains. Mais quand on travaille avec l'IA, il n'y a rien. Chaque session repart de zéro. Le développeur réexplique son projet. L'IA oublie tout. Le résultat est générique.

L'industrie a répondu en créant des "agents spécialisés" — un agent architecte, un agent testeur, un agent reviewer. En réalité, c'est le même modèle avec des costumes différents. Ça rassure, ça ne fonctionne pas.

Lytos prend le problème à l'envers. Plutôt que d'habiller l'IA, on structure ce qu'elle reçoit : un manifest projet, des procédures réutilisables, des critères de qualité vérifiables, un board de tâches, et une mémoire qui persiste. L'IA ne devine plus — elle sait.

### Version atelier (5 minutes — avec la métaphore)
Prenez une perceuse. Le même outil perce du bois, du béton, du métal. Pour y arriver, vous changez la mèche, pas l'outil. Si vous collez un costume de menuisier sur la perceuse, elle ne fera pas un meilleur trou.

C'est exactement ce qu'on fait avec les sub-agents IA. On prend un LLM, on lui colle un prompt qui dit "Tu es un expert en React avec 15 ans d'expérience", et on appelle ça un agent spécialisé. Le modèle n'a pas changé. Ses capacités n'ont pas changé.

Ce qui fait la différence, c'est deux choses : le modèle choisi pour la tâche (la mèche) et le contexte fourni (le matériau de travail). C'est ça que Lytos structure.

> *"Le role-play ne remplace pas le contexte."*

## Le pont Agile → Lytos

Ce tableau est conçu pour être projeté en formation. Il montre que Lytos ne remplace pas l'agile — il étend ses principes au travail avec l'IA.

| Concept Agile | Équivalent Lytos | Ce que ça change |
|---|---|---|
| User Story | Issue (.md dans issue-board/) | L'IA la crée à partir d'une conversation, l'humain la valide |
| Definition of Done | Rules (rules/*.md) | Critères vérifiables automatiquement, pas subjectifs |
| Sprint Backlog | Sprint (sprint.md) + Board (BOARD.md) | Git-natif, pas besoin d'un SaaS |
| Rétrospective | Memory (memory/cortex/) | Le savoir persiste entre les sprints, pas juste un compte-rendu |
| Daily standup | `lyt board` | L'état du projet en une commande |
| Scrum Master | Orchestrateur | Des règles de planification, pas un rôle humain de plus |
| Onboarding | Manifest (manifest.md) | Un nouveau développeur (ou une IA) comprend le projet en 2 minutes |

> *"L'agile a structuré la collaboration humaine. Lytos structure la collaboration avec l'IA."*

## Les 5 piliers — Version formateur

### 1. Intent — Le manifest

**Quoi :** La constitution du projet. Ce qu'on construit, pourquoi, avec quelles contraintes.

**Pourquoi :** Sans manifest, l'IA produit du code générique. Elle ne sait pas si c'est une librairie ou un SaaS, si on préfère REST ou GraphQL.

**Comment :** Un fichier `manifest.md` à la racine de `.lytos/`. Lu par l'agent au début de chaque session.

**Question atelier :** *"Si un nouveau développeur rejoignait votre équipe demain, quelles sont les 5 choses qu'il doit absolument savoir avant de coder ?"* — C'est ça, un manifest.

### 2. Design — Les skills

**Quoi :** Des procédures réutilisables, étape par étape. Comment faire une code review, un déploiement, une refacto.

**Pourquoi :** L'IA n'a pas d'intuition. Elle a besoin d'étapes concrètes, pas de "fais au mieux".

**Comment :** Des fichiers dans `skills/`. 9 skills intégrés couvrent 90% des tâches de développement.

**Question atelier :** *"Comment vous expliquez à un junior comment faire une code review ? Listez les étapes."* — C'est un skill.

### 3. Standards — Les rules

**Quoi :** Les critères de qualité non-négociables. Taille de fichier, couverture de tests, patterns interdits.

**Pourquoi :** "Écris du code propre" n'est pas vérifiable. "Fichiers de moins de 300 lignes" l'est.

**Comment :** Des fichiers dans `rules/`. Rules par défaut + rules spécifiques au projet.

> *"Ce qui ne se vérifie pas ne se respecte pas."*

**Question atelier :** *"Quelles sont les 3 règles que vous imposez toujours en code review ?"* — Formalisez-les. C'est vos rules.

### 4. Progress — L'issue board

**Quoi :** Un kanban Git-natif. Les tâches vivent dans des dossiers (backlog, sprint, in-progress, done).

**Pourquoi :** L'IA sait où en est le projet. Pas besoin de réexpliquer le contexte à chaque session.

**Comment :** Des fichiers `.md` dans `issue-board/`. Le frontmatter YAML est la source de vérité. `lyt board` régénère la vue.

**Question atelier :** *"Combien de temps passez-vous à réexpliquer le contexte à votre IA à chaque session ?"* — L'issue board élimine ça.

### 5. Memory — La mémoire

**Quoi :** Le savoir accumulé du projet. Décisions d'architecture, patterns qui marchent, bugs récurrents.

**Pourquoi :** Sans mémoire, l'IA fait les mêmes erreurs deux fois. Elle suggère des solutions déjà rejetées.

**Comment :** Un index `MEMORY.md` + des fichiers spécialisés dans `memory/cortex/`. L'agent charge uniquement ce qui est pertinent.

> *"La qualité ne vient pas du prompt. Elle vient du contexte."*

**Question atelier :** *"Votre IA sait-elle que vous avez essayé Redis et que vous êtes passé à PostgreSQL ? Non ? C'est un problème de mémoire."*

## La souveraineté — Convaincre les décideurs

Les formateurs ont souvent des décideurs dans la salle. Cette section donne les arguments.

**Le problème :** Les modèles changent tous les 3-6 mois. GPT-4 → GPT-4o → o1 → o3. Claude 2 → 3 → 3.5 → 4. Sans structure portable, chaque changement de modèle = recommencer à zéro.

**L'argument vendor lock-in :** C'est le même problème qu'avec AWS, Salesforce, ou Adobe. Sauf que là, ça change quatre fois par an.

**La réponse Lytos :** Tout est du Markdown dans Git. L'IA est un moteur. Les moteurs se changent. La fondation est ce qui persiste.

| Sans Lytos | Avec Lytos |
|---|---|
| Contexte dans l'historique de chat | Contexte dans des fichiers versionnés |
| Workflow lié à un outil | Fonctionne avec n'importe quel outil IA |
| Changement de vendor = recommencer | Changement de vendor = changer de moteur |
| Pas de piste d'audit | Tout est dans Git |

**La phrase qui convainc :** *"Aujourd'hui c'est Claude. Demain c'est peut-être GPT, Gemini, ou un modèle local. Avec Lytos, vous changez le moteur. Vous ne recommencez pas à zéro."*

## Répondre aux objections

### "On utilise déjà Cursor / Copilot, c'est pas la même chose ?"
Cursor et Copilot sont des **outils**. Lytos est une **méthode**. Cursor ne sait pas pourquoi votre projet existe. Il ne connaît pas vos décisions d'architecture. Il ne se souvient pas du sprint précédent. Lytos donne à n'importe quel outil le contexte dont il a besoin. D'ailleurs, Lytos fonctionne **avec** Cursor — il génère un fichier `.cursor/rules` automatiquement.

### "Ça rajoute de la bureaucratie, non ?"
`lyt init` génère tout en 30 secondes. Le manifest fait 50-100 lignes. Les rules existent déjà — vous les répétez oralement en code review, Lytos les écrit une fois. C'est **moins** de travail, pas plus, parce que vous ne répétez plus rien.

### "C'est pas plus simple de juste bien prompter ?"
Le meilleur prompt du monde ne rattrape pas un contexte vide. Si l'IA ne sait pas que votre projet utilise PostgreSQL, que vous avez rejeté GraphQL, et que les fichiers doivent faire moins de 300 lignes — aucun prompt ne compensera. Le prompt est éphémère. Le contexte est durable.

> *"Déléguer à l'IA sans structure, c'est sous-traiter sans brief."*

### "Ça marche qu'avec Claude ?"
Non. Le manifest, les skills, les rules, la memory — c'est du Markdown. Ça fonctionne avec Claude Code, Cursor, GPT, Gemini, Mistral, ou un LLM local. Lytos a des adaptateurs natifs pour les outils majeurs. C'est le principe même de la souveraineté : **aucune dépendance à un modèle ou un vendor**.

### "Nos développeurs ne vont pas adopter un process de plus."
Les développeurs détestent les process qui ne servent à rien. Ils adoptent ceux qui leur font gagner du temps. Avec Lytos, ils ne réexpliquent plus leur projet. L'IA respecte leurs conventions. Les bugs récurrents ne reviennent pas. En général, la résistance tombe après le premier sprint.

## Exercice d'atelier suggéré

**Durée :** 15 minutes
**Objectif :** Faire toucher du doigt la différence entre un prompt et un contexte structuré.

1. **Sans Lytos (5 min)** — Demandez aux participants de prompter une IA pour créer un endpoint API. Juste un prompt libre. Observez : chacun obtient un résultat différent, générique, avec des choix par défaut.

2. **Avec un manifest (5 min)** — Donnez-leur un manifest de 30 lignes (stack, contraintes, conventions). Même demande. Observez : les résultats convergent, respectent les contraintes, sont adaptés au projet.

3. **Debrief (5 min)** — La différence entre les deux, c'est le contexte. Le prompt n'a pas changé. Le modèle n'a pas changé. Seule la structure autour a changé. C'est ça, Lytos.

**Le point clé à faire passer :** remarquez que tous les résultats convergent. En code traditionnel, 10 développeurs produisent 10 styles différents — c'est humain, on ne peut pas demander à des gens de coder pareil. Mais avec l'IA + un manifest partagé, le code est cohérent. Pour la première fois, un projet à 10 développeurs peut avoir **une seule voix**. Le développeur n'est plus celui qui tape du code — il brainstorme, affine le besoin, valide le résultat. Lytos garantit la cohérence.

> *"Le développeur brainstorme. Lytos harmonise."*

## Les punchlines à retenir

Toutes les phrases clés en un seul endroit, à réutiliser en formation :

| Thème | Punchline |
|---|---|
| Vision | *"L'agile a structuré la collaboration humaine. Lytos structure la collaboration avec l'IA."* |
| Personas | *"Le role-play ne remplace pas le contexte."* |
| Personas | *"Un agent déguisé en senior dev ne connaît pas ton code. Il connaît le mot 'senior'."* |
| Souveraineté | *"Choisis ton IA. Ne lui appartiens pas."* |
| Process | *"Un projet sans process est une conversation. Pas une livraison."* |
| Process | *"Sans process, chaque session repart de zéro. Avec Lytos, chaque session s'appuie sur la dernière."* |
| Contexte | *"La qualité ne vient pas du prompt. Elle vient du contexte."* |
| Contexte | *"Déléguer à l'IA sans structure, c'est sous-traiter sans brief."* |
| Rules | *"Ce qui ne se vérifie pas ne se respecte pas."* |
| Lead | *"L'humain n'écrit pas chaque ligne. Il définit le monde."* |
| Équipe | *"Le développeur brainstorme. Lytos harmonise."* |
| Formule | **Résultat = Modèle x Contexte** |

## Ressources à partager

- Site : [lytos.org](https://lytos.org)
- Méthode : [github.com/getlytos/lytos-method](https://github.com/getlytos/lytos-method)
- CLI : `npm install -g lytos-cli` puis `lyt init`
- Premier projet : [Guide démarrage rapide](/fr/getting-started/quickstart/)
