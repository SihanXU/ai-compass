---
summary: "An agent should run on a behavior tree that grows: the model handles novel situations and writes each solution back as a reflex node."
---
## Beliefs

Growing-Tree Doctrine starts from a timing problem. The world does not pause while a model thinks for several seconds: the ball rolls, someone calls, the cup tips. People cope because most reactions never pass through deliberation at all. So the agent's harness should be a behavior tree, the sequence-and-selector structure long used for game characters and robot navigation, running continuously and reacting at once. The model is not in the inner loop; it is called when the tree meets something it cannot handle, and what it works out is written into the tree as a new node. Over time novel cases thin out, reflexes take over, and the agent becomes more fluent the longer it lives.

It sits on the World side because the tree's job is responding to a live, changing environment, and in the Harness half because intelligence is split between a model and an explicit, growing control structure. Its paradigm level is progressive: it recasts the model from pilot to the author of its own reflexes.

## Arguments

- Behavior trees are a proven, modular and inspectable control structure in game AI and robotics, so the growing agent stays readable and debuggable.
- Separating fast reflexes from slow deliberation addresses latency at the root, rather than waiting for ever-faster models.
- Writing solved cases into reusable structure echoes skill-library agents that accumulate code skills, letting competence compound without retraining.

## Critiques

- Deciding where a new node belongs, and how it interacts with existing ones, can produce a tangled tree that conflicts with itself.
- Model-written reflexes may encode mistakes that then fire without any deliberation to catch them.
- End-to-end advocates argue that a single fast policy trained on enough data would make the explicit tree unnecessary.
