---
summary: "Holds that language has explicit hierarchical structure, and that models should represent syntax and composition rather than flat token statistics."
---
## Beliefs

Grammarian Conservatism keeps the treebank on the shelf and the parse tree in its heart. Sentences are not bags of words or flat strings; they are built from constituents that nest, and meaning is composed along that structure. A model that ignores syntax may produce fluent text, but it will stumble on agreement across long distances, scope ambiguity and novel combinations. The respectable thing is to give models structural inductive biases, whether as explicit grammars, recursive networks or tree-shaped decoders, and to test them on systematic generalization.

It sits at the far Language end, where language is not just the medium but the object of study, and in the middle-upper region: one model, but one with structure carved into it. Its paradigm level is old guard. It remembers when parsing was the central NLP task and views the triumph of unstructured transformers with polite skepticism.

## Arguments

- Structured models generalize more systematically on compositional benchmarks, where flat sequence models often fail on novel combinations of familiar parts.
- Probing studies find that large language models internally encode something like syntactic trees, which suggests structure is real and worth modeling explicitly.
- Explicit structure gives interpretable intermediate outputs that can be checked, corrected and reused.

## Critiques

- Scale-first camps note that unstructured transformers have overtaken nearly every structured model on downstream NLP tasks.
- Grammars and treebanks are expensive to build and cover some languages and registers far better than others.
- If models learn syntax implicitly anyway, hard-wiring it may add rigidity without adding capability.
