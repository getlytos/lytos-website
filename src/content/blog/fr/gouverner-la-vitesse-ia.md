---
title: "Gouverner la vitesse de l'IA"
description: "L'IA accélère l'exécution, mais elle ne donne pas naturellement de traçabilité. Lytos propose une autre forme d'équipe : plus petite, plus lisible, gouvernée par le repo."
date: 2026-05-24
author: Frédéric Galliné
category: Organisation
tags:
  - IA
  - Organisation
  - Repo-first
lang: fr
---

L'IA a changé la vitesse d'exécution logicielle avant de changer la structure des équipes.

Un Builder peut produire en une journée ce qui prenait une semaine. Un prototype devient une feature. Une refonte se tente sans comité. Le problème n'est plus seulement de livrer plus vite. Le problème devient : **comment garder le contrôle quand l'exécution accélère ?**

Les équipes ressentent déjà cette tension. Le code arrive plus vite que la capacité à le relire. Les décisions se prennent dans des chats qui disparaissent. Les conventions changent selon le modèle, la session, le prompt ou la personne devant l'écran. L'IA augmente la vélocité, mais elle ne produit pas naturellement de gouvernance.

C'est précisément là que le modèle Lytos se place.

## Agile ne répondait pas à ce problème

Agile répondait à une autre époque : le waterfall planifiait trop, les équipes devaient apprendre à livrer plus souvent. Le coût principal était la coordination humaine entre des rôles cloisonnés.

L'IA déplace le problème. Aujourd'hui, l'exécution n'est plus le goulot unique. Le nouveau risque est une exécution rapide, mais peu traçable : personne ne sait exactement pourquoi un choix a été fait, quelle contrainte a été donnée au modèle, quelle règle de qualité a été appliquée, ni si la prochaine session repartira du même cadre.

Autrement dit : Agile optimisait la cadence. Lytos optimise la **vélocité gouvernée**.

## La vélocité gouvernée

La promesse tient en une phrase : **vitesse de builder, qualité de lead dev, sans cérémonies**.

Ce n'est pas une nouvelle couche de process au-dessus du travail. C'est le déplacement inverse : le process retourne dans le repo. Le manifest décrit l'intention. Les rules décrivent ce que "correct" veut dire. La memory conserve ce que le projet apprend. Le board d'issues trace le travail. Les ADRs rendent les décisions reconstructibles.

Le repo cesse d'être seulement l'endroit où le code vit. Il devient l'endroit où le projet se gouverne.

## Pourquoi l'équipe peut devenir plus petite

Dans une équipe Scrum classique, une partie de la taille de l'équipe compense le coût de coordination : planning, clarification, suivi, synchronisation, reporting, passation de contexte. Ces activités existent parce que l'information vit dans plusieurs endroits et doit être recollée en permanence.

Avec Lytos, beaucoup de cette coordination devient structurelle.

Le board n'est pas un miroir manuel du projet : il est dans Git. La Definition of Done n'est pas un accord oral : elle est dans le frontmatter et les rules. Les décisions ne sont pas seulement racontées en réunion : elles sont versionnées. Le contexte de l'IA ne dépend pas de la mémoire d'une conversation : il est relu depuis `.lytos/`.

Cela ne supprime pas les responsabilités. Cela supprime une partie de la machinerie qui existait pour les maintenir à flot.

## Les trois avantages qui changent vraiment l'équipe

Le premier avantage est la **réduction de la perte de contexte**. Un nouvel agent, un nouveau Builder ou une nouvelle session repart du repo, pas d'un résumé fragile. C'est moins spectaculaire qu'une démo IA, mais c'est ce qui permet de tenir dans la durée.

Le deuxième est l'**auditabilité native**. Dans une équipe assistée par IA, la question "qui a produit quoi, avec quel cadre, et pourquoi ?" devient centrale. Une issue, un commit, une rule et une décision versionnée valent mieux qu'un historique de chat difficile à retrouver.

Le troisième est le **non lock-in**. Si le contexte du projet vit dans un SaaS, un chat ou un outil propriétaire, l'équipe devient dépendante de ce contenant. Si le contexte vit dans `.lytos/`, le modèle peut changer. Claude aujourd'hui, GPT demain, autre chose ensuite. Le cadre reste.

Ces avantages ne sont pas seulement techniques. Ils redessinent l'organisation.

## Les rôles se déplacent

Le PO se recentre sur les outcomes. Il n'est pas là pour transformer la voix client en tickets détaillés. Il définit ce que le produit doit accomplir.

Le Gouvernant monte en abstraction. Il n'est pas seulement le meilleur développeur de l'équipe. Il écrit le cadre dans lequel les Builders et les agents opèrent : manifest, rules, ADRs, principes d'architecture.

Le Builder devient directeur d'agents. Sa valeur n'est pas la vitesse de frappe. C'est sa capacité à formuler une bonne issue, charger le bon contexte, challenger l'output IA et décider si le résultat est acceptable.

Le Scrum Master, lui, devient largement une feature. Pas parce que la facilitation humaine ne sert plus. Mais parce qu'une grande partie du process peut vivre directement dans l'outil et dans le repo.

Le détail du modèle est décrit dans [l'équipe idéale Lytos](/fr/philosophy/roles/). L'article que vous lisez ici insiste sur le point central : ce modèle n'est pas une optimisation de Scrum. C'est une réponse à l'exécution assistée par IA.

## La tension à ne pas nier

Ce modèle demande beaucoup au Builder. Il doit comprendre le domaine, lire le code, juger l'output IA et refuser ce qui semble plausible mais faux. L'IA ne baisse pas le niveau nécessaire. Elle déplace le niveau vers le jugement.

C'est pour cela que la gouvernance ne doit pas être une contrainte externe. Si elle ralentit, elle sera contournée. Si elle est intégrée au geste de travail — créer une issue, démarrer une branche, charger le contexte, review l'output — elle devient plus rapide que l'improvisation.

La promesse de Lytos n'est donc pas "moins de discipline". C'est l'inverse : une discipline assez intégrée pour ne plus ressembler à de l'overhead.

## Le repo comme nouvelle unité d'équipe

Une équipe IA-first ne devrait pas se demander d'abord quel board utiliser, quelle cérémonie ajouter ou quel rôle recruter. Elle devrait se demander : **est-ce que le repo contient assez de contexte pour qu'un humain et un agent comprennent le projet sans réunion préalable ?**

Si la réponse est non, l'équipe continuera à compenser par du process.

Si la réponse est oui, quelque chose change : l'équipe peut être plus petite, les décisions plus lisibles, les sessions IA plus cohérentes, et la vitesse moins dangereuse.

C'est cela, la vélocité gouvernée.
