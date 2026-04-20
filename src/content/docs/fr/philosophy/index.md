---
title: Philosophie
description: Les principes de conception derrière Lytos — pourquoi la méthode préfère un cadre de projet aux personas d'agents, pourquoi la mémoire et les règles vivent dans git, et pourquoi la souveraineté par le texte compte plus que jamais quand l'IA écrit votre code.
---

Lytos existe parce que la façon dominante de travailler avec les assistants IA — « donnez-leur un rôle, laissez-les jouer » — ne passe pas à l'échelle sur de vrais projets logiciels. Cette section explique les trade-offs qui façonnent la méthode, le problème duquel on est partis, et le type de collaboration qu'on vise.

## Les quatre pièces

| | |
|--|--|
| [Manifeste](/fr/philosophy/manifesto/) | Les sept principes fondateurs, et pourquoi on part de « cadre de projet » plutôt que de « persona d'agent ». |
| [Souveraineté](/fr/philosophy/sovereignty/) | Pourquoi la connaissance du projet — manifest, skills, rules, memory — doit vivre dans des fichiers que vous possédez, versionnez et pouvez migrer. Pas dans un vendor. |
| [Les métiers du dev à l'ère de l'IA](/fr/philosophy/roles/) | Développeur, lead, formateur — ce qui change, ce qui ne change pas, et comment les équipes se réorganisent réellement autour du travail assisté par IA. |
| [Kit formateur](/fr/philosophy/trainers/) | Pour celles et ceux qui enseignent Lytos à des équipes ou à des clients — le parcours d'apprentissage, les modes d'échec, les questions qui valent la peine d'être posées. |

## Le trade-off central

La plupart des frameworks d'agents laissent l'IA s'imaginer comme développeur, reviewer ou architecte. Lytos pose la question inverse : à quoi un projet devrait-il ressembler pour que n'importe quelle IA — ou n'importe quel nouveau membre d'équipe — y soit immédiatement efficace ?

Ce changement a des conséquences. On arrête d'ajuster des prompts et on commence à écrire un manifest. On arrête d'inventer des personas et on commence à écrire des skills. On arrête d'espérer que l'agent se souvienne et on commence à écrire un fichier de mémoire qu'il relira à chaque session.

C'est moins glamour. C'est aussi beaucoup plus durable.

## Où lire ensuite

- Si vous voulez la philosophie en trois minutes, le [Manifeste](/fr/philosophy/manifesto/) est le point de départ.
- Si vous êtes convaincu et voulez construire, la section [Méthode](/fr/method/) montre à quoi ça ressemble en pratique.
- Si vous voulez voir la méthode tourner sur un vrai projet, chaque dossier `.lytos/` dans les [dépôts Lytos](https://github.com/getlytos) est réel — pas un template.
