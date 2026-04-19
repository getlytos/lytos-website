---
title: "Alternative aux sub-agents Claude : un agent, contexte riche"
description: "Une alternative pratique aux sub-agents Claude : un agent unique qui lit un manifest, une memory et des rules partagés — plus cohérent que les personas."
---

*Une lecture issue de la pratique, pas un rejet du travail des autres.*

## La réponse courte

L'alternative la plus pratique aux sub-agents Claude est un agent unique qui lit un dossier `.lytos/` partagé — manifest, memory, rules, et un skill spécifique à la tâche. Les personas multiplient le même modèle sous-jacent en costumes qui ne changent pas ses capacités. Un agent unique avec un contexte riche tend à produire des résultats plus cohérents sur un codebase que plusieurs personas partageant les mêmes poids.

## Pourquoi le pattern sub-agent mérite un second regard

Les frameworks de sub-agents sont une exploration légitime. Ils apportent un vocabulaire familier — "l'architecte", "l'agent QA", "le reviewer sécurité" — et donnent aux équipes une impression de structure autour d'un nouveau type de collaborateur. Sur le papier, chaque persona semble spécialisée.

Dans la pratique, trois choses reviennent dans les équipes que nous avons observées. D'abord, chaque persona est le même modèle avec un system prompt différent : le raisonnement sous-jacent ne change pas vraiment. Ensuite, les personas coûtent du contexte — un préambule de 500 tokens "tu es un développeur senior" est autant de tokens qui ne sont pas dépensés sur votre code. Enfin, les passes de relais entre sub-agents introduisent une coordination qu'une session unique n'a pas.

Rien de tout cela ne dit que les sub-agents se trompent. Cela dit que nous avons atterri sur un autre compromis — un compromis qui concentre l'effort sur le contexte plutôt que sur le roleplay.

## À quoi ressemble un setup "un agent, contexte riche"

La métaphore sur laquelle nous revenons toujours est celle de la perceuse. On ne change pas de perceuse pour percer du bois, du béton ou du métal — on change le **foret** (le modèle) et on choisit le bon **matériau** (le contexte). La persona est un costume sur la perceuse. Ça ne perce pas un meilleur trou.

Concrètement, une session Claude Code ou Cursor lit cette structure au démarrage :

```
.lytos/
├── manifest.md              # Ce qu'est le projet, pourquoi il existe
├── memory/
│   ├── MEMORY.md            # Index du savoir accumulé
│   └── cortex/              # Architecture, patterns, bugs, domaine
├── rules/
│   ├── default-rules.md     # Critères qualité universels
│   └── project-rules.md     # Seuils propres au projet
└── skills/
    ├── code-review.md       # Procédure de review
    ├── testing.md           # Procédure de tests
    └── api-design.md        # Procédure d'endpoint
```

Pour une tâche donnée, l'agent charge le manifest (toujours), les fichiers cortex pertinents (à la demande), les rules (toujours), et le skill qui correspond au type de tâche. Pas de persona. La "spécialisation" vient de ce qu'il lit, pas de ce qu'on lui dit qu'il est.

Le choix du modèle devient la décision explicite qu'il a toujours été : Opus pour un raisonnement profond, Sonnet pour l'équilibre, Haiku pour la génération rapide. C'est un vrai levier — contrairement à un costume.

## Cas limites et limites honnêtes

**Q : Y a-t-il des cas où les sub-agents gagnent ?**
R : Possiblement, quand il faut vraiment du parallélisme — lancer cinq reviews en parallèle sur cinq modules indépendants, par exemple. Le gain est la concurrence, pas la qualité de la persona.

**Q : Le contexte ne devient-il pas trop long sans sub-agents ?**
R : Tout l'intérêt du pattern cortex est que seuls les fichiers mémoire pertinents sont chargés. Une session sur le module de facturation n'a pas besoin des patterns frontend.

**Q : Si mon équipe utilise déjà un framework de sub-agents ?**
R : Gardez-le si ça marche. Lytos est un complément à ce que vous utilisez déjà. Le dossier `.lytos/` est lisible par tout agent, sub-agent frameworks inclus.

**Q : Comment ça passe à l'échelle avec beaucoup de contributeurs ?**
R : Le manifest, les rules et la memory sont versionnés dans git. Tout le monde — humain ou IA — lit la même source de vérité. C'est plus difficile à garantir avec des personas qui vivent dans la config d'un framework.

## Pour aller plus loin

- Lire le pilier parent : [Sub-agents](/fr/method/sub-agents/)
- Voir aussi : [Comment organiser la mémoire de Claude Code entre sessions](/fr/method/memory/ai-coding-memory-across-sessions/)
- Lien externe : [Recommandations d'Anthropic sur la conception d'agents](https://www.anthropic.com/engineering/building-effective-agents)

## Essayer Lytos en 2 minutes

```bash
npm install -g lytos-cli
lyt init
```

Voir le CLI sur [npm](https://www.npmjs.com/package/lytos-cli) · La méthode sur [GitHub](https://github.com/getlytos/lytos-method).
