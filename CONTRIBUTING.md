# Contributing

Everything on the site comes from plain files in this repository. Change them with a pull request; GitHub Actions validates and builds every pull request and deploys `main`.

Before you open one:

```sh
npm install
npm run validate
npm run dev
```

## Ground rules

1. **No real people.** Entries cite papers, models, systems and concepts. Do not place, quote or characterise living researchers.
2. **Both languages.** Every entry exists in `content/wiki/en/` and `content/wiki/zh/`, and every name, motto and statement has `en` and `zh`. Write each language natively rather than translating word for word. Each page shows only its own language.
3. **Steelman.** Every entry gives the ideology's strongest arguments and the fairest critiques its rivals make.
4. **Works must exist.** List a paper or system only with its exact title and year; add a URL only when you are sure of it.

## Edit an entry

Change `content/wiki/<lang>/<id>.md`. Keep the front matter `summary` (one sentence) and the three headings: `## Beliefs`, `## Arguments`, `## Critiques` (Chinese: `## 主张`, `## 论据`, `## 批评`).

## Add or move an ideology

1. Create `data/ideologies/<id>.yaml` (the id is the English name in lowercase words joined by hyphens):

   ```yaml
   id: harness-liberalism
   name: { en: Harness Liberalism, zh: Harness 自由主义 }
   motto: { en: "The model is the engine; the harness is the car", zh: "模型是引擎，harness 才是车" }
   level: 4            # paradigm: 1 strongest paradigm shift … 5 neutral … 9 firmest mainstream
   place: { col: 3, row: 8 }   # col 0–12 Language → World, row 0–11 Monolith → Harness
   parents: [tool-use-liberalism]
   relations: { allies: [...], frenemies: [...], rivals: [...] }
   works: [{ title: "...", year: 2023, url: "https://arxiv.org/abs/..." }]
   ```

   A ring title uses `place: { ring: left, at: 3, when: { x: "<-0.85" } }` instead; `when` lists the score conditions that earn it.
2. Write both wiki entries.
3. Every cell holds exactly one ideology. To add one, move or replace another, and say why in the pull request.

## Change the test

Statements are in `data/questions.yaml`; each has `effects`, how far agreeing moves each axis (`-1`…`1`), and `sub`, its sub-dimension on each of those axes (from `data/subaxes.yaml`). Keep each axis and each sub-dimension balanced (validate warns when it is not). Any change to statements or to which ones a test uses must bump the version in `data/tests.yaml`: `version` for the quick and full tests, `pro.version` for the pro test.

The pro test's follow-ups (`pro.followups.pool`) should load on two or three of x, y and p and point in many different directions: the test picks whichever one best separates the cells nearest to the answerer.

## Recalibrate the chart

Ideologies are not placed by hand. Each one has a file in `data/calibration/personas/<id>.json`: the answers a committed adherent gives to every statement, written from its wiki entry alone, without seeing the axes, their directions or the ideology's current place. `node scripts/calibrate.mjs` turns these into the chart:

1. scores each ideology the same way a person is scored;
2. fits one stretch factor per chart axis so 90% of ideologies fall inside the chart (`data/calibration.yaml`); every person's score is stretched the same way;
3. assigns ideologies to cells with the least total displacement (the centre block always holds the centre);
4. sets each paradigm level from the paradigm score, and saves each ideology's point. People are matched against these points; the cell only decides where an ideology is drawn.

Run `node scripts/calibrate.mjs --dry` first to see what would move. When you add an ideology, add its persona answers. When statements change, all persona answers must be redone, then recalibrate and update the position sentences in the wiki entries that moved.

## Comments

Each wiki entry has a comment thread (giscus): one GitHub Discussion per ideology, in the "Announcements" category, titled `wiki/<id>` and shared by the English and Chinese pages. Moderate there: hide, delete, lock or block as on any discussion.
