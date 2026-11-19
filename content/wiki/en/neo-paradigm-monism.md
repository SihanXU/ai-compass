---
summary: "Intelligence should come from one end-to-end model, but the current recipe of Transformer, pretraining and scale will not produce it; a new architecture, objective or learning rule is needed."
---
## Beliefs

Neo-Paradigm Monism keeps the dream of a single generalist model and drops the recipe that currently carries it. Its adherents agree with the scaling orthodoxy that capability should live inside one learned system rather than in scaffolding bolted around it. Where they part ways is the method: they suspect that next-token prediction on a fixed architecture, followed by post-training and ever larger runs, is approaching a ceiling, and that what lies beyond it calls for a genuinely different model rather than a bigger copy of the old one.

The school is deliberately agnostic about modality. It does not insist that intelligence begins with text or with video and physics; it insists that the right learning principle will absorb both. Candidates vary widely: new sequence architectures, predictive objectives in latent space, local learning rules that avoid backpropagation, models that keep learning after deployment. What unites them is the bet that the next unified model will be built on a different foundation.

## Arguments

- Today's models are data-hungry and largely frozen after training, while humans learn continually from little data, which points to a missing ingredient rather than missing scale.
- Harnesses patch symptoms of a weak core; a better core would make most of them unnecessary.
- Architectural shifts have happened before, and each one produced a single dominant model family rather than a federation of parts.

## Critiques

- "Not this recipe" is easier to say than to replace: alternatives have repeatedly lost to plain scaling once compute grew.
- The school has many candidate paradigms and no agreement on which one, so in practice it is a waiting room.
- Harness advocates reply that even a new model will need tools, memory and checks to act in the world.
