# AI Research Compass · AI 研究立场图谱

A political compass for AI research. Is intelligence built on **language** or on the **world**? Does it live in one end-to-end **monolith**, or in a **harness** of tools, memory and agents? Revolution or the old guard?

**Site:** https://sihanxu.me/ai-compass/

- **Chart** — 165 ideologies on a 13 × 12 grid with a ring of extreme titles, shaded by paradigm, like the big ideology charts of the political compass world.
- **Tests** — a quick test (10 statements, 9 camps) and a full test (50 statements, 5 axes, your exact cell, titles at the extremes). Results are shareable links and images.
- **Wiki** — an entry for every ideology in English and Chinese: beliefs, arguments, critiques, representative works, and friends / frenemies / enemies.
- **Leaderboard** — language models take the full test themselves through their APIs.

给 AI 研究做一张政治图谱：图谱、两套测试、每个主义的中英文百科词条，以及让大模型自己答题的模型榜。

## Run it

```sh
npm install
npm run dev        # http://localhost:4321/ai-compass/
npm run validate   # check every data file
npm run build      # validate, then build to dist/
```

## Where things are

| Path | What |
|---|---|
| `data/ideologies/<id>.yaml` | An ideology: names, motto, paradigm level, place on the chart, parents, relations, works |
| `content/wiki/en/<id>.md`, `content/wiki/zh/<id>.md` | Its wiki entry: `summary`, then `## Beliefs`, `## Arguments`, `## Critiques` (`## 主张`, `## 论据`, `## 批评`) |
| `data/questions.yaml` | Every statement and how agreeing moves each axis |
| `data/tests.yaml` | Which statements each test uses, and the question-bank version |
| `data/camps.yaml`, `data/axes.yaml`, `data/levels.yaml` | The quick test's nine camps, the five axes, the nine paradigm levels |
| `data/leaderboard/*.json` | Model runs written by `scripts/eval.mjs` |
| `src/lib/compass.js` | Scoring and matching, shared by the site and the eval script |
| `scripts/validate.mjs` | The checks every pull request must pass |

## Add a model to the leaderboard

```sh
ANTHROPIC_API_KEY=... npm run eval -- --provider anthropic --model <model-id>
OPENAI_API_KEY=...    npm run eval -- --provider openai --model <model-id> --base-url https://api.openai.com/v1
npm run eval -- --provider openai --model qwen3 --base-url http://localhost:11434/v1   # any OpenAI-compatible server
```

Commit the JSON it writes to `data/leaderboard/` in a pull request.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). In short: everything is a plain file, every change is a pull request, `npm run validate` must pass, both languages move together, and no real person is labelled.

## Inspired by

The Political Compass; 8values and the tests built on it (9Axes, SapplyValues, LeftValues, PolitiScales); the Polcompball wiki; and studies that put language models through political compass tests.

## License

Code: MIT. Content (`content/`, `data/`): CC BY-SA 4.0. See [LICENSE](LICENSE).
