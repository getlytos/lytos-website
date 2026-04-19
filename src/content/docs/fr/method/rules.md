---
title: Rules
description: Les critères de qualité non-négociables — Standards, le troisième pilier de Lytos.
---

Les rules sont le troisième pilier de Lytos : **Standards**.

Les rules définissent ce que "bien fait" signifie. Ce sont des critères vérifiables, pas des recommandations vagues.

> *"Ce qui ne se vérifie pas ne se respecte pas."* Un agent IA les lit avant chaque tâche et les applique sans exception.

## Rules par défaut

Lytos inclut un fichier `default-rules.md` couvrant :

### Structure du code
| Règle | Seuil |
|-------|-------|
| Taille max d'un fichier | 300 lignes |
| Taille max d'une fonction | 30 lignes (50 max) |
| Imbrication maximum | 3 niveaux |
| Paramètres par fonction | 4 max |

### Documentation
- Docstrings obligatoires sur chaque fonction publique
- Commentaires inline uniquement pour expliquer le *pourquoi*, jamais le *quoi*

### Valeurs en dur — interdit
| Interdit | Remplacement |
|----------|-------------|
| Nombres magiques | Constante nommée (`MAX_RETRIES`, `SECONDS_PER_DAY`) |
| URLs en dur | Variable d'environnement ou fichier de config |
| Couleurs en dur | Variable CSS ou constante de thème |

### Gestion d'erreurs
- Pas de failures silencieux — chaque erreur doit être gérée explicitement
- Pas de `catch` vides
- Messages d'erreur clairs : quoi a échoué et pourquoi

### Tests
| Règle | Seuil |
|-------|-------|
| Couverture de tests unitaires | 80% des fonctions publiques minimum |
| Tests pour chaque nouvelle feature | Obligatoire avant merge |
| Tests pour chaque fix | Doit prouver que le bug ne revient pas |

### Sécurité
- Pas de secrets dans le code — clés API, tokens, mots de passe dans `.env` uniquement
- Inputs utilisateur échappés — protection contre injection, XSS
- Dépendances à jour — pas de vulnérabilités connues

## Ajouter des rules spécifiques au projet

Créez des fichiers supplémentaires dans `rules/` pour compléter les défauts :

```
rules/
├── default-rules.md      # Universelles (fournies par Lytos)
└── api-rules.md           # Vos rules spécifiques
```

Les rules spécifiques **complètent** les défauts — elles ne les remplacent pas.

## En savoir plus

- [Exemples de règles pour IA de codage : critères vérifiables](/fr/method/rules/ai-coding-rules-examples/) — un jeu de rules concret (taille fichier, taille fonction, couverture, nommage) et l'anatomie d'une rule que votre IA respectera réellement.
