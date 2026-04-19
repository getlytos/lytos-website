---
title: Sub-agents
description: Une lecture critique des personas — et ce qui nous semble faire la différence.
---

## Les sub-agents, une approche qui nous semble limitée

Les "expert React", "architecte senior", "spécialiste DevOps" qu'on rencontre dans de nombreux frameworks reposent souvent sur le même LLM, avec un system prompt différent.

Les personas d'agents ont apporté une forme d'organisation dans un paysage nouveau ; ils donnent un vocabulaire familier et une impression de structure. Notre observation, à l'usage : cette couche de déguisement change peu le résultat comparé à ce qui se joue ailleurs — le choix du modèle et la qualité du contexte.

Cette page expose une lecture — pas une vérité générale.

## La perceuse

Prenez une perceuse. Le même outil perce :

- du **bois** — matériau tendre, pas besoin de forcer
- du **béton** — matériau moyen, il faut de la puissance
- du **métal** — matériau dur, il faut de la précision

Pour y arriver, vous ne changez pas de perceuse. Vous changez de **mèche**. Une mèche à bois pour le bois. Un foret béton pour le béton. Un foret HSS pour le métal. Le même outil, le bon accessoire.

Maintenant, habillez votre perceuse d'un costume de menuisier. Collez-lui une étiquette "Artisan certifié". Ajoutez-lui un badge "10 ans d'expérience".

Elle ne fera pas un trou meilleur ou moins bon.

> *"Un agent déguisé en senior dev ne connaît pas votre code. Il connaît le mot 'senior'."*

On retrouve ce pattern dans beaucoup de setups sub-agents. On prend un LLM, on lui ajoute un system prompt du type *"Tu es un développeur senior expert en React avec 15 ans d'expérience"*, et on le présente comme un agent spécialisé.

Le modèle, lui, n'a pas changé. Ses capacités non plus. L'« expérience » affichée est une construction textuelle.

Ce qui fait la différence, c'est **la mèche** — le modèle choisi pour la tâche :

| Tâche | Mèche adaptée | Mèche inadaptée |
|-------|---------------|-----------------|
| Analyse d'architecture complexe | Opus (raisonnement profond) | Haiku (trop léger) |
| Génération de boilerplate | Haiku (rapide, économique) | Opus (surqualifié, lent) |
| Revue de code | Sonnet (bon équilibre) | Haiku (rate les subtilités) |
| Refactoring critique | Opus (précision maximale) | Sonnet (risque d'approximation) |

Choisir le mauvais modèle pour une tâche, c'est comme percer du béton avec une mèche à bois. Le costume ne rattrapera pas l'erreur de mèche.

## Les limites des personas

L'idée est séduisante : créer un "agent QA", un "agent architecte", un "agent rédacteur". Leur donner des personnalités, des spécialisations, des styles de communication.

Notre lecture, à l'usage, est plus nuancée.

**Un persona ne crée pas de compétence nouvelle.** Dire à un modèle qu'il est expert en sécurité ne lui apporte pas de connaissances en sécurité qu'il n'avait pas. Ses poids n'ont pas changé, son entraînement non plus. Ce qui change, c'est la distribution probabiliste de ses tokens de sortie — il va *parler* davantage comme un expert, sans raisonner différemment pour autant.

**Les personas ont un coût en contexte.** Un system prompt de 500 tokens qui décrit une personnalité, c'est autant de tokens pris sur le contexte utile. Le modèle maintient en plus la cohérence de cette fiction.

**Ce que Lytos privilégie, c'est une stratégie de modèles.** Moins "quel costume donner à mon agent", davantage "quel modèle pour quelle tâche". Une décision d'ingénierie, en complément des pratiques de cadrage existantes.

Lytos ne crée pas de personas. Lytos définit une stratégie :

1. **Identifier la nature de la tâche** — raisonnement profond, exécution rapide, équilibre qualité/coût
2. **Choisir le modèle adapté** — Opus, Sonnet, ou Haiku selon la complexité réelle
3. **Fournir le bon contexte** — manifest, memory, rules, skills pertinents

Le résultat ne dépend pas de qui l'agent "est". Il dépend de ce qu'il sait et de ce qu'il peut.

## Ce qui nous semble compter

Si le persona a un effet limité, qu'est-ce qui fait, selon notre expérience, la différence entre un résultat médiocre et un résultat satisfaisant ?

Deux dimensions nous semblent déterminantes.

### Le modèle

C'est la capacité brute. Un modèle plus puissant raisonne mieux, voit plus de nuances, maintient une cohérence sur des tâches longues. Choisir le bon modèle pour la bonne tâche, c'est choisir la bonne mèche.

### Le contexte

C'est l'information disponible au moment de l'exécution. Un modèle brillant avec un contexte pauvre produira un résultat générique. Un modèle correct avec un contexte riche produira un résultat précis et adapté.

La formule est simple :

> **Résultat = Modèle x Contexte**

Pas `Résultat = Persona + Prompt`.

Et c'est exactement ce que Lytos structure :

- Le **manifest** donne le contexte projet — ce qu'on construit, pourquoi, avec quelles contraintes
- La **memory** donne le contexte accumulé — les décisions passées, les patterns qui marchent, les erreurs à ne pas refaire
- Les **rules** donnent les critères de qualité — ce qui est acceptable et ce qui ne l'est pas
- Les **skills** donnent la procédure — comment exécuter chaque type de tâche, étape par étape

Aucun de ces éléments ne dit à l'agent "qui il est". Ils lui disent tous **ce qu'il doit savoir** et **comment travailler**.

## L'approche Lytos

Plutôt que de multiplier les "agents spécialisés" qui partagent le même modèle sous le capot, Lytos propose de se concentrer sur trois leviers :

**1. Choisir le bon modèle pour la tâche.** C'est la mèche. La décision qui a le plus d'impact sur le résultat.

**2. Fournir un contexte riche et structuré.** C'est le matériau de travail. Plus le contexte est précis — manifest, memory, rules, issue — plus le résultat est pertinent.

**3. Donner une procédure claire.** C'est le skill. Pas "sois un expert", mais "voici les étapes, voici la checklist, voici les critères de validation".

Le résultat : des sessions sans costume mais avec un contexte profond, une procédure claire, et un modèle choisi pour la tâche.

Moins de fiction, davantage d'ingénierie — en complément de ce qui fonctionne déjà chez vous.
