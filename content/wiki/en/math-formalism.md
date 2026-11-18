---
summary: "Holds that only formally verified reasoning counts, so models should produce proofs checkable by a machine verifier."
---
## Beliefs

Math Formalism has a simple standard: if it is not proved, it is not reasoned. A model that writes a plausible-looking solution in natural language may be right, may be wrong, and often cannot tell which. A model that writes a proof in a formal language such as Lean, Coq or Isabelle submits it to a proof checker that accepts nothing on faith. This turns mathematics into a perfect training ground: unlimited problems, binary and incorruptible rewards, and every success guaranteed correct.

It sits at the center-left, within the language family because formal languages are languages, and in the middle band: a model working in tight partnership with a verifier, closer to a disciplined pair than a sprawling harness. Its paradigm level is somewhat old guard, since it carries the ambitions of logicism and automated theorem proving, but the marriage of these traditions with large language models is new and moving quickly.

## Arguments

- Machine-checkable proofs provide a reward signal with no false positives, which is ideal for reinforcement learning and self-play on mathematics.
- Language models paired with interactive theorem provers have proved competition and textbook theorems that the checker fully verifies.
- Formal verification extends beyond math to software and hardware, where guaranteed correctness has real economic value.

## Critiques

- Formal libraries cover only a small fraction of mathematics, and formalizing a statement is often harder than proving it informally.
- Code-as-Thought and informal reasoning camps note that most useful reasoning has no formal specification to check against.
- Success in formal math may not transfer to the messy, underspecified problems where people most need help.
