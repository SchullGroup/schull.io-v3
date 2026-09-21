import { Reveal, Accent, Scallop, Btn } from '../../components/ui';
import { PATHWAYS } from '../../content/pathways';
import { CTA } from '../../content/site';

export const metadata = {
  title: 'Success Stories',
  description:
    'Learners who chose a career direction, followed the route and came out the other side with something to show.',
};

export default function SuccessStories() {
  return (
    <>
      <section className="page-hero bg-cream">
        <div className="container">
          <Reveal immediate>
            <p className="pill" style={{ marginInline: 'auto', marginBottom: 22 }}>
              <span className="dot" />
              First cohort in progress
            </p>
          </Reveal>
          <Reveal immediate delay={80}>
            <h1 className="display" style={{ maxWidth: '14ch', marginInline: 'auto' }}>
              Proof that the pathway <Accent>works</Accent>
            </h1>
          </Reveal>
          <Reveal immediate delay={160}>
            <p className="lede" style={{ marginTop: 22 }}>
              Learners who chose a career direction, followed the route and came out the other side with something to
              show.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The numbers */}
      <Scallop to="sand" />
      <section className="section section--tight bg-sand">
        <div className="container">
          <div className="grid grid-4">
            {['Learners enrolled', 'Pathways completed', 'Certificates issued', 'Projects built'].map((n, i) => (
              <Reveal key={n} delay={i * 80}>
                <div className="card" style={{ textAlign: 'center' }}>
                  <div
                    className="h2"
                    style={{ fontSize: 'clamp(38px,4vw,54px)', color: 'var(--ink-400)', marginBottom: 6 }}
                  >
                    —
                  </div>
                  <p className="body-sm" style={{ margin: 0 }}>
                    {n}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={320}>
            <p className="body-sm" style={{ textAlign: 'center', marginTop: 28, maxWidth: '58ch', marginInline: 'auto' }}>
              These go live the day the first cohort finishes. We would rather show nothing than show something
              invented.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Each story */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 40, maxWidth: '14ch' }}>
              Each <Accent>story</Accent>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="empty">
              <h3 className="h3">Our first cohort is in progress</h3>
              <p className="body-sm" style={{ maxWidth: '58ch', marginInline: 'auto' }}>
                Every story here will carry the learner&apos;s name, the pathway they completed, where they started,
                what they built, where they are now, and one or two sentences in their own words.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What learners built */}
      <Scallop to="sky" />
      <section className="section bg-sky">
        <div className="container">
          <div className="section-head section-head--split">
            <Reveal>
              <h2 className="h2">
                What learners <Accent>built</Accent>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="lede" style={{ color: 'var(--ink-700)' }}>
                Capstone and portfolio work from across the fields. Every pathway ends in one of these.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-3">
            {PATHWAYS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <div className="card" style={{ height: '100%' }}>
                  <span className="chip chip--blue" style={{ marginBottom: 14 }}>
                    {p.short}
                  </span>
                  <p style={{ margin: '0 0 14px', fontSize: 17, fontWeight: 500, lineHeight: 1.4 }}>
                    {p.capstoneOutput}
                  </p>
                  <p className="body-sm" style={{ margin: 0, color: 'var(--ink-400)' }}>
                    Built by — awaiting first cohort
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What employers say */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 40, maxWidth: '18ch' }}>
              What employers <Accent>say</Accent>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="empty">
              <p className="body-sm" style={{ maxWidth: '56ch', marginInline: 'auto', margin: 0 }}>
                Quotes from employers and partners who have worked with our learners will appear here.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Share your story */}
      <Scallop to="blush" />
      <section className="section bg-blush">
        <div className="container">
          <div className="split">
            <Reveal>
              <div>
                <h2 className="h2">
                  Share your <Accent>story</Accent>
                </h2>
                <p className="lede" style={{ marginTop: 20, color: 'var(--ink-700)' }}>
                  Finished a pathway? Tell us what happened next. Your story is how the next person decides to start.
                </p>
                <div className="btn-row" style={{ marginTop: 28 }}>
                  <Btn href="/contact" variant="primary" size="lg">
                    Share your story
                  </Btn>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="note-panel">
                <p className="eyebrow" style={{ marginBottom: 10 }}>
                  What we will ask you
                </p>
                <p className="body-sm" style={{ margin: 0 }}>
                  The pathway you completed, where you started, what you built, where you are now — and one or two
                  sentences in your own words. That is it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Scallop to="navy" />
      <section className="section bg-navy" style={{ textAlign: 'center' }}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ maxWidth: '18ch', marginInline: 'auto' }}>
              Your story could be on this page <Accent>next year</Accent>.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 30 }}>
              <Btn href="/career-fields" variant="orange" size="lg">
                {CTA.exploreFieldsShort}
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
