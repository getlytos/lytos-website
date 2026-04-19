---
title: Guide Lead Développeur
description: Comment architecturer, superviser et scaler le développement assisté par IA avec Lytos.
---

## Votre nouveau rôle

Vous n'êtes plus un relecteur de code. Vous êtes un **architecte de système**.

L'ancien modèle : lire chaque PR, vérifier le style, attraper les bugs, imposer les conventions. Avec Lytos, l'IA fait ça — elle suit les skills, respecte les rules, et applique les patterns de la memory.

Votre nouveau job : **définir le système qui fait que l'IA produit du bon travail.** Le manifest, les rules, le sprint, la memory. C'est plus impactant que de lire des diffs.

---

## Vos 4 responsabilités

### 1. Définir l'Intent (manifest)

Le manifest est le fichier le plus impactant que vous écrirez. Un bon manifest = chaque session IA démarre avec le bon contexte. Un mauvais manifest = chaque session démarre en devinant.

**Écrivez-le comme un briefing pour un nouveau développeur :**
- Ce que ce projet est (et ce qu'il N'EST PAS)
- La stack technique et pourquoi ces choix
- Les contraintes non-négociables
- Les principes de développement comme des trade-offs : "on préfère X plutôt que Y parce que Z"

**Mettez-le à jour quand le projet évolue.** Un manifest obsolète est pire que pas de manifest — l'IA suivra des instructions périmées avec confiance.

### 2. Poser les Standards (rules)

Les rules par défaut couvrent les bases (fichiers de 300 lignes, pas de valeurs magiques, couverture de tests). Votre job c'est d'ajouter des **rules spécifiques au projet** qui encodent les décisions de votre équipe.

Bonnes rules projet :
```markdown
| Rule | Détail |
|------|--------|
| Réponses API | Toujours utiliser le wrapper ResponseDTO |
| Codes d'erreur | Doivent suivre notre catalogue dans docs/errors.md |
| Base de données | Pas de SQL brut — utiliser le query builder |
| Nommage | Services = verbes (createUser), modèles = noms (User) |
```

Mauvaises rules : "écrire du code propre", "suivre les bonnes pratiques", "faire attention aux performances". Ce n'est pas vérifiable.

**Le test : est-ce qu'un linter pourrait vérifier cette rule ?** Si oui, c'est une bonne rule.

### 3. Planifier le Progress (sprint)

Votre sprint est la feuille de route de l'IA. Quand vous définissez bien les issues, l'IA exécute bien.

**Pour chaque issue, définissez :**
- `skill` — quelle procédure l'IA suit
- `skills_aux` — quelles contraintes supplémentaires s'appliquent
- `depends` — ce qui doit être fait avant
- `effort` — S/M/L (si XL, découpez)
- `complexity` — light/standard/heavy (détermine quel tier de modèle utiliser)

**Le graphe de dépendances compte.** Lancez `lyt board` pour le voir. Les issues sans dépendances peuvent être parallélisées. Les issues avec dépendances doivent être séquencées.

### 4. Entretenir la Memory

La memory est ce qui rend le 10ème sprint meilleur que le 1er. Votre rôle c'est de vous assurer qu'elle reste propre et pertinente.

**Après chaque sprint :**
```
"Revois memory/cortex/. Qu'est-ce qui est obsolète ? Qu'est-ce qu'on devrait consolider ?"
"Mets à jour memory/cortex/sprints.md avec la rétrospective de ce sprint."
```

**Consolidez régulièrement.** 20 entrées sur le même sujet doivent devenir 1 synthèse bien écrite. La memory doit grandir en qualité, pas juste en quantité.

---

## Comment review le travail de l'IA

Vous ne lisez plus le code ligne par ligne. Vous validez à un niveau supérieur :

| Ancienne review (code) | Nouvelle review (Lytos) |
|------------------------|------------------------|
| Vérifier les noms de variables | Les rules sont-elles respectées ? (`lyt lint` automatisera ça) |
| Vérifier le style | Le manifest est-il à jour ? |
| Lire le diff | L'issue est-elle bien résolue ? Le résultat correspond-il à l'intention ? |
| Attraper les bugs | Les tests passent ? La couverture est-elle suffisante ? |
| Imposer les conventions | La memory devrait-elle être mise à jour ? |

**Votre checklist de review :**
1. Le résultat correspond-il à la definition of done de l'issue ?
2. Des items de la checklist ont-ils été sautés ?
3. Faut-il créer une issue de suivi ?
4. L'IA a-t-elle appris quelque chose qui devrait aller en memory ?
5. Le manifest est-il toujours exact après ce changement ?

---

## Parler à votre IA — exemples pour le lead

### Planification de sprint

```
"Lis le backlog et propose quelles issues mettre dans le prochain sprint."
"Quel est le graphe de dépendances ? Montre-moi le chemin critique."
"ISS-0042 est trop gros. Découpe-le en 2-3 issues plus petites."
"Estime l'effort de chaque issue du sprint."
```

### Supervision

```
"lyt board — où en est-on ?"
"Quelles issues sont bloquées ? Pourquoi ?"
"Y a-t-il des issues in progress qui devraient être fermées ?"
"Montre-moi ce qui a changé dans la memory ce sprint."
```

### Décisions d'architecture

```
"On doit choisir entre [A] et [B]. Analyse les trade-offs."
"Documente cette décision dans memory/cortex/architecture.md."
"Mets à jour le manifest — on a changé notre approche sur [X]."
```

### Onboarding d'un nouveau dev

```
"Lis le manifest et explique ce projet à un nouveau développeur."
"Quelles sont les 3 rules les plus importantes pour ce projet ?"
"Montre le board du sprint et explique ce que fait chaque issue."
```

---

## Scaler à une équipe

### Un board par repo

Chaque repo a son propre `.lytos/issue-board/` avec une numérotation indépendante. Pour le travail cross-repo, créez une issue par repo et liez-les dans la section contexte.

### Assignations

Quand `lyt claim` sera disponible, chaque développeur prend son issue. Le board montre qui travaille sur quoi. Pas deux développeurs sur la même issue.

### Discipline de sprint

- Le sprint démarre avec un scope clair (issues en `2-sprint`)
- Quotidien : `lyt board` pour voir l'avancement
- Fin de sprint : toutes les issues soit done soit remises en backlog avec une note
- Rétrospective : mettre à jour la memory, consolider les apprentissages

---

## L'effet cumulatif

Chaque sprint laisse derrière lui :
- Des issues résolues (progrès)
- De la memory mise à jour (savoir)
- Des rules affinées (qualité)
- Des patterns documentés (cohérence)

Après 5 sprints, votre IA n'est plus la même IA. Elle a le contexte de votre projet, les décisions de votre équipe, la connaissance de votre domaine. Elle ne devine plus — elle sait.

**C'est le vrai job du lead : construire un système qui devient plus intelligent au fil du temps.**

---

## La cohérence d'équipe — ce qui était impossible avant

En développement traditionnel, vous ne pouvez pas demander à 10 développeurs de coder pareil. Conventions, linters, code reviews — ça réduit les écarts, ça ne les élimine jamais.

Avec l'IA + Lytos, c'est différent. Un manifest, des rules, des skills — partagés par toute l'équipe. Chaque développeur brainstorme et valide. Le code est produit par le même moteur, avec le même contexte.

Le résultat : un projet à 10 développeurs qui a **une seule voix**. Pas parce qu'on a forcé des humains à coder pareil — mais parce que la structure garantit la cohérence.

> *"Le développeur brainstorme. Lytos harmonise."*

> *"L'humain n'écrit pas chaque ligne. Il définit le monde."*
