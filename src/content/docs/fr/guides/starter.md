---
title: Ta Première Session
description: Commence à utiliser Lytos en 5 minutes — aucune connaissance technique requise.
---

## Installe Lytos

```bash
npm install -g lytos-cli
cd ton-projet
lyt init
```

Réponds aux 4 questions. C'est fait. Tu as un répertoire `.lytos/` dans ton projet.

---

## Ouvre ton outil IA et dis :

```
"Lis .lytos/LYTOS.md et aide-moi à configurer ce projet."
```

L'IA va :
1. Lire la méthode
2. Te poser des questions sur ton projet (ce qu'il fait, quelle stack, quelles contraintes)
3. Remplir le manifest pour toi

**Tu parles. L'IA écrit les fichiers.**

---

## Décris ce que tu veux construire

```
"Je veux créer une app de gestion de tâches avec authentification."
```

L'IA va :
1. Poser des questions de clarification ("Web ou mobile ? Quel provider d'auth ?")
2. Créer des issues (des tâches structurées) dans ton board
3. Les prioriser et te suggérer par où commencer

**Tu n'as pas besoin de savoir ce qu'est une issue.** L'IA les crée dans le bon format. Tu valides, c'est tout.

> **Conseil :** Prends 2 minutes pour relire les issues que l'IA a créées. Ajoute des détails si quelque chose manque. Une issue bien décrite fait gagner des heures de corrections plus tard. L'IA structure — toi tu valides et tu affines.

---

## Commence à construire

```
"On attaque la première issue."
```

L'IA lit l'issue, suit la procédure, et construit. Quand c'est fini :

```
"Ferme cette issue et montre-moi le board."
```

Lance `lyt board` à tout moment pour voir où tu en es :

```bash
lyt board
```

---

## C'est tout

Le cycle complet :

```
1. Décris ce que tu veux       → L'IA crée les issues
2. Choisis une issue           → L'IA la construit
3. Valide et ferme             → L'IA met à jour le board
4. Recommence                  → L'IA se souvient de ce qu'elle a appris
```

À chaque session, ton IA en sait plus sur ton projet. Plus besoin de réexpliquer. Plus besoin de recommencer.

---

## Exemple concret — de l'idée au "done" en 4 échanges

```
Toi : "Je veux une landing page avec un formulaire d'inscription email."

IA :  "Qu'est-ce qui se passe quand quelqu'un s'inscrit ? Newsletter ? Waitlist ?
       Tu as besoin de validation d'email ?"

Toi : "Waitlist. Juste sauvegarder l'email en base. Pas de validation pour l'instant."

IA :  → Crée ISS-0001 "Créer une landing page avec inscription waitlist"
       → Checklist : page HTML, formulaire, endpoint API, table en base, message de succès
       → Priorité : P1-high, Effort : M

Toi : "C'est bien mais ajoute une vérification de doublon d'email."

IA :  → Met à jour la checklist, ajoute la vérification
       → "Prêt à commencer ?"

Toi : "Go."

       ... L'IA construit, les tests passent ...

IA :  → "Terminé. Issue fermée. Board mis à jour. Tu veux voir la prochaine issue ?"
```

4 échanges. Pas de YAML. Pas de fichier de config à éditer. Tu as parlé, l'IA a travaillé.

---

## Tu veux aller plus loin ?

- [Guide Développeur](/fr/guides/developer/) — workflow quotidien, exemples d'interactions, bonnes pratiques
- [Guide Lead Développeur](/fr/guides/lead/) — définir la méthode, superviser l'équipe, scaler
