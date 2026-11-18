---
summary: "One learning system should inhabit many bodies at once, pooling experience across a fleet of robots into a shared mind."
---
## Beliefs

Distributed Embodiment says the right unit of robot learning is the fleet, not the robot. A single machine collects experience slowly, but many arms, vehicles or drones running the same policy can gather it in parallel and feed a shared model, so that what one body learns, every body knows. The mind is centralised in weights but distributed in experience; it has countless hands, and every one of them is a data source.

It sits on the World side, since learning comes from physical interaction, and at the Harness extreme, because the system that makes it work is a whole infrastructure of fleet logging, data pipelines, cross-embodiment action spaces and continual updates. Its revolutionary shade reflects how different this is from the classic picture of one robot, one controller, one lab.

## Arguments

- Fleets of robot arms collecting grasp attempts in parallel produced far more real-world data than any single robot and learned hand-eye coordination that generalised to new objects.
- Pooling demonstrations across different robot embodiments has trained policies that transfer positively to robots that contributed less data.
- Fleet learning turns deployment itself into data collection, so the system improves the more it is used.

## Critiques

- Different bodies have different kinematics, sensors and failure modes, and sharing a policy across them often helps less than hoped.
- Synchronising updates across a fleet risks pushing one bad lesson to every robot simultaneously.
- Running large fleets is expensive and logistically heavy, which concentrates this approach in a few well-funded organisations.
