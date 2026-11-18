---
summary: "Evolutionary search over network weights, topologies and hyperparameters is a scalable, gradient-free alternative to backpropagation-centric training."
---
## Beliefs

Neuroevolutionism prefers populations to gradients. Instead of nudging one network down a loss surface, it mutates many candidate networks, keeps the fittest and repeats. Because it only needs a fitness score, it can optimise non-differentiable objectives, sparse rewards, discrete architectures and even the body plans of simulated robots. It also parallelises almost perfectly: each worker evaluates its own candidate and reports back a single number.

On the chart it sits near the World edge, since its natural habitat is control, locomotion and simulated environments rather than text, and low toward the Harness end, because the intelligence lives in a search process over a population plus an environment, not in one monolithic pretrained model. Its moderately revolutionary shade reflects that it is an old idea that keeps resurfacing whenever gradients stall.

## Arguments

- Evolving topology together with weights, as in augmenting-topology methods, finds compact networks without a human choosing the architecture.
- Evolution strategies have been shown to be competitive with standard reinforcement learning on continuous-control benchmarks while scaling across many CPUs with tiny communication cost.
- Population-based search is robust to deceptive and sparse rewards, where gradient methods get stuck in local optima.

## Critiques

- Sample efficiency is poor: evaluating thousands of candidates per generation is expensive when each evaluation is a real-world rollout.
- For very large networks, random perturbations in millions of dimensions are a crude estimate of what backpropagation computes exactly.
- Many headline successes were later matched by well-tuned gradient methods, which suggests evolution is a useful tool, not a replacement.
