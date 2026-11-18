---
summary: "Perception and action form one closed loop, so intelligence lies in mastering how sensations change as you act."
---
## Beliefs

Sensorimotor Doctrine denies that perception comes first and action second. To see a cup is to know how its appearance will change as you move your eyes, walk around it or reach for it; to feel an edge is to know what happens when your finger slides. Perception, in this view, is the skilful mastery of sensorimotor contingencies, and an agent that has never acted has at best a thin, borrowed kind of perception.

It sits at the far World edge (col 12) at mid-height. It is maximally committed to the physical loop between body and environment, while staying open on architecture: a single visuomotor network and a layered controller can both close the loop. Its shade is fairly revolutionary because most perception research still trains on fixed datasets with no action at all. The doctrine predicts that robots trained with tight perception–action coupling will learn representations that passive vision never will.

## Arguments

- Visuomotor policies trained jointly from pixels to torques can outperform pipelines that separate perception from control on contact-rich tasks.
- Self-generated movement provides free supervision: predicting the sensory consequences of one's own actions is a rich learning signal.
- Many perceptual skills, such as depth from motion parallax or texture from touch, are only available to an agent that moves.

## Critiques

- Closed-loop learning on real hardware is slow and costly, which limits the data available compared with passive datasets.
- Large passive models transfer surprisingly well to robotics, suggesting action is not strictly necessary for good perception.
- The doctrine is often stated philosophically, and it can be hard to turn into specific, testable architectural claims.
