---
title: Le Scrum Master devient une feature
description: L'agile a construit une couche de gestion au-dessus du code. Cette couche est devenue le goulot d'étranglement. Le repo a toujours été le projet.
date: 2026-05-24
author: Frédéric Galliné
category: Organisation
tags:
  - Agile
  - IA
  - Repo-first
lang: fr
---

À un moment, les équipes de développement ont commencé à gérer leur travail dans des outils qui ne savent pas ce qu'est un commit.

Jira ne sait pas que votre suite de tests est en échec. Notion ne sait pas que les trois dernières features ont touché le même module. Confluence ne sait pas que la décision architecturale d'il y a huit mois a été inversée dans une PR que personne n'a documentée. Ces outils suivent une projection du projet — une copie, maintenue manuellement, qui dérive de la réalité dès que quelqu'un oublie de la mettre à jour.

L'agile a formalisé cette séparation. Il a donné à la projection un vocabulaire : epics, stories, sprints, vélocité, burndown. Il lui a donné ses propres rôles : Scrum Master, Product Owner, Release Train Engineer. Et il a demandé aux développeurs de maintenir les deux mondes — le code et la copie du code — tout en livrant.

C'était un compromis raisonnable en 2001. Les outils disponibles ne permettaient pas mieux. Vous aviez besoin de la structure externe pour coordonner une salle pleine de gens qui ne pouvaient pas voir le travail des autres en temps réel.

## Le compromis n'est plus raisonnable

Aujourd'hui, le repo peut tout contenir. Les rules. La memory. Le board d'issues. Le manifest — ce qu'est le projet, ce qu'il n'est pas, ce que "correct" signifie pour ce codebase précis. Pas comme un contournement. Comme la vraie source de vérité.

Et quand vous combinez ça avec un agent IA qui lit le repo avant chaque session, quelque chose change : l'agent connaît le projet. Pas parce que vous l'avez briefé. Parce que le projet est dans le repo, et le repo est ce que l'agent lit.

La couche de gestion externe n'ajoute plus d'information. Elle la duplique — imparfaitement, avec du retard.

## À quoi ressemble une équipe repo-first

Supprimez la duplication et l'équipe est différente.

**Le PO** est proche de l'utilisateur. Il définit quoi construire et pourquoi — des outcomes, pas des files de tickets. Il n'est pas un traducteur entre le métier et le développement. C'est la personne qui sait ce dont l'utilisateur a vraiment besoin, et cette connaissance vit dans le manifest, pas dans un deck de slides.

**Le Gouvernant** possède le cadre. Il écrit le manifest, les rules, les décisions architecturales — une fois, dans le repo. Chaque session IA et chaque membre de l'équipe opère dans ce cadre automatiquement. Le Gouvernant n'a pas besoin d'être dans chaque réunion parce que le cadre fait le travail de coordination.

**Les Builders** dirigent l'exécution. Ils écrivent des issues claires, chargent le bon contexte, dirigent l'IA, revoient l'output, committent. Leur compétence clé est le jugement — savoir quand le résultat est juste et quand il ne l'est pas. Pas la vitesse de frappe.

Trois rôles. Pas de cérémonies. Le process vit dans le repo.

Une équipe de trois à cinq personnes travaillant ainsi peut aller plus vite qu'une équipe Scrum deux fois plus grande — non pas grâce à l'IA, mais parce qu'il n'y a pas de couche de gestion à maintenir en parallèle du vrai travail.

## Ce qu'il advient du Scrum Master

Le Scrum Master résolvait un vrai problème : sans quelqu'un pour garder le process, il se dégrade. Les stand-ups dérivent, le board vieillit, la Definition of Done devient une fiction.

Dans une équipe repo-first, ce problème est résolu différemment. Le board est généré depuis Git. Les rules sont appliquées par l'outil. La Definition of Done est le champ review dans le frontmatter de l'issue. Le process n'a pas besoin de gardien parce que ce n'est pas un accord social — c'est un fichier.

Le travail de facilitation qui reste — aider une équipe à se comprendre, tenir un cap sous pression, naviguer une décision difficile — est genuinement humain et ne va nulle part. Mais c'est une fraction de ce qu'est devenu le rôle de Scrum Master dans la plupart des organisations.

Le rôle ne disparaît pas. L'overhead, oui.

## Le vrai déplacement

L'agile a déplacé le projet dans une couche de gestion. Lytos déplace la couche de gestion dans le projet.

C'est tout. C'est ça le déplacement.

Le repo a toujours été là où le projet vivait réellement. Tous les autres outils étaient des copies. Lytos arrête de maintenir la copie.

---

*[Lytos](https://lytos.org) est une méthode humain-centrique pour le développement assisté par IA. La méthode est open source. [Essayez-la.](https://github.com/getlytos/lytos-cli)*
