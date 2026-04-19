---
title: Sub-agents
description: Pourquoi les personas ne servent à rien — et ce qui fait vraiment la différence.
---

## Les sub-agents n'existent pas

Votre "expert React", votre "architecte senior", votre "spécialiste DevOps" — c'est le même LLM avec un déguisement différent.

L'industrie IA a inventé les personas d'agents comme on invente des titres de poste : ça rassure, ça donne l'impression de structure, mais ça ne change rien au résultat. Un modèle de langage ne code pas mieux parce qu'on lui dit qu'il est senior.

Cette page dit tout haut ce que les praticiens savent tout bas.

## La perceuse

Prenez une perceuse. Le même outil perce :

- du **bois** — matériau tendre, pas besoin de forcer
- du **béton** — matériau moyen, il faut de la puissance
- du **métal** — matériau dur, il faut de la précision

Pour y arriver, vous ne changez pas de perceuse. Vous changez de **mèche**. Une mèche à bois pour le bois. Un foret béton pour le béton. Un foret HSS pour le métal. Le même outil, le bon accessoire.

Maintenant, habillez votre perceuse d'un costume de menuisier. Collez-lui une étiquette "Artisan certifié". Ajoutez-lui un badge "10 ans d'expérience".

Elle ne fera pas un trou meilleur ou moins bon.

> *"Un agent déguisé en senior dev ne connaît pas votre code. Il connaît le mot 'senior'."*

C'est exactement ce que fait l'industrie avec les sub-agents. On prend un LLM, on lui colle un system prompt qui dit *"Tu es un développeur senior expert en React avec 15 ans d'expérience"*, et on appelle ça un agent spécialisé.

Le modèle n'a pas changé. Ses capacités n'ont pas changé. Son "expérience" est une fiction textuelle.

Ce qui fait la différence, c'est **la mèche** — le modèle choisi pour la tâche :

| Tâche | Mèche adaptée | Mèche inadaptée |
|-------|---------------|-----------------|
| Analyse d'architecture complexe | Opus (raisonnement profond) | Haiku (trop léger) |
| Génération de boilerplate | Haiku (rapide, économique) | Opus (surqualifié, lent) |
| Revue de code | Sonnet (bon équilibre) | Haiku (rate les subtilités) |
| Refactoring critique | Opus (précision maximale) | Sonnet (risque d'approximation) |

Choisir le mauvais modèle pour une tâche, c'est comme percer du béton avec une mèche à bois. Le costume ne rattrapera pas l'erreur de mèche.

## L'illusion des personas

L'idée est séduisante : créer un "agent QA", un "agent architecte", un "agent rédacteur". Leur donner des personnalités, des spécialisations, des styles de communication.

Sauf que ça ne marche pas.

**Un persona ne crée pas de compétence.** Dire à un modèle qu'il est expert en sécurité ne lui donne pas de nouvelles connaissances en sécurité. Ses poids n'ont pas changé. Son entraînement n'a pas changé. Tout ce qui change, c'est la distribution probabiliste de ses tokens de sortie — il va *parler* comme un expert, pas *raisonner* comme un expert.

**Les personas ajoutent du bruit.** Un system prompt de 500 tokens qui décrit une personnalité, c'est 500 tokens de moins pour le contexte utile. Et le modèle doit maintenir la cohérence de cette fiction en plus de résoudre le problème réel.

**Ce qui marche, c'est une stratégie de modèles.** Pas "quel costume donner à mon agent", mais "quel modèle pour quelle tâche". C'est une décision d'ingénierie, pas de casting.

Lytos ne crée pas de personas. Lytos définit une stratégie :

1. **Identifier la nature de la tâche** — raisonnement profond, exécution rapide, équilibre qualité/coût
2. **Choisir le modèle adapté** — Opus, Sonnet, ou Haiku selon la complexité réelle
3. **Fournir le bon contexte** — manifest, memory, rules, skills pertinents

Le résultat ne dépend pas de qui l'agent "est". Il dépend de ce qu'il sait et de ce qu'il peut.

## Ce qui compte vraiment

Si le persona ne fait rien, qu'est-ce qui fait la différence entre un agent qui produit un résultat médiocre et un agent qui produit un résultat excellent ?

Deux choses. Deux seulement.

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

Au lieu de créer 15 "agents spécialisés" qui sont tous le même modèle avec des costumes différents, Lytos fait trois choses :

**1. Choisir le bon modèle pour la tâche.** C'est la mèche. La décision qui a le plus d'impact sur le résultat.

**2. Fournir un contexte riche et structuré.** C'est le matériau de travail. Plus le contexte est précis — manifest, memory, rules, issue — plus le résultat est pertinent.

**3. Donner une procédure claire.** C'est le skill. Pas "sois un expert", mais "voici les étapes, voici la checklist, voici les critères de validation".

Le résultat : des agents sans costume mais avec un contexte profond, une procédure claire, et le bon moteur sous le capot.

Pas de fiction. Pas de casting. De l'ingénierie.
