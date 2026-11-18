---
summary: "To understand a situation is to write a program that explains it; intelligence is the efficient synthesis of programs from few examples."
---
## Beliefs

Program-Synthesis Doctrine holds that the right output of perception and learning is not a vector or a caption but a program: a compact, executable, compositional description that reproduces what was observed and generalizes beyond it. Faced with a puzzle grid, a visual scene or a handful of input-output pairs, an intelligent system should search for the shortest program that explains them, and build up a library of reusable abstractions as it goes. Generalization from few examples, on this view, is exactly what program induction delivers and pattern-matching does not.

It sits right of center because its showcase problems are visual and spatial (abstract grid puzzles, scenes, drawings) rather than linguistic, and in the lower Harness half because it couples models with interpreters, search procedures and growing libraries. Its paradigm level is neutral: program induction is an old idea, newly energized by models that can write code.

## Arguments

- Abstract-reasoning benchmarks of grid puzzles were designed to measure skill-acquisition efficiency, and program-search approaches have been among the strongest entrants.
- Wake-sleep library learning systems discover reusable abstractions across domains, showing that synthesized programs compound into better priors.
- Having a model write Python that calls vision modules lets visual question answering inherit the compositionality and inspectability of code.

## Critiques

- Program search explodes combinatorially, and real-world perception is often too noisy to be captured by a short program.
- Many demonstrations rely on hand-designed domain-specific languages that smuggle in human priors.
- Monolith advocates note that large models trained end to end have steadily closed the gap on the same puzzles without explicit programs.
