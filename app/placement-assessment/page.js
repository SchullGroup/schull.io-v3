import { Reveal, Accent, Scallop, Btn, Accordion, CheckIcon, Icon } from '../../components/ui';
import { ASSESSMENT } from '../../content/site';
import { IMG } from '../../content/images';

export const metadata = {
  title: 'Placement Assessment',
  description:
    'A short assessment, before you pay anything. It tells you which Career Pathway fits you and what level you should enter at. Free. No account needed to begin.',
};

export default function PlacementAssessment() {
  return (
    <>
      <section className="page-hero bg-cream">
        <div className="container">
          <Reveal immediate>
            <p className="pill" style={{ marginInline: 'auto', marginBottom: 22 }}>
              <span className="dot" />
              About ten minutes
            </p>
          </Reveal>
          <Reveal immediate delay={80}>
            <h1 className="display" style={{ maxWidth: '13ch', marginInline: 'auto' }}>
              Find out where you <Accent>start</Accent>
            </h1>
          </Reveal>
          <Reveal immediate delay={160}>
            <p className="lede" style={{ marginTop: 22 }}>
              {ASSESSMENT.lede}
            </p>
          </Reveal>
          <Reveal immediate delay={240}>
            <div className="btn-row">
              <Btn href="/placement-assessment/start" variant="primary" size="lg">
                Start the assessment
              </Btn>
            </div>
          </Reveal>
          <Reveal immediate delay={320}>
            <p className="body-sm" style={{ marginTop: 16, fontWeight: 500 }}>
              {ASSESSMENT.free}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why we do this */}
      <Scallop to="sand" />
      <section className="section bg-sand">
        <div className="container">
          <div className="split">
            <Reveal>
              <h2 className="h2">
                Why we <Accent>do this</Accent>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="prose">
                {ASSESSMENT.why.map((w, i) => (
                  <p key={i} style={{ fontSize: 17.5 }}>
                    {w}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What it covers */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 48, maxWidth: '14ch' }}>
              What it <Accent>covers</Accent>
            </h2>
          </Reveal>
          <div className="grid grid-4">
            {ASSESSMENT.covers.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="card" style={{ height: '100%' }}>
                  <span className="icon-tile" style={{ marginBottom: 16 }}>
                    <Icon name={['book', 'target', 'compass', 'clock'][i]} color="#1077E5" />
                  </span>
                  <h3 className="h4" style={{ marginBottom: 8 }}>
                    {c.title}
                  </h3>
                  <p className="body-sm" style={{ margin: 0 }}>
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you get at the end */}
      <Scallop to="sky" />
      <section className="section bg-sky">
        <div className="container">
          <div className="split">
            <Reveal>
              <div>
                <h2 className="h2">
                  What you get at <Accent>the end</Accent>
                </h2>
                <div className="media media--lg" style={{ marginTop: 32, aspectRatio: '4/3' }}>
                  <img src={IMG.advisor} alt="An advisor going through an assessment result with a learner" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <ul className="list-check">
                {ASSESSMENT.getAtEnd.map((g) => (
                  <li key={g} style={{ fontSize: 17 }}>
                    <CheckIcon />
                    {g}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* This is not an exam */}
      <Scallop to="mint" />
      <section className="section bg-mint">
        <div className="container">
          <div style={{ maxWidth: 820, marginInline: 'auto', textAlign: 'center' }}>
            <Reveal>
              <h2 className="h2">
                This is not an <Accent>exam</Accent>
              </h2>
            </Reveal>
            {ASSESSMENT.notExam.map((n, i) => (
              <Reveal key={i} delay={80 + i * 80}>
                <p className="lede" style={{ marginInline: 'auto', marginTop: 20, color: 'var(--ink-700)' }}>
                  {n}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What happens next */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 48, maxWidth: '16ch' }}>
              What happens <Accent>next</Accent>
            </h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 880 }}>
            {ASSESSMENT.next.map((n, i) => (
              <Reveal key={n} delay={i * 80}>
                <div className="step">
                  <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
                  <p style={{ margin: 0, fontSize: 17, alignSelf: 'center' }}>{n}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <Scallop to="sand" />
      <section className="section bg-sand">
        <div className="container">
          <div className="split split--sticky">
            <div className="sticky-col">
              <Reveal>
                <h2 className="h2">
                  <Accent>Questions</Accent>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={80}>
              <Accordion items={ASSESSMENT.faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing */}
      <Scallop to="navy" />
      <section className="section bg-navy" style={{ textAlign: 'center' }}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ maxWidth: '18ch', marginInline: 'auto' }}>
              Ten minutes now saves you months in the <Accent>wrong place</Accent>.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 30 }}>
              <Btn href="/placement-assessment/start" variant="orange" size="lg">
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
