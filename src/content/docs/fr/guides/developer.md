---
title: Guide Développeur
description: Comment travailler efficacement avec l'IA en utilisant Lytos — guide pratique pour développeurs.
---

## Votre nouveau workflow

Avec Lytos, votre agent IA lit le contexte de votre projet au début de chaque session. Il connaît votre stack, vos conventions, vos règles, et ce qui s'est passé au dernier sprint. Votre rôle c'est de bien le diriger.

La qualité de ce que produit votre IA dépend d'une seule chose : **la qualité de vos issues.**

Une issue bien écrite avec du contexte, une checklist et une definition of done = du code précis et testable du premier coup. Une issue vague = du code générique qui nécessite 3 allers-retours.

---

## Le cycle quotidien

### 1. Démarrez votre session

Ouvrez votre outil IA. L'IA lit `.lytos/manifest.md`, `memory/MEMORY.md`, et `rules/`. Elle connaît déjà votre projet.

Dites :
```
"Montre-moi le board — sur quoi je dois travailler ?"
```

Ou lancez `lyt board` vous-même pour voir l'état du projet.

### 2. Prenez une issue

Choisissez une issue dans le sprint ou le backlog. Dites à votre IA :
```
"Je prends ISS-0042. Lis l'issue et on commence."
```

L'IA lit l'issue, charge le skill correspondant, et commence le travail.

### 3. Travaillez sur l'issue

Suivez la checklist de l'issue. L'IA applique le skill assigné (code-structure, api-design, testing...) et respecte les rules.

Si quelque chose d'imprévu arrive :
```
"Il y a un edge case sur [X], ajoute-le à la checklist."
"C'est plus gros que prévu. On devrait découper cette issue ?"
```

### 4. Fermez l'issue

Quand la checklist est complète :
```
"Tous les items sont faits. Ferme l'issue, mets à jour le board, et sauvegarde ce qu'on a appris en memory."
```

L'IA va :
- Mettre à jour le frontmatter de l'issue en `5-done`
- Déplacer le fichier dans `5-done/`
- Régénérer BOARD.md
- Écrire dans la memory si un apprentissage a eu lieu

---

## Parler à votre IA — exemples pratiques

### Avant de coder (brainstorm & architecture)

```
"Analyse l'architecture actuelle et propose une approche pour [feature]."
"Quels sont les trade-offs entre [option A] et [option B] ?"
"Crée une issue avec une checklist technique pour [tâche]."
"Comment vous implémenteriez [feature] vu les contraintes du manifest ?"
"Regarde memory/cortex/architecture.md — quelles décisions on a prises sur [sujet] ?"
```

### Pendant le code

```
"Quelle est la prochaine issue à traiter ?"
"Montre-moi le board : lyt board"
"Lance les tests avant de continuer."
"Cette fonction est trop longue — refactorise-la en suivant nos rules."
"Vérifie le skill security — on gère bien la validation des inputs ?"
```

### Après le code

```
"Ferme l'issue et mets à jour le board."
"Qu'est-ce qu'on a appris ? Sauvegarde en memory."
"Y a-t-il des items non cochés dans la checklist ?"
"Crée une issue de suivi pour [ce qu'on n'a pas fini]."
```

### Quand ça ne marche pas

```
"Regarde memory/cortex/bugs.md — on a déjà vu cette erreur ?"
"Cette approche marche pas. Quelles alternatives vu les contraintes du manifest ?"
"On revient en arrière et on essaie autrement. Crée une issue pour la nouvelle approche."
```

---

## Créer des issues — plus simple que vous ne croyez

**Vous n'écrivez pas les issues. Vous décrivez ce que vous voulez. L'IA structure pour vous.**

Le frontmatter YAML, la checklist, la definition of done — vous n'avez pas besoin d'apprendre ça. L'IA connaît le template et crée l'issue dans le bon format.

### Ce que vous faites : brainstormer

```
"Je veux ajouter un système de login avec Google OAuth."
```

L'IA pose les bonnes questions :
- "On doit supporter email/mot de passe aussi ou juste Google ?"
- "Vous avez besoin de rôles (admin, utilisateur) ?"
- "Quels endpoints doivent être protégés ?"

Puis elle crée l'issue avec la structure complète, la bonne priorité, et une checklist détaillée. Vous validez, c'est tout.

### Ce qui compte : la qualité de votre description

| Ce que vous dites | Ce qui se passe |
|--------------|----------------|
| "Ajouter un login" | L'IA devine tout — résultat générique |
| "Ajouter un login Google OAuth avec JWT, protéger les endpoints /api/*" | L'IA crée une issue précise — résultat ciblé |

Vous n'avez pas besoin de connaître le YAML. Vous avez besoin de savoir ce que vous voulez construire.

### Le cycle brainstorm → issue

```
Vous : "J'ai besoin de rate limiting sur l'API."
IA :   "Quelles limites ? Par utilisateur ? Par endpoint ? Que se passe-t-il en cas de dépassement ?"
Vous : "Par endpoint, 100 req/min, retourner 429 avec un header retry-after."
IA :   → Crée ISS-0042 avec checklist complète, assigne skill api-design + security
Vous : "Ça me va. On commence."
```

### Erreurs courantes

| Erreur | Problème | Correction |
|--------|----------|------------|
| "Corriger l'API" | Trop vague — l'IA va deviner | Décrire le problème précis et le comportement attendu |
| Sauter le brainstorm | L'IA crée une issue superficielle | Prenez 2 minutes pour discuter avant de créer |
| Valider sans lire | L'issue peut manquer des edge cases | Lisez la checklist, ajoutez ce qui manque |
| Trop gros | L'IA perd le fil | Demandez : "On peut découper en issues plus petites ?" |

---

## Utiliser `lyt board`

`lyt board` est votre cockpit projet. Lancez-le souvent.

```bash
lyt board           # Vue visuelle + régénère BOARD.md
lyt board --json    # Sortie machine
lyt board --check   # Check CI : BOARD.md est-il à jour ?
```

Le board montre :
- Les issues par statut (icebox → backlog → sprint → in progress → review → done)
- Les dépendances entre issues (vue arborescente)
- Les couleurs de priorité (P0 rouge, P1 jaune, P2 bleu)
- Le nombre de done (pas la liste complète — c'est dans l'archive)

---

## Memory — rendez votre IA plus intelligente au fil du temps

Après chaque tâche, demandez-vous : on a appris quelque chose que l'IA devrait retenir ?

**Sauvegarder en memory :**
- Décisions d'architecture et leur justification
- Patterns qui marchent bien dans ce projet
- Bugs et leurs causes racines
- Connaissances métier spécifiques

**Ne pas sauvegarder :**
- Snippets de code (ils vivent dans le code)
- Historique git (utilisez `git log`)
- Détails temporaires (ils vivent dans l'issue)

Dites à votre IA :
```
"Sauvegarde dans memory/cortex/patterns.md : on utilise [pattern] pour [raison]."
```

---

## Rules — votre pilote automatique qualité

Les rules sont appliquées automatiquement. Vous n'avez pas besoin de rappeler l'IA. Mais vous devez les connaître :

- Lisez `.lytos/rules/default-rules.md` une fois
- Si votre projet a besoin de rules spécifiques, ajoutez-les dans `rules/`
- Les rules se complètent — les rules projet ne remplacent pas les défauts

Les rules les plus impactantes sont celles spécifiques à votre projet. Les rules génériques attrapent les erreurs génériques. Vos rules attrapent vos erreurs.
