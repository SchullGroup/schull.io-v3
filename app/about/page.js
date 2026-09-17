import { Reveal, Accent, Scallop, Btn, CheckIcon, Icon } from '../../components/ui';
import { ABOUT } from '../../content/site';
import { IMG } from '../../content/images';

export const metadata = {
  title: 'About Us',
  description:
    'We built an academy around careers, not courses. Schull Academy is the career learning arm of Schull Technologies, delivered on the Schull.io platform.',
};

export default function About() {
  return (
    <>
      <section className="page-hero bg-cream">
        <div className="container">
          <Reveal immediate>
            <p className="pill" style={{ marginInline: 'auto', marginBottom: 22 }}>
              <span className="dot" />
              About Schull Academy
            </p>
          </Reveal>
          <Reveal immediate delay={80}>
            <h1 className="display" style={{ maxWidth: '17ch', marginInline: 'auto' }}>
              We built an academy around careers, not <Accent>courses</Accent>.
            </h1>
          </Reveal>
          <Reveal immediate delay={160}>
            <p className="lede" style={{ marginTop: 22 }}>
              {ABOUT.lede}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream" style={{ paddingBottom: 40 }}>
        <div className="container">
          <Reveal>
            <div className="media media--lg" style={{ aspectRatio: '21/9' }}>
              <img src={IMG.teamMeeting} alt="The Schull Academy team working together" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why we exist */}
      <Scallop to="sand" />
      <section className="section bg-sand">
        <div className="container">
          <div className="split">
            <Reveal>
              <h2 className="h2">
                Why we <Accent>exist</Accent>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="prose">
                {ABOUT.why.map((w, i) => (
                  <p key={i} style={{ fontSize: 17.5 }}>
                    {w}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 48, maxWidth: '14ch' }}>
              What we <Accent>believe</Accent>
            </h2>
          </Reveal>
          <div className="grid grid-3">
            {ABOUT.believe.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80}>
                <div className="card" style={{ height: '100%' }}>
                  <span className="icon-tile" style={{ marginBottom: 16 }}>
                    <Icon name={['compass', 'route', 'laptop', 'badge', 'chart'][i]} color="#1077E5" />
                  </span>
                  <h3 className="h4" style={{ marginBottom: 8 }}>
                    {b.title}
                  </h3>
                  <p className="body-sm" style={{ margin: 0 }}>
                    {b.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we are different — the visual centrepiece */}
      <Scallop to="sky" />
      <section className="section bg-sky">
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 48, maxWidth: '16ch' }}>
              How we are <Accent>different</Accent>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="compare">
              {ABOUT.different.map(([a, b]) => (
                <div className="compare__row" key={a}>
                  <div className="compare__a">{a}</div>
                  <div className="compare__b">{b}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Learn at your pace */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <div className="split">
            <Reveal>
              <div>
                <h2 className="h2">
                  Learn at your pace. Never <Accent>on your own</Accent>.
                </h2>
                {ABOUT.notAlone.paras.map((p, i) => (
                  <p className="lede" key={i} style={{ marginTop: 20 }}>
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {ABOUT.notAlone.items.map((it, i) => (
                  <div className="step" key={it.title}>
                    <span className="step__num">
                      <Icon name={['play', 'users', 'check', 'message'][i]} size={20} />
                    </span>
                    <div>
                      <h3 className="h4" style={{ marginBottom: 4 }}>
                        {it.title}
                      </h3>
                      <p className="body-sm" style={{ margin: 0 }}>
                        {it.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Where are you starting from */}
      <Scallop to="mint" />
      <section className="section bg-mint">
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ marginBottom: 48, maxWidth: '18ch' }}>
              Where are you <Accent>starting from?</Accent>
            </h2>
          </Reveal>
          <div className="grid grid-3">
            {ABOUT.startingFrom.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="card" style={{ height: '100%', background: 'rgba(255,255,255,0.78)' }}>
                  <h3 className="h4" style={{ marginBottom: 8 }}>
                    {s.title}
                  </h3>
                  <p className="body-sm" style={{ margin: 0 }}>
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our standards + Who we work with */}
      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <div className="split">
            <Reveal>
              <div>
                <h2 className="h2">
                  Our <Accent>standards</Accent>
                </h2>
                <p className="lede" style={{ marginTop: 20 }}>
                  {ABOUT.standards}
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <h3 className="h3" style={{ marginBottom: 24 }}>
                  Who we work with
                </h3>
                <ul className="list-check">
                  {ABOUT.workWith.map((w) => (
                    <li key={w}>
                      <CheckIcon />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Scallop to="navy" />
      <section className="section bg-navy" style={{ textAlign: 'center' }}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ maxWidth: '14ch', marginInline: 'auto' }}>
              Build the skills. Build the <Accent>career</Accent>.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 30 }}>
              <Btn href="/career-schools" variant="orange" size="lg">
                Explore Career Schools
              </Btn>
              <Btn href="/contact" variant="onnavy" size="lg">
                Contact us
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
