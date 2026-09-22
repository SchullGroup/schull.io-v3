'use client';

import { useState } from 'react';
import { Reveal, Accent, Scallop, Icon } from '../../components/ui';
import { CONTACT_ROUTES, CONTACT_SUBJECTS } from '../../content/site';

export default function Contact() {
  const [subject, setSubject] = useState(CONTACT_SUBJECTS[0]);
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="page-hero bg-cream">
        <div className="container">
          <Reveal immediate>
            <h1 className="display" style={{ maxWidth: '10ch', marginInline: 'auto' }}>
              Talk <Accent>to us</Accent>
            </h1>
          </Reveal>
          <Reveal immediate delay={80}>
            <p className="lede" style={{ marginTop: 22 }}>
              Questions about a pathway, your account, or training for your team. We answer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Three routes */}
      <section className="bg-cream" style={{ paddingBottom: 96 }}>
        <div className="container">
          <div className="grid grid-3">
            {CONTACT_ROUTES.map((r, i) => (
              <Reveal key={r.title} delay={i * 80}>
                <button
                  type="button"
                  className="card card--link"
                  style={{
                    height: '100%',
                    textAlign: 'left',
                    border: subject === r.subject ? '2px solid var(--blue)' : '2px solid transparent',
                    cursor: 'pointer',
                    font: 'inherit',
                    width: '100%',
                  }}
                  onClick={() => {
                    setSubject(r.subject);
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="icon-tile" style={{ marginBottom: 16 }}>
                    <Icon name={['compass', 'laptop', 'brief'][i]} color="#1077E5" />
                  </span>
                  <h2 className="h4" style={{ marginBottom: 8 }}>
                    {r.title}
                  </h2>
                  <p className="body-sm" style={{ margin: 0 }}>
                    {r.text}
                  </p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <Scallop to="sky" />
      <section className="section bg-sky" id="contact-form" style={{ scrollMarginTop: 90 }}>
        <div className="container">
          <div className="split">
            <Reveal>
              <div>
                <h2 className="h2">
                  Send us a <Accent>message</Accent>
                </h2>
                <p className="lede" style={{ marginTop: 20, color: 'var(--ink-700)' }}>
                  We respond within one working day.
                </p>

                <div className="note-panel" style={{ marginTop: 32 }}>
                  <p className="eyebrow" style={{ marginBottom: 12 }}>
                    Direct details
                  </p>
                  <p className="body-sm" style={{ margin: 0 }}>
                    <strong>✉ Mail</strong><br />
                    <a href="mailto:admin@schull.io">admin@schull.io</a>
                    <br /><br />
                    <strong>☎ Tel</strong><br />
                    <a href="tel:+12404217887">+1 (240) 421 7887</a><br />
                    <a href="tel:+2348101854429">+234 810 185 4429</a>
                    <br /><br />
                    <strong>📍 Address</strong><br />
                    6th Floor, Mulliner Towers, 39 Alfred Rewane Road, Ikoyi, Lagos.
                    <br /><br />
                    <strong>🔗 Social</strong><br />
                    <a href="https://linkedin.com/company/schull" target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href="https://twitter.com/schullio" target="_blank" rel="noopener noreferrer">Twitter</a> · <a href="https://instagram.com/schullio" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="card">
                {sent ? (
                  <div style={{ padding: '32px 4px', textAlign: 'center' }}>
                    <span className="icon-tile" style={{ marginInline: 'auto', marginBottom: 18 }}>
                      <Icon name="check" color="#118D57" />
                    </span>
                    <h3 className="h3" style={{ marginBottom: 10 }}>
                      Message received
                    </h3>
                    <p className="body-sm" style={{ margin: 0 }}>
                      We will respond within one working day.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    <div className="form-grid">
                      <div className="form-grid form-grid--2">
                        <div className="field">
                          <label htmlFor="c-name">Your name</label>
                          <input id="c-name" name="name" required />
                        </div>
                        <div className="field">
                          <label htmlFor="c-email">Email</label>
                          <input id="c-email" name="email" type="email" required />
                        </div>
                      </div>

                      <div className="field">
                        <label htmlFor="c-phone">Phone number</label>
                        <input id="c-phone" name="phone" type="tel" />
                      </div>

                      <div className="field">
                        <label htmlFor="c-subject">What is this about?</label>
                        <select
                          id="c-subject"
                          name="subject"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                        >
                          {CONTACT_SUBJECTS.map((s) => (
                            <option key={s} value={s}>
                              {s.charAt(0).toUpperCase() + s.slice(1)}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="field">
                        <label htmlFor="c-message">Your message</label>
                        <textarea id="c-message" name="message" required />
                      </div>

                      <button className="btn btn--primary btn--lg btn--block" type="submit">
                        Send message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
