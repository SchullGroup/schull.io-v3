# Schull Academy — Product Requirements Document

**Product:** Schull Academy website + learning platform (schull.io)
**Owner:** Schull Technologies
**Document status:** Living. Covers **V1** (specified, ready to build) and **V2** (framework set, visual sample pending).
**Last updated:** 16 September 2026

---

## 0. How to read this document

This is **one PRD for two builds**.

| | V1 | V2 |
|---|---|---|
| **What it is** | Public marketing site — the academy's front door | Full learning platform — logged-in student experience |
| **Visual reference** | `https://brightpath-wbs.framer.website/` (structure + motion), re-skinned into Schull brand | **Pending** — user will supply sample |
| **Scope** | Home, Career Schools, Pathways, Placement Assessment, About, Success Stories, FAQs, Contact | Dashboard, My Courses, Course Store, Cart/Checkout, Quizzes, Profile & Billing, Certificates |
| **Status** | Specified below in §3–§8. **Build now.** | Screens captured in §9 from supplied SVGs. Visual language locked once V2 sample lands. |

Sections §1 and §2 (brand, design system, motion, imagery) apply to **both** versions. Nothing in §9 blocks V1.

**Source material used:**
- `Schull_Academy_Website_Copy.pdf` — 23 pages of final approved copy. All V1 body copy in this PRD is lifted from it verbatim. **Copy is locked; do not rewrite.**
- Brand colour swatches (white / blue / navy / orange) supplied by the user.
- 7 dashboard SVG screenshots: Course Store, Store Course Details, Cart, Quizzes, View Quiz, Quiz Results, My Profile (Billing).
- Brightpath Framer template — audited live for palette, type scale, radii, section rhythm and animation values.

---

## 1. Product overview

### 1.1 What Schull Academy is

Schull Academy is the career-learning arm of Schull Technologies, delivered on the Schull.io platform. It sells **Career Pathways**, not courses — structured routes from "I want to work in tech" to "here is my portfolio, my capstone and a verifiable certificate."

The commercial model and the site architecture both hang off one idea, stated in the copy:

> "Stop collecting courses. Start building a career."

### 1.2 The seven Career Schools

1. **School of AI and Automation**
2. **School of Cloud and DevOps**
3. **School of Cybersecurity**
4. **School of Data**
5. **School of Quality Assurance**
6. **School of Product Management**
7. **School of Career and Workplace Readiness** (built into every pathway; also standalone)

### 1.3 The six-step learner journey

This is the spine of the whole product. Every page should be traceable to a step.

1. Choose your career direction → **Career Schools page**
2. Take the placement assessment → **Placement Assessment page** (free, pre-payment)
3. Start where you belong → Foundation or Professional entry
4. Learn with structure and support → self-paced + live instructor sessions
5. Build work you can show → projects + capstone
6. Get certified and go to market → certificate + career readiness track

### 1.4 Primary conversion goal

**Placement assessment completion.** Not "buy now." The copy is explicit that the assessment is free, comes before payment, and is the qualifying step. Treat assessment starts as the north-star metric; enrolment is downstream of it.

Secondary goals: pathway page views, advisor contact, organisation/partnership enquiries.

### 1.5 Audiences

| Audience | What they need from the site |
|---|---|
| Career starters | Reassurance that zero experience is fine; a clear first step |
| Career switchers | Evidence this is different from the courses that failed them |
| Working tech professionals | Proof they won't pay to sit through material they've outgrown (→ placement assessment) |
| Students and graduates | Something demonstrable to show employers |
| Organisations / employers | Cohort training, sponsorship, partnership route |

---

## 2. Brand and design system

### 2.1 Design strategy — the core decision

Brightpath supplies the **structure, rhythm and motion**: oversized display headlines with one word accented and hand-drawn underlined, full-bleed pastel colour blocks stacked in sequence, scalloped section dividers, softly tilted cards, pill buttons, warm generous whitespace.

Schull supplies the **palette and the voice**: blue, navy, orange, white — professional, African, career-serious.

**We keep Brightpath's warmth and take out its childishness.** Brightpath sells after-school tutoring to parents. Schull sells a career to adults. So: same generosity of scale and same playfulness in the accents, but the photography is adults in real African workplaces, the numbers are outcomes not cuteness, and the pastels are dialled toward Schull's blue/navy rather than nursery tones.

### 2.2 Colour tokens

**Brand core** (from supplied swatches):

| Token | Hex | Use |
|---|---|---|
| `--brand-white` | `#FFFFFF` | Card surfaces, reversed text |
| `--brand-blue` | `#1077E5` | Primary action, primary links, active states |
| `--brand-navy` | `#071C3F` | Dark sections, footer, display headings on light, high-contrast panels |
| `--brand-orange` | `#FA9A19` | Accent, highlights, hand-drawn marks, "Popular" flags, secondary CTA |

> ⚠️ **Confirm before build:** `--brand-navy` and `--brand-orange` were sampled from the supplied swatch images. If the brand book has exact values, they override these. Blue and white are confirmed against the dashboard SVGs.

**Extended system** (harvested from the dashboard SVGs — these are already live in the product, so V1 must match them or V1 and V2 will visibly disagree):

| Token | Hex | Use |
|---|---|---|
| `--blue-600` | `#1077E5` | Primary button fill |
| `--blue-500` | `#1C82EF` | Links, active nav, icon accents |
| `--blue-400` | `#1890FF` | Hover / focus ring |
| `--blue-50` | `#E8F2FE` | Category chips, subtle info panels |
| `--ink-900` | `#212B36` | Body headings, table text |
| `--ink-800` | `#1D2026` | Top utility bar |
| `--ink-600` | `#637381` | Secondary body text |
| `--ink-500` | `#66707F` | Tertiary text |
| `--ink-400` | `#919EAB` | Placeholder, disabled, meta |
| `--line-200` | `#DFE3E8` | Borders, dividers |
| `--line-100` | `#E8E9EB` | Hairlines |
| `--surface-50` | `#F4F6F8` | Page background (app) |
| `--success-600` | `#118D57` | Pass state, paid state |
| `--success-500` | `#22C55E` | Score percentages, "Continue Learning" |
| `--success-100` | `#DFF5E8` | Pass badge background |
| `--warning-500` | `#FFAB00` | Star ratings, "Bestseller" flag |
| `--warning-400` | `#FED634` | Star fill |
| `--warning-700` | `#B76E00` | Text on warning surfaces |
| `--danger-500` | `#FF5630` | Remove, destructive |
| `--danger-600` | `#ED3436` | Error text |

**Marketing section blocks** (V1 only — Schull-tinted equivalents of Brightpath's pastel sequence). These are the full-bleed backgrounds that give the homepage its rhythm:

| Token | Hex | Section role |
|---|---|---|
| `--block-cream` | `#FBF8F2` | Default page ground; warm, not clinical |
| `--block-sand` | `#F4EEE3` | Alternating band |
| `--block-sky` | `#D8E8FA` | Career Schools / mentor blocks |
| `--block-mint` | `#DCEFE4` | Outcomes / "what you'll build" |
| `--block-blush` | `#FBE3DC` | Testimonials |
| `--block-sun` | `#FDEBCF` | Levels / entry-point block |
| `--block-navy` | `#071C3F` | Stats panel, pricing highlight, footer, final CTA |

**Rule:** never place two identical block colours adjacently. The homepage reads as a sequence of colour rooms.

### 2.3 Typography

| Role | Family | Weight | Desktop | Mobile | Tracking |
|---|---|---|---|---|---|
| Display / H1 | **Bricolage Grotesque** | 700 | 96–104px | 44–52px | `-0.06em` |
| H2 (section) | Bricolage Grotesque | 600 | 72–82px | 36–42px | `-0.05em` |
| H3 (card title) | Bricolage Grotesque | 600 | 28–32px | 22–24px | `-0.02em` |
| H4 / eyebrow | Instrument Sans | 500 | 14px, uppercase | 12px | `+0.08em` |
| Body | Instrument Sans | 400 | 17–18px / 1.6 | 16px / 1.6 | `0` |
| Small / meta | Instrument Sans | 400 | 14px | 13px | `0` |
| UI (dashboard) | Inter | 400–600 | 14–16px | 14px | `0` |

Load Bricolage Grotesque and Instrument Sans from Google Fonts with `display=swap`; subset to `latin`. Inter is already in use in the dashboard — keep it there so V2 is untouched.

**The accented-word treatment (signature device).** Every section headline sets its last one or two words in `--brand-blue` (on light blocks) or `--brand-orange` (on navy blocks), with a hand-drawn SVG underline swash beneath and two or three small orange "sparkle" ticks above-right. Examples: "Choose your career. Build your **future**." / "Seven Career **Schools**." / "How Schull Academy **works**."

Ship the swash and sparkles as two reusable inline SVGs that scale with the text box — do not bake them into images.

### 2.4 Shape, elevation, spacing

- **Radii:** `20px` cards and blocks · `10px` inner media · `100px` pills, buttons, chips · `50px` large feature panels
- **Card tilt:** decorative cards may carry a static `rotate(-3deg)` to `rotate(3deg)`. Use sparingly — testimonials, hero photo scatter, "how it works" steps. Never on anything a user must read closely or click precisely on mobile.
- **Shadow:** `0 2px 8px rgba(7,28,63,0.06)` resting · `0 8px 24px rgba(7,28,63,0.10)` hover. No shadow on pastel-on-pastel.
- **Spacing scale:** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
- **Section padding:** 128px vertical desktop, 64px tablet, 48px mobile
- **Container:** max-width 1280px, 24px gutters mobile / 48px desktop
- **Scalloped divider:** a repeating semicircle SVG mask between colour blocks, matching the reference. Use on 3–4 transitions per page maximum, not every one.

### 2.5 Motion specification

Audited from the live reference. These are the actual measured values — implement them, don't approximate.

**Scroll reveal (the primary motion)**
```
initial:  { opacity: 0, y: 30 }
animate:  { opacity: 1, y: 0 }
duration: 600ms
easing:   cubic-bezier(0.44, 0, 0.56, 1)
trigger:  once, when element is ~15% into viewport
stagger:  80ms between siblings in a group
```

**Hover / interactive**
```
properties: color, background, box-shadow, text-decoration
duration:   400ms
easing:     cubic-bezier(0.44, 0, 0.56, 1)
```

**Hero marquee band** — a diagonal strip (`rotate(-4deg)`) of pathway-benefit phrases scrolling infinitely right-to-left, ~40s per loop, linear, duplicated twice for seamless wrap. Pauses on hover. Content: the pathway value props — *Live instructor sessions · Marked assignments · Real projects · Capstone · Verified certificate · Career readiness · Foundation to Professional*.

**Counters** — the stats block counts up from 0 on first view, 1.2s, ease-out. Falls back to the final number if the animation can't run.

**Accordion (FAQ)** — height auto-transition 300ms, same easing; chevron rotates 180°.

**Hard requirements**
- Everything above is wrapped in `@media (prefers-reduced-motion: reduce)` → reveals become instant `opacity: 1`, marquee stops, counters show final values.
- No animation may delay Largest Contentful Paint. The hero headline renders at full opacity on first paint; reveal animations begin below the fold.
- Reveal state must never leave content permanently invisible if JS fails — default to visible, let JS opt elements *into* the hidden start state.

### 2.6 Imagery direction — African focus

**This is a hard requirement, not a preference.** Every human image on the site is an African learner, instructor or professional, in a recognisably African setting.

**Do:**
- Nigerian, Ghanaian, Kenyan, South African and Rwandan learners, aged 18–40
- Real work environments: Lagos and Nairobi co-working floors, university computer labs, home setups with the honest details (inverter, standing fan, a good laptop on a modest desk)
- Natural warm daylight; deep, correctly-exposed skin tones — brief the photographer or retoucher explicitly on this, it is the single most common failure in stock-sourced African imagery
- Instructors shot as professionals: shirts, lanyards, whiteboards, real code and real dashboards on screen
- Where photography is unavailable, commission illustration in the same palette rather than falling back on generic stock

**Don't:**
- Rural "aid" or "charity" framing. This is a career academy, not a development programme.
- Children. The audience is adults choosing a career.
- Single-token diversity — one Black face in an otherwise non-African cast.
- Screens showing Western-only tooling when the pathway teaches Huawei Cloud, Paystack integrations, or local data.

**Pattern accents:** a restrained geometric motif drawn from West African textile tradition (Ankara / kente / adinkra geometry) may be used at 5–8% opacity as a background texture in the navy blocks and as the scalloped divider's secondary layer. Keep it subtle — it is a signature, not a costume.

**Names and details:** instructor and learner names must be African and varied across regions. The existing dashboard already does this correctly (`Adewale Johnson`) — continue it: Adaeze Okonkwo, Kwame Mensah, Wanjiru Kamau, Thabo Molefe, Fatima Bello, Chidi Nwankwo.

**Currency:** Naira-first with a USD toggle. The Cart screen already prices in ₦ (₦335,000 / ₦200,000 / total ₦700,000) while the Course Store prices in $. **This inconsistency exists in the current product and must be resolved** — see §9.8.

### 2.7 Voice

Taken from the copy, which is unusually well written and should be protected:

- Direct, second person, unhedged. "You do not pay to sit through material you have already outgrown."
- Honest about limits. "We do not sell job guarantees."
- British spelling throughout: *organisation, modelling, enrolment, programme*.
- No exclamation marks. No "unlock your potential." No emoji in body copy.
- Button text is a verb phrase in sentence case: *Take the placement assessment*, *Explore school*, *Talk to an advisor*.

---

## 3. V1 — Information architecture

```
/                           Home
/career-schools             Career Schools index (7 schools)
/career-schools/[slug]      School detail
    ai-and-automation
    cloud-and-devops
    cybersecurity
    data
    quality-assurance
    product-management
    career-and-workplace-readiness
/pathways                   Career Pathways index
/pathways/[slug]            Pathway detail (7 pages, shared template)
/placement-assessment       Assessment landing
/placement-assessment/start Assessment flow
/placement-assessment/result Result + recommendation
/about                      About Us
/success-stories            Success Stories
/success-stories/[slug]     Individual story (post-launch)
/faqs                       FAQs
/contact                    Contact
/legal/terms
/legal/privacy
/legal/academic-integrity
/verify/[certificateId]     Public certificate verification
```

**Primary navigation:** Career Schools · Career Pathways · Placement Assessment · About · Success Stories
**Nav CTA:** `Take the assessment` (orange pill, right-aligned)
**Mobile:** full-screen overlay menu, CTA pinned at the bottom.

**Sticky behaviour:** header is transparent over the hero, then solidifies to white with a hairline border and a soft shadow after 80px of scroll (300ms transition).

---

## 4. V1 — Page specifications

All body copy below is **final and comes from `Schull_Academy_Website_Copy.pdf`**. Square brackets mark content that does not exist yet.

### 4.1 Home (`/`)

| # | Section | Block colour | Content | Notes |
|---|---|---|---|---|
| 1 | **Hero** | `--block-cream` | H1: "Choose your career. Build your **future**." Sub: "Structured technology career pathways with live sessions, real projects and a certificate that proves you can do the work." CTAs: `Explore our Career Schools` (orange, primary) · `Take the placement assessment` (navy outline) | Below the CTAs: 3–4 tilted photo cards of African learners scattered at varying depths, plus a floating doodle. Eyebrow pill above H1: "Seven Career Schools. One clear route into tech." |
| 2 | **Marquee** | `--block-cream` | Diagonal infinite strip, see §2.5 | Overlaps the hero photo scatter |
| 3 | **Four differentiators** | `--block-sand` | "Four things that make us different" → Career first / Placed properly / Live and self paced / Proof of skill, each with its one-line explainer | 4-up grid desktop, 2-up tablet, stacked mobile. Icon tile in a pastel square, radius 10px. |
| 4 | **The problem** | `--block-cream` | "Stop collecting courses. Start building a career." + the three-paragraph argument | Two-column: headline left, body right. Photo of a learner at a desk, tilted 2°. |
| 5 | **Seven Career Schools** | `--block-sky` | "Seven Career **Schools**" + intro line + all 7 school cards | Card = colour fill, icon tile, school name, one-line description, `Explore school` arrow link. Rotate through `--block-*` fills so no two adjacent cards match. CTA below: `View all Career Schools`. |
| 6 | **How Schull Academy works** | `--block-cream` | "How Schull Academy **works**" + "Six steps from career intent to career credential." + steps 01–06 | Left: sticky headline + supporting photo. Right: six numbered cards, each tilted ~1.5° alternating, revealing in sequence on scroll. Number badge in a pastel tile. CTA: `Take the placement assessment`. |
| 7 | **What a Career Pathway gives you** | `--block-mint` | "A pathway is not a bundle of courses. It is the complete route to a working standard." + Foundation / Professional / Portfolio / Career readiness / Capstone / Credential | Six cards. CTA: `Browse Career Pathways`. |
| 8 | **You leave with work you can show** | `--block-cream` | The six example capstone outputs, one per school | Horizontal scroll-snap carousel on mobile; 3×2 grid desktop. Each card carries a real project screenshot or mockup. |
| 9 | **Stats** | `--block-navy` | [Learners enrolled · Pathways completed · Certificates issued · Projects built] | Animated counters. Navy panel overlapping a photo of African learners, offset to the right. **Placeholder until real numbers exist — do not invent figures.** |
| 10 | **Real learners. Real outcomes.** | `--block-blush` | "The point of a pathway is what happens after it." + `[Learner stories go here once the first cohort finishes…]` | **Pre-launch state:** render a designed empty state — "Our first cohort is in progress. Their stories land here." Do not ship lorem testimonials. CTA: `Read success stories`. |
| 11 | **FAQ** | `--block-cream` | "Questions people ask before they start" + 5 questions from the copy | Accordion, first item open. CTA: `See all FAQs`. |
| 12 | **Closing CTA** | `--block-sand` | "Your next career move starts with a choice." / "Pick a Career School, choose your pathway and start building." CTAs: `Explore our Career Schools` · `Talk to an advisor` | Cut-out photography of two African professionals flanking the headline, floating doodles, as per the reference's final CTA. |
| 13 | **Footer** | `--block-navy` | Scalloped top edge. Logo, contact, nav columns, newsletter capture with a circular orange arrow button, socials, legal | |

### 4.2 Career Schools (`/career-schools`)

- **Hero:** "Seven Career Schools. Pick your **direction**." + "A Career School is a career area. Inside it are the pathways that take you from where you are now to working in that field." + CTA `Not sure which one? Take the placement assessment`
- **Seven full-width alternating sections**, one per school, alternating `--block-*` backgrounds and left/right image placement. Each carries: school name, the "For people who…" paragraph, **You will learn** (chip list), **Where it leads** (job titles as chips), `Explore school` CTA.
- **Closing:** "Still deciding?" + "The placement assessment takes a few minutes. It will tell you which school fits you and what level to start at." + `Take the placement assessment`

### 4.3 Placement Assessment (`/placement-assessment`)

The highest-value page on the site. Copy is complete in the PDF.

- **Hero:** "Find out where you **start**" + sub + `Start the assessment` + reassurance line "Free. No account needed to begin."
- **Why we do this** — the two-paragraph argument
- **What it covers** — 4 cards: What you already know / What you want / Where you are now / What you can give it
- **What you get at the end** — 4 items
- **This is not an exam** — a reassurance panel on `--block-mint`, visually distinct
- **What happens next** — 4 steps
- **Questions** — 5-item accordion
- **Closing:** "Ten minutes now saves you months in the wrong place." + `Start the assessment` · `Talk to an advisor`

**Assessment flow (`/start`)** — V1 scope:
- One question per screen, progress bar at top, back/next, no account required
- ~10 minutes, four dimensions: current knowledge, desired work, background, weekly time available
- Email capture on the **results** screen, not before — the copy promises "No account needed to begin" and we must honour it
- Result screen: recommended pathway + entry level (Foundation/Professional) + realistic duration + a second option if applicable + CTAs to the pathway page (with entry level pre-applied) and `Talk to an advisor`
- Retakes allowed and explicitly encouraged
- Persist result to `localStorage` so a returning visitor sees their recommendation surfaced in the nav

### 4.4 Pathway pages (`/pathways/[slug]`) — shared template

Seven pages off one template. The PDF specifies which sections repeat identically and which vary.

**Repeating sections (identical on all seven):**
1. **At a glance** — sticky summary bar: Career School · entry level · how you learn · duration · course count · project count · one capstone · certificate name · price
2. **How you learn** — 6 items
3. **Courses in this pathway** — `[course list: title, one-line description, duration]`
4. **What you need to start** — 4 items
5. **How you are assessed** — including the capstone pass requirement, stated plainly
6. **Pricing** — what payment covers + `Start this pathway` + the note "You will be taken to Schull.io to create your account and pay. Your access opens as soon as payment is confirmed."
7. **Common questions about this pathway** — 5-item accordion
8. **Closing** — "Choose your career. Build your future." + `Start this pathway` · `Talk to an advisor`

**Per-pathway sections (unique copy, all seven written in the PDF):**
- Opening: pathway name + one-line promise + CTAs
- **Is this pathway for you?** — including the honest "It is probably not for you if…" paragraph. **Keep this. It is the most trust-building copy on the site.**
- **By the end of this pathway** — 5 outcome statements
- **The route, stage by stage** — Foundation → Professional → Portfolio → Career readiness → Capstone → Certification, rendered as a visual vertical timeline with a connecting line and stage markers
- Footnote: "Your placement assessment decides whether you begin at Foundation or Professional. Everyone completes the portfolio, career readiness, capstone and certification stages."

**Note on the Career and Workplace Readiness pathway:** its footnote differs — "Learners on any other pathway complete this track inside their pathway. It is only taken on its own if you are not enrolled in another one." The template must support a per-pathway footnote override.

### 4.5 About (`/about`)

Sections, in order, all copy from the PDF: We built an academy around careers, not courses · Why we exist · What we believe (5 principles) · How we are different (5 contrasts, rendered as a "Most platforms… We…" comparison layout) · Learn at your pace. Never on your own. (4 items) · Where are you starting from? (5 audience cards) · Our standards · Who we work with (5 partner types) · Closing CTA.

The "How we are different" section is the visual centrepiece: five paired rows, muted grey for "Most platforms", brand blue for "We".

### 4.6 Success Stories (`/success-stories`)

Frame is written; stories don't exist yet.

- Hero: "Proof that the pathway **works**"
- The numbers: `[Learners enrolled. Pathways completed. Certificates issued. Projects built.]`
- Story grid: `[name · pathway · where they started · what they built · where they are now · 1–2 sentences in their own words]` + `Read the full story`
- What learners built — capstone gallery
- What employers say — `[quotes]`
- Share your story — form + `Share your story`
- Closing: "Your story could be on this page next year." + `Explore Career Schools`

**Pre-launch:** ship the page with a designed empty state, not placeholders. Publish it the day the first cohort certifies.

### 4.7 FAQs (`/faqs`)

Five categories from the PDF, as filterable accordion groups: Getting started (5) · Learning (4) · Payment and enrolment (4) · Assessment and certification (5) · After the pathway (2). Sticky category nav on desktop. Closing: "Still have a question?" + `Contact us`.

Mark up every Q&A with `FAQPage` structured data.

### 4.8 Contact (`/contact`)

- Hero: "Talk to us" + "Questions about a pathway, your account, or training for your team. We answer."
- **Three routes** as cards: choosing a pathway / already a learner / representing an organisation — each pre-selects the form's subject field
- **Form:** name, email, phone, subject (choosing a pathway · payment or enrolment · learning or assessment · certificates · organisations and partnerships · something else), message → `Send message`
- **Success state:** "Message received. We will respond within one working day."
- **Direct details:** `[Email. Phone and WhatsApp. Office address. Support hours. Social channels.]` — WhatsApp must be a click-to-chat link; it is the dominant support channel across the target markets.

---

## 5. V1 — Component library

| Component | Variants | Notes |
|---|---|---|
| `Button` | primary (orange) · secondary (navy outline) · tertiary (blue text + arrow) · ghost | Pill, 100px radius. 48px min height, 56px on hero. |
| `Pill` / `Chip` | default · active · counted | Category filters, "You will learn" lists, job titles |
| `SectionHeading` | light · dark | Renders the accented last word + swash + sparkles automatically |
| `ColourBlock` | 7 block tokens | Full-bleed wrapper, optional scalloped top/bottom edge |
| `SchoolCard` | 7 colour fills | Icon tile, title, description, arrow link |
| `StepCard` | numbered | Optional tilt, staggered reveal |
| `StageTimeline` | — | Pathway route visual: connected vertical markers |
| `StatCounter` | — | Count-up, reduced-motion safe |
| `TestimonialCard` | 4 pastel fills | Tilted, star sticker, avatar + name + role |
| `PricingCard` | standard · featured (navy + orange "Popular" flag) | |
| `Accordion` | single · multi | FAQ and pathway questions |
| `Marquee` | horizontal · diagonal | Pausable, reduced-motion safe |
| `PhotoScatter` | — | Hero's tilted card cluster, collapses to a single image on mobile |
| `Doodle` | swash · sparkles · squiggle · arrow · star | Inline SVG set, `currentColor` |
| `ScallopDivider` | top · bottom | SVG mask, takes the adjacent block colour |
| `Form` | contact · newsletter · assessment | Inline validation, accessible errors |
| `EmptyState` | — | For Success Stories and stats pre-launch |

---

## 6. V1 — Technical requirements

### 6.1 Stack (assumption — flag now if this is wrong)

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS 4**, design tokens declared as CSS custom properties in `@theme`
- **Framer Motion** for reveals, marquee and counters — its API maps 1:1 onto the measured values in §2.5
- Content: MDX or a flat-file content layer for pathways/schools/FAQs, so copy edits don't need code changes. Move to a headless CMS (Sanity/Payload) only when non-technical editors need it.
- Forms: server actions → Resend (transactional) + the CRM of record
- Hosting: Vercel
- Analytics: privacy-respecting (Plausible or Vercel Analytics), no cookie wall needed

### 6.2 Performance budgets

| Metric | Target |
|---|---|
| LCP | < 2.5s on 4G, < 1.8s on broadband |
| CLS | < 0.05 — reserve height for every tilted card and photo scatter |
| INP | < 200ms |
| Initial JS | < 180KB gzipped |
| Hero image | < 120KB AVIF/WebP, `priority`, explicit dimensions |

**Africa-specific:** the target markets run on variable mobile data. Ship AVIF with WebP fallback, lazy-load everything below the fold, self-host fonts if Google Fonts latency measures poorly from Lagos/Nairobi, and test against a throttled 3G profile — not just Lighthouse desktop.

### 6.3 Accessibility — WCAG 2.2 AA

- Text contrast ≥ 4.5:1 on every block colour. **Verify orange `#FA9A19` on cream — it will likely fail for body text.** Orange is a decorative and large-text colour only; body copy is `--ink-900` or white.
- Every interactive element reachable and visibly focused (2px `--blue-400` ring, 2px offset)
- Accordions: `<button aria-expanded>` + `aria-controls`
- Marquee: `aria-hidden` (decorative), duplicated content not announced
- Assessment flow fully keyboard-operable with `aria-live` progress announcements
- Tilted cards must not clip or overlap hit targets; `transform` only, never layout shift
- All doodle SVGs `aria-hidden="true"`

### 6.4 SEO

- Unique title + meta description per page; `Organization`, `Course`, `FAQPage`, `BreadcrumbList` structured data
- Pathway pages target the commercial intent: "cybersecurity career pathway Nigeria", "cloud and devops training Lagos", "data analyst course Africa"
- `hreflang` not needed at launch (single English locale); keep the URL structure locale-ready
- OG images generated per pathway with the pathway name over brand artwork
- `sitemap.xml`, `robots.txt`, canonical tags

---

## 7. V1 — Analytics and instrumentation

| Event | Fires on |
|---|---|
| `assessment_start` | "Start the assessment" clicked (any entry point — record the source) |
| `assessment_question_answered` | Each question, with index |
| `assessment_complete` | Result screen rendered, with recommended pathway + level |
| `assessment_abandoned` | Exit before completion, with last question index |
| `pathway_view` | Pathway page view, with slug |
| `start_pathway_click` | "Start this pathway" → handoff to Schull.io |
| `advisor_contact` | "Talk to an advisor" |
| `school_explore` | "Explore school" |
| `contact_submit` | With subject value |
| `newsletter_signup` | Footer |

**Funnel to watch:** Home → Career Schools → Pathway → Assessment start → Assessment complete → Schull.io handoff. The drop between *assessment complete* and *handoff* is the number that decides whether the pricing or the handoff UX is the problem.

---

## 8. V1 — Acceptance criteria

1. All 23 pages of approved copy are placed verbatim. Zero rewrites, zero lorem, British spelling preserved.
2. Every human image is an African learner, instructor or professional in an African setting (§2.6).
3. All 7 school pages and all 7 pathway pages render from their shared templates with correct per-pathway copy, including the Career Readiness footnote override.
4. The placement assessment runs end to end without an account and captures email only at the result screen.
5. Motion matches §2.5 measurements and degrades correctly under `prefers-reduced-motion`.
6. Lighthouse ≥ 95 performance / 100 accessibility / 100 best practices / 100 SEO on mobile.
7. Verified at 360px, 768px, 1024px, 1440px, 1920px. No horizontal scroll at any width.
8. Colour tokens match §2.2 exactly, so V1 and the existing V2 dashboard are visibly one product.
9. Content in square brackets ships as a designed empty state, never as fake data.
10. WCAG 2.2 AA verified with axe + manual keyboard pass.

---

## 9. V2 — Learning platform

> **Status: framework only.** The visual language for V2 is locked once the user supplies the V2 sample site. What follows is the **functional** specification extracted from the seven supplied dashboard SVGs, which represent the current production state of schull.io. This section is reference for the V2 build, not a V1 dependency.

**Confirmed:** the V1 reference (Brightpath) is a marketing template with **no** dashboard, no store, no quiz engine and no account area. Everything in this section therefore belongs to V2.

### 9.1 Shell

- **Utility bar** (`--ink-800`, 46px): promotional message, e.g. "Up to 20% extra savings on discounted courses when you buy 2+ with code 2OBONUSDEC25."
- **Header** (white, 56px): `schull.io` wordmark + logo · nav (Dashboard · My Courses · Course Store) · global search ("Search courses, quizzes, resources…") · cart with count badge · notifications with count badge · avatar
- **Page ground:** `--surface-50`

### 9.2 Course Store

- Blue hero panel (`--blue-600`, radius 20px): "Expand Your Knowledge" / "Explore thousands of courses from industry experts and start learning today" + a white search field
- Category pill row: All Courses · Web Dev · Design · Programming · AI & Machine Learning · Mobile Dev · Marketing — active pill filled blue
- **Left filter rail** (white card, sticky): Price (Free / Paid + min–max inputs) · Level (Beginner / Intermediate / Advanced) · Duration (0–10h / 10–30h / 30+h) · Rating (4.8+ / 3.3+ / 2.0+), each with result counts, plus `Clear all`
- **Results header:** "Showing N Results" + `Sort by` select (Most Popular default)
- **Course card:** gradient or image thumbnail with an optional corner flag (`BESTSELLER` amber / `NEW` purple) · category chip · title · instructor row (avatar, name, "Senior Instructor • 15 years experience") · meta row (lessons · hours · ★ rating) · price with struck-through original · `Add to cart`
- 2-up grid at the captured width; 3-up at ≥1440px, 1-up mobile with the filter rail behind a drawer

### 9.3 Course Details

`Back to Course Store` → video player card with play overlay → category chip → title ("Complete Web Development Bootcamp 2025") → instructor row → meta row (★ 4.8 (2,450 reviews) · 12,340 students · English)

Then, as stacked white cards:
- **What you'll learn** — checklist, 6 items
- **Course Description** — prose + **Prerequisites** subhead
- **Course Curriculum** — "12 modules • 156 lessons • 48 hours total", accordion modules numbered `01`–`12`, each showing "8 lessons • 2h 15m" and expanding to a lesson list with play icons; a lesson may be flagged `Preview`
- **Purchase card** — price, "One-time payment • Lifetime access", `Buy Course Now`, "30-day money-back guarantee", **This course includes:** (5 items), then a spec table: Skill Level · Students · Language · Quizzes

### 9.4 Cart

- Grey header panel with `Back`, "My Cart", "Manage your account and billing"
- **Courses N** list: thumbnail · category · title · price (`--success-600`, struck-through original where discounted) · `Remove` (`--danger-600`)
- **Order Summary:** Subtotal · Coupon Discount (%) · **Total** (bold, large) · `Go To Checkout` (full-width blue pill)

### 9.5 Quizzes

- Page head: "Quizzes" / "Test your knowledge and track your progress"
- **Three stat cards:** Total Enrolled · In Progress · Completed, each with an icon
- **Filter pills:** All Quizzes · Assigned · Practice Test · Completed
- **Assigned Quizzes** — card per quiz: course chip · status badge (`Available` blue / `Completed` green / `Locked` grey) · title · meta ("10 questions · 15 minutes · Pass: 70%") · description · attempts-remaining note (blue info strip) · `Start Quiz` + `View Details`
- **Completed state:** replaces the info strip with a **Your Score** panel — "9/10 Correct • Completed 2 days ago" + a large green percentage; actions become `Review Answers` + `Retake Quiz`
- **Practice Tests** — unlimited attempts, `Practice Mode` label, `Start Practice` + `View Past Attempts`; completed practice shows **Best Score** with attempt count and `Practice Again` + `View History`
- **Upcoming Assessments** — locked cards with an amber **Requirements** strip ("Complete all 8 lessons in Module 1 to unlock this assessment") and a disabled `Complete Prerequisites` button

### 9.6 View Quiz (pre-start)

Distraction-reduced shell — logo only, no nav.

`Back to Quizzes` → course chip → title → description → **four stat cards** (Questions · Minutes · Pass Score · Attempts) → **How to Take This Quiz** (5 numbered steps) → **Quiz Requirements** (blue bordered panel: passing score, time limit, submission) → amber **Important** warning about the timer starting immediately → **Quiz Rules** (time limit · one question at a time · no external resources · …)

### 9.7 Quiz Results

- Large green success panel: check badge · "Congratulations" · "You've successfully passed the HTML Semantics Quiz" · huge percentage in a white circle · "You answered 11 out of 12 questions correctly"
- Failure variant required: red/amber panel, "Not this time", the same structure, and the retry path — this state is not in the supplied SVGs but must exist.
- **Four stat cards:** Correct · Incorrect · Time Taken · Score
- **Quiz Requirements** panel repeated
- **Performance Breakdown** table: Total Questions · Correct Answers (green) · Incorrect Answers (red) · Time Spent · Submission Date · Attempts Used ("1 of 3")
- **Actions:** `Review Answers` (blue) · `Retake Quiz` (outline) · `Continue Learning` (green)

### 9.8 My Profile

Tabs: **Personal Info · Billing · Certificates · Security**

**Billing** (captured): "Billing & Payment History" / "View your payment history and download receipts" — table with select-all checkbox: Date · Description · Amount · Status (`Paid` green pill) · Receipt (`Download` blue button).

**Certificates** tab must expose the verification link and QR code promised in the copy ("Every certificate carries a unique ID and a QR code that links to our verification page"), pointing at `/verify/[certificateId]`.

### 9.9 Open items for V2

1. **Currency inconsistency — must resolve.** Cart prices in ₦ (₦335,000 / ₦700,000); Course Store and Billing price in $ ($149 / $139). Recommendation: **Naira is the base currency**, with a USD display toggle and an FX rate refreshed daily. The academy copy is British-English and the market is African; dollar-first pricing works against both.
2. **Payments:** Paystack or Flutterwave primary (cards, bank transfer, USSD, mobile money), Stripe for international. The copy commits to "your access opens as soon as payment is confirmed" — so webhook-driven entitlement, not manual reconciliation. Also build the failure path the FAQ names: "I paid but nothing unlocked."
3. **Pathway vs. course purchase.** The copy sells Career Pathways as the primary unit with individual courses available separately; the dashboard currently only models individual courses. V2 needs a pathway as a first-class purchasable, enrollable and progress-tracked entity.
4. **Placement assessment → entitlement.** The V1 assessment result must carry into V2 so the learner's entry level (Foundation/Professional) is pre-applied at checkout.
5. **Live sessions.** The copy promises scheduled live instructor sessions with recordings. No screen for this exists — V2 needs a schedule/calendar surface and a recordings library.
6. **Capstone submission and grading.** The copy is specific: the capstone carries its own pass requirement, a strong quiz score cannot compensate, and a failed capstone gets feedback and a resubmission. This is a substantial subsystem (submission, rubric, grader queue, feedback loop, resubmission) with no screens yet.
7. **Missing screens:** Dashboard home, My Courses, lesson player, assignment submission, Personal Info / Security tabs, notifications, checkout, certificate view, public verification page.
8. **Dark mode:** not present in the SVGs. Decide before the V2 token layer is written — retrofitting is expensive.

---

## 10. Build sequence

| Phase | Scope | Gate |
|---|---|---|
| **0** | Design system: tokens, type, doodle SVG set, motion primitives, component library in isolation | Tokens match §2.2; motion matches §2.5 |
| **1** | Home page, end to end | §8 criteria 1, 2, 5, 6, 7 pass for `/` |
| **2** | Career Schools index + 7 school pages | Copy verbatim, templates render all 7 |
| **3** | Pathway template + 7 pathway pages | Footnote override works |
| **4** | Placement assessment (landing + flow + result) | Runs without an account; result persists |
| **5** | About, Success Stories, FAQs, Contact | Empty states designed, not faked |
| **6** | SEO, analytics, accessibility audit, performance pass | §8 fully green |
| **7** | **V2 kickoff** — awaiting the V2 sample | Visual language locked, §9.9 items decided |

---

## 11. Open questions

1. **Confirm the exact hex for navy and orange** — sampled as `#071C3F` and `#FA9A19` from the swatch images. Brand book values override.
2. **Tech stack** — Next.js + Tailwind + Framer Motion assumed (§6.1). Say now if the build must target something else.
3. **Photography** — is there a shoot budget, or do we source and retouch stock? This materially affects whether §2.6 is achievable at the quality bar described.
4. **Pricing** — no prices appear anywhere in the copy. Pathway pages have a Price field in the "at a glance" bar that currently has nothing to show.
5. **Contact details** — email, phone, WhatsApp, office address, support hours and social channels are all `[bracketed]` in the copy and needed before the Contact page and footer can ship.
6. **Launch content** — Success Stories and the stats block have no real data. Confirm the empty-state approach is acceptable for launch.
7. **Course lists** — every pathway page needs `[the course list: title, one-line description, duration]`. This is the largest outstanding content dependency for Phase 3.
