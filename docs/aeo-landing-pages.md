# AEO Landing Pages (`/lp/:slug`)

Question-targeted pages, each answering one high-intent query directly. Built to
be the answer an engine (Google, AI Overviews, ChatGPT, Perplexity) returns, and
to convert the human who lands on it.

## How it works

- **Data:** `src/data/landingPages.js` — a plain data module (zero imports) so the
  React app, `scripts/prerender.mjs`, and `scripts/build-sitemap.mjs` all read it.
- **Page:** `src/pages/LandingPage.jsx` renders, in order: H1 (the question) →
  concise **answer block** → body sections (H2 + paragraphs) → process steps →
  related work (case study proof) → FAQ → related questions → CTA.
- **Schema:** each page emits `FAQPage` + `HowTo` + `BreadcrumbList` + sitewide
  `Organization` JSON-LD, all prerendered into the static `<head>`/body.
- **Discovery:** every slug is auto-added to `sitemap.xml` (priority 0.8) and
  prerendered to static HTML. Pages cross-link via the `related` field (semantic
  cluster). They are intentionally NOT in the main nav — search/AI is the entry.

## Adding a page

Add one entry to `landingPages` in `src/data/landingPages.js`. That's it — the
route, prerender, and sitemap pick it up automatically on the next build. Fields:

| field | purpose |
|---|---|
| `axis` | `capability` \| `vertical` \| `use-case` (planning only) |
| `category` | eyebrow + breadcrumb label |
| `question` | the H1 and the query being answered |
| `answer` | the direct answer block under the H1 (the AEO money shot, ~2-4 sentences) |
| `seoDescription` | meta description (falls back to first 155 chars of `answer`) |
| `sections[]` | `{ heading, body }` where body is a string or array of paragraphs |
| `processLabel`, `steps[]` | `{ label, body }` → HowTo schema |
| `faqLabel`, `faqs[]` | `{ question, answer }` → FAQPage schema |
| `relatedProjects[]` | case study slugs → "Proof" work grid |
| `related[]` | sibling LP slugs → "Related questions" cluster links |
| `ctaHeading`, `ctaBody` | per-page CTA copy |

Voice rule: no em dashes in copy (use commas, colons, periods, parens).

## Live now (seed pages, one per axis)

- `what-is-branded-edutainment` — capability
- `videos-people-actually-finish` — use-case / outcome
- `video-production-for-healthcare-brands` — vertical

## Candidate backlog (validate against GSC before building)

Do not build these blind. Verify deep-dive.studio in Google Search Console, let a
week of query data accrue, then prioritize the topics where the site already shows
impressions / ranks ~8-20 (one good page from page one). Map real queries to these.

### Capability / service intent
- What is a branded documentary?
- What does a video production company actually do?
- How much does branded video production cost?
- What is an edutainment studio?
- Brand film vs explainer video: what's the difference?
- How long does it take to produce a brand documentary?

### Industry / vertical (lean on existing case studies as proof)
- Video production for fintech brands
- Video production for technology / SaaS companies
- Documentary content for nonprofits and mission-driven brands
- Video for B2B brands with complex products
- (Live) Video production for healthcare brands

### Use-case / outcome
- How do you measure whether a brand video worked?
- How do you make a video go viral without gimmicks? (reframe: earn watch-through)
- What makes people share branded video?
- How do you turn a complex topic into a watchable film?
- Brand documentary vs traditional advertising: which builds more trust?

## GSC checklist
- [ ] Verify deep-dive.studio property (Domain property via DNS recommended).
- [ ] Submit `sitemap.xml`.
- [ ] After ~1 week: pull Performance > Queries, sort by impressions, find near-page-one terms.
- [ ] Prioritize backlog topics against that data; promote winners from this doc into `landingPages.js`.
