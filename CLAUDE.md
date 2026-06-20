# Behavioural Interview Prep

A personal web app for rehearsing behavioural interview questions (values, leadership,
management). Built with **Astro**, deployed to **GitHub Pages**.

Live at: https://jackdo68.github.io/behavioral-questions

## What this is

- A static site listing common behavioural questions grouped into categories. Each question
  is a foldable card (`Question: …` → click to expand the answer).
- Answers are presented as colour-coded **STAR** breakdowns (Situation/Task/Action/Result),
  with "what they're really asking", tips, and likely follow-ups.
- A separate page explains the STAR framework.
- The answers are **Jack's real stories** (anonymised — no target-company names). Keep them
  in first person and grounded in his actual experience.

## Tech stack

- Astro 4 (static output, no UI framework — plain `.astro` components)
- No CSS framework; hand-written CSS in `src/styles/global.css` (dark theme, CSS variables)
- Foldable answers use the native `<details>`/`<summary>` element (no JS)

## Project structure

- `src/data/questions.ts` — **the content**. All questions/answers live here as typed data
  (`Category[]` → `Question[]`). This is the file to edit to add/change questions.
- `src/components/Question.astro` — renders one foldable question card from a `Question`.
- `src/layouts/Layout.astro` — page shell: nav, `<head>` meta (favicon, OG/Twitter tags), footer.
- `src/pages/index.astro` — home; groups questions by category with jump-links.
- `src/pages/star.astro` — STAR framework explainer page.
- `public/favicon.svg` — bullseye/target icon; also used as the header logo.
- `public/og.svg` — 1200×630 social-share preview image.
- `public/.nojekyll` — stops GitHub Pages running Jekyll (which would drop Astro's `_astro/` dir).
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages on push to `main`.
- `astro.config.mjs` — `site` + `base` config (see Deployment).

## Content model (`src/data/questions.ts`)

```ts
interface Question {
  id: string;            // anchor id, used in URL hash
  question: string;
  whatTheyAsk?: string;  // "what they're really asking" probe
  story?: Star;          // { situation, task?, action, result } — for worked examples
  answer?: string;       // direct talking-points answer (when no full story)
  tips?: string[];       // "how to land it"
  followUps?: string[];  // likely follow-up questions
}
```

A question uses **either** `story` (STAR) **or** `answer` (prose), not both.
Categories: Leadership & Initiative, Conflict & Disagreement, Failure & Learning, Teamwork,
Customer Focus, Decision Making, Driving Outcomes, Feedback & Transparency,
Learning & Knowledge Sharing, Motivation & Fit.

### Story-reuse principle
Each real story should map to one question (rotate stories across questions so none repeats
within a single interview). E.g. JS→TS migration → initiative/disagreement/leading-without-
authority; CDK log-group deletion → "mistake/learned from it"; security-feature-broke-legacy →
"calculated risk that failed". Keep distinct failure stories on distinct questions.

## Deployment (GitHub Pages)

- `astro.config.mjs`: `site: 'https://jackdo68.github.io'`, `base: '/behavioral-questions'`
  (base matches the repo name). If the repo is renamed, update `base`.
- GitHub repo → Settings → Pages → **Source: GitHub Actions** must be enabled, or the deploy
  job fails with a 404 "Ensure GitHub Pages has been enabled".
- All internal links/assets must go through the `base` — Layout has an `href()` helper using
  `import.meta.env.BASE_URL`. Don't hardcode root-absolute paths.
- OG image is currently an SVG; some platforms (Slack/Twitter/Facebook) won't render SVG
  `og:image` and prefer PNG. Convert `og.svg` → PNG if full social-preview support is needed.

## Commands

```
npm run dev      # local dev server
npm run build    # static build to dist/
npm run preview  # preview the built site
```

## Conventions / preferences

- Don't create or edit markdown doc files unless explicitly asked (this file was requested).
- After changing content, run `npm run build` to verify it compiles.
- When running npm commands, `source ~/.zshrc` first.

## Notes / loose ends

- The original prep notes `airwallex-prep.md` and `atlassian-prep.md` (root) contain the
  pre-anonymisation source material incl. company names and comp figures. They are not served
  by the site but live in the repo — consider removing before making the repo public.
