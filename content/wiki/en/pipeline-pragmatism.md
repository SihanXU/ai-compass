---
summary: "Vision systems work best as explicit pipelines of detection, segmentation and recognition stages, each specialized, testable and replaceable."
---
## Beliefs

Pipeline Pragmatism is the doctrine of the working computer-vision engineer. Detect the objects, segment them, classify or track them, then hand structured results to whatever comes next. Each stage has its own model, its own metrics and its own failure analysis. When something breaks, you know which stage to fix; when a better segmenter arrives, you swap it in on Monday. The pragmatist does not claim this is how brains work, only that it ships.

It sits on the World side (col 7), just right of center, and toward Harness (row 7): it is about perceiving the physical world, and its intelligence is spread across a chain of modules rather than packed into one network. Its somewhat dark shade marks an established school: pipelines dominated industrial vision for years and still run much of it. End-to-end camps call it legacy; pragmatists note that promptable segmenters and open-vocabulary detectors have made pipelines more flexible, not less.

## Arguments

- Explicit intermediate outputs, boxes, masks and tracks, can be inspected, measured and debugged stage by stage.
- Specialized components can be upgraded independently, which keeps systems current without full retraining.
- Structured outputs integrate cleanly with downstream logic, databases and control systems that expect objects, not embeddings.

## Critiques

- Errors compound across stages, and an early miss cannot be recovered later in the pipeline.
- End-to-end models can learn task-relevant cues that hand-defined intermediate representations throw away.
- Maintaining many models, interfaces and thresholds adds engineering overhead that a single model avoids.
