import { Reveal, Accent, Scallop, Btn, Accordion } from '../../components/ui';
import { FAQ_GROUPS } from '../../content/site';

export const metadata = {
  title: 'FAQs',
  description: 'Frequently asked questions about Schull Academy. If your question is not here, ask us directly.',
};

const BLOCKS = ['bg-cream', 'bg-sand', 'bg-cream', 'bg-sky', 'bg-cream'];
const NEXT = ['sand', 'cream', 'sky', 'cream', 'navy'];

export default function FAQs() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_GROUPS.flatMap((g) =>
      g.items.map((it) => ({
        '@type': 'Question',
        name: it.q,
        acceptedAnswer: { '@type': 'Answer', text: it.a },
      }))
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="page-hero bg-cream">
        <div className="container">
          <Reveal immediate>
            <h1 className="display" style={{ maxWidth: '14ch', marginInline: 'auto' }}>
              Frequently asked <Accent>questions</Accent>
            </h1>
          </Reveal>
          <Reveal immediate delay={80}>
            <p className="lede" style={{ marginTop: 22 }}>
              If your question is not here, ask us directly.
            </p>
          </Reveal>
          <Reveal immediate delay={160}>
            <div className="chip-row" style={{ justifyContent: 'center', marginTop: 28 }}>
              {FAQ_GROUPS.map((g) => (
                <a className="chip chip--blue" href={`#${g.id}`} key={g.id} style={{ padding: '10px 18px' }}>
                  {g.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {FAQ_GROUPS.map((g, i) => (
        <div key={g.id}>
          <Scallop to={i === 0 ? 'cream' : NEXT[i - 1]} />
          <section className={`section ${BLOCKS[i]}`} id={g.id} style={{ scrollMarginTop: 90 }}>
            <div className="container">
              <div className="split split--sticky">
                <div className="sticky-col">
                  <Reveal>
                    <p className="eyebrow" style={{ marginBottom: 10 }}>
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="h2">{g.title}</h2>
                  </Reveal>
                </div>
                <Reveal delay={80}>
                  <Accordion items={g.items} defaultOpen={-1} />
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
            <h2 className="h2" style={{ maxWidth: '16ch', marginInline: 'auto' }}>
              Still have a <Accent>question?</Accent>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 30 }}>
              <Btn href="/contact" variant="orange" size="lg">
                Contact us
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
