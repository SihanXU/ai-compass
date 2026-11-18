---
summary: "Holds that scenes should be represented as sets of discrete objects, each with its own slot, rather than as undifferentiated feature maps."
---
## Beliefs

Object-Centrism believes the world comes pre-divided into things. A kitchen is not a grid of pixels or a single global embedding; it is a kettle, a cup, a table and a cat, each with position, shape and properties, interacting according to rules. A model that represents a scene as a set of object slots can count, track, compose and reason about relations far more naturally than one that smears everything into a feature map. Better still, objects can be discovered without labels, by architectures that compete to explain different parts of the input.

It sits right of center on the World side and in the middle band: a structured inductive bias inside a learned model, neither pure scale nor external tooling. Its paradigm level is progressive. It challenges the scale camp's assumption that structure will simply emerge, arguing that objectness is a prior worth building in.

## Arguments

- Slot-based architectures discover and segment objects without supervision on synthetic scenes, producing representations that support counting and relational reasoning.
- Object-level representations generalize compositionally: a model that knows cups and tables can handle a new arrangement of both.
- Planning, physics prediction and robot manipulation all operate naturally on objects, so object-centric representations make downstream tasks simpler.

## Critiques

- Unsupervised object discovery has historically worked best on simple synthetic scenes and struggles with cluttered real-world images.
- What counts as an object depends on the task: a bicycle, its wheel or its spokes, which makes a fixed slot structure awkward.
- Large self-supervised and segmentation models now deliver object-like structure without dedicated slot mechanisms.
