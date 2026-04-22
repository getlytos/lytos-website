---
title: lytos review
description: Audit cross-model pour les issues en 4-review/. Imprime un prompt autonome ou ingère un bloc audit retourné.
---

`lyt review` est la primitive d'audit cross-model de Lytos. Une issue en `4-review/` est code-complete selon l'implémenteur. `lyt review` produit un prompt autonome qu'**une autre session IA** peut suivre à froid — aucun contexte repo préalable nécessaire — pour retourner un verdict `GO` ou `NO_GO` dans un format de bloc fixe. La commande écrit ensuite ce verdict dans le fichier issue et, sur `NO_GO`, déplace l'issue vers `3-in-progress/` avec la liste concrète des points à corriger.

## Utilisation

```bash
lyt review                                  # liste les reviews en attente
lyt review ISS-0050                         # imprime le prompt d'audit (stdout)
lyt review ISS-0050 --export > prompt.md    # sauve le prompt dans un fichier
lyt review --all --export                   # batch : écrit .lytos/review/<id>.prompt.md par issue en attente
lyt review ISS-0050 --accept audit.md       # ingère un audit retourné depuis un fichier
pbpaste | lyt review ISS-0050 --accept -    # ingère depuis le clipboard / stdin
lyt review ISS-0050 --accept - --overwrite  # remplace un bloc audit précédent (re-audit)
```

## Les deux flows

### Flow A — Auditeur agentic (a des tools shell + fichiers)

Une session IA fraîche (Claude Code, Codex CLI, Cursor Agent, Windsurf Cascade…) lance elle-même `lyt review ISS-XXXX` — le terminal est son tool. Le prompt imprimé lui dit exactement quoi faire :

1. Lire les fichiers listés.
2. Inspecter le diff.
3. Appliquer la skill code-review.
4. Écrire le bloc audit à la fin du fichier issue.
5. Si `NO_GO`, déplacer le fichier en `3-in-progress/` et mettre à jour le frontmatter.

L'humain regarde mais ne fait pas de copier-coller. C'est le flow préféré quand l'outil auditeur a accès au système de fichiers.

### Flow B — Auditeur chat / web

Un ChatGPT, un Gemini web, ou tout chat sans tools de fichiers peut quand même auditer. L'humain joue le relais :

```bash
lyt review ISS-0050 --export > /tmp/prompt.md
# Coller /tmp/prompt.md dans l'UI du chat.
# Le chat retourne un bloc audit.
# Sauver sa réponse dans /tmp/audit.md, puis :
lyt review ISS-0050 --accept /tmp/audit.md
# ou pipe direct :
pbpaste | lyt review ISS-0050 --accept -
```

Le CLI parse le bloc audit, l'écrit dans le fichier issue, et gère la transition `NO_GO`.

## Pourquoi l'auditeur ne doit pas être l'implémenteur

C'est tout l'intérêt de la commande — et ça vaut d'être dit quatre fois, parce que les équipes habituées à des workflows single-session ont tendance à le sauter.

1. **Les biais cognitifs sont spécifiques au modèle.** Un modèle qui audite son propre code lit son propre raisonnement comme évidemment correct. Le point aveugle qui a causé une erreur reste invisible au même point aveugle.
2. **Personne ne valide sa propre PR.** La code review existe parce que la distance compte. Un auditeur frais restaure cette distance, même quand les deux reviewers sont de l'IA.
3. **Conformité et traçabilité.** Beaucoup de contextes régulés (finance, santé, secteur public) exigent l'indépendance de la review. Un modèle auditeur distinct de l'implémenteur produit un artefact qu'un responsable compliance peut pointer.
4. **Prouve la promesse model-independence de Lytos.** Le point de mettre le contexte dans le repo, c'est que n'importe quel modèle capable peut le reprendre. Alterner les vendors par review est la démonstration live la plus propre que vous n'êtes pas lock-in.

Concrètement : si Claude Code a implémenté une issue, auditez-la avec GPT-5 ou Codex ou Gemini. Si GPT a écrit le code, auditez avec Claude ou Gemini. Le pairing compte moins que le principe : **jamais la même session qui a écrit le code**.

## À quoi ressemble un bon bloc audit

Le prompt demande cette forme exacte et le CLI la parse pour décider la transition :

```markdown
## Audit — 2026-04-22

**Verdict:** GO

### Checks
- [x] Tests pass (134/134 via `npm test`)
- [x] Issue checklist complete
- [x] Rules respected (file ≤ 300 lignes, fn ≤ 30, coverage ≥ 80%)
- [x] Documentation aligned (README + page /cli/archive)

### Notes
src/commands/archive.ts reste sous le seuil de taille. Le chemin --dry-run est unit-testé. Un mini nit de style dans applyAudit() signalé mais non-bloquant.
```

Une variante `NO_GO` porte une liste de corrections concrètes :

```markdown
## Audit — 2026-04-22

**Verdict:** NO_GO

### Checks
- [x] Tests pass
- [ ] Documentation aligned — la table commandes du README n'est pas à jour

### Notes
La feature marche mais le README user-facing ne la montre pas. Un dev qui scanne le README la rate complètement.

### To fix before next review
- [ ] Ajouter une ligne `lyt archive` à la table commandes du README.md
- [ ] Mirror la ligne dans docs/fr/README.md
```

Les checkboxes `- [ ]` comptent : elles permettent à l'implémenteur de les cocher au fur et à mesure, et une re-audit voit d'un coup d'œil ce qui est fait.

## Re-auditer une issue

Si une issue a déjà un bloc `## Audit —` (verdict précédent), `--accept` refuse l'overwrite silencieux — l'ancien audit est un signal historique. Passez `--overwrite` pour remplacer :

```bash
# Premier audit NO_GO, implémenteur a corrigé, remis en 4-review.
# Second audit :
lyt review ISS-0050 --accept - --overwrite
```

L'ancien bloc et tout jusqu'à la prochaine section top-level est remplacé par le nouveau. Les parties suivantes du body de l'issue sont préservées.

## Relation avec le workflow Lytos

```
3-in-progress        4-review                 5-done        archive/
     │                  │                       │              │
     │ dev finit        │ lyt review            │ lyt close    │ lyt archive
     │ le code          │ (audit cross-model)   │ (humain)     │ (rétention 7j)
     ▼                  ▼                       ▼              ▼
   (branche)        PR ouverte             mergé sur main    long terme
```

`lyt review` se place juste avant que l'humain lance `lyt close`. Pensez-y comme au test unitaire de « cette PR est-elle vraiment bonne ? » — sauf que le testeur unitaire est une autre IA, pas celle qui a écrit le code.

## Voir aussi

- [Workflow Lytos](/fr/workflow/) — le cycle complet avec l'étape Reviewer
- [`lyt close`](/fr/cli/overview/) — la validation humaine après que `lyt review` retourne GO
- [`lyt archive`](/fr/cli/archive/) — l'archivage basé rétention qui suit done
