---
title: "Comment écrire un skill pour un agent IA : guide pratique"
description: "Un skill pour un agent IA est un fichier markdown court avec quatre sections — Purpose, Procedure, Output, Checklist. Voici le template et un exemple concret."
---

*Un skill, c'est le "comment" d'une tâche — impératif, court, réutilisable de session en session.*

## La réponse courte

Pour écrire un skill pour un agent IA, créez un fichier markdown court — en général sous les 200 lignes — avec quatre sections : **Purpose** (quand l'utiliser), **Procedure** (étapes numérotées), **Output** (à quoi ressemble "fait"), et **Checklist** (vérifications avant de rendre). Restez impératif et concret. Un skill par type de tâche, pas un skill par rôle.

## Pourquoi des skills, et pas des prompts

Un prompt, c'est quelque chose qu'on écrit une fois, dans l'instant, et qu'on perd. Un skill, c'est une procédure qu'on écrit une fois et qu'on réutilise à chaque session qui en a besoin. Quand l'agent prend une tâche de code review, il charge `code-review.md` et suit les mêmes étapes que l'équipe a validées — que la session ait lieu aujourd'hui, dans un mois, ou avec un autre membre de l'équipe aux commandes.

Les skills remplacent le savoir tribal. Le pattern qu'on voit dans les équipes qui démarrent le développement assisté par IA : la qualité dépend énormément de qui est aux commandes — parce que le "comment" d'une review, d'une conception d'API ou d'un déploiement vit dans la tête d'une seule personne. Un skill déplace ce savoir vers un fichier que tout le monde (humain ou IA) peut lire.

Un bon skill est étroit. Il couvre un type de tâche, n'essaie pas d'être un manifeste, et fait confiance au manifest et aux rules pour porter le contexte projet.

## Le template

```markdown
# Skill : <nom>

## Purpose

Quand utiliser ce skill. Une ou deux phrases. Exemple :
"Utiliser ce skill lors d'une review de pull request, qu'il s'agisse
d'une self-review ou de la review d'un autre contributeur."

## Procedure

Étapes numérotées, impératives. Pas de narratif.

1. Lire le frontmatter de l'issue ; confirmer que le scope correspond à la PR.
2. Lancer `lyt lint` et vérifier qu'il passe.
3. Pour chaque fichier modifié :
   - Vérifier contre `.lytos/rules/default-rules.md`.
   - Vérifier contre les règles propres au projet.
   - Signaler tout ce qui dépasse le seuil de complexité.
4. Vérifier que les tests couvrent les nouveaux comportements (voir `testing.md`).
5. Écrire les commentaires de review au format standard (voir Output).

## Output

À quoi ressemble "fait" pour ce skill :
- Un commentaire de review sur la PR, ou une approbation.
- Le commentaire suit le format :
  `[<sévérité>] <fichier>:<ligne> — <problème> — <correction proposée>`

## Checklist

Avant de marquer terminé :
- [ ] Toutes les règles de `default-rules.md` vérifiées
- [ ] Tests vérifiés pour chaque nouveau chemin de code
- [ ] Aucun secret ou valeur en dur ne s'est glissé
- [ ] Taille de la PR sous le seuil de 400 lignes (ou justifiée)
```

Un skill qui respecte ce template fait environ 40 à 150 lignes. Au-delà de 200 lignes, c'est souvent que deux skills se font passer pour un, ou que rules et skills se mélangent.

## Questions fréquentes

**Q : Quand créer un nouveau skill plutôt qu'en enrichir un existant ?**
R : Créez un nouveau skill quand le **type de tâche** est différent — reviewer du code, écrire des tests, concevoir une API, livrer un déploiement sont distincts. Enrichissez un skill existant quand la procédure gagne une étape qui s'appliquait déjà.

**Q : Comment l'agent sait-il quel skill charger ?**
R : Les issues du board déclarent un champ `skill:` dans leur frontmatter (et un `skills_aux:` optionnel). Le skill session-start lit ce champ et charge la procédure correspondante. Pas de devinette.

**Q : Les skills doivent-ils référencer les rules ?**
R : Oui — mais référencer, pas dupliquer. `rules/` est la source de vérité pour les seuils. Le skill dit "vérifier contre default-rules.md" ; il ne réécrit pas les règles.

**Q : Comment versionner les skills dans le temps ?**
R : Les skills vivent dans git. Chaque changement est un commit. Pour les évolutions significatives, ajoutez une petite section "Changelog" en bas du fichier — l'agent peut la lire, et les futurs contributeurs aussi.

**Q : Un skill peut-il appeler un autre skill ?**
R : Informellement, oui — un skill peut en référencer un autre ("voir `testing.md` pour la procédure d'écriture de tests"). Gardez les références explicites et les chaînes courtes.

## Pour aller plus loin

- Lire le pilier parent : [Skills](/fr/method/skills/)
- Voir aussi : [Exemples de règles pour IA de codage](/fr/method/rules/ai-coding-rules-examples/)
- Lien externe : [Documentation Anthropic sur les agent skills](https://docs.anthropic.com/en/docs/claude-code/overview)

## Essayer Lytos en 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

Voir le CLI sur [npm](https://www.npmjs.com/package/lytos-cli) · La méthode sur [GitHub](https://github.com/getlytos/lytos-method).
