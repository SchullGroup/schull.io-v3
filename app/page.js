import Link from 'next/link';
import {
  Reveal,
  Accent,
  Scallop,
  Btn,
  ArrowLink,
  Marquee,
  Accordion,
  Counter,
  Icon,
  CheckIcon,
} from '../components/ui';
import { HOME, CTA } from '../content/site';
import { SCHOOLS } from '../content/schools';
import { PATHWAYS } from '../content/pathways';
import { IMG } from '../content/images';

const SCHOOL_ICONS = {
  'ai-and-automation': 'bolt',
  'cloud-and-devops': 'cloud',
  cybersecurity: 'shield',
  data: 'chart',
  'quality-assurance': 'check',
  'product-management': 'brief',
};

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------
          1. HERO
          --------------------------------------------------------- */}
      <section className="hero bg-cream">
        <div className="container hero__inner">
          <Reveal immediate>
            <p className="pill" style={{ marginInline: 'auto' }}>
              <span className="dot" />
              {HOME.eyebrow}
            </p>
          </Reveal>

          <Reveal immediate delay={80}>
            <h1 className="display">
              {HOME.h1a} <Accent>{HOME.h1accent}</Accent>.
            </h1>
          </Reveal>

          <Reveal immediate delay={160}>
            <p className="lede">{HOME.lede}</p>
          </Reveal>

          <Reveal immediate delay={240}>
            <div className="btn-row">
              <Btn href="/career-fields" variant="primary" size="lg">
                {CTA.exploreFields}
              </Btn>
              <Btn href="/placement-assessment" variant="secondary" size="lg">
                Take the placement assessment
              </Btn>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={320}>
          <div className="container">
            <div className="hero__scatter">
              <span className="sticker sticker--tl" aria-hidden="true">
                ✳
              </span>
              <figure className="scatter-a">
                <img src={IMG.heroA} alt="A learner working through a lesson on a laptop" />
              </figure>
              <figure className="scatter-b">
                <img src={IMG.heroB} alt="A Schull Academy learner in a study session" />
              </figure>
              <figure className="scatter-c">
                <img src={IMG.heroC} alt="Learners working together in a technology lab" />
              </figure>
            </div>
          </div>
        </Reveal>

        {/* 2. MARQUEE — overlaps the scatter, as in the reference */}
        <div style={{ marginTop: -70, position: 'relative', zIndex: 4 }}>
          <Marquee items={HOME.marquee} />
        </div>
      </section>

      {/* ---------------------------------------------------------
          3. FOUR DIFFERENTIATORS
          --------------------------------------------------------- */}
      <section className="section section--tight bg-sand" style={{ paddingTop: 130 }}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ maxWidth: '16ch', marginBottom: 56 }}>
              Four things that make us <Accent>different</Accent>
            </h2>
          </Reveal>

          <div className="grid grid-4">
            {HOME.differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 80}>
                <div className="feature">
                  <span className="icon-tile">
                    <Icon name={d.icon} color="#1077E5" />
                  </span>
                  <h3 className="h4">{d.title}</h3>
                  <p className="body-sm" style={{ margin: 0 }}>
                    {d.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          4. THE PROBLEM
          --------------------------------------------------------- */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <div className="split">
            <Reveal>
              <div>
                <h2 className="h2">
                  {HOME.problem.h2a} <Accent>{HOME.problem.h2accent}</Accent>.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="prose">
                {HOME.problem.paras.map((p, i) => (
                  <p key={i} style={{ fontSize: 17.5 }}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="media media--lg tilt-l" style={{ marginTop: 64, aspectRatio: '21/8' }}>
              <img src={IMG.classroom} alt="Learners in a Schull Academy session" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------
          5. SIX CAREER FIELDS
          --------------------------------------------------------- */}
      <Scallop to="sky" />
      <section className="section bg-sky">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal>
              <h2 className="h2">
                {HOME.fieldsHeading.h2a}<br /><Accent>{HOME.fieldsHeading.h2accent}</Accent>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="lede" style={{ color: 'var(--ink-700)' }}>
                {HOME.fieldsIntro}
              </p>
            </Reveal>
          </div>

          <div className="grid grid-3">
            {SCHOOLS.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <Link href={`/pathways/${s.slug}`} className="school-card" style={{ background: cardFill(i) }}>
                  <span className="icon-tile">
                    <Icon name={SCHOOL_ICONS[s.slug]} color="#071C3F" />
                  </span>
                  <h3 className="h4">{s.name}</h3>
                  <p>{s.homeLine}</p>
                  <span className="arrow-link">
                    {CTA.exploreThisField}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2.5 8h11m0 0L9 3.5M13.5 8L9 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 48 }}>
              <Btn href="/career-fields" variant="primary" size="lg">
                {CTA.viewAllFields}
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------
          6. HOW SCHULL ACADEMY WORKS
          --------------------------------------------------------- */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <div className="split split--sticky split--40-60">
            <div className="sticky-col">
              <Reveal>
                <h2 className="h2">
                  How Schull Academy <Accent>works</Accent>
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="lede" style={{ marginTop: 20 }}>
                  Six steps from career intent to career credential.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <div className="media media--lg" style={{ marginTop: 32, aspectRatio: '4/3' }}>
                  <img src={IMG.studyPair} alt="An instructor working through a problem with a learner" />
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="btn-row" style={{ marginTop: 28 }}>
                  <Btn href="/placement-assessment" variant="primary">
                    Take the placement assessment
                  </Btn>
                </div>
              </Reveal>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {HOME.steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="step">
                    <span className="step__num">{s.n}</span>
                    <div>
                      <h3 className="h4" style={{ marginBottom: 6 }}>
                        {s.title}
                      </h3>
                      <p className="body-sm" style={{ margin: 0 }}>
                        {s.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          7. WHAT A PATHWAY ACTUALLY GIVES YOU
          --------------------------------------------------------- */}
      <Scallop to="mint" />
      <section className="section bg-mint">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal>
              <h2 className="h2">
                What a Career Pathway actually <Accent>gives you</Accent>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="lede" style={{ color: 'var(--ink-700)' }}>
                A pathway is not a bundle of courses. It is the complete route to a working standard.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-3">
            {HOME.pathwayParts.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80}>
                <div className="card card--flat" style={{ background: 'rgba(255,255,255,0.72)', height: '100%' }}>
                  <span className="icon-tile" style={{ marginBottom: 16 }}>
                    <Icon name={['book', 'brief', 'laptop', 'users', 'flag', 'cert'][i]} color="#1077E5" />
                  </span>
                  <h3 className="h4" style={{ marginBottom: 8 }}>
                    {p.title}
                  </h3>
                  <p className="body-sm" style={{ margin: 0 }}>
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 48 }}>
              <Btn href="/career-fields" variant="primary" size="lg">
                {CTA.viewAllFields}
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------
          8. YOU LEAVE WITH WORK YOU CAN SHOW
          --------------------------------------------------------- */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal>
              <h2 className="h2">
                You leave with work you <Accent>can show</Accent>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="lede">
                Every pathway is built around practical work. This is the kind of thing our learners build.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-3">
            {PATHWAYS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <Link href={`/pathways/${p.slug}`} className="outcome-card">
                  <div className="media">
                    <img src={outcomeImg(p.slug)} alt="" />
                  </div>
                  <div className="outcome-card__body">
                    <span className="chip chip--blue" style={{ alignSelf: 'flex-start' }}>
                      {p.short}
                    </span>
                    <p style={{ margin: 0, fontWeight: 500, color: 'var(--ink-900)', lineHeight: 1.4 }}>
                      {p.capstoneOutput}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          9. STATS
          --------------------------------------------------------- */}
      <Scallop to="sand" />
      <section className="section bg-sand">
        <div className="container">
          <div className="split">
            <Reveal>
              <div className="stats-panel">
                <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)', marginTop: 0 }}>
                  The academy so far
                </p>
                <div className="stat">
                  <div className="stat__value">
                    <Counter value={0} />
                  </div>
                  <div className="stat__label">Learners enrolled</div>
                </div>
                <div className="stat">
                  <div className="stat__value">
                    <Counter value={0} />
                  </div>
                  <div className="stat__label">Pathways completed</div>
                </div>
                <div className="stat">
                  <div className="stat__value">
                    <Counter value={0} />
                  </div>
                  <div className="stat__label">Certificates issued</div>
                </div>
                <p className="body-sm" style={{ color: 'rgba(255,255,255,0.45)', margin: 0, fontSize: 13.5 }}>
                  Our first cohort is in progress. These numbers go live the day it finishes — we would rather show
                  nothing than show something invented.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="media media--lg tilt-r" style={{ aspectRatio: '4/5' }}>
                <img src={IMG.learnerDesk} alt="A learner working on a practical assignment" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          10. REAL LEARNERS. REAL OUTCOMES. — compact band
          --------------------------------------------------------- */}
      <Scallop to="blush" />
      <section className="section--band bg-blush">
        <div className="container">
          <Reveal>
            <div className="band">
              <div className="band__lead">
                <p className="eyebrow" style={{ marginBottom: 10 }}>
                  Success stories
                </p>
                <h2 className="h3" style={{ fontSize: 'clamp(24px,2.7vw,34px)' }}>
                  Real learners. Real <Accent sparkles={false}>outcomes</Accent>.
                </h2>
                <p className="body-sm" style={{ margin: '12px 0 0', maxWidth: '46ch' }}>
                  The point of a pathway is what happens after it. Our first cohort is in progress — their stories
                  land here.
                </p>
                <div className="btn-row" style={{ marginTop: 20 }}>
                  <Btn href="/success-stories" variant="secondary">
                    Read success stories
                  </Btn>
                </div>
              </div>

              <div className="band__stats">
                {['Learners enrolled', 'Pathways completed', 'Certificates issued', 'Projects built'].map((n) => (
                  <div className="band__stat" key={n}>
                    <span className="band__stat-v">—</span>
                    <span className="band__stat-k">{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------------------------------------------------
          11. FAQ
          --------------------------------------------------------- */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <div className="split split--sticky">
            <div className="sticky-col">
              <Reveal>
                <h2 className="h2">
                  Questions people ask <Accent>before they start</Accent>
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <div className="btn-row" style={{ marginTop: 28 }}>
                  <Btn href="/faqs" variant="secondary">
                    See all FAQs
                  </Btn>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Accordion items={HOME.faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------
          12. CLOSING CTA
          --------------------------------------------------------- */}
      <Scallop to="sand" />
      <section className="section bg-sand" style={{ overflow: 'hidden', position: 'relative' }}>
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <Reveal>
            <p className="pill" style={{ marginInline: 'auto', marginBottom: 22 }}>
              <span className="dot" />
              Free placement assessment
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="h2" style={{ maxWidth: '18ch', marginInline: 'auto' }}>
              Your next career move starts with a <Accent>choice</Accent>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede" style={{ marginInline: 'auto', marginTop: 20 }}>
              {HOME.closingLede}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 32 }}>
              <Btn href="/career-fields" variant="primary" size="lg">
                {CTA.exploreFields}
              </Btn>
              <Btn href="/contact" variant="secondary" size="lg">
                Talk to an advisor
              </Btn>
            </div>
          </Reveal>
        </div>

        {/* cut-out figures flanking the headline, as in the reference */}
        <div aria-hidden="true" className="cta-figures">
          <img src={IMG.advisor} alt="" className="cta-fig cta-fig--l" />
          <img src={IMG.graduate} alt="" className="cta-fig cta-fig--r" />
        </div>
      </section>
    </>
  );
}

function cardFill(i) {
  const fills = ['#ffffff', '#dcefe4', '#fdebcf', '#fbe3dc', '#ffffff', '#d8e8fa'];
  return fills[i % fills.length];
}

function outcomeImg(slug) {
  const map = {
    'ai-and-automation': IMG.aiWork,
    'cloud-and-devops': IMG.serverRoom,
    cybersecurity: IMG.security,
    data: IMG.dataDash,
    'quality-assurance': IMG.testing,
    'product-management': IMG.productTeam,
  };
  return map[slug] || IMG.codeScreen;
}
