/**
 * EXPORT=1 produces a fully static `out/` build with no server, used for the
 * Artifact preview deploy. Normal `next build` / `next dev` are unaffected.
 */
const isExport = process.env.EXPORT === '1';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isExport ? { output: 'export', trailingSlash: true, images: { unoptimized: true } } : {}),
};

export default nextConfig;
