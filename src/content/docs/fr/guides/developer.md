---
title: Guide Développeur
description: Comment travailler efficacement avec l'IA en utilisant Lytos — guide pratique pour développeurs.
---

## Ton nouveau workflow

Avec Lytos, ton agent IA lit le contexte de ton projet au début de chaque session. Il connaît ta stack, tes conventions, tes règles, et ce qui s'est passé au dernier sprint. Ton rôle c'est de bien le diriger.

La qualité de ce que produit ton IA dépend d'une seule chose : **la qualité de tes issues.**

Une issue bien écrite avec du contexte, une checklist et une definition of done = du code précis et testable du premier coup. Une issue vague = du code générique qui nécessite 3 allers-retours.

---

## Le cycle quotidien

### 1. Démarre ta session

Ouvre ton outil IA. L'IA lit `.lytos/manifest.md`, `memory/MEMORY.md`, et `rules/`. Elle connaît déjà ton projet.

Dis :
```
"Montre-moi le board — sur quoi je dois travailler ?"
```

Ou lance `lyt board` toi-même pour voir l'état du projet.

### 2. Prends une issue

Choisis une issue dans le sprint ou le backlog. Dis à ton IA :
```
"Je prends ISS-0042. Lis l'issue et on commence."
```

L'IA lit l'issue, charge le skill correspondant, et commence le travail.

### 3. Travaille sur l'issue

Suis la checklist de l'issue. L'IA applique le skill assigné (code-structure, api-design, testing...) et respecte les rules.

Si quelque chose d'imprévu arrive :
```
"Il y a un edge case sur [X], ajoute-le à la checklist."
"C'est plus gros que prévu. On devrait découper cette issue ?"
```

### 4. Ferme l'issue

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

## Parler à ton IA — exemples pratiques

### Avant de coder (brainstorm & architecture)

```
"Analyse l'architecture actuelle et propose une approche pour [feature]."
"Quels sont les trade-offs entre [option A] et [option B] ?"
"Crée une issue avec une checklist technique pour [tâche]."
"Comment tu implémenterais [feature] vu les contraintes du manifest ?"
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

## Créer des issues — plus simple que tu ne crois

**Tu n'écris pas les issues. Tu décris ce que tu veux. L'IA structure pour toi.**

Le frontmatter YAML, la checklist, la definition of done — tu n'as pas besoin d'apprendre ça. L'IA connaît le template et crée l'issue dans le bon format.

### Ce que tu fais : brainstormer

```
"Je veux ajouter un système de login avec Google OAuth."
```

L'IA pose les bonnes questions :
- "On doit supporter email/mot de passe aussi ou juste Google ?"
- "Tu as besoin de rôles (admin, utilisateur) ?"
- "Quels endpoints doivent être protégés ?"

Puis elle crée l'issue avec la structure complète, la bonne priorité, et une checklist détaillée. Tu valides, c'est tout.

### Ce qui compte : la qualité de ta description

| Ce que tu dis | Ce qui se passe |
|--------------|----------------|
| "Ajouter un login" | L'IA devine tout — résultat générique |
| "Ajouter un login Google OAuth avec JWT, protéger les endpoints /api/*" | L'IA crée une issue précise — résultat ciblé |

Tu n'as pas besoin de connaître le YAML. Tu as besoin de savoir ce que tu veux construire.

### Le cycle brainstorm → issue

```
Toi : "J'ai besoin de rate limiting sur l'API."
IA :  "Quelles limites ? Par utilisateur ? Par endpoint ? Que se passe-t-il en cas de dépassement ?"
Toi : "Par endpoint, 100 req/min, retourner 429 avec un header retry-after."
IA :  → Crée ISS-0042 avec checklist complète, assigne skill api-design + security
Toi : "Ça me va. On commence."
```

### Erreurs courantes

| Erreur | Problème | Correction |
|--------|----------|------------|
| "Corriger l'API" | Trop vague — l'IA va deviner | Décrire le problème précis et le comportement attendu |
| Sauter le brainstorm | L'IA crée une issue superficielle | Prends 2 minutes pour discuter avant de créer |
| Valider sans lire | L'issue peut manquer des edge cases | Lis la checklist, ajoute ce qui manque |
| Trop gros | L'IA perd le fil | Demande : "On peut découper en issues plus petites ?" |

---

## Utiliser `lyt board`

`lyt board` est ton cockpit projet. Lance-le souvent.

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

## Memory — rends ton IA plus intelligente au fil du temps

Après chaque tâche, demande-toi : on a appris quelque chose que l'IA devrait retenir ?

**Sauvegarder en memory :**
- Décisions d'architecture et leur justification
- Patterns qui marchent bien dans ce projet
- Bugs et leurs causes racines
- Connaissances métier spécifiques

**Ne pas sauvegarder :**
- Snippets de code (ils vivent dans le code)
- Historique git (utilise `git log`)
- Détails temporaires (ils vivent dans l'issue)

Dis à ton IA :
```
"Sauvegarde dans memory/cortex/patterns.md : on utilise [pattern] pour [raison]."
```

---

## Rules — ton pilote automatique qualité

Les rules sont appliquées automatiquement. Tu n'as pas besoin de rappeler l'IA. Mais tu dois les connaître :

- Lis `.lytos/rules/default-rules.md` une fois
- Si ton projet a besoin de rules spécifiques, ajoute-les dans `rules/`
- Les rules se complètent — les rules projet ne remplacent pas les défauts

Les rules les plus impactantes sont celles spécifiques à ton projet. Les rules génériques attrapent les erreurs génériques. Tes rules attrapent tes erreurs.
