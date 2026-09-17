'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';

/* ============================================================
   REVEAL — measured from the reference:
   opacity 0 -> 1, translateY(30px) -> 0, 600ms,
   cubic-bezier(.44,0,.56,1), 80ms sibling stagger, fires once
   at ~15% into the viewport.
   Content is visible by default; JS opts it INTO the hidden
   start state, so a JS failure never hides the page.
   ============================================================ */
export function Reveal({
  children,
  delay = 0,
  immediate = false,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      setInView(true);
      return;
    }
    // Above-the-fold content animates in on load, not on scroll — the hero
    // must never sit blank waiting for an observer.
    if (immediate) {
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [immediate]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Staggers its children by 80ms each. */
export function RevealGroup({ children, className = '', step = 80, start = 0, as = 'div' }) {
  const items = Array.isArray(children) ? children : [children];
  const Tag = as;
  return (
    <Tag className={className}>
      {items.filter(Boolean).map((child, i) => (
        <Reveal key={i} delay={start + i * step}>
          {child}
        </Reveal>
      ))}
    </Tag>
  );
}

/* ============================================================
   HAND-DRAWN ACCENTS
   ============================================================ */
export function Swash({ color = '#FA9A19' }) {
  return (
    <svg className="swash" viewBox="0 0 200 14" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M3 9.6C40 3.4 96 1.6 140 3.8c21 1.1 40 3.1 57 6.2"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M8 13C48 8.2 104 6.8 146 8.6c17 .7 33 2.1 48 4.1"
        fill="none"
        stroke="#1077E5"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function Sparkles({ color = '#FA9A19' }) {
  return (
    <svg className="sparkles" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.5v7" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M3.5 6.5l4.2 4.6" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M21 8.5l-4.6 3" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

/** Headline with the signature accented last word. */
export function Accent({ children, sparkles = true }) {
  return (
    <span className="accent">
      {children}
      <Swash />
      {sparkles && <Sparkles />}
    </span>
  );
}

/* ============================================================
   SCALLOPED DIVIDER
   ============================================================ */
const BLOCK_HEX = {
  cream: '#fbf8f2',
  sand: '#f4eee3',
  sky: '#d8e8fa',
  mint: '#dcefe4',
  blush: '#fbe3dc',
  sun: '#fdebcf',
  navy: '#071c3f',
  white: '#ffffff',
};

export function Scallop({ to = 'cream' }) {
  return <div className="scallop" style={{ background: BLOCK_HEX[to] || to }} aria-hidden="true" />;
}

/* ============================================================
   BUTTONS / LINKS
   ============================================================ */
export function Btn({ href, variant = 'primary', size, children, ...rest }) {
  const cls = `btn btn--${variant}${size === 'lg' ? ' btn--lg' : ''}${
    size === 'block' ? ' btn--block' : ''
  }`;
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}

export function ArrowLink({ href, children, className = '' }) {
  return (
    <Link href={href} className={`arrow-link ${className}`.trim()}>
      {children}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path
          d="M2.5 8h11m0 0L9 3.5M13.5 8L9 12.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

/* ============================================================
   MARQUEE — diagonal band, infinite, pauses on hover
   ============================================================ */
export function Marquee({ items }) {
  const group = (
    <div className="marquee__group" aria-hidden="true">
      {items.map((t, i) => (
        <span className="marquee__item" key={i}>
          {t}
          <span className="sep">◆</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee-band">
      <div className="marquee">
        <div className="marquee__track">
          {group}
          {group}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ACCORDION
   ============================================================ */
export function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="acc">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div className="acc__item" key={i}>
            <button
              type="button"
              className="acc__btn"
              aria-expanded={isOpen}
              aria-controls={`acc-panel-${i}`}
              id={`acc-btn-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{item.q}</span>
              <span className="acc__icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 5l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`acc__panel ${isOpen ? 'is-open' : ''}`}
              id={`acc-panel-${i}`}
              role="region"
              aria-labelledby={`acc-btn-${i}`}
            >
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ============================================================
   COUNTER — counts up from 0 on first view, 1.2s ease-out
   ============================================================ */
export function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const [n, setN] = useState(value);
  const run = useCallback(() => {
    const dur = 1200;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setN(0);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [run]);

  return (
    <span ref={ref}>
      {n.toLocaleString('en-GB')}
      {suffix}
    </span>
  );
}

/* ============================================================
   ICONS
   ============================================================ */
const ICON_PATHS = {
  compass: 'M12 2a10 10 0 100 20 10 10 0 000-20zm3.5 6.5l-2.1 5-5 2.1 2.1-5 5-2.1z',
  target: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 100 12 6 6 0 000-12zm0 4a2 2 0 100 4 2 2 0 000-4z',
  play: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-2 5.8l7 4.2-7 4.2V7.8z',
  badge: 'M12 1.8l2.6 1.9 3.2-.2.9 3.1 2.6 1.9-1.6 2.8 1.6 2.8-2.6 1.9-.9 3.1-3.2-.2L12 22.2l-2.6-1.9-3.2.2-.9-3.1L2.7 15.5l1.6-2.8-1.6-2.8 2.6-1.9.9-3.1 3.2.2L12 1.8zm-1 12.3l5-5-1.4-1.4-3.6 3.6-1.6-1.6L8 11.1l3 3z',
  route: 'M6 3a3 3 0 013 3c0 1.3-.8 2.4-2 2.8V15a3 3 0 006 0V9.2A3 3 0 0118 3.2a3 3 0 011 5.8V15a5 5 0 01-10 0V8.8A3 3 0 016 3z',
  book: 'M4 4a2 2 0 012-2h13v18H6a2 2 0 00-2 2V4zm3 1v12h10V5H7z',
  brief: 'M9 3h6a2 2 0 012 2v2h3a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h3V5a2 2 0 012-2zm0 4h6V5H9v2z',
  cert: 'M4 3h16a1 1 0 011 1v11a1 1 0 01-1 1h-6l-2 5-2-5H4a1 1 0 01-1-1V4a1 1 0 011-1zm3 4v2h10V7H7zm0 4v2h7v-2H7z',
  users: 'M9 11a4 4 0 100-8 4 4 0 000 8zm8 0a3 3 0 100-6 3 3 0 000 6zM1 20c0-3.3 3.6-5.5 8-5.5s8 2.2 8 5.5v1H1v-1zm17.5 1v-1c0-1.9-.8-3.5-2.1-4.6 3.3.4 5.6 2.3 5.6 4.6v1h-3.5z',
  chart: 'M3 21V3h2v16h16v2H3zm4-4V9h3v8H7zm5 0V5h3v12h-3zm5 0v-6h3v6h-3z',
  shield: 'M12 2l8 3.2v6c0 5-3.4 9.6-8 10.8-4.6-1.2-8-5.8-8-10.8v-6L12 2zm0 4.4L8 8v3.2c0 3 1.7 5.9 4 6.9 2.3-1 4-3.9 4-6.9V8l-4-1.6z',
  cloud: 'M6.5 19a4.5 4.5 0 01-.6-8.96A6 6 0 0117.7 9.2 4.5 4.5 0 0117.5 19h-11z',
  bolt: 'M13 2L4.5 13.5H11l-1 8.5L18.5 10.5H12l1-8.5z',
  check: 'M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14.2l-4.2-4.2 1.4-1.4L11 13.4l5.8-5.8 1.4 1.4-7.2 7.2z',
  clock: 'M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6l5 3 1-1.7-4-2.3V7z',
  spark: 'M12 2l2.2 6.3L21 10.5l-6.8 2.2L12 19l-2.2-6.3L3 10.5l6.8-2.2L12 2z',
  flag: 'M5 2v20H3V2h2zm2 1h13l-3 4.5L20 12H7V3z',
  laptop: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v10H4V5zm-2 11h20l-2 3H4l-2-3z',
  message: 'M3 3h18a1 1 0 011 1v12a1 1 0 01-1 1H8l-5 4V4a1 1 0 011-1z',
};

export function Icon({ name, size = 24, color = 'currentColor' }) {
  const d = ICON_PATHS[name] || ICON_PATHS.spark;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export function CheckIcon({ color = '#1077E5' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d={ICON_PATHS.check} />
    </svg>
  );
}

/* ============================================================
   SECTION HEADING
   ============================================================ */
export function SectionHeading({ eyebrow, before, accent, after, lede, level = 'h2', align }) {
  const Tag = level;
  return (
    <div style={align === 'center' ? { textAlign: 'center' } : undefined}>
      {eyebrow && (
        <p className="pill" style={{ marginBottom: 20 }}>
          <span className="dot" />
          {eyebrow}
        </p>
      )}
      <Tag className={level === 'h1' ? 'display' : 'h2'}>
        {before} {accent && <Accent>{accent}</Accent>} {after}
      </Tag>
      {lede && (
        <p className="lede" style={{ marginTop: 20, marginInline: align === 'center' ? 'auto' : undefined }}>
          {lede}
        </p>
      )}
    </div>
  );
}
