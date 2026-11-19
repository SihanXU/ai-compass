---
summary: "Populations of candidate models, programs or agents, selected and recombined, find better solutions than optimizing any single individual."
---
## Beliefs

Evolutionary Federalism holds that progress comes from populations, not prodigies. Keep many variants alive (of weights, hyperparameters, prompts, programs or whole agents), let them compete on a task, keep and mutate the fittest, and crossbreed good ideas. Gradients are wonderful when you have them, but selection works on anything you can evaluate, including non-differentiable objectives, discrete programs and entire training recipes. The "federalism" is the structure: many semi-independent members, loosely coordinated by a shared selection process rather than a central optimizer.

It sits at the center of the Language-World axis, since populations can evolve text, code, controllers or robot bodies alike, and deep in the Harness half because the intelligence is in the population-and-selection machinery around the models. Its paradigm level is ultra-revolutionary: evolutionary computation is old, but reviving it alongside large models is a sharp break from the gradient-and-scale mainstream.

## Arguments

- Evolution strategies have been shown to be a scalable alternative to reinforcement learning, parallelizing across many workers with very little communication.
- Population-based training jointly optimizes models and their hyperparameter schedules, beating hand-tuned schedules in several domains.
- Evolutionary program search with a language model as the mutation operator has found new constructions for open mathematical problems, verified by an automatic evaluator.

## Critiques

- Evolutionary search is sample-hungry; where gradients are available, it is usually far less efficient.
- Results depend heavily on a good fitness function, and populations readily exploit loopholes in it.
- Scale advocates argue that most of the "evolution" is really the large model doing the work, with the population as an expensive sampler.
