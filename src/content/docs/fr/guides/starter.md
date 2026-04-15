---
title: Comment ça marche
description: Comprends comment toi et ton IA travaillez ensemble avec Lytos — en 2 minutes.
---

## Tu parles. L'IA travaille. Lytos garde la trace.

> *"Déléguer à l'IA sans structure, c'est sous-traiter sans brief."*

C'est toute l'idée. Tu décris ce que tu veux construire. L'IA crée les tâches, code, teste et documente. Lytos s'assure que rien n'est perdu entre les sessions.

---

## C'est quoi une issue ?

Une issue c'est une **tâche écrite assez clairement pour que ton IA puisse l'exécuter**.

Pense à un post-it — mais un post-it qui dit exactement quoi faire, pourquoi, et comment savoir quand c'est fini.

**Une issue = une seule chose.** Comme construire une maison : on ne met pas "couler les fondations" et "poser le toit" sur le même post-it. Chaque issue a une responsabilité unique. Si tu dis "ajoute le login et aussi refais la homepage", ton IA va te demander de découper en deux issues — et elle aura raison.

Tu n'écris pas les issues. Tu décris ce que tu veux, et ton IA les crée pour toi.

---

## Le workflow

### Étape 1 — Dis ce que tu veux

```
Toi : "Je veux une landing page avec un formulaire d'inscription email pour une waitlist."
```

### Étape 2 — L'IA pose les bonnes questions

```
IA :  "Qu'est-ce qui se passe quand quelqu'un s'inscrit ? Juste sauvegarder l'email ?
       Tu veux vérifier les doublons ?"

Toi : "Oui, sauvegarder en base, vérifier les doublons, afficher un message de succès."
```

### Étape 3 — L'IA crée l'issue

L'IA transforme ta conversation en une tâche structurée :

> **ISS-0001 — Landing page avec inscription waitlist**
>
> - [ ] Créer la page HTML avec le formulaire
> - [ ] Créer l'endpoint API pour sauvegarder les emails
> - [ ] Ajouter la vérification de doublon
> - [ ] Afficher un message de succès après inscription
> - [ ] Écrire les tests

### Étape 4 — Tu relis et tu affines

> **Cette étape compte.** Prends 30 secondes pour relire l'issue. Il manque quelque chose ? Un cas particulier ? Une contrainte ? Ajoute-le maintenant — ça fait gagner des heures après.

```
Toi : "Ajoute une vérification que le format de l'email est valide avant de sauvegarder."

IA :  → Met à jour la checklist
```

### Étape 5 — L'IA construit

```
Toi : "On commence."
```

L'IA suit la checklist étape par étape. Elle code, teste, et te dit quand c'est fini.

### Étape 6 — Fermer et passer à la suite

```
Toi : "Ferme cette issue. C'est quoi la suite ?"
```

L'IA marque la tâche comme terminée, met à jour le board, et te propose la prochaine.

---

## Voir où tu en es

À tout moment, lance :

```bash
lyt board
```

Tu verras toutes tes tâches organisées par statut — ce qui est prévu, en cours, terminé. C'est ton tableau de bord projet.

---

## Ce que l'IA retient

À chaque session, l'IA lit le contexte de ton projet :
- **Ce que** tu construis (le manifest)
- **Comment** tu travailles (les skills et les rules)
- **Ce qui s'est passé avant** (la memory)

Tu ne réexpliques jamais ton projet. L'IA reprend là où elle s'est arrêtée.

---

## La règle d'or

**Mieux tu décris ce que tu veux, mieux l'IA livre.**

| Ce que tu dis | Ce que tu obtiens |
|--------------|------------------|
| "Fais-moi une app" | Code générique, suppositions fausses |
| "Fais-moi une app de tâches avec drag-and-drop, login, et mode sombre" | Plan précis, code ciblé |

Tu n'as pas besoin d'être technique. Tu as besoin d'être précis.

---

## Exemple concret — de l'idée au "done" en 4 échanges

```
Toi : "Je veux une landing page avec un formulaire d'inscription email."

IA :  "Waitlist ou newsletter ? Besoin de validation d'email ?"

Toi : "Waitlist. Juste sauvegarder l'email. Pas de validation pour l'instant.
       Mais ajoute une vérification de doublon."

IA :  → Crée l'issue avec la checklist complète
       → "Prêt à commencer ?"

Toi : "Go."

       ... L'IA construit, les tests passent ...

IA :  → "Terminé. Issue fermée. Board mis à jour. Prochaine issue ?"
```

4 échanges. Tu as parlé, l'IA a travaillé.

---

## Aller plus loin

- [Installer Lytos](/fr/getting-started/installation/) — si tu n'as pas encore installé
- [Guide Développeur](/fr/guides/developer/) — workflow quotidien, exemples d'interactions, bonnes pratiques
- [Guide Lead Développeur](/fr/guides/lead/) — superviser ton équipe, définir la méthode
