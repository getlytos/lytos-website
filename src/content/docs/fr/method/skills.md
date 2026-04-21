---
title: Skills
description: Les procédures réutilisables — Design, le deuxième pilier de Lytos. Les skills de tâche suivent le standard ouvert agentskills.io, donc Claude Code, Cursor, Codex, Gemini CLI, Copilot et les autres outils les découvrent nativement.
---

Les skills sont le deuxième pilier de Lytos : **Design**.

Un skill est une procédure étape par étape qui dit à l'agent IA *comment* effectuer un type de tâche spécifique. Pas des conseils vagues — des étapes concrètes.

> *"Le role-play ne remplace pas le contexte."*

## Le standard ouvert agentskills.io

Les skills de tâche Lytos suivent le standard ouvert [agentskills.io](https://agentskills.io) — format initié par Anthropic et adopté par Claude Code, Claude, OpenAI Codex, Cursor, Gemini CLI, GitHub Copilot, VS Code, Goose, JetBrains Junie, OpenHands, et la plupart des outils IA de code modernes.

Chaque skill vit dans son propre dossier avec un fichier `SKILL.md` :

```
.lytos/skills/
├── session-start.md            # protocole de démarrage Lytos (reste à plat)
├── code-review/
│   └── SKILL.md
├── testing/
│   └── SKILL.md
└── ...
```

Le `SKILL.md` commence par un frontmatter YAML minimal — `name` et `description` — puis un corps markdown libre :

```markdown
---
name: testing
description: Écrire et relire des tests — unitaires, intégration et E2E — selon le modèle Testing Trophy. À utiliser après avoir écrit une feature, corrigé un bug (test de régression requis), pendant un refactoring, ou lors d'un audit de couverture.
---

# Skill — Testing

## Quand invoquer ce skill

...
```

## Progressive disclosure

Grâce à ce format standard, les outils IA modernes découvrent les skills de tâche Lytos nativement via la **progressive disclosure** :

1. Au démarrage de session, l'outil charge uniquement le `name` + la `description` de chaque skill (~100 tokens chacun) — juste ce qu'il faut pour savoir quand chacun peut être pertinent.
2. Quand la tâche en cours matche la description d'un skill, l'outil charge le corps complet de ce skill dans le contexte.
3. Les scripts et fichiers référencés ne sont chargés qu'à la demande.

Résultat : l'agent a accès à tous les skills, mais ne paie le coût en contexte que de celui qui s'applique à la tâche courante.

## Les 9 skills intégrés

| Skill | Ce qu'il couvre | Emplacement |
|-------|----------------|-------------|
| **session-start** | Démarrage de session, chargement du contexte, clôture — protocole de démarrage Lytos | `skills/session-start.md` (plat) |
| **code-review** | Revue de code avec checklist, self-review, taille de PR | `skills/code-review/SKILL.md` |
| **testing** | Tests unitaires, intégration, E2E, stratégie de mocking | `skills/testing/SKILL.md` |
| **documentation** | Docstrings, ADRs, documentation API, changelog, mémoire | `skills/documentation/SKILL.md` |
| **git-workflow** | Branches, commits, CI checks, hooks, semantic versioning | `skills/git-workflow/SKILL.md` |
| **code-structure** | SOLID, taille de module, injection de dépendances, nommage | `skills/code-structure/SKILL.md` |
| **deployment** | Pré/post-deploy, observabilité, SLOs, migrations, incidents | `skills/deployment/SKILL.md` |
| **security** | OWASP Top 10, authentification, autorisation, secrets | `skills/security/SKILL.md` |
| **api-design** | Conventions REST, pagination, format d'erreurs, rate limiting | `skills/api-design/SKILL.md` |

## Profondeur de startup — léger vs standard

`session-start` lit le frontmatter de l'issue en cours pour décider combien de contexte l'IA charge avant de coder.

- **Startup léger** autorisé *uniquement* quand l'issue est explicitement `effort: XS` **et** `complexity: light`. L'IA charge quand même la baseline de sécurité obligatoire — manifest, `memory/MEMORY.md`, default rules, `BOARD.md`, et l'issue elle-même — mais diffère les notes cortex, les rules spécifiques au projet et l'exploration large du codebase tant que l'issue n'en a pas besoin.
- **Startup standard** reste obligatoire pour toute autre combinaison. Si l'un des deux champs manque, l'IA retombe sur standard. Si la tâche grossit en cours de session, elle repasse immédiatement en standard.

C'est ainsi que les petites issues restent rapides sans brûler la fenêtre de contexte — et c'est pour ça que `effort` et `complexity` dans le frontmatter portent vraiment quelque chose : ce ne sont pas juste des indicateurs de priorisation.

## Comment les skills sont sélectionnés pour une tâche

Le champ `skill` du frontmatter d'une issue est désormais **optionnel** — un indice pour les tâches ambiguës :

```yaml
skill: code-structure      # indice optionnel
skills_aux: [testing, security]
```

- S'il est présent, il dit à l'outil « pour cette issue, préférer le skill nommé » — utile quand la tâche est à la frontière entre deux catégories.
- S'il est absent, l'outil décide via progressive disclosure, en s'appuyant sur le titre et la description de l'issue et sur les descriptions des skills.

## Composition de skills

Différentes tâches bénéficient souvent de plusieurs skills :

| Type de tâche | Skill principal probable | Skills auxiliaires utiles |
|---------------|--------------------------|---------------------------|
| Nouvelle feature | `code-structure` | `testing`, `security` |
| Endpoint API | `api-design` | `code-structure`, `security`, `testing` |
| Bug fix | `code-structure` | `testing` |
| Code review | `code-review` | `security` |
| Documentation | `documentation` | — |

Avec la progressive disclosure, l'outil charge souvent plusieurs de ces skills au fil de la tâche, sans qu'il soit nécessaire de tous les lister au départ.

## Ajouter des skills custom

Créez vos propres skills sous `skills/<nom>/SKILL.md` :

```markdown
---
name: mon-skill
description: Une ou deux phrases qui décrivent CE QUE fait le skill ET QUAND l'utiliser. Incluez les mots-clés que l'agent matchera avec la description des tâches.
---

# Skill — Mon Skill

## Quand invoquer ce skill

...

## Procédure

1. ...
2. ...
```

Validez votre skill avec l'outil de référence officiel :

```bash
npx skills-ref validate .lytos/skills/mon-skill
```

Les skills sont réutilisables entre projets et entre outils — ils fonctionnent avec n'importe quel assistant IA qui implémente le standard agentskills.io.

## Pour aller plus loin

- [Comment écrire un skill pour un agent IA](/fr/method/skills/how-to-write-a-skill/) — le format agentskills.io expliqué, avec un exemple complet.
