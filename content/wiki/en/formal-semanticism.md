---
summary: "Meaning is truth conditions expressible in logic, and a system understands language only if it can compose such meanings."
---
## Beliefs

Formal Semanticism holds that the meaning of a sentence is what the world must be like for it to be true, and that this meaning is built compositionally from the meanings of its parts. Quantifiers, negation, scope and entailment are not statistical tendencies but logical operations with right answers. A system that merely predicts plausible continuations, the formal semanticist says, may sound fluent while getting 'every' and 'some' backwards, and fluency is not understanding.

It sits at the far Language edge (col 0) at mid-height: meaning lives in symbolic representations, and the doctrine is open to systems that parse into logical forms and hand them to provers or databases rather than insisting on one monolithic network. Its dark shade marks the old guard. Formal semantics shaped decades of linguistics and early NLP, and it now watches neural language models with a mix of skepticism and grudging curiosity about whether they have rediscovered compositionality.

## Arguments

- Systematic tests of negation, quantifier scope and logical entailment still expose errors in fluent models, which a compositional semantics would avoid by construction.
- Logical forms are verifiable: a parse into a query or formula can be executed and checked, giving guarantees free text cannot.
- Semantic parsing into executable forms remains a strong design pattern wherever correctness matters, such as databases and formal verification.

## Critiques

- Hand-built grammars and lexicons have never scaled to the full messiness of natural language, idiom and context.
- Distributional models capture graded, context-dependent meanings that crisp truth conditions struggle to represent.
- Large models increasingly handle many compositional phenomena well enough, eroding the claim that explicit logic is required.
