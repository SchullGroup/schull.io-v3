import { Reveal, Accent, Scallop, Btn } from '../../components/ui';
import { SCHOOLS } from '../../content/schools';
import { SCHOOL_IMG } from '../../content/images';
import { FIELDS_PAGE, CTA } from '../../content/site';

export const metadata = {
  title: FIELDS_PAGE.metaTitle,
  description: FIELDS_PAGE.metaDescription,
};

/* Section background per field, read with a modulo so the list length can never
   fall out of sync with the number of fields. */
const TONES = ['cream', 'sky', 'cream', 'mint', 'cream', 'sun'];

export default function CareerFields() {
  return (
    <>
      <section className="page-hero bg-cream">
        <div className="container">
          <Reveal immediate>
            <p className="pill" style={{ marginInline: 'auto', marginBottom: 22 }}>
              <span className="dot" />
              {FIELDS_PAGE.pill}
            </p>
          </Reveal>
          <Reveal immediate delay={80}>
            <h1 className="display" style={{ maxWidth: '16ch', marginInline: 'auto' }}>
              {FIELDS_PAGE.h1a} <Accent>{FIELDS_PAGE.h1accent}</Accent>.
            </h1>
          </Reveal>
          <Reveal immediate delay={160}>
            <p className="lede" style={{ marginTop: 22 }}>
              {FIELDS_PAGE.lede}
            </p>
          </Reveal>
          <Reveal immediate delay={240}>
            <div className="btn-row">
              <Btn href="/placement-assessment" variant="primary" size="lg">
                {FIELDS_PAGE.assessmentCta}
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {SCHOOLS.map((s, i) => (
        <div key={s.slug}>
          <Scallop />
          <section className={`section bg-${TONES[i % TONES.length]}`} id={s.slug}>
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
                      {FIELDS_PAGE.itemEyebrow} {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="h3" style={{ fontSize: 'clamp(28px,3.4vw,44px)', letterSpacing: '-0.035em' }}>
                      {s.name}
                    </h2>
                    <p className="lede" style={{ marginTop: 16, color: 'var(--ink-700)' }}>
                      {s.forWho}
                    </p>

                    <p className="eyebrow" style={{ marginTop: 30, marginBottom: 12 }}>
                      {FIELDS_PAGE.learnHead}
                    </p>
                    <div className="chip-row">
                      {s.learnList.map((l) => (
                        <span className="chip" key={l}>
                          {l}
                        </span>
                      ))}
                    </div>

                    <p className="eyebrow" style={{ marginTop: 28, marginBottom: 12 }}>
                      {FIELDS_PAGE.leadsHead}
                    </p>
                    <div className="chip-row">
                      {s.leads.map((l) => (
                        <span className="chip chip--blue" key={l}>
                          {l}
                        </span>
                      ))}
                    </div>

                    <div className="btn-row" style={{ marginTop: 30 }}>
                      <Btn href={`/pathways/${s.slug}`} variant="primary">
                        {CTA.exploreThisField}
                      </Btn>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        </div>
      ))}

      <Scallop to="blush" />
      <section className="section bg-blush" id={FIELDS_PAGE.readiness.id}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ maxWidth: '18ch' }}>
              {FIELDS_PAGE.readiness.h2a} <Accent>{FIELDS_PAGE.readiness.h2accent}</Accent>
            </h2>
          </Reveal>
          {FIELDS_PAGE.readiness.paras.map((p, i) => (
            <Reveal key={i} delay={80 + i * 80}>
              <p className="lede" style={{ marginTop: 20, maxWidth: '62ch', color: 'var(--ink-700)' }}>
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <Scallop to="navy" />
      <section className="section bg-navy" style={{ textAlign: 'center' }}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ maxWidth: '14ch', marginInline: 'auto' }}>
              {FIELDS_PAGE.closing.h2a} <Accent>{FIELDS_PAGE.closing.h2accent}</Accent>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="lede" style={{ marginInline: 'auto', marginTop: 20 }}>
              {FIELDS_PAGE.closing.lede}
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
