import Link from 'next/link';
import { Reveal, Accent, Scallop, Btn } from '../../components/ui';
import { PATHWAYS } from '../../content/pathways';
import { SCHOOL_IMG } from '../../content/images';

export const metadata = {
  title: 'Career Pathways',
  description:
    'A pathway is not a bundle of courses. It is the complete route to a working standard — Foundation, Professional, Portfolio, Career readiness, Capstone and Credential.',
};

export default function PathwaysIndex() {
  return (
    <>
      <section className="page-hero bg-cream">
        <div className="container">
          <Reveal immediate>
            <p className="pill" style={{ marginInline: 'auto', marginBottom: 22 }}>
              <span className="dot" />
              Seven routes to a working standard
            </p>
          </Reveal>
          <Reveal immediate delay={80}>
            <h1 className="display" style={{ maxWidth: '15ch', marginInline: 'auto' }}>
              Browse Career <Accent>Pathways</Accent>
            </h1>
          </Reveal>
          <Reveal immediate delay={160}>
            <p className="lede" style={{ marginTop: 22 }}>
              A pathway is not a bundle of courses. It is the complete route to a working standard.
            </p>
          </Reveal>
          <Reveal immediate delay={240}>
            <div className="btn-row">
              <Btn href="/placement-assessment" variant="primary" size="lg">
                Take the placement assessment
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      <Scallop to="sand" />
      <section className="section bg-sand">
        <div className="container">
          <div className="grid grid-2">
            {PATHWAYS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <Link href={`/pathways/${p.slug}`} className="outcome-card" style={{ height: '100%' }}>
                  <div className="media" style={{ aspectRatio: '16/9' }}>
                    <img src={SCHOOL_IMG[p.school]} alt="" />
                  </div>
                  <div className="outcome-card__body" style={{ flex: 1 }}>
                    <span className="chip chip--blue" style={{ alignSelf: 'flex-start' }}>
                      {p.short}
                    </span>
                    <h2 className="h4">{p.name}</h2>
                    <p className="body-sm" style={{ margin: 0, flex: 1 }}>
                      {p.promise}
                    </p>
                    <span className="arrow-link" style={{ marginTop: 8 }}>
                      Start this pathway
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M2.5 8h11m0 0L9 3.5M13.5 8L9 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Scallop to="navy" />
      <section className="section bg-navy" style={{ textAlign: 'center' }}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ maxWidth: '16ch', marginInline: 'auto' }}>
              Not sure which one <Accent>fits you?</Accent>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lede" style={{ marginInline: 'auto', marginTop: 20 }}>
              Ten minutes now saves you months in the wrong place.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 30 }}>
              <Btn href="/placement-assessment" variant="orange" size="lg">
                Start the assessment
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
