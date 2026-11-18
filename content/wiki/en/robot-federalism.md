---
summary: "A robot should be a federation of separate perception, planning and control modules with clean interfaces, not one end-to-end network."
---
## Beliefs

Robot Federalism is the classic architecture of robotics: divide and rule. Perception builds a map and tracks objects; planning searches for paths and task sequences; control turns trajectories into motor commands; a middleware layer passes messages between them. Each module is owned by specialists, can be tested in isolation and swapped for a better one. The federal constitution is the message interface, and a well-defined interface is worth more than a clever monolith nobody can debug.

It sits at the far World edge (col 12) toward Harness (row 7): about as physical as it gets, and organized as a system of components. Its somewhat dark shade marks an established tradition that built most deployed robots, from warehouses to research labs. Its rivals are the robot foundation-model camps that want one policy for every body and task; federalists welcome learned modules inside the federation but resist handing the whole government to a single network.

## Arguments

- Modular robot stacks are the basis of most deployed robots, and their components can be validated and certified separately.
- Shared middleware and message standards let research groups reuse each other's perception, planning and control modules.
- Failures can be traced to a specific module, which makes debugging and safety analysis tractable.

## Critiques

- Hand-designed interfaces force lossy intermediate representations, such as maps and object lists, that may not capture what the task needs.
- Integration overhead is large: getting many modules, timings and coordinate frames to agree is a notorious time sink.
- End-to-end and foundation-model camps argue that federations generalize poorly to unstructured tasks that cross module boundaries.
