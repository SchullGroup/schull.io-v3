'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV } from '../content/site';

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Schull Academy home">
      {/* Two files, swapped by CSS depending on background (see
          .footer .brand__logo rules in globals.css). The source logo is
          black text, unreadable on the navy footer, so -white.png is a
          generated recolour (black -> white, orange left alone) for dark
          backgrounds. */}
      <img src="/img/schull-academy-logo.png" alt="Schull Academy" className="brand__logo brand__logo--dark" />
      <img src="/img/schull-academy-logo-white.png" alt="Schull Academy" className="brand__logo brand__logo--light" />
    </Link>
  );
}

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`header ${stuck ? 'is-stuck' : ''}`}>
        <div className="container header__inner">
          <Brand />

          <nav className="nav" aria-label="Main">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={
                  (n.match || [n.href]).some((m) => pathname.startsWith(m)) ? 'is-active' : ''
                }
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link href="/placement-assessment" className="btn btn--orange header__cta">
            Take the assessment
          </Link>

          <button
            className="burger"
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            {/* Fixed-coordinate SVG, not stacked <span> divs — the old version
                relied on grid layout + margins to space three bars, which
                rendered as a clumped, uneven blob on mobile Safari. */}
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              <rect y="0" width="18" height="2" rx="1" fill="#fff" />
              <rect y="6" width="18" height="2" rx="1" fill="#fff" />
              <rect y="12" width="18" height="2" rx="1" fill="#fff" />
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="mobile-menu__top">
            <Brand />
            <button className="close-btn" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              ×
            </button>
          </div>
          <nav aria-label="Mobile">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="mobile-menu__foot">
            <Link href="/placement-assessment" className="btn btn--orange btn--block btn--lg">
              Take the assessment
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
