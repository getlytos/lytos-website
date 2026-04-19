---
title: "Exemples de règles pour IA de codage : critères vérifiables"
description: "Exemples concrets de règles pour IA de codage : taille de fichier, taille de fonction, nommage, couverture de tests. Ce qui fait une bonne règle, intégration CI."
---

*Des règles que l'IA peut vérifier avant de rendre son code — mesurables, étroites, défendables.*

## La réponse courte

Les bonnes règles pour une IA de codage sont **vérifiables** : l'IA (ou un linter) peut décider pass/fail sans faire appel au goût. Taille de fichier sous 300 lignes. Fonctions sous 30 lignes. Aucun secret en dur. 80 % de couverture de tests sur les fonctions publiques. Ce sont les règles qui méritent d'être écrites, parce que l'agent peut les vérifier avant de rendre un diff — et les humains peuvent les auditer en review.

## À quoi ressemble une bonne règle

Une règle mérite d'être écrite quand trois choses sont vraies : elle est mesurable, elle est assez étroite pour s'appliquer à un seul changement, et vous pouvez la défendre quand on la conteste.

- **Mesurable** — "max 30 lignes par fonction" est mesurable. "Garder les fonctions courtes" est une préférence.
- **Étroite** — "pas de nombres magiques" s'applique fichier par fichier. "Suivre la clean architecture" non.
- **Défendable** — quelqu'un poussera la contestation. Une bonne règle a une justification en deux phrases (lisibilité, coût de review, budget runtime).

Les règles qui ratent l'un de ces trois points finissent ignorées ou débattues à chaque PR. Nous voyons ce pattern dans les équipes que nous accompagnons : les équipes avec 40 règles vagues produisent du code moins cohérent que les équipes avec 10 règles nettes.

## Un `default-rules.md` qui tient

Un exemple concret — une version réduite de ce que `lyt init` génère :

```markdown
# Règles par défaut

Ces règles sont vérifiables. L'IA les contrôle avant de rendre le code.
`lyt lint` les contrôle aussi en CI.

## Structure de code

| Règle | Seuil | Pourquoi |
|------|-------|----------|
| Taille de fichier max | 300 lignes | Un fichier reviewable d'un écran |
| Taille de fonction max | 30 lignes (50 absolu) | Force une responsabilité unique |
| Profondeur d'imbrication | 3 niveaux | Au-delà, une fonction manque |
| Paramètres par fonction | 4 max | Au-delà, passer un objet |

## Valeurs en dur — interdites

| Interdit | Remplacement |
|----------|--------------|
| Nombres magiques | Constante nommée (`MAX_RETRIES = 3`) |
| URLs en dur | Variable d'environnement |
| Couleurs en dur | Variable CSS ou token de thème |

## Gestion d'erreurs

- Pas de silent failure — toute erreur est gérée explicitement.
- Pas de `catch` vide.
- Messages d'erreur : ce qui a raté et pourquoi.

## Tests

| Règle | Seuil |
|------|-------|
| Couverture unitaire sur fonctions publiques | 80 % minimum |
| Chaque nouvelle feature | Tests requis avant merge |
| Chaque fix | Un test qui prouve que le bug ne revient pas |

## Sécurité

- Pas de secrets dans le code — clés API, tokens, mots de passe dans `.env` uniquement.
- Inputs utilisateurs échappés à la frontière.
- Dépendances avec CVE connues : merge bloqué.

## Git

- Format de commit : `type(scope): message`
- Branche par issue : `type/ISS-XXXX-slug`
- Pas de push direct sur main — tout passe par PR.
```

Chaque ligne ci-dessus est une règle que l'IA peut littéralement vérifier. L'agent lit ce fichier au démarrage de session, et le skill `session-start` lui demande de contrôler les règles avant de rendre un changement.

## À quoi ressemble une mauvaise règle

Quelques exemples de règles vues en pratique qui tendent à ne pas tenir :

- "Écrire du code propre." — Pas mesurable. Propre selon qui ?
- "Utiliser la clean architecture." — Étroite ? Non. Défendable ? Pas sans 20 pages de contexte.
- "Préférer le style fonctionnel." — Question de goût. Sera débattu à chaque PR.
- "Les commentaires doivent être utiles." — Toute règle devrait l'être.

Ce n'est pas faux comme aspirations ; c'est faux comme règles. Ces éléments appartiennent à un guide de style ou au manifest, pas à un fichier qui prétend trancher pass/fail.

## Intégration avec le lint et la CI

Les règles qui recoupent ce qu'un linter sait faire devraient être vérifiées par le linter. ESLint, Ruff, golangci-lint, rubocop — chacun impose une part des règles mécaniquement. Le fichier de règles IA devient alors la **spécification** que le linter implémente, plus les règles qu'un linter vérifie difficilement (secrets, seuils de couverture, "pas de TODO en prod").

`lyt lint` parcourt les règles et lance les deux : les checks du linter, plus quelques checks au niveau du dépôt (secrets, seuils de taille de fichier, minimums de couverture). En CI, la commande tourne à chaque PR. En local, l'IA la lance avant de rendre un changement.

## Questions fréquentes

**Q : Les règles peuvent-elles différer entre projets ?**
R : Oui. Gardez `default-rules.md` universel et ajoutez un `project-rules.md` pour les seuils propres au projet (un système temps réel peut avoir d'autres règles de latence qu'un batch).

**Q : Et si l'équipe n'est pas d'accord sur une règle ?**
R : Les arguments sont utiles — ils révèlent si la règle est défendable. Gardez celles dont la justification est claire ; laissez tomber celles qui ne sont que des habitudes.

**Q : Peut-on avoir des règles par langage ?**
R : Oui — un fichier de règles par langage convient très bien (`rules/python.md`, `rules/typescript.md`), chargés depuis l'index.

## Pour aller plus loin

- Lire le pilier parent : [Rules](/fr/method/rules/)
- Voir aussi : [Comment écrire un skill pour un agent IA](/fr/method/skills/how-to-write-a-skill/)
- Lien externe : [Documentation des pratiques d'ingénierie Google](https://google.github.io/eng-practices/)

## Essayer Lytos en 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

Voir le CLI sur [npm](https://www.npmjs.com/package/lytos-cli) · La méthode sur [GitHub](https://github.com/getlytos/lytos-method).
