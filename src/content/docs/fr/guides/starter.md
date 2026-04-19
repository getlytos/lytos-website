---
title: Comment ça marche
description: Comprenez comment vous et votre IA travaillez ensemble avec Lytos — en 2 minutes.
---

## Vous parlez. L'IA travaille. Lytos garde la trace.

> *"Déléguer à l'IA sans structure, c'est sous-traiter sans brief."*

C'est toute l'idée. Vous décrivez ce que vous voulez construire. L'IA crée les tâches, code, teste et documente. Lytos s'assure que rien n'est perdu entre les sessions.

---

## C'est quoi une issue ?

Une issue c'est une **tâche écrite assez clairement pour que votre IA puisse l'exécuter**.

Pensez à un post-it — mais un post-it qui dit exactement quoi faire, pourquoi, et comment savoir quand c'est fini.

**Une issue = une seule chose.** Comme construire une maison : on ne met pas "couler les fondations" et "poser le toit" sur le même post-it. Chaque issue a une responsabilité unique. Si vous dites "ajoute le login et aussi refais la homepage", votre IA va vous demander de découper en deux issues — et elle aura raison.

Vous n'écrivez pas les issues. Vous décrivez ce que vous voulez, et votre IA les crée pour vous.

---

## Le workflow

### Étape 1 — Dites ce que vous voulez

```
Vous : "Je veux une landing page avec un formulaire d'inscription email pour une waitlist."
```

### Étape 2 — L'IA pose les bonnes questions

```
IA :   "Qu'est-ce qui se passe quand quelqu'un s'inscrit ? Juste sauvegarder l'email ?
        Vous voulez vérifier les doublons ?"

Vous : "Oui, sauvegarder en base, vérifier les doublons, afficher un message de succès."
```

### Étape 3 — L'IA crée l'issue

L'IA transforme votre conversation en une tâche structurée :

> **ISS-0001 — Landing page avec inscription waitlist**
>
> - [ ] Créer la page HTML avec le formulaire
> - [ ] Créer l'endpoint API pour sauvegarder les emails
> - [ ] Ajouter la vérification de doublon
> - [ ] Afficher un message de succès après inscription
> - [ ] Écrire les tests

### Étape 4 — Vous relisez et vous affinez

> **Cette étape compte.** Prenez 30 secondes pour relire l'issue. Il manque quelque chose ? Un cas particulier ? Une contrainte ? Ajoutez-le maintenant — ça fait gagner des heures après.

```
Vous : "Ajoute une vérification que le format de l'email est valide avant de sauvegarder."

IA :   → Met à jour la checklist
```

### Étape 5 — L'IA construit

```
Vous : "On commence."
```

L'IA suit la checklist étape par étape. Elle code, teste, et vous dit quand c'est fini.

### Étape 6 — Fermer et passer à la suite

```
Vous : "Ferme cette issue. C'est quoi la suite ?"
```

L'IA marque la tâche comme terminée, met à jour le board, et vous propose la prochaine.

---

## Voir où vous en êtes

À tout moment, lancez :

```bash
lyt board
```

Vous verrez toutes vos tâches organisées par statut — ce qui est prévu, en cours, terminé. C'est votre tableau de bord projet.

---

## Ce que l'IA retient

À chaque session, l'IA lit le contexte de votre projet :
- **Ce que** vous construisez (le manifest)
- **Comment** vous travaillez (les skills et les rules)
- **Ce qui s'est passé avant** (la memory)

Vous ne réexpliquez jamais votre projet. L'IA reprend là où elle s'est arrêtée.

---

## La règle d'or

**Mieux vous décrivez ce que vous voulez, mieux l'IA livre.**

| Ce que vous dites | Ce que vous obtenez |
|--------------|------------------|
| "Fais-moi une app" | Code générique, suppositions fausses |
| "Fais-moi une app de tâches avec drag-and-drop, login, et mode sombre" | Plan précis, code ciblé |

Vous n'avez pas besoin d'être technique. Vous avez besoin d'être précis.

---

## Exemple concret — de l'idée au "done" en 4 échanges

```
Vous : "Je veux une landing page avec un formulaire d'inscription email."

IA :   "Waitlist ou newsletter ? Besoin de validation d'email ?"

Vous : "Waitlist. Juste sauvegarder l'email. Pas de validation pour l'instant.
        Mais ajoute une vérification de doublon."

IA :   → Crée l'issue avec la checklist complète
        → "Prêt à commencer ?"

Vous : "Go."

        ... L'IA construit, les tests passent ...

IA :   → "Terminé. Issue fermée. Board mis à jour. Prochaine issue ?"
```

4 échanges. Vous avez parlé, l'IA a travaillé.

---

## Aller plus loin

- [Installer Lytos](/fr/getting-started/installation/) — si vous n'avez pas encore installé
- [Guide Développeur](/fr/guides/developer/) — workflow quotidien, exemples d'interactions, bonnes pratiques
- [Guide Lead Développeur](/fr/guides/lead/) — superviser votre équipe, définir la méthode
