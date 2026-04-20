---
title: Compatibilité
description: Comment Lytos s'intègre à chaque outil IA — natif, via un fichier bridge, ou manuellement.
---

Lytos est deux choses. Le **contenu** vit dans `.lytos/` — des fichiers markdown qu'on peut lire, versionner et copier sur n'importe quelle machine. Le **mécanisme de chargement** dépend de la convention de chaque outil pour les instructions projet. Le contenu est universel. Le chargement dépend de chaque éditeur.

Cette page liste ce qui est vérifié aujourd'hui. La réponse courte : si votre outil se connecte à un dépôt Git, Lytos fonctionne.

## La matrice de compatibilité

| Outil | Charge `.lytos/` automatiquement ? | Fichier bridge | Notes |
|---|---|---|---|
| **Claude Code** (CLI) | ✅ natif | `CLAUDE.md` | Généré par `lyt init --tool claude`. Lit aussi les `CLAUDE.md` imbriqués dans l'arborescence. |
| **Claude Code Desktop** | ✅ natif | `CLAUDE.md` | Même moteur que la CLI. Ouvrir le dossier du dépôt dans l'app suffit, le bridge est lu dès la première session. |
| **Cursor** | ✅ natif | `.cursor/rules/lytos.mdc` | Généré par `lyt init --tool cursor`. Cursor lit automatiquement les `.cursor/rules/*.mdc`. |
| **Codex CLI** (OpenAI) | ✅ natif | `AGENTS.md` | Généré par `lyt init --tool codex`. Précédence : `~/.codex/AGENTS.md` puis de la racine Git au dossier courant. Limite cumulée de 32 Kio. |
| **GitHub Copilot Chat / Agents** | ✅ natif | `.github/copilot-instructions.md` | Généré par `lyt init --tool copilot`. Instructions repo lues à chaque requête Copilot. |
| **Gemini CLI / Jules** | ✅ natif | `GEMINI.md` | Généré par `lyt init --tool gemini`. Instructions racine lues au démarrage de session. |
| **Windsurf / Codeium** | ✅ natif | `.windsurfrules` | Généré par `lyt init --tool windsurf`. Cascade lit le fichier à chaque session. |
| **Codex app web** | ⚠️ à vérifier | — | L'app web pourrait ne pas lire `AGENTS.md` comme la CLI. Contournement : coller le contenu du bridge dans le champ "Rules" de l'interface web. |
| **Claude.ai Projects** (web) | ⚠️ manuel | — | Coller le contenu de `.lytos/manifest.md` (ou du bridge `CLAUDE.md`) dans "Instructions du projet", une fois pour toutes. |
| **ChatGPT Projects** (web) | ⚠️ manuel | — | Même approche — coller le manifest dans les "Instructions personnalisées" du projet. |
| **N'importe quel modèle via API** | ⚙️ manuel | — | Ajouter `.lytos/LYTOS.md` et `.lytos/manifest.md` en tête du system prompt. |

## Trois façons d'adopter Lytos

### 1. Adaptateur natif — le chemin le plus direct

Votre éditeur ou CLI lit un fichier projet sans configuration. Un `lyt init --tool <nom>` suffit à générer le bridge. L'IA lit `.lytos/` automatiquement à chaque session.

Cela couvre **Claude Code (CLI et Desktop), Cursor, Codex CLI, Copilot, Gemini, Windsurf**. Aucune étape supplémentaire par session.

### 2. Bridge-et-copie — pour les apps cloud sans convention fichier

Certaines apps cloud (Claude.ai Projects, ChatGPT Projects, certaines interfaces chat entreprise) ne lisent pas automatiquement un fichier du dépôt même quand il est connecté. Dans ce cas :

1. Lancez `lyt init --tool claude` (ou l'adaptateur le plus proche de votre outil).
2. Copiez le contenu du fichier bridge généré.
3. Collez-le dans le champ "Instructions du projet" de l'app cloud, **une fois par projet**.

Vous perdez la synchronisation automatique quand `.lytos/` évolue, mais un copier-coller permet de rafraîchir à chaque changement significatif du manifest.

### 3. Au niveau du prompt — pour tout le reste

Même sans convention, tout LLM capable de lire des fichiers via un tool-call peut utiliser Lytos. La première instruction donnée devient :

> *"Avant de commencer, lis `.lytos/LYTOS.md`, puis `.lytos/manifest.md`, puis `.lytos/rules/default-rules.md`. Ces fichiers décrivent le projet — respecte-les."*

Moins élégant qu'une intégration native, mais le même `.lytos/` fonctionne avec n'importe quel modèle, n'importe quelle interface.

## Pourquoi c'est structurant

La promesse de Lytos est celle d'un **contexte souverain** : le même markdown fonctionne avec n'importe quel outil, dans n'importe quel flux, indéfiniment. Quand vous changez d'éditeur l'année prochaine, ou quand un nouveau modèle devient le meilleur pour votre usage, vous ne recommencez pas. Le manifest, les règles, la mémoire — ils voyagent avec le dépôt.

Les adaptateurs natifs sont un confort. La méthode elle-même fonctionne sur tout outil capable de lire du texte dans un dépôt Git. C'est la garantie qu'on propose, et celle dont vous avez besoin pour adopter en confiance.

## Points que nous assumons de manière transparente

- **Codex app web** : nous n'avons pas encore vérifié empiriquement si elle charge `AGENTS.md` comme la CLI. La documentation est ambiguë. À traiter comme "bridge-et-copie" jusqu'à confirmation. Suivi dans [ISS-0040](https://github.com/getlytos/lytos-cli).
- **Installations entreprise** avec accès cloud uniquement : le comportement varie. Le chemin bridge-et-copie fonctionne toujours.
- **Synchronisation temps réel entre outils** : une fois le bridge en place, les changements ultérieurs dans `.lytos/` sont pris en compte à la session suivante pour les adaptateurs natifs. Les apps cloud avec instructions collées ont besoin d'un rafraîchissement manuel.

Si vous utilisez un outil absent de cette liste, [ouvrez une issue sur lytos-cli](https://github.com/getlytos/lytos-cli/issues) — nous l'ajouterons à la matrice.
