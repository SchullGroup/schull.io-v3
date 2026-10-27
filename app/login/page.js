import Link from 'next/link';
import { Reveal, Accent, Scallop, Icon } from '../../components/ui';

export const metadata = {
  title: 'Student Login & Portal Access',
  description:
    'Choose your Schull Academy student portal. Continuing students from existing cohorts and new students can select their designated learning platform.',
};

export default function LoginPage() {
  return (
    <>
      {/* 1. HERO */}
      <section className="page-hero bg-cream">
        <div className="container">
          <Reveal immediate>
            <p className="pill" style={{ marginBottom: 20 }}>
              <span className="dot" />
              Student & Learner Access
            </p>
          </Reveal>
          <Reveal immediate delay={80}>
            <h1 className="display" style={{ maxWidth: '16ch', marginInline: 'auto' }}>
              Choose your student <Accent>portal</Accent>
            </h1>
          </Reveal>
          <Reveal immediate delay={160}>
            <p className="lede" style={{ marginTop: 22 }}>
              Welcome back to Schull Academy. We have upgraded our learning ecosystem to give you a more interactive, seamless experience.
              Please select the portal that corresponds with your student account.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. PORTAL SELECTION */}
      <Scallop to="sand" />
      <section className="section bg-sand" style={{ paddingTop: 60, paddingBottom: 110 }}>
        <div className="container">
          <div className="portal-grid">
            {/* CARD 1: CONTINUING STUDENTS */}
            <Reveal delay={100}>
              <div className="portal-card">
                <div className="portal-card__badge-row">
                  <span className="portal-card__tag portal-card__tag--gray">
                    Ongoing Cohorts
                  </span>
                  <span className="icon-tile">
                    <Icon name="book" color="#071C3F" size={22} />
                  </span>
                </div>

                <h2 className="portal-card__title">Continuing Students</h2>
                <div className="portal-card__subtitle">Previous Learning Platform</div>
                <p className="portal-card__desc">
                  For students who enrolled in earlier cohorts and have active credentials on our previous
                  portal. Continue here to access your coursework, project submissions, and recorded sessions.
                </p>

                <ul className="portal-card__features">
                  <li className="portal-card__feature">
                    <span className="portal-card__feature-icon portal-card__feature-icon--blue">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Access ongoing cohort modules and lecture recordings</span>
                  </li>
                  <li className="portal-card__feature">
                    <span className="portal-card__feature-icon portal-card__feature-icon--blue">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Submit milestone projects and capstone assignments</span>
                  </li>
                  <li className="portal-card__feature">
                    <span className="portal-card__feature-icon portal-card__feature-icon--blue">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Download certificates of completion and assessment reports</span>
                  </li>
                </ul>

                <div className="portal-card__foot">
                  <a
                    href="#"
                    className="btn btn--secondary btn--block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Log in to Continuing Portal →
                  </a>
                  <p className="portal-card__hint">
                    Use your existing student email and password
                  </p>
                </div>
              </div>
            </Reveal>

            {/* CARD 2: NEW STUDENTS */}
            <Reveal delay={180}>
              <div className="portal-card portal-card--highlight">
                <div className="portal-card__badge-row">
                  <span className="portal-card__tag portal-card__tag--orange">
                    ⭐ Current &amp; New Cohorts
                  </span>
                  <span className="icon-tile" style={{ background: 'rgba(250, 154, 25, 0.15)', borderColor: 'rgba(250, 154, 25, 0.25)' }}>
                    <Icon name="spark" color="#E2870C" size={22} />
                  </span>
                </div>

                <h2 className="portal-card__title">New Students</h2>
                <div className="portal-card__subtitle" style={{ color: 'var(--orange-600)' }}>
                  Schull 3.0 Learning Platform
                </div>
                <p className="portal-card__desc">
                  For learners enrolled in our newest programs and current cohort intakes. Sign in to
                  our next-generation learning dashboard with interactive workspaces and live mentor tracking.
                </p>

                <ul className="portal-card__features">
                  <li className="portal-card__feature">
                    <span className="portal-card__feature-icon portal-card__feature-icon--orange">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Interactive video modules, quizzes, and live workshops</span>
                  </li>
                  <li className="portal-card__feature">
                    <span className="portal-card__feature-icon portal-card__feature-icon--orange">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Direct mentor office hours &amp; peer discussion channels</span>
                  </li>
                  <li className="portal-card__feature">
                    <span className="portal-card__feature-icon portal-card__feature-icon--orange">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Real-time skill readiness scores &amp; hiring partner access</span>
                  </li>
                </ul>

                <div className="portal-card__foot">
                  <a
                    href="https://learn.schull.io/auth/login"
                    className="btn btn--orange btn--block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Log in to Schull Portal →
                  </a>
                  <p className="portal-card__hint">
                    Credentials were sent to your email upon enrollment confirmation
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* HELP & CLARIFICATION CARD */}
          <Reveal delay={260}>
            <div className="portal-help-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <span className="icon-tile" style={{ width: 44, height: 44 }}>
                  <Icon name="message" color="#1077E5" size={20} />
                </span>
                <h3 className="h4" style={{ margin: 0 }}>
                  Not sure which portal you should choose?
                </h3>
              </div>
              <p className="body-sm" style={{ margin: 0, maxWidth: '72ch' }}>
                We are committed to making your learning transition as smooth as possible. Here is a quick reference
                to guide you:
              </p>

              <div className="portal-help-grid">
                <div className="portal-help-item">
                  <div className="portal-help-item__title">1. Check Your Enrollment Date</div>
                  <p className="portal-help-item__text">
                    If you enrolled before the launch of the new website, your courses are securely hosted on the Continuing Student Portal.
                  </p>
                </div>
                <div className="portal-help-item">
                  <div className="portal-help-item__title">2. Check Your Welcome Email</div>
                  <p className="portal-help-item__text">
                    Search your inbox for <strong>&ldquo;Welcome to Schull Academy&rdquo;</strong> to find your specific portal URL and login details.
                  </p>
                </div>
                <div className="portal-help-item">
                  <div className="portal-help-item__title">3. Contact Student Support</div>
                  <p className="portal-help-item__text">
                    Still unable to sign in? Reach out to our student success advisors and we will get you connected right away.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 14 }}>
                <Link href="/contact" className="btn btn--secondary" style={{ minHeight: 46, paddingInline: 22, fontSize: 14 }}>
                  Contact Student Support
                </Link>
                <a
                  href="mailto:support@schull.io"
                  className="btn btn--light"
                  style={{ minHeight: 46, paddingInline: 22, fontSize: 14, border: '1px solid var(--line)' }}
                >
                  Email support@schull.io
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. PROSPECTIVE STUDENTS SECTION */}
      <Scallop to="cream" />
      <section className="section section--tight bg-cream">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 className="h3" style={{ marginBottom: 12 }}>
              Don&apos;t have a student account yet?
            </h2>
            <p className="lede" style={{ marginInline: 'auto', marginBottom: 28 }}>
              Take our 5-minute placement assessment to find the right career pathway for your background, explore our industry-backed programs, or create an account to get started.
            </p>
            <div className="btn-row" style={{ justifyContent: 'center' }}>
              <a
                href="https://learn.schull.io/auth/create-account"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--orange"
              >
                Create an account
              </a>
              <Link href="/placement-assessment" className="btn btn--secondary">
                Take the placement assessment
              </Link>
              <Link href="/career-pathways" className="btn btn--secondary">
                Explore career pathways
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
