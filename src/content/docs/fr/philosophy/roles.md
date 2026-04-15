---
title: Les métiers du dev à l'ère de l'IA
description: Ce qui disparaît, ce qui se transforme, ce qui émerge — notre lecture des métiers du développement avec l'IA.
---

> *"L'agile a créé des métiers pour structurer le travail humain. Quand l'IA structure le travail, certains de ces métiers n'ont plus de raison d'être."*

**Ce qui suit n'est pas une prophétie.** C'est une lecture de ce qu'on observe — en utilisant l'IA au quotidien pour développer, en discutant avec des équipes qui font la transition, en construisant Lytos. C'est une vision fraîche, pas une vérité établie.

Mais c'est une vision qu'on assume.

## Le précédent agile

L'agile a créé des métiers. Scrum Master, Product Owner, Coach Agile, Release Train Engineer. Ces rôles n'existaient pas avant 2001. Ils sont nés pour résoudre un problème réel : structurer la collaboration entre humains dans un environnement incertain.

Ça a marché. Pendant 20 ans.

Mais l'agile a structuré la collaboration **entre humains**. Quand un des collaborateurs devient une IA — un exécutant sans ego, sans fatigue, sans opinion politique sur les tabs vs spaces — les rôles conçus pour gérer des dynamiques humaines commencent à perdre leur raison d'être.

## Ce qui s'efface

On ne dit pas "ces métiers sont morts". On dit : les problèmes qu'ils résolvent sont en train de changer de nature.

### Le Scrum Master

**Ce qu'il fait aujourd'hui :** faciliter les cérémonies, débloquer les équipes, faire respecter le process, protéger l'équipe des perturbations.

**Ce qui change :** le process n'est plus une pratique sociale à maintenir — c'est du code. Les rules sont dans des fichiers. L'orchestrateur gère les dépendances. Le board se génère avec une commande. Les "cérémonies" deviennent des lectures de fichiers, pas des réunions.

**Notre lecture :** le Scrum Master tel qu'on le connaît a de moins en moins de raisons d'exister quand le process est dans le repo. La facilitation humaine reste précieuse — mais elle ne justifie plus un rôle à temps plein quand l'IA n'a pas besoin d'être motivée un lundi matin.

### Le dev "exécutant"

**Ce qu'il fait aujourd'hui :** prendre un ticket, coder, soumettre une PR. Répéter.

**Ce qui change :** l'IA code plus vite, plus régulièrement, et sans les incohérences de style entre développeurs. Un ticket bien défini avec un manifest et des rules produit un résultat prévisible — sans qu'un humain tape chaque ligne.

**Notre lecture :** le développeur qui n'apporte que ses doigts sur un clavier est en sursis. La valeur se déplace vers la capacité à définir le besoin, challenger l'IA, et valider le résultat.

### Le relecteur de style

**Ce qu'il fait aujourd'hui :** vérifier les conventions de nommage, la taille des fonctions, la cohérence du code en code review.

**Ce qui change :** les rules sont vérifiables automatiquement. L'IA les applique avant même la PR. `lyt lint` attrape ce qu'un humain mettrait 20 minutes à relever.

**Notre lecture :** la code review reste essentielle — mais pour valider l'intention, la logique, l'architecture. Pas pour compter les espaces.

## Ce qui se transforme

Ces rôles ne disparaissent pas. Ils changent de nature. Et dans beaucoup de cas, ils gagnent en impact.

### Product Owner → Architecte d'intention

| Avant | Après |
|---|---|
| Rédige des user stories pour des humains | Brainstorme avec l'IA, affine le besoin en conversation |
| Formate des critères d'acceptance | Valide le manifest et les issues générées par l'IA |
| Priorise un backlog dans Jira | Définit le sprint, l'IA structure les dépendances |
| Fait le lien dev ↔ métier | Reste le traducteur du besoin client — mais l'IA est son interlocuteur technique |

**Le shift :** de la rédaction au pilotage. Le PO ne passe plus des heures à formater des tickets. Il passe du temps à réfléchir au besoin réel.

### Lead dev → Architecte de système

| Avant | Après |
|---|---|
| Lit chaque PR ligne par ligne | Définit le manifest, les rules, les skills |
| Vérifie le style et les conventions | L'IA les applique, le lead vérifie que le système fonctionne |
| Attrape les bugs en review | Valide que l'issue est bien résolue, pas que le code est "propre" |
| Impose les conventions oralement | Les écrit une fois dans les rules — elles sont appliquées à chaque session |

**Le shift :** du contrôle à la conception. Le lead ne surveille plus — il définit le monde dans lequel l'IA produit.

> *"L'humain n'écrit pas chaque ligne. Il définit le monde."*

### Développeur → Pilote d'IA

| Avant | Après |
|---|---|
| Tape du code toute la journée | Décrit le besoin, challenge l'IA, valide le résultat |
| Style personnel, habitudes propres | Le code suit le manifest et les rules, cohérent à travers l'équipe |
| Expertise = connaître la syntaxe | Expertise = comprendre le problème et savoir le formuler |
| Valeur = vitesse de frappe | Valeur = qualité de la réflexion |

**Le shift :** de la production à la direction. Le développeur qui sait poser les bonnes questions à l'IA produit plus qu'un développeur rapide au clavier.

> *"Le développeur brainstorme. Lytos harmonise."*

### QA → Gardien de standards

| Avant | Après |
|---|---|
| Teste manuellement, écrit des cas de test | Définit les critères dans les rules, l'IA écrit les tests |
| Vérifie après coup | Les standards sont appliqués pendant le développement |
| Trouve les bugs | Définit les conditions pour qu'ils n'arrivent pas |

**Le shift :** de l'exécution à la stratégie. Le QA ne cherche plus les bugs — il conçoit le système qui les empêche.

## Ce qui émerge (peut-être)

On observe un besoin nouveau, qui n'a pas encore de nom stabilisé.

### L'ingénieur de contexte

Quelqu'un qui structure et maintient le `.lytos/` d'un projet. Qui optimise le manifest pour qu'il soit précis sans être verbeux. Qui consolide la memory pour qu'elle reste pertinente. Qui conçoit des skills adaptés au projet. Qui choisit le bon modèle pour chaque type de tâche.

C'est un mélange de lead dev, de PO, et de knowledge manager. Aujourd'hui, c'est souvent le lead qui fait ça en plus de son rôle. Demain, sur des projets complexes, ça pourrait devenir un rôle à part entière.

On ne le revendique pas comme un "nouveau métier Lytos". On observe que le besoin existe et qu'il n'est couvert par aucun rôle existant.

## Le pattern général

L'agile a répondu à un problème humain en ajoutant des rôles humains. L'IA change l'équation : quand l'exécutant n'est plus humain, les rôles conçus pour **gérer** des humains perdent de la pertinence. Les rôles conçus pour **penser** en gagnent.

| Mouvement | Ce qu'il ajoute | Ce qu'il retire |
|---|---|---|
| **Agile** (2001) | Scrum Master, PO, Coach | Chef de projet classique |
| **DevOps** (2009) | SRE, Platform Engineer | L'admin sys isolé |
| **IA + Lytos** (maintenant) | Architecte d'intention, ingénieur de contexte | Le facilitateur de process, l'exécutant pur |

Le pattern est toujours le même : chaque vague technologique retire les rôles d'**exécution** et renforce les rôles de **conception**.

> *"Moins d'exécution, plus de réflexion. Moins de process humain, plus de pilotage."*

## Ce que ça veut dire pour votre équipe

Si vous lisez cette page en vous demandant "et moi dans tout ça" :

- **Vous êtes Scrum Master ?** Votre valeur n'est pas dans les cérémonies — elle est dans votre compréhension des dynamiques d'équipe. Apprenez à structurer le contexte IA (manifest, rules, memory). Vous pourriez devenir le meilleur ingénieur de contexte de votre organisation.

- **Vous êtes PO ?** Votre connaissance du besoin client est irremplaçable. L'IA ne sait pas ce que veut le client. Vous si. Apprenez à brainstormer avec l'IA plutôt qu'à rédiger des tickets.

- **Vous êtes dev ?** Investissez dans votre capacité à formuler des problèmes, pas dans un nouveau framework. La syntaxe s'apprend. Le jugement, non.

- **Vous êtes lead ?** C'est votre moment. Le rôle d'architecte de système est plus impactant que tout ce que vous faisiez en code review. Définissez le cadre. L'IA fera le reste.

Ce ne sont pas des menaces. Ce sont des transformations. Et comme toutes les transformations, ceux qui les anticipent en sortent plus forts.
