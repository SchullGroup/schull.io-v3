import Link from 'next/link';
import { Reveal, Accent, Scallop, Btn, Icon } from '../../components/ui';
import { SCHOOLS } from '../../content/schools';
import { SCHOOL_IMG } from '../../content/images';

export const metadata = {
  title: 'Career Schools',
  description:
    'Seven Career Schools. A Career School is a career area. Inside it are the pathways that take you from where you are now to working in that field.',
};

const BLOCKS = ['bg-cream', 'bg-sky', 'bg-cream', 'bg-mint', 'bg-cream', 'bg-sun', 'bg-cream'];
const NEXT = ['sky', 'cream', 'mint', 'cream', 'sun', 'cream', 'blush'];

export default function CareerSchools() {
  return (
    <>
      <section className="page-hero bg-cream">
        <div className="container">
          <Reveal immediate>
            <p className="pill" style={{ marginInline: 'auto', marginBottom: 22 }}>
              <span className="dot" />
              Seven schools. One route each.
            </p>
          </Reveal>
          <Reveal immediate delay={80}>
            <h1 className="display" style={{ maxWidth: '16ch', marginInline: 'auto' }}>
              Seven Career Schools. Pick your <Accent>direction</Accent>.
            </h1>
          </Reveal>
          <Reveal immediate delay={160}>
            <p className="lede" style={{ marginTop: 22 }}>
              A Career School is a career area. Inside it are the pathways that take you from where you are now to
              working in that field.
            </p>
          </Reveal>
          <Reveal immediate delay={240}>
            <div className="btn-row">
              <Btn href="/placement-assessment" variant="primary" size="lg">
                Not sure which one? Take the placement assessment
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {SCHOOLS.map((s, i) => (
        <div key={s.slug}>
          <Scallop to={NEXT[i - 1] ? undefined : undefined} />
          <section className={`section ${BLOCKS[i]}`} id={s.slug}>
            <div className="container">
              <div className="split">
                <Reveal className={i % 2 === 1 ? 'order-last' : ''}>
                  <div className="media media--lg" style={{ aspectRatio: '4/3', order: i % 2 }}>
                    <img src={SCHOOL_IMG[s.slug]} alt="" />
                  </div>
                </Reveal>

                <Reveal delay={80}>
                  <div>
                    <p className="eyebrow" style={{ marginBottom: 12 }}>
                      School {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="h3" style={{ fontSize: 'clamp(28px,3.4vw,44px)', letterSpacing: '-0.035em' }}>
                      {s.name}
                    </h2>
                    <p className="lede" style={{ marginTop: 16, color: 'var(--ink-700)' }}>
                      {s.forWho}
                    </p>

                    <p className="eyebrow" style={{ marginTop: 30, marginBottom: 12 }}>
                      You will learn
                    </p>
                    <div className="chip-row">
                      {s.learnList.map((l) => (
                        <span className="chip" key={l}>
                          {l}
                        </span>
                      ))}
                    </div>

                    <p className="eyebrow" style={{ marginTop: 28, marginBottom: 12 }}>
                      Where it leads
                    </p>
                    {s.leads.length > 0 ? (
                      <div className="chip-row">
                        {s.leads.map((l) => (
                          <span className="chip chip--blue" key={l}>
                            {l}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="body-sm" style={{ margin: 0, maxWidth: '52ch' }}>
                        {s.leadsNote}
                      </p>
                    )}

                    <div className="btn-row" style={{ marginTop: 30 }}>
                      <Btn href={`/pathways/${s.slug}`} variant="primary">
                        Explore school
                      </Btn>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        </div>
      ))}

      <Scallop to="navy" />
      <section className="section bg-navy" style={{ textAlign: 'center' }}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ maxWidth: '14ch', marginInline: 'auto' }}>
              Still <Accent>deciding?</Accent>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lede" style={{ marginInline: 'auto', marginTop: 20 }}>
              The placement assessment takes a few minutes. It will tell you which school fits you and what level to
              start at.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 30 }}>
              <Btn href="/placement-assessment" variant="orange" size="lg">
                Take the placement assessment
              </Btn>
              <Btn href="/contact" variant="onnavy" size="lg">
                Talk to an advisor
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
