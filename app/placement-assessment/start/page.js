'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Accent, Btn, CheckIcon } from '../../../components/ui';
import { PATHWAYS } from '../../../content/pathways';

/**
 * Four dimensions, one question per screen, no account required.
 * Email is captured on the RESULT screen only — the landing page
 * promises "No account needed to begin" and we honour it.
 */
const QUESTIONS = [
  {
    id: 'want',
    dimension: 'What you want',
    q: 'Which kind of work pulls at you most?',
    options: [
      { label: 'Building with AI and automating work people still do by hand', w: 'ai-and-automation' },
      { label: 'Running the infrastructure everything else depends on', w: 'cloud-and-devops' },
      { label: 'Finding weaknesses before attackers do', w: 'cybersecurity' },
      { label: 'Turning messy information into decisions', w: 'data' },
      { label: 'Catching what everyone else missed before it ships', w: 'quality-assurance' },
      { label: 'Deciding what gets built and why', w: 'product-management' },
    ],
  },
  {
    id: 'background',
    dimension: 'Where you are now',
    q: 'Which best describes where you are today?',
    options: [
      { label: 'I have never worked in tech and I am starting from zero', level: 0 },
      { label: 'I am switching careers and have taught myself some basics', level: 1 },
      { label: 'I am a student or recent graduate in a related field', level: 1 },
      { label: 'I already work in tech and want to go deeper or sideways', level: 2 },
    ],
  },
  {
    id: 'knowledge',
    dimension: 'What you already know',
    q: 'How comfortable are you with a command line, a spreadsheet formula, or reading code?',
    options: [
      { label: 'Not at all — I would not know where to start', level: 0 },
      { label: 'A little — I can follow a tutorial if someone wrote it down', level: 0 },
      { label: 'Reasonably — I can work things out on my own', level: 1 },
      { label: 'Very — I do this regularly', level: 2 },
    ],
  },
  {
    id: 'time',
    dimension: 'What you can give it',
    q: 'Realistically, how much time can you give this each week?',
    options: [
      { label: 'Under 5 hours', pace: 'a relaxed pace' },
      { label: '5 to 10 hours', pace: 'a steady pace' },
      { label: '10 to 20 hours', pace: 'a committed pace' },
      { label: 'Over 20 hours — this is my main focus', pace: 'an intensive pace' },
    ],
  },
];

export default function AssessmentFlow() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const total = QUESTIONS.length;
  const current = QUESTIONS[step];
  const picked = answers[current?.id];

  const choose = (opt) => setAnswers({ ...answers, [current.id]: opt });

  const next = () => {
    if (step + 1 < total) {
      setStep(step + 1);
    } else {
      setDone(true);
      try {
        localStorage.setItem('schull.assessment', JSON.stringify(answers));
      } catch (e) {
        /* private mode — result still shows on screen */
      }
    }
  };

  if (done) {
    const result = computeResult(answers);
    return (
      <section className="page-hero bg-cream" style={{ paddingBottom: 120 }}>
        <div className="container">
          <div className="quiz">
            <div style={{ textAlign: 'center' }}>
              <span className="result-badge">
                <CheckIcon color="#118D57" />
                Your result
              </span>
              <h1 className="display" style={{ fontSize: 'clamp(34px,5vw,64px)', marginTop: 24 }}>
                Start with the <Accent>{result.pathway.short}</Accent> pathway
              </h1>
              <p className="lede" style={{ marginInline: 'auto', marginTop: 20 }}>
                {result.pathway.promise}
              </p>
            </div>

            <div className="glance" style={{ marginTop: 40 }}>
              <div className="glance__cell">
                <div className="glance__k">Recommended pathway</div>
                <div className="glance__v">{result.pathway.short}</div>
              </div>
              <div className="glance__cell">
                <div className="glance__k">Your entry level</div>
                <div className="glance__v">{result.level}</div>
              </div>
              <div className="glance__cell">
                <div className="glance__k">At your pace</div>
                <div className="glance__v" style={{ fontSize: 16 }}>
                  {result.pace}
                </div>
              </div>
              <div className="glance__cell">
                <div className="glance__k">Second option</div>
                <div className="glance__v" style={{ fontSize: 16 }}>
                  {result.second.short}
                </div>
              </div>
            </div>

            <div className="note-panel" style={{ marginTop: 28 }}>
              <p className="body-sm" style={{ margin: 0 }}>
                This is guidance, not a gate. You can enrol in any pathway you want — and you can retake this as many
                times as you like.
              </p>
            </div>

            <div className="btn-row" style={{ marginTop: 32, justifyContent: 'center' }}>
              <Btn href={`/pathways/${result.pathway.slug}`} variant="primary" size="lg">
                Open my pathway
              </Btn>
              <Btn href="/contact" variant="secondary" size="lg">
                Talk it through with an advisor
              </Btn>
            </div>

            {/* Email capture happens HERE, never before */}
            <div className="card" style={{ marginTop: 40 }}>
              {sent ? (
                <p style={{ margin: 0, fontWeight: 500 }}>
                  Sent. Check your inbox — your result and recommended pathway are on the way.
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <h2 className="h4" style={{ marginBottom: 6 }}>
                    Want this emailed to you?
                  </h2>
                  <p className="body-sm" style={{ marginBottom: 18 }}>
                    Optional. Your result is already on screen — this is only if you want it saved.
                  </p>
                  <div className="form-grid form-grid--2" style={{ alignItems: 'end' }}>
                    <div className="field">
                      <label htmlFor="result-email">Email address</label>
                      <input
                        id="result-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                      />
                    </div>
                    <button className="btn btn--primary" type="submit">
                      Send me my result
                    </button>
                  </div>
                </form>
              )}
            </div>

            <p style={{ textAlign: 'center', marginTop: 28 }}>
              <button
                type="button"
                className="arrow-link"
                style={{ background: 'none', border: 0, cursor: 'pointer', font: 'inherit' }}
                onClick={() => {
                  setAnswers({});
                  setStep(0);
                  setDone(false);
                  setSent(false);
                }}
              >
                Take it again for a different career direction
              </button>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-hero bg-cream" style={{ paddingBottom: 120 }}>
      <div className="container">
        <div className="quiz">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, fontSize: 14 }}>
            <span style={{ fontWeight: 600 }}>{current.dimension}</span>
            <span style={{ color: 'var(--ink-400)' }}>
              Question {step + 1} of {total}
            </span>
          </div>
          <div
            className="quiz__bar"
            role="progressbar"
            aria-valuenow={step + 1}
            aria-valuemin={1}
            aria-valuemax={total}
            aria-label="Assessment progress"
          >
            <div className="quiz__fill" style={{ width: `${((step + 1) / total) * 100}%` }} />
          </div>

          <h1 className="h2" style={{ fontSize: 'clamp(26px,3.6vw,44px)', marginTop: 34 }} aria-live="polite">
            {current.q}
          </h1>

          <div className="quiz__opts">
            {current.options.map((o, i) => (
              <button
                key={o.label}
                type="button"
                className={`quiz__opt ${picked?.label === o.label ? 'is-picked' : ''}`}
                onClick={() => choose(o)}
              >
                <span className="k">{String.fromCharCode(65 + i)}</span>
                {o.label}
              </button>
            ))}
          </div>

          <div className="btn-row" style={{ marginTop: 32, justifyContent: 'space-between' }}>
            {step > 0 ? (
              <button className="btn btn--secondary" type="button" onClick={() => setStep(step - 1)}>
                Back
              </button>
            ) : (
              <Link className="btn btn--secondary" href="/placement-assessment">
                Back
              </Link>
            )}
            <button className="btn btn--primary" type="button" disabled={!picked} onClick={next} style={!picked ? { opacity: 0.4, cursor: 'not-allowed' } : undefined}>
              {step + 1 === total ? 'See my result' : 'Next'}
            </button>
          </div>

          <p className="body-sm" style={{ textAlign: 'center', marginTop: 28, fontSize: 13.5 }}>
            You cannot fail this. There is nothing to revise for. It only decides where you begin.
          </p>
        </div>
      </div>
    </section>
  );
}

function computeResult(answers) {
  const slug = answers.want?.w || 'data';
  const pathway = PATHWAYS.find((p) => p.slug === slug) || PATHWAYS[3];

  const score = (answers.background?.level ?? 0) + (answers.knowledge?.level ?? 0);
  const level = score >= 3 ? 'Professional' : 'Foundation';

  const pace = answers.time?.pace || 'a steady pace';

  const second =
    PATHWAYS.find((p) => p.slug !== slug && p.slug !== 'career-and-workplace-readiness') || PATHWAYS[0];

  return { pathway, level, pace, second };
}
