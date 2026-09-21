import { notFound } from 'next/navigation';
import {
  Reveal,
  Accent,
  Scallop,
  Btn,
  Accordion,
  CheckIcon,
  Icon,
} from '../../../components/ui';
import {
  PATHWAYS,
  getPathway,
  HOW_YOU_LEARN,
  WHAT_YOU_NEED,
  HOW_ASSESSED,
  PATHWAY_FAQS,
  PRICING_COVERS,
  TRACKS_INTRO,
  TRACKS_FOOTNOTE,
  COMPLETES_INTRO,
  PATHWAY_DURATION,
  PLACEHOLDER_PRICE,
} from '../../../content/pathways';
import { getSchool } from '../../../content/schools';
import { SCHOOL_IMG } from '../../../content/images';
import { PATHWAY_DETAIL } from '../../../content/site';

export function generateStaticParams() {
  return PATHWAYS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPathway(slug);
  if (!p) return {};
  return { title: p.name, description: p.promise };
}

export default async function PathwayPage({ params }) {
  const { slug } = await params;
  const p = getPathway(slug);
  if (!p) notFound();
  const school = getSchool(p.school);

  return (
    <>
      {/* ---- Opening ---- */}
      <section className="page-hero page-hero--left bg-cream">
        <div className="container">
          <Reveal immediate>
            <p className="pill" style={{ marginBottom: 22 }}>
              <span className="dot" />
              {school?.name}
            </p>
          </Reveal>
          <Reveal immediate delay={80}>
            <h1 className="display" style={{ maxWidth: '17ch' }}>
              {p.name}
            </h1>
          </Reveal>
          <Reveal immediate delay={160}>
            <p className="lede" style={{ marginTop: 22 }}>
              {p.promise}
            </p>
          </Reveal>
          <Reveal immediate delay={240}>
            <div className="btn-row">
              <Btn href="/contact" variant="primary" size="lg">
                Start this pathway
              </Btn>
              <Btn href="/placement-assessment" variant="secondary" size="lg">
                Take the placement assessment
              </Btn>
            </div>
          </Reveal>
          <Reveal immediate delay={320}>
            <p className="body-sm" style={{ marginTop: 18, fontSize: 14 }}>
              You will register and pay on Schull.io, and your full pathway unlocks automatically.
            </p>
          </Reveal>
          {p.openingNote && (
            <Reveal immediate delay={400}>
              <div className="note-panel" style={{ marginTop: 28, maxWidth: '62ch' }}>
                <p className="body-sm" style={{ margin: 0 }}>
                  {p.openingNote}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ---- At a glance ---- */}
      <section className="bg-cream" style={{ paddingBottom: 96 }}>
        <div className="container">
          <Reveal>
            <div className="glance">
              <Glance k="Career Field" v={school?.short} />
              <Glance k="You enter at" v="Foundation or Professional" />
              <Glance k="How you learn" v="Live + self paced" />
              <Glance k="Capstone" v="One, independent" />
              <Glance k="Duration" v={PATHWAY_DURATION} />
              <Glance k="Courses" v={`${p.courses.foundation.length + p.courses.professional.length} courses`} />
              <Glance k="Price" v={PLACEHOLDER_PRICE} />
            </div>
          </Reveal>

          {/* Skim aid. The route section below explains WHEN each of these is
              taught — this row is here so it is scannable from the top. */}
          {school?.learnList?.length > 0 && (
            <Reveal delay={80}>
              <div style={{ marginTop: 32 }}>
                <p className="eyebrow" style={{ marginBottom: 12 }}>
                  {PATHWAY_DETAIL.learnHead}
                </p>
                <div className="chip-row">
                  {school.learnList.map((l) => (
                    <span className="chip" key={l}>
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          <Reveal delay={160}>
            <div className="media media--lg" style={{ aspectRatio: '21/9', marginTop: 32 }}>
              <img src={SCHOOL_IMG[p.school]} alt="" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Is this pathway for you? ---- */}
      <Scallop to="sky" />
      <section className="section bg-sky">
        <div className="container">
          <div className="split">
            <Reveal>
              <h2 className="h2">
                Is this pathway <Accent>for you?</Accent>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <div className="card" style={{ marginBottom: 16 }}>
                  <p className="eyebrow" style={{ marginBottom: 10, color: 'var(--blue)' }}>
                    Yes, if
                  </p>
                  <p style={{ margin: 0, fontSize: 17 }}>{p.forYou}</p>
                </div>
                <div className="card" style={{ background: 'rgba(255,255,255,0.6)' }}>
                  <p className="eyebrow" style={{ marginBottom: 10 }}>
                    Probably not, if
                  </p>
                  <p style={{ margin: 0, fontSize: 17, color: 'var(--ink-600)' }}>{p.notForYou}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- By the end of this pathway ---- */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <div className="split">
            <Reveal>
              <h2 className="h2">
                By the end of this <Accent>pathway</Accent>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <ul className="list-check">
                {p.outcomes.map((o) => (
                  <li key={o}>
                    <CheckIcon />
                    {o}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Learning tracks ---- */}
      <Scallop to="mint" />
      <section className="section bg-mint">
        <div className="container">
          <div className="split split--sticky split--40-60">
            <div className="sticky-col">
              <Reveal>
                <h2 className="h2">
                  Learning <Accent>tracks</Accent>
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="body-sm" style={{ marginTop: 24, maxWidth: '42ch' }}>
                  {TRACKS_INTRO}
                </p>
              </Reveal>
            </div>

            {/* Wrapped so .timeline keeps only its own items as children —
                its last-item styling (hiding the connecting line) depends on
                actual DOM last-child, so the footnote must sit outside it. */}
            <div>
              <div className="timeline">
                {p.tracks.map((t, i) => (
                  <Reveal key={t.name} delay={i * 80}>
                    <div className={`timeline__item ${i === p.tracks.length - 1 ? 'timeline__item--last' : ''}`}>
                      <span className="timeline__dot">{i + 1}</span>
                      <h3 className="h4" style={{ marginBottom: 6 }}>
                        {t.name}
                      </h3>
                      <p className="body-sm" style={{ margin: 0, maxWidth: '58ch' }}>
                        {t.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={p.tracks.length * 80}>
                <p className="body-sm" style={{ marginTop: 24, maxWidth: '58ch' }}>
                  {TRACKS_FOOTNOTE}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---- What every learner completes ---- */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <div className="split split--sticky split--40-60">
            <div className="sticky-col">
              <Reveal>
                <h2 className="h2">
                  What every learner <Accent>completes</Accent>
                </h2>
              </Reveal>
              <Reveal delay={80}>
                <p className="body-sm" style={{ marginTop: 24, maxWidth: '42ch' }}>
                  {COMPLETES_INTRO}
                </p>
              </Reveal>
            </div>

            <div className="timeline">
              {p.completes.map((c, i) => (
                <Reveal key={c.stage} delay={i * 80}>
                  <div className={`timeline__item ${i === p.completes.length - 1 ? 'timeline__item--last' : ''}`}>
                    <span className="timeline__dot">{i + 1}</span>
                    <h3 className="h4" style={{ marginBottom: 6 }}>
                      {c.stage}
                    </h3>
                    <p className="body-sm" style={{ margin: 0, maxWidth: '58ch' }}>
                      {c.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- Where it leads ---- */}
      {school?.leads?.length > 0 && (
        <>
          <Scallop to="sun" />
          <section className="section bg-sun">
            <div className="container">
              <div className="split">
                <Reveal>
                  <div>
                    <h2 className="h2">
                      {PATHWAY_DETAIL.leadsH2a} <Accent>{PATHWAY_DETAIL.leadsH2accent}</Accent>
                    </h2>
                    <p className="lede" style={{ marginTop: 20, color: 'var(--ink-700)' }}>
                      {PATHWAY_DETAIL.leadsLede}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={80}>
                  <div className="chip-row">
                    {school.leads.map((l) => (
                      <span
                        className="chip chip--blue"
                        key={l}
                        style={{ fontSize: 15, padding: '10px 18px' }}
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ---- How you learn ---- */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 48, maxWidth: '14ch' }}>
              How you <Accent>learn</Accent>
            </h2>
          </Reveal>
          <div className="grid grid-3">
            {HOW_YOU_LEARN.map((h, i) => (
              <Reveal key={h} delay={(i % 3) * 80}>
                <div className="card" style={{ height: '100%' }}>
                  <span className="icon-tile" style={{ marginBottom: 16 }}>
                    <Icon name={['play', 'users', 'book', 'check', 'brief', 'flag'][i]} color="#1077E5" />
                  </span>
                  <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.5 }}>{h}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Courses in this pathway ---- */}
      <Scallop to="sand" />
      <section className="section bg-sand">
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 32, maxWidth: '18ch' }}>
              Courses in this <Accent>pathway</Accent>
            </h2>
          </Reveal>
          <div className="grid grid-2">
            <div>
              <Reveal>
                <p className="eyebrow" style={{ marginBottom: 20 }}>
                  Foundation track
                </p>
              </Reveal>
              {p.courses.foundation.map((c, i) => (
                <Reveal key={c.name} delay={i * 80}>
                  <div style={i > 0 ? { marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--line)' } : undefined}>
                    <h3 className="h4" style={{ marginBottom: 4 }}>
                      {c.name}
                    </h3>
                    <p className="body-sm" style={{ margin: 0 }}>
                      {c.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div>
              <Reveal>
                <p className="eyebrow" style={{ marginBottom: 20 }}>
                  Professional track
                </p>
              </Reveal>
              {p.courses.professional.map((c, i) => (
                <Reveal key={c.name} delay={i * 80}>
                  <div style={i > 0 ? { marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--line)' } : undefined}>
                    <h3 className="h4" style={{ marginBottom: 4 }}>
                      {c.name}
                    </h3>
                    <p className="body-sm" style={{ margin: 0 }}>
                      {c.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---- What you need + How you are assessed ---- */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          {/* Top-aligned: .split centres its columns, which drops the shorter
              left list's heading below the right one. */}
          <div className="split" style={{ alignItems: 'start' }}>
            <Reveal>
              <div>
                <h2 className="h3" style={{ fontSize: 'clamp(26px,3vw,38px)', marginBottom: 24 }}>
                  What you need to start
                </h2>
                <ul className="list-check">
                  {WHAT_YOU_NEED.map((w) => (
                    <li key={w}>
                      <CheckIcon />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <h2 className="h3" style={{ fontSize: 'clamp(26px,3vw,38px)', marginBottom: 24 }}>
                  How you are assessed
                </h2>
                <ul className="list-check">
                  {HOW_ASSESSED.map((a) => (
                    <li key={a}>
                      <CheckIcon color="#FA9A19" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Pricing ---- */}
      <Scallop to="navy" />
      <section className="section bg-navy">
        <div className="container">
          <div className="split">
            <Reveal>
              <div>
                <h2 className="h2">
                  What your payment <Accent>covers</Accent>
                </h2>
                <p className="lede" style={{ marginTop: 20 }}>
                  {PRICING_COVERS}
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="card" style={{ background: '#fff' }}>
                <p className="eyebrow" style={{ marginBottom: 8 }}>
                  {p.certificate}
                </p>
                <p
                  className="h2"
                  style={{ fontSize: 'clamp(34px,4vw,52px)', margin: '0 0 6px', color: 'var(--navy)' }}
                >
                  {PLACEHOLDER_PRICE}
                </p>
                <p className="body-sm" style={{ marginBottom: 24 }}>
                  One payment. Everything in the pathway.
                </p>
                <Btn href="/contact" variant="primary" size="block">
                  Start this pathway
                </Btn>
                <p className="body-sm" style={{ marginTop: 16, marginBottom: 0, fontSize: 13.5 }}>
                  You will be taken to Schull.io to create your account and pay. Your access opens as soon as payment
                  is confirmed.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- FAQ ---- */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <div className="split split--sticky">
            <div className="sticky-col">
              <Reveal>
                <h2 className="h2">
                  Common questions about this <Accent>pathway</Accent>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={80}>
              <Accordion items={PATHWAY_FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Closing ---- */}
      <Scallop to="sand" />
      <section className="section bg-sand" style={{ textAlign: 'center' }}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ maxWidth: '16ch', marginInline: 'auto' }}>
              Choose your career. Build your <Accent>future</Accent>.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 30 }}>
              <Btn href="/contact" variant="primary" size="lg">
                Start this pathway
              </Btn>
              <Btn href="/contact" variant="secondary" size="lg">
                Talk to an advisor
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Glance({ k, v }) {
  return (
    <div className="glance__cell">
      <div className="glance__k">{k}</div>
      <div className="glance__v">{v}</div>
    </div>
  );
}
