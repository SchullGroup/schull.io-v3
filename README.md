# Schull Academy — V1

The public marketing site for Schull Academy, the career learning arm of Schull
Technologies.

**V1** is this marketing site. **V2** is the logged-in learning platform — its
functional scope is captured in [`docs/PRD.md`](docs/PRD.md) §10, and its visual
language locks when the V2 sample lands.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3100

```bash
npm run build   # production build, 26 static pages
npm start
```

## What is here

| Route | Page |
|---|---|
| `/` | Home — 13 sections |
| `/career-fields` | The only index — six fields, alternating full-width blocks, then the career readiness section |
| `/pathways/[slug]` | **One page per subject ×6**, one shared template |
| `/placement-assessment` | Assessment landing |
| `/placement-assessment/start` | Working 4-question flow + result |
| `/about` | About Us |
| `/success-stories` | Frame + designed empty states |
| `/faqs` | 5 groups, FAQPage structured data |
| `/contact` | Three routes + form |

## Structure

```
app/          routes; globals.css holds the whole design system
components/   ui.js (Reveal, Accent, Scallop, Marquee, Accordion, Counter, Icon)
              Header.js, Footer.js
content/      all copy and imagery, no strings in components
docs/PRD.md   the full product requirements document
```

**All copy is verbatim from the client copy document and is locked.**
Edit `content/*.js`, never the page files, to change wording. Some older
strings still sit inline in page files; move them into `content/` as you touch
them.

### One page per subject

Each subject used to have two pages — a field page (skills, job titles) and a
pathway page (route, price, buy button). They merged into one at
`/pathways/[slug]`, which now carries the skill tags under the at-a-glance bar
and a "Where it leads" section after the route. `/career-fields/[slug]` and the
`/pathways` index are gone; `next.config.mjs` redirects both.

The skill tags are deliberately a *skim aid* — the route section already names
every one of them in prose, and explains when you learn each. Do not add a third
copy in its own section.

### Naming — deliberate, do not "fix" it

**"Career Field"** is the user-facing category word. The six entities inside it
keep their **"School of …"** names (`School of Data`, and so on). Both were
agreed in the 2026-09-18 meeting: rename the category, retain the school
terminology for the entities themselves.

So the internal identifiers stay as "school" too — `SCHOOLS`, `getSchool`,
`SCHOOL_IMG`, `SCHOOL_ICONS`, `pathways[].school`, `.school-card` — because they
match the entity names, not the category word. A global find-and-replace of
"school" → "field" will break this.

## Design system

Layout, rhythm and motion are recreated from the Brightpath reference. The
palette is Schull's own.

| Token | Value | Role |
|---|---|---|
| `--blue` | `#1077E5` | Primary action — matches the live dashboard |
| `--navy` | `#071C3F` | Display type, dark sections, footer |
| `--orange` | `#FA9A19` | Accent: swash, sparkles, nav CTA, on-navy highlights |
| `--cream` `--sand` `--sky` `--mint` `--blush` `--sun` | | The section colour blocks |

> Navy and orange were sampled from the supplied swatch images. If the brand book
> has exact values, change them in `app/globals.css` — everything derives from
> there.

**Motion**, measured from the reference:

- Scroll reveal: `opacity 0→1`, `translateY(30px)→0`, 600ms,
  `cubic-bezier(.44,0,.56,1)`, 80ms sibling stagger, fires once at 15% in view
- Above-the-fold reveals use `<Reveal immediate>` so the hero never sits blank
- Hover: 400ms, same easing
- Marquee: infinite, ~44s linear, `rotate(-3.2deg)`, pauses on hover
- All of it collapses under `prefers-reduced-motion`; a `<noscript>` block shows
  everything if JS never runs

## Imagery

Every human image resolves through `content/images.js` and is an African
learner, instructor or professional in an African setting. Swap that one file
when the commissioned shoot lands.

## Deploying

Hosted on Vercel — project `schull.io` under the `solamide-langs-projects` team.

```bash
npx vercel --prod --yes --archive=tgz --scope solamide-langs-projects
```

`--archive=tgz` sends one compressed upload instead of hundreds of file requests;
the per-file mode drops partway through on a slow connection.

Two things that will bite on a fresh machine:

- **Next.js must stay patched.** Vercel refuses to deploy a version with a known
  CVE — the build succeeds and then the deploy is rejected. Keep `next` current.
- **`.vercelignore` matters.** Without it the 5 MB `out/` export folder and the
  local deploy token get uploaded.

`out/` is only for the Artifact preview (`npm run export:artifact`). Vercel builds
from source and ignores it.

## Still needed before launch

1. Exact navy and orange hex from the brand book
2. Pricing — every pathway page shows `[To be confirmed]` in its summary bar
3. Course lists per pathway — the largest content gap
4. Contact details: email, phone, WhatsApp, address, hours, socials
5. Real photography to replace the sourced placeholders
6. Form backend — Contact and the newsletter currently resolve client-side only
