import Link from 'next/link';
import { Brand } from './Header';
import { SCHOOLS } from '../content/schools';

export default function Footer() {
  return (
    <>
      <div className="scallop" style={{ background: '#071c3f' }} aria-hidden="true" />
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <Brand />
              <p className="body-sm" style={{ color: 'rgba(255,255,255,0.6)', marginTop: 18, maxWidth: '34ch' }}>
                The career learning arm of Schull Technologies, delivered on the Schull.io platform.
              </p>
              <p className="body-sm" style={{ color: 'rgba(255,255,255,0.45)', marginTop: 14 }}>
                [Email address. Phone and WhatsApp.]
                <br />
                [Office address. Support hours.]
              </p>
            </div>

            <div>
              <p className="footer__h">Learn</p>
              <ul className="footer__list">
                <li><Link href="/career-schools">Career Schools</Link></li>
                <li><Link href="/pathways">Career Pathways</Link></li>
                <li><Link href="/placement-assessment">Placement Assessment</Link></li>
                <li><Link href="/success-stories">Success Stories</Link></li>
              </ul>
            </div>

            <div>
              <p className="footer__h">Schools</p>
              <ul className="footer__list">
                {SCHOOLS.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link href={`/career-schools/${s.slug}`}>{s.short}</Link>
                  </li>
                ))}
                <li><Link href="/career-schools">View all seven</Link></li>
              </ul>
            </div>

            <div>
              <p className="footer__h">Stay in touch</p>
              <p className="body-sm" style={{ color: 'rgba(255,255,255,0.6)', margin: 0 }}>
                New pathways, cohort dates and learner stories. No noise.
              </p>
              <form className="newsletter" onSubmit={undefined}>
                <label htmlFor="footer-email" className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
                  Email address
                </label>
                <input id="footer-email" type="email" placeholder="Enter your email address" />
                <button type="submit" aria-label="Subscribe">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.5 8h11m0 0L9 3.5M13.5 8L9 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
              <p className="body-sm" style={{ color: 'rgba(255,255,255,0.4)', marginTop: 16 }}>
                <Link href="/contact">Talk to an advisor</Link> · <Link href="/faqs">FAQs</Link>
              </p>
            </div>
          </div>

          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} Schull Technologies. Schull Academy.</span>
            <span>
              <Link href="/faqs">FAQs</Link> · <Link href="/contact">Contact</Link> · Terms · Privacy · Academic Integrity
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
