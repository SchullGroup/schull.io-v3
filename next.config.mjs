/**
 * EXPORT=1 produces a fully static `out/` build with no server, used for the
 * Artifact preview deploy. Normal `next build` / `next dev` are unaffected.
 */
const isExport = process.env.EXPORT === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isExport ? { output: 'export', trailingSlash: true, images: { unoptimized: true } } : {}),

  /**
   * Two moves are folded in here.
   *
   * 1. /career-schools became /career-fields, and the Career and Workplace
   *    Readiness school and pathway were removed — career readiness is now part
   *    of every pathway, explained in the #career-readiness section.
   * 2. Each subject had two pages; they merged into one at /pathways/<slug>.
   *    The /career-fields/<slug> detail pages and the /pathways index are gone.
   *    /career-fields survives as the only index.
   *
   * Order matters: first match wins. The exact readiness slugs come before the
   * wildcards, or they would be sent to a page that no longer exists. Note that
   * /career-schools/:slug points STRAIGHT at /pathways/:slug — routing it via
   * /career-fields/:slug would cost a second hop.
   *
   * Note: Next ignores redirects under `output: 'export'`, so these do nothing
   * in the EXPORT=1 Artifact preview — the build prints a warning and still
   * succeeds. That is fine: scripts/make-portable.mjs rewrites every internal
   * link in that bundle to a relative path, so nothing inside it points at an
   * old address, and no one holds an external link to a preview URL.
   */
  async redirects() {
    const readiness = '/career-fields#career-readiness';
    return [
      // The removed seventh subject — all three of its old addresses.
      { source: '/career-schools/career-and-workplace-readiness', destination: readiness, permanent: true },
      { source: '/pathways/career-and-workplace-readiness', destination: readiness, permanent: true },
      { source: '/career-fields/career-and-workplace-readiness', destination: readiness, permanent: true },

      // Index pages.
      { source: '/pathways', destination: '/career-fields', permanent: true },
      { source: '/career-schools', destination: '/career-fields', permanent: true },

      // Detail pages — both old addresses now land on the merged page.
      { source: '/career-schools/:slug', destination: '/pathways/:slug', permanent: true },
      { source: '/career-fields/:slug', destination: '/pathways/:slug', permanent: true },
    ];
  },
};

export default nextConfig;
