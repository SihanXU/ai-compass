---
summary: "Holds that speech and sound should be modeled natively, end to end, rather than converted to text and back."
---
## Beliefs

Audio-Native Doctrine points out that humans spoke for a very long time before anyone wrote anything down. Speech carries tone, emphasis, emotion, hesitation, overlap and timing, nearly all of which vanishes the moment audio is transcribed. The classic voice pipeline of speech recognition, then a text model, then speech synthesis throws that information away twice and adds latency at every hop. Instead, model audio directly: learn discrete or continuous audio units, train language models over them, and let a single system listen and speak in real time.

It sits at the horizontal center, since speech is both language and physical signal, and in the middle band: one model ideally, though often still wrapped in streaming infrastructure. Its paradigm level is progressive. It challenges the assumption that text is the natural interface to intelligence and treats spoken interaction as a first-class goal.

## Arguments

- Raw-waveform generative models showed that neural networks can synthesize natural-sounding speech directly from audio samples.
- Self-supervised speech representations learn phonetic structure from unlabeled audio and enable strong recognition with little transcribed data.
- Full-duplex speech-text models can listen and talk simultaneously with low latency, handling interruptions that cascaded pipelines handle poorly.

## Critiques

- Audio is far less information-dense than text per unit of compute, making knowledge acquisition from speech slow.
- Language-first camps note that native audio models often reason worse than their text counterparts and rely on text backbones anyway.
- Evaluation is hard: measuring prosody, naturalness and conversational quality lacks agreed benchmarks.
