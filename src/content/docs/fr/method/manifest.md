---
title: Manifest
description: La constitution du projet — Intent, le premier pilier de Lytos.
---

Le manifest est le premier pilier de Lytos : **Intent**.

Il répond à la question dont tout agent IA a besoin avant de faire quoi que ce soit d'utile : *c'est quoi ce projet, et pourquoi il existe ?*

## Ce qu'il contient

Le manifest est un seul fichier — `manifest.md` — placé à la racine de `.lytos/`. Il définit :

| Section | Ce qu'elle répond |
|---------|-------------------|
| **Identité** | Nom, description, propriétaire, repo, version |
| **Pourquoi ce projet existe** | Le problème qu'il résout, la valeur qu'il crée |
| **Ce que c'est / ce que ce n'est pas** | Des limites claires pour éviter le scope creep |
| **Stack technique** | Langage, framework, base de données, CI/CD, hébergement |
| **Vocabulaire projet** | Les termes métier que l'IA doit comprendre |
| **Contraintes fondamentales** | Règles non-négociables (offline-first, zero deps, no telemetry...) |
| **Principes de développement** | Comment décider quand deux approches semblent équivalentes |

## Pourquoi c'est important

> *"Déléguer à l'IA sans structure, c'est sous-traiter sans brief."*

Sans manifest, un agent IA produit du code générique. Il ne sait pas si votre projet est une bibliothèque ou un SaaS, si vous préférez REST ou GraphQL, si vous déployez sur AWS ou un Raspberry Pi.

Le manifest est lu au début de **chaque session**. C'est la première chose que l'agent charge, avant les skills, les rules ou la memory.

## Exemple

```markdown
## Identité

| Champ | Valeur |
|-------|--------|
| Nom | bookshelf-api |
| Description | API REST pour la gestion de collections de livres |
| Propriétaire | Jane Doe (@janedoe) |
| Stack | Python 3.12, FastAPI, PostgreSQL, Docker |

## Pourquoi ce projet existe

Les bibliothèques ont besoin d'une API moderne pour gérer leurs collections.
Le système actuel est un monolithe PHP vieux de 15 ans.

## Contraintes fondamentales

- Tous les endpoints doivent retourner du JSON
- Pas de breaking changes sans période de dépréciation
- Temps de réponse < 200ms pour les opérations de lecture
```

## Bonnes pratiques

- **Soyez spécifique, pas aspirationnel.** Écrivez ce que le projet *est*, pas ce que vous voudriez qu'il soit.
- **Mettez-le à jour quand le projet évolue.** Le manifest est un document vivant.
- **Reste sous 150 lignes.** Si c'est plus long, une partie du contenu appartient à la memory ou aux rules.
