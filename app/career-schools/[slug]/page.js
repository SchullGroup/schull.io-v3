import { notFound } from 'next/navigation';
import { Reveal, Accent, Scallop, Btn, CheckIcon } from '../../../components/ui';
import { SCHOOLS, getSchool } from '../../../content/schools';
import { getPathway } from '../../../content/pathways';
import { SCHOOL_IMG } from '../../../content/images';

export function generateStaticParams() {
  return SCHOOLS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const school = getSchool(slug);
  if (!school) return {};
  return { title: school.name, description: school.forWho };
}

export default async function SchoolPage({ params }) {
  const { slug } = await params;
  const school = getSchool(slug);
  if (!school) notFound();
  const pathway = getPathway(slug);

  return (
    <>
      <section className="page-hero page-hero--left bg-cream">
        <div className="container">
          <Reveal immediate>
            <p className="pill" style={{ marginBottom: 22 }}>
              <span className="dot" />
              Career School
            </p>
          </Reveal>
          <Reveal immediate delay={80}>
            <h1 className="display" style={{ maxWidth: '18ch' }}>
              {school.name.replace('School of ', 'School of ')}
            </h1>
          </Reveal>
          <Reveal immediate delay={160}>
            <p className="lede" style={{ marginTop: 22 }}>
              {school.forWho}
            </p>
          </Reveal>
          <Reveal immediate delay={240}>
            <div className="btn-row">
              <Btn href={`/pathways/${school.slug}`} variant="primary" size="lg">
                View the Career Pathway
              </Btn>
              <Btn href="/placement-assessment" variant="secondary" size="lg">
                Take the placement assessment
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section--tight bg-cream" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div className="media media--lg" style={{ aspectRatio: '21/9' }}>
              <img src={SCHOOL_IMG[school.slug]} alt="" />
            </div>
          </Reveal>
        </div>
      </section>

      <Scallop to="sky" />
      <section className="section bg-sky">
        <div className="container">
          <div className="split">
            <Reveal>
              <div>
                <h2 className="h2">
                  What you will <Accent>learn</Accent>
                </h2>
                <p className="lede" style={{ marginTop: 20, color: 'var(--ink-700)' }}>
                  {school.learn}
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <ul className="list-check">
                {school.learnList.map((l) => (
                  <li key={l}>
                    <CheckIcon />
                    {l}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <Scallop to="cream" />
      <section className="section bg-cream">
        <div className="container">
          <div className="split">
            <Reveal>
              <div>
                <h2 className="h2">
                  Where it <Accent>leads</Accent>
                </h2>
                {school.leads.length > 0 ? (
                  <div className="chip-row" style={{ marginTop: 26 }}>
                    {school.leads.map((l) => (
                      <span className="chip chip--blue" key={l} style={{ fontSize: 15, padding: '10px 18px' }}>
                        {l}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="lede" style={{ marginTop: 20 }}>
                    {school.leadsNote}
                  </p>
                )}
              </div>
            </Reveal>

            {pathway && (
              <Reveal delay={80}>
                <div className="note-panel">
                  <p className="eyebrow" style={{ marginBottom: 10 }}>
                    The pathway inside this school
                  </p>
                  <h3 className="h3" style={{ marginBottom: 12 }}>
                    {pathway.name}
                  </h3>
                  <p className="body-sm" style={{ marginBottom: 20 }}>
                    {pathway.promise}
                  </p>
                  <Btn href={`/pathways/${pathway.slug}`} variant="primary">
                    Start this pathway
                  </Btn>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <Scallop to="navy" />
      <section className="section bg-navy" style={{ textAlign: 'center' }}>
        <div className="container">
          <Reveal>
            <h2 className="h2" style={{ maxWidth: '16ch', marginInline: 'auto' }}>
              Choose your career. Build your <Accent>future</Accent>.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="btn-row" style={{ justifyContent: 'center', marginTop: 30 }}>
              <Btn href={`/pathways/${school.slug}`} variant="orange" size="lg">
                Start this pathway
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
