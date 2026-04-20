---
title: "Comment écrire un skill pour un agent IA : guide pratique du format agentskills.io"
description: "Un skill d'agent IA est un dossier contenant un fichier SKILL.md avec deux champs de frontmatter (name, description) et un corps markdown libre. Voici le template, un exemple complet, et comment la progressive disclosure le charge à la demande."
---

*Un skill, c'est le "comment" d'une tâche — impératif, court, réutilisable de session en session et d'un outil à l'autre.*

## La réponse courte

Pour écrire un skill d'agent IA, créez un dossier nommé d'après le skill, avec un fichier `SKILL.md` dedans. Le fichier a deux champs obligatoires dans son frontmatter — `name` et `description` — suivis d'instructions en markdown libre. Le format est le standard ouvert [agentskills.io](https://agentskills.io), supporté nativement par Claude Code, Cursor, Codex, Gemini CLI, GitHub Copilot, Goose, et la plupart des outils IA de code modernes. Gardez le corps impératif et concret, un skill par type de tâche.

## Pourquoi un format standard, et pas un prompt

Un prompt, c'est quelque chose qu'on écrit une fois, dans l'instant, et qu'on perd. Un skill, c'est une procédure qu'on écrit une fois et qu'on réutilise à chaque session qui en a besoin. Comme le format est standardisé, le même skill fonctionne que la session tourne dans Claude Code sur votre laptop, dans Cursor sur la machine d'un collègue, ou dans un job CI piloté par OpenAI Codex.

Les skills remplacent le savoir tribal. Dans les équipes qui s'appuient sur le développement assisté par IA, la qualité dépend énormément de qui est aux commandes — parce que le "comment" d'une review, d'une conception d'API, d'un déploiement, vit souvent dans la tête d'une seule personne. Un skill déplace ce savoir dans un fichier que tout le monde (humain ou IA) peut lire, et le format agentskills.io rend ce fichier portable entre outils.

Un bon skill est étroit. Il couvre un type de tâche, n'essaie pas d'être un manifeste, et fait confiance au manifest et aux rules pour porter le contexte projet.

## Le format

Un skill est un **dossier**, pas un fichier à plat :

```
mon-skill/
├── SKILL.md          # Requis : instructions + métadonnées
├── scripts/          # Optionnel : scripts d'aide exécutables
├── references/       # Optionnel : matériel de référence détaillé
└── assets/           # Optionnel : templates, fichiers de données
```

Le fichier `SKILL.md` a deux champs obligatoires dans son frontmatter et un corps markdown sans contrainte de format :

```markdown
---
name: code-review
description: Effectuer une revue de code structurée — quoi vérifier, dans quel ordre, et comment formuler un retour constructif. À utiliser avant de merger une PR, sur demande pour un fichier ou un module, ou pour un audit qualité de fin de sprint.
---

# Skill — Code Review

## Quand invoquer ce skill

- Avant chaque merge de PR
- Sur demande explicite de l'humain, sur un fichier ou un module
- En fin de sprint, pour un audit qualité global

## Procédure

1. Lire le frontmatter de l'issue ; confirmer que le scope correspond à la PR.
2. Lancer `lyt lint` et vérifier qu'il passe.
3. Pour chaque fichier modifié :
   - Vérifier contre `.lytos/rules/default-rules.md`.
   - Vérifier contre les règles propres au projet.
   - Signaler tout ce qui dépasse le seuil de complexité.
4. Vérifier que les tests couvrent les nouveaux comportements.
5. Écrire les commentaires de review au format standard.

## Output

Un commentaire de review sur la PR, ou une approbation, au format :
`[<sévérité>] <fichier>:<ligne> — <problème> — <correction proposée>`

## Checklist

- [ ] Toutes les règles de `default-rules.md` vérifiées
- [ ] Tests vérifiés pour chaque nouveau chemin de code
- [ ] Aucun secret ou valeur en dur ne s'est glissé
- [ ] Taille de la PR sous le seuil de 400 lignes (ou justifiée)
```

Un skill qui respecte cette forme fait environ 40 à 200 lignes. Au-delà de 500 lignes (la limite douce recommandée par la spec agentskills.io), c'est généralement que deux skills se font passer pour un, ou que rules et skills se mélangent — déportez le détail dans un sous-dossier `references/`.

### La description compte plus qu'on ne croit

La description, c'est ce que l'outil IA utilise au démarrage de session pour décider si le skill est pertinent. Elle doit couvrir à la fois **ce que** fait le skill et **quand** l'utiliser, et elle doit inclure des mots-clés concrets que l'agent pourra matcher avec les descriptions de tâches.

Une description faible (« Aide pour les reviews. ») laisse l'outil deviner. Une description forte (« Revue de code structurée — quoi vérifier, dans quel ordre. À utiliser avant de merger une PR, sur demande pour un fichier ou module, ou pour un audit qualité de fin de sprint. ») dit à l'agent exactement quand charger le skill.

## Progressive disclosure : comment l'agent choisit le skill

Vous n'avez pas à dire à l'agent quel skill utiliser. Les outils modernes découvrent les skills automatiquement via la **progressive disclosure** :

1. **Chargement des métadonnées** (~100 tokens par skill) — au démarrage de session, l'outil lit uniquement le `name` et la `description` de chaque skill disponible.
2. **Activation** — quand la tâche courante matche la description d'un skill, l'outil charge le corps complet du `SKILL.md` dans le contexte.
3. **Descente plus profonde** — si le `SKILL.md` référence un script ou un fichier dans `references/`, l'outil le charge seulement s'il en a besoin.

Effet pratique : même avec des dizaines de skills, l'agent ne paie le coût complet en contexte que de celui qui compte pour la tâche en cours.

## Valider votre skill

Utilisez l'outil de référence officiel pour vérifier la propreté du format :

```bash
npx skills-ref validate ./mon-skill
```

Il vérifie les contraintes du frontmatter (nom conforme à la spec, description non vide et sous les 1024 caractères) et la structure du dossier.

## Questions fréquentes

**Q : Quand créer un nouveau skill plutôt qu'en enrichir un existant ?**
R : Créez un nouveau skill quand le **type de tâche** est différent — reviewer du code, écrire des tests, concevoir une API, livrer un déploiement sont distincts. Enrichissez un skill existant quand la procédure gagne une étape qui s'appliquait déjà.

**Q : Comment l'agent choisit-il quel skill charger ?**
R : Par progressive disclosure. Au démarrage, l'outil lit le name + la description de chaque skill. Quand une tâche arrive, il la compare à chaque description et charge le `SKILL.md` complet du match. Si vous voulez forcer un skill spécifique pour une tâche ambiguë, la plupart des gestionnaires d'issues (dont les issues Lytos) acceptent un champ `skill:` optionnel comme indice.

**Q : Les skills doivent-ils référencer les rules ?**
R : Oui — mais référencer, pas dupliquer. `rules/` est la source de vérité pour les seuils. Le skill dit « vérifier contre default-rules.md » ; il ne réécrit pas les règles.

**Q : Comment versionner les skills dans le temps ?**
R : Les skills vivent dans git. Chaque changement est un commit. Pour les évolutions significatives, ajoutez une petite section « Changelog » en bas du `SKILL.md` — l'agent peut la lire, et les futurs contributeurs aussi. Vous pouvez aussi utiliser le champ optionnel `metadata.version` du frontmatter.

**Q : Un skill peut-il appeler un autre skill ?**
R : Informellement, oui — un skill peut en référencer un autre. Gardez les références explicites et les chaînes courtes.

**Q : Et les scripts ou fichiers de données dont un skill a besoin ?**
R : Mettez-les dans `scripts/` ou `assets/` à l'intérieur du dossier du skill. Le corps du `SKILL.md` peut les référencer par chemin relatif. L'outil ne les charge que quand le `SKILL.md` le demande.

## Pour aller plus loin

- Lire le pilier parent : [Skills](/fr/method/skills/)
- [Alternative aux sub-agents Claude](/fr/method/sub-agents/alternative-to-claude-sub-agents/) — pourquoi un agent bien contextualisé l'emporte souvent sur un casting de personas
- [Comment écrire un CLAUDE.md efficace](/fr/method/manifest/writing-claude-md-that-works/) — le fichier où l'IA lit ses premières instructions
- [Exemples de règles pour IA de codage](/fr/method/rules/ai-coding-rules-examples/) — des seuils vérifiables que l'IA respecte avant de rendre le code
- Lien externe : [Spécification agentskills.io](https://agentskills.io/specification) — la référence complète du format
- Lien externe : [Skills d'exemple publiés par Anthropic](https://github.com/anthropics/skills) — une bibliothèque de départ que vous pouvez adapter

## Essayer Lytos en 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

Voir le CLI sur [npm](https://www.npmjs.com/package/lytos-cli) · La méthode sur [GitHub](https://github.com/getlytos/lytos-method).
