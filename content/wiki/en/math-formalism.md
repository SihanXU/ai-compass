---
summary: "Holds that only formally verified reasoning counts, so models should produce proofs checkable by a machine verifier."
---
## Beliefs

Math Formalism has a simple standard: if it is not proved, it is not reasoned. A model that writes a plausible-looking solution in natural language may be right, may be wrong, and often cannot tell which. A model that writes a proof in a formal language such as Lean, Coq or Isabelle submits it to a proof checker that accepts nothing on faith. This turns mathematics into a perfect training ground: unlimited problems, binary and incorruptible rewards, and every success guaranteed correct.

It sits at the far Language edge, because formal languages are languages, and in the lower half toward Harness: a model working in tight partnership with a proof checker, the intelligence shared between generator and verifier. Its paradigm level is Revolutionary, since it revives the ambitions of logicism and automated theorem proving that the neural mainstream set aside, and the marriage of these traditions with large language models is new and moving quickly.

## Arguments

- Machine-checkable proofs provide a reward signal with no false positives, which is ideal for reinforcement learning and self-play on mathematics.
- Language models paired with interactive theorem provers have proved competition and textbook theorems that the checker fully verifies.
- Formal verification extends beyond math to software and hardware, where guaranteed correctness has real economic value.

## Critiques

- Formal libraries cover only a small fraction of mathematics, and formalizing a statement is often harder than proving it informally.
- Code-as-Thought and informal reasoning camps note that most useful reasoning has no formal specification to check against.
- Success in formal math may not transfer to the messy, underspecified problems where people most need help.
