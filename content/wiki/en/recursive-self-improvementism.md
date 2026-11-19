---
summary: "Agents that design, test and improve their own code, prompts and successors will drive the fastest progress in AI."
---
## Beliefs

Recursive Self-Improvementism takes the old idea of a machine that improves the machine that improves itself and makes it an engineering programme. Today's version is concrete: an agent proposes changes to its own scaffolding, prompts, tools or training data, evaluates them on a benchmark, keeps what helps and repeats. The researcher's job shifts from designing agents to designing the loop that designs agents. If each generation is even slightly better at improving the next, progress compounds.

It sits near the bottom of the chart, toward the Harness end, because what gets rewritten is mostly the system around the model, and on the Language side, because the medium of self-modification is code and text. It carries an Ultra-Revolutionary shade, one step short of the chart's extreme: it proposes that the next paradigm will not be invented by people at all.

## Arguments

- Systems in which a language model iteratively rewrites the scaffolding program that calls it have measurably improved their own task performance across rounds.
- Meta-agent searches over agent designs, written as code, have discovered agent architectures that outperform hand-designed baselines on several benchmarks.
- Code is an ideal substrate for self-improvement: changes are cheap, testable and reversible, so the loop can run many iterations without human labour.

## Critiques

- Observed self-improvement curves tend to plateau quickly, because the underlying model's capability, not the scaffold, sets the ceiling.
- Optimising against a fixed benchmark invites overfitting and reward hacking; a loop that "improves" by exploiting the evaluator is not improving.
- A process designed to escape human design is, almost by definition, hard to oversee, which worries safety-minded rivals considerably.
