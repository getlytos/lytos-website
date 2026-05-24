---
title: L'équipe idéale Lytos
description: Le repo est le projet. Pas Jira. Pas Notion. Pas les réunions. L'équipe qui part de ce principe est différente.
---

> *"Le repo est le projet. Pas Jira. Pas Notion. Pas les réunions."*

## Le problème qu'a créé l'agile

L'agile n'a pas échoué. Il a résolu un vrai problème de coordination — et ça a marché pendant vingt ans.

Mais il l'a résolu en construisant une couche de gestion **au-dessus** du code. Story points, cérémonies de sprint, tickets Jira, burndown charts — un monde parallèle qui suit le projet sans le toucher. Un monde où les personnes responsables de la livraison passent une part significative de leur temps dans des outils qui ne savent pas ce qu'est un commit.

Le repo — là où le projet vit réellement — est devenu un détail. Quelque chose dont s'occupent les développeurs. Quelque chose que les managers projettent sur un board ailleurs.

Lytos part du principe inverse.

## Le repo est le projet

Les rules vivent dans le repo. Le board d'issues vit dans le repo. La memory vit dans le repo. Le manifest — ce qu'est le projet, ce qu'il n'est pas, ce que "correct" signifie — vit dans le repo.

Pas parce que c'est malin. Parce que c'est là que le travail se passe. Un agent IA qui lit `.lytos/` avant chaque session connaît le projet. Un nouveau membre de l'équipe qui clone le repo a le contexte complet. Une décision enregistrée dans un ADR est auditable deux ans plus tard.

Pas d'outil externe nécessaire. Pas de synchronisation. Pas de dérive entre ce qui est écrit et ce qui est construit.

## Ça vous parle ?

La plupart des équipes qui ont adopté l'IA en 2024-2025 sont dans cette situation : l'IA est rapide, le résultat est inégal, personne ne sait vraiment pourquoi une décision a été prise, et le contexte disparaît entre chaque session. Si vous vous reconnaissez dans la colonne du milieu, c'est le problème que Lytos résout.

| | Avant l'IA | La plupart des équipes aujourd'hui | Avec Lytos |
|---|---|---|---|
| **Mémoire du projet** | Dans les têtes, dans Confluence, dans les réunions | L'IA ne sait plus rien le lendemain matin — même briefing à chaque session | Dans le repo, rechargée automatiquement à chaque session |
| **Auditabilité** | Ticket + PR — traçabilité partielle | Personne ne peut répondre en code review : qui a généré ça, avec quel modèle, sur quel prompt ? | Issue + ADR + commit — reconstructible deux ans plus tard |
| **Vitesse de livraison** | Limitée par la coordination humaine | Rapide, mais imprévisible — beaucoup de retravail | Rapide et cohérent — le cadre évite le retravail |
| **Qualité du code** | Dépend du reviewer humain | Deux devs, le même prompt, deux architectures différentes | `rules/` appliquées à chaque session — la cohérence est structurelle |
| **Conventions** | Verbales, dans Confluence, rarement respectées | Réinterprétées à chaque session — ou simplement ignorées | Versionnées dans `rules/`, appliquées automatiquement |
| **Hallucination IA** | N/A | Indétectable avant la review — l'IA invente des décisions, ignore des contraintes | Manifest + rules réduisent la dérive — chaque session repart des mêmes contraintes |
| **Souveraineté** | Données enfermées chez un vendor SaaS | Contexte enfermé dans l'historique de chat du fournisseur IA | Tout dans Git — vous en êtes propriétaires, portable, sans lock-in |
| **Changement de fournisseur IA** | N/A | Changer Claude pour GPT = tout le contexte perdu, recommencer | On change le moteur, le cadre reste — zéro perte de contexte |
| **Coût IA** | N/A | Rebriefing constant = tokens gaspillés à chaque session | Contexte structuré = coût prévisible et optimisable |
| **Reproductibilité** | Processus documentés, difficiles à rejouer | Les prompts sont jetables — impossible de reproduire ce qui a été produit | Issue + skill + rules = workflow reproductible et transmissible |
| **Onboarding** | Semaines de transfert de contexte | Chaque nouvelle session IA — ou nouveau membre — repart de zéro | Cloner le repo, lire `.lytos/` — opérationnel immédiatement |

## L'équipe idéale

Ce principe a une conséquence naturelle sur la façon dont une équipe est structurée.

**Le PO** reste proche de l'utilisateur. Il définit quoi construire et pourquoi — des outcomes, pas des tickets. Il n'écrit pas de stories pour des développeurs qui ont besoin de guidance pas à pas. Il n'assiste pas aux stand-ups. Il connaît l'utilisateur.

**Le Gouvernant** possède le cadre. Il écrit le manifest, les rules, les décisions architecturales. Il définit ce que "correct" signifie pour ce projet, une fois, dans le repo. Chaque session IA et chaque Builder opère dans ce cadre. Le Gouvernant n'a pas besoin d'être présent à chaque tâche — le cadre fait le travail.

**Les Builders** dirigent l'exécution. Ils écrivent des issues claires, donnent à l'IA le bon contexte, revoient l'output, et committent. Leur valeur n'est pas la vitesse de frappe. C'est le jugement — savoir quand l'IA a bien fait et quand elle s'est trompée.

C'est l'équipe. Trois rôles. Pas de Scrum Master. Pas de cérémonies.

## Agile → Lytos : qui devient quoi

| Rôle Agile | Statut | Équivalent Lytos |
|---|---|---|
| Product Owner | Recentré | **PO** — stratège des outcomes, proche de l'utilisateur |
| Lead Developer | Élevé | **Gouvernant** — écrit le cadre, pas le code |
| Developer | Redéfini | **Builder** — dirige l'IA, relit, committe |
| Scrum Master | → Feature | Le process vit dans le repo. Le rôle devient optionnel. |
| QA | → Outillage | Absorbé par `rules/` + `lyt lint` |
| Agile Coach | Disparaît | La méthode est dans le repo, pas dans un consultant |

## Agile → Lytos : ce qui devient quoi

| Artifact / cérémonie Agile | Statut | Équivalent Lytos |
|---|---|---|
| Tickets Jira / Linear | → Repo | Issues dans `.lytos/issue-board/` |
| Docs Confluence / Notion | → Repo | `manifest.md`, `memory/`, ADRs |
| Conventions de code verbales | → Repo | `rules/` — versionnées, appliquées à chaque session |
| Definition of Done | → Repo | Champ `review` dans le frontmatter des issues |
| Sprint planning | Disparaît | Priorités dans le board, toujours à jour |
| Stand-up quotidien | Disparaît | L'état du board dans Git reflète la réalité |
| Rétrospective | Disparaît | Les issues et ADRs capturent ce qui compte |
| Sessions d'onboarding | Disparaît | Cloner le repo, lire `.lytos/` |

## Ce que ça permet

Une équipe de trois à cinq personnes, travaillant repo-first, peut aller plus vite et livrer plus proprement qu'une équipe Scrum deux fois plus grande — parce qu'il n'y a pas de couche de gestion à maintenir.

Ce n'est pas une feature de l'IA. C'est une feature du fait de supprimer l'écart entre là où le projet vit et là où le travail se passe.
