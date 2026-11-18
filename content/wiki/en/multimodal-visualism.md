---
summary: "Holds that visual understanding is the core goal, with language, audio and other modalities serving as auxiliary signals."
---
## Beliefs

Multimodal Visualism reads the naming rule literally: vision is the substance, multimodality the means. The point of the whole enterprise is to see well, to detect, segment, track and understand scenes. Language is useful as a cheap supervisor and as a convenient way for humans to specify what they want ("find the red mug"), and depth, audio or motion can help disambiguate. But they are servants of perception, not its master. Open-vocabulary detectors and promptable segmenters are its model citizens.

It sits right of center on the World side and in the upper-middle band: one strong visual system, prompted by many kinds of input. Its paradigm level is neutral. It is the natural ideology of computer vision as a discipline, which absorbed language supervision without giving up its own questions about pixels, boxes and masks.

## Arguments

- Promptable segmentation and open-vocabulary detection models use language and clicks as prompts while keeping a vision-centric architecture, and they generalize across many domains.
- Dense spatial tasks, from robotics to medical imaging, need pixel-precise outputs that language-centric models rarely provide.
- Using language only as a weak supervisor lets vision models benefit from text without inheriting its limits on spatial detail.

## Critiques

- Language-first camps argue that vision systems without strong language reasoning cannot handle open-ended questions about what a scene means.
- Its mirror image, Visual Multimodalism, argues a vision-first model should aim to absorb all modalities, not stay a specialist.
- Benchmarks of boxes and masks may not measure the understanding that downstream agents actually need.
