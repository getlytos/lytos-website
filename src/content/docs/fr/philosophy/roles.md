---
title: Les métiers du dev à l'ère de l'IA
description: Comment les compétences pourraient évoluer avec l'arrivée de l'IA dans le quotidien — une lecture, pas une prophétie.
---

> *"L'agile a structuré la collaboration humaine. L'IA déplace probablement certains équilibres — sans effacer les métiers pour autant."*

**Ce qui suit n'est ni une prophétie, ni un manifeste sur la fin d'un métier.** C'est une lecture, appuyée sur ce qu'on observe au quotidien : des équipes qui intègrent l'IA à leur travail, des pratiques qui s'ajustent, des compétences qui se recomposent. Rien n'est figé. Tout peut prendre une autre trajectoire selon les projets, les cultures d'équipe, les outils.

Notre position : les compétences acquises aujourd'hui ne deviennent pas obsolètes. Elles sont le socle sur lequel les nouvelles pratiques se construisent. Un développeur qui sait lire un système complexe, un PO qui sait écouter un client, un Scrum Master qui sait débloquer une équipe — ces savoir-faire restent précieux. Ce qui change, c'est le point d'application.

## Le précédent agile

L'agile a créé des métiers. Scrum Master, Product Owner, Coach Agile, Release Train Engineer. Ces rôles n'existaient pas avant 2001. Ils sont nés pour résoudre un problème réel : structurer la collaboration entre humains dans un environnement incertain.

Ça a marché. Pendant plus de vingt ans.

L'agile a structuré la collaboration **entre humains**. Quand une partie du travail est progressivement prise en charge par un outil — un exécutant rapide, régulier, mais sans jugement propre — les pratiques conçues pour gérer des dynamiques humaines ont de grandes chances de s'ajuster. Pas de disparaître : de s'ajuster.

## Ce qui se déplace

On ne dit pas "ces métiers sont morts". On dit : il est possible que les problèmes qu'ils résolvent changent de nature, et donc que la valeur de ces métiers se concentre sur d'autres dimensions.

### Le Scrum Master

**Aujourd'hui :** facilite les cérémonies, débloque l'équipe, fait respecter le process, protège l'équipe des perturbations.

**Ce qui pourrait se recentrer :** une partie du process tend à descendre dans le repo (rules versionnées, board généré, orchestrateur qui gère les dépendances). La facilitation humaine — aider une équipe à se comprendre, à arbitrer, à tenir un cap — reste essentielle. Ce qui change, c'est probablement la part du temps consacrée à l'animation pure d'un process par rapport au temps consacré à construire le cadre dans lequel l'équipe et l'IA collaborent.

Sur certains projets, cette évolution rendra la fonction plus stratégique. Sur d'autres, elle demandera d'acquérir une compétence d'ingénierie du contexte qui n'était pas attendue auparavant.

### Le dev "exécutant"

**Aujourd'hui :** prend un ticket, code, soumet une PR. Répète.

**Ce qui pourrait évoluer :** avec un bon cadrage (manifest, rules, skills), l'IA peut produire une partie du code plus vite et de façon plus homogène qu'une équipe de développeurs aux styles variés. La valeur d'un développeur se déplace alors vers ce que l'IA fait mal : formuler un problème, vérifier qu'un résultat correspond vraiment à l'intention, arbitrer entre plusieurs approches, comprendre un contexte métier.

Ce n'est pas la fin du développement. C'est le recentrage du développeur sur la partie irremplaçable de son métier : le jugement. La frappe au clavier représentait déjà une fraction minoritaire du temps d'un bon développeur.

### Le relecteur de style

**Aujourd'hui :** vérifie les conventions de nommage, la taille des fonctions, la cohérence du code en code review.

**Ce qui pourrait évoluer :** les règles vérifiables mécaniquement gagnent à l'être. `lyt lint` et les linters classiques attrapent en quelques secondes ce qu'un humain met du temps à relever. La revue de code garde tout son sens pour ce que seul un humain peut juger : pertinence de la solution, clarté de l'intention, robustesse face à un cas non prévu, alignement avec l'architecture.

La revue n'est pas menacée. Elle gagne en profondeur parce qu'elle est débarrassée de tâches mécaniques.

## Ce qui se transforme

Certains rôles pourraient évoluer d'un registre de production vers un registre de conception. Voici trois hypothèses — à vérifier équipe par équipe.

### Product Owner → Architecte d'intention

| Tendance actuelle | Tendance possible |
|---|---|
| Rédige des user stories | Affine le besoin en dialogue avec l'IA |
| Formate des critères d'acceptance | Valide le manifest et les issues générées |
| Priorise un backlog | Définit le sprint, l'IA structure les dépendances |
| Fait le lien dev ↔ métier | Reste le traducteur du besoin client, avec l'IA comme interlocuteur technique |

**Le déplacement :** de la rédaction vers le pilotage. Le PO passerait moins de temps à formater des tickets, plus de temps à réfléchir au besoin réel. La connaissance du client, elle, reste irremplaçable.

### Lead dev → Architecte de système

| Tendance actuelle | Tendance possible |
|---|---|
| Lit chaque PR ligne par ligne | Définit le manifest, les rules, les skills |
| Vérifie style et conventions | Définit les conventions, l'IA les applique |
| Attrape les bugs en review | Valide que l'issue est bien résolue, pas seulement que le code est propre |
| Impose les conventions oralement | Les inscrit une fois dans les rules, elles s'appliquent à chaque session |

**Le déplacement :** du contrôle vers la conception. Le lead définirait davantage le monde dans lequel l'équipe et l'IA produisent — sans pour autant disparaître de la revue stratégique.

### Développeur → Pilote d'IA

| Tendance actuelle | Tendance possible |
|---|---|
| Produit du code | Décrit le besoin, challenge l'IA, valide le résultat |
| Style personnel | Code aligné sur un manifest et des rules partagées |
| Expertise = maîtrise de la syntaxe | Expertise = compréhension du problème et capacité à le formuler |
| Valeur = vitesse et rigueur de frappe | Valeur = qualité de la réflexion et pertinence du jugement |

**Le déplacement :** de la production vers la direction de production. Un développeur qui sait poser les bonnes questions à l'IA pourrait produire davantage qu'un développeur rapide au clavier — sans que le second perde pour autant sa place ; ses habitudes seront précieuses pour vérifier et enseigner.

### QA → Gardien de standards

| Tendance actuelle | Tendance possible |
|---|---|
| Teste manuellement, écrit des cas de test | Définit les critères dans les rules, l'IA écrit les tests |
| Vérifie après coup | Les standards s'appliquent pendant le développement |
| Trouve les bugs | Conçoit les conditions pour qu'ils soient rares |

**Le déplacement :** de l'exécution vers la stratégie. Le QA ne chercherait plus uniquement les bugs — il concevrait aussi le système qui les rend moins probables. Les deux restent utiles ; la part de l'un par rapport à l'autre pourrait évoluer.

## Ce qui pourrait émerger

On observe un besoin qui n'a pas encore de nom stabilisé.

### L'ingénieur de contexte

Quelqu'un qui structure et maintient le `.lytos/` d'un projet. Qui ajuste le manifest pour qu'il soit précis sans être verbeux. Qui consolide la memory pour qu'elle reste pertinente. Qui conçoit des skills adaptés au projet. Qui choisit le bon modèle pour chaque type de tâche.

C'est un mélange de lead dev, de PO et de knowledge manager. Aujourd'hui, ce travail est souvent pris en charge par le lead ou par la personne la plus à l'aise avec l'IA dans l'équipe. Sur des projets complexes, il pourrait devenir un rôle identifiable à part entière. Rien n'oblige qu'il le devienne partout.

On ne le revendique pas comme un "nouveau métier Lytos". On observe que le besoin existe et qu'aucun rôle actuel ne le couvre entièrement.

## Un pattern, pas une règle

L'histoire des transformations technologiques suit souvent un schéma comparable : une vague retire une part de l'exécution mécanique, et déplace la valeur vers la conception et la coordination.

| Vague | Ce qu'elle a renforcé | Ce qu'elle a réduit |
|---|---|---|
| **Agile** (années 2000) | Scrum Master, PO, Coach | Chef de projet traditionnel, dans sa forme top-down |
| **DevOps** (années 2010) | SRE, Platform Engineer | L'administration système isolée du développement |
| **IA + Lytos** (aujourd'hui) | Architecte d'intention, ingénieur de contexte | La part mécanique du développement et de la facilitation |

Ce pattern n'est pas une loi. Chaque équipe, chaque culture, chaque type de projet avance à son rythme. Les transformations précédentes n'ont pas remplacé tous les rôles qu'elles ont touchés — elles les ont redessinés.

## Pour votre équipe

Si cette page vous amène à vous demander "et moi dans tout ça", quelques pistes — à mettre en perspective avec votre contexte réel :

- **Scrum Master ?** Votre compréhension des dynamiques d'équipe reste une compétence rare. Elle pourrait se combiner avec une pratique nouvelle : structurer le contexte de l'IA (manifest, rules, memory). Beaucoup de Scrum Masters que nous croisons y trouvent un levier d'impact supplémentaire.

- **Product Owner ?** Votre connaissance du besoin client est irremplaçable — l'IA ne la remplacera pas. Ce qui peut changer, c'est la part du temps passée à rédiger des tickets par rapport au temps passé à construire et challenger le besoin en dialogue avec l'IA.

- **Développeur ?** Votre expérience du code est un socle, pas un héritage qui s'efface. Ce qui pourrait s'amplifier, c'est la prime à la capacité de formuler un problème et de juger un résultat. Les patterns que vous avez intégrés avec les années deviennent précisément ce que vous apportez à l'IA pour l'orienter.

- **Lead dev ?** Le rôle d'architecte de système existait déjà — l'IA lui donne de nouveaux outils. Définir un cadre clair (rules, skills, manifest) pourrait devenir aussi structurant pour une équipe que l'est aujourd'hui une bonne architecture logicielle.

Ces transformations ne sont ni des menaces, ni des garanties. Ce sont des déplacements possibles, qui dépendront autant de la technologie que de la façon dont chaque équipe choisira de les intégrer. Lytos essaie d'offrir un vocabulaire et des outils pour accompagner cette évolution — sans prétendre la dicter.
