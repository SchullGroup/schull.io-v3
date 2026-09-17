/**
 * Rewrites the static export in out/ so it works when served from a sub-path
 * (the Artifact host serves relative paths only — a leading "/" is not served).
 *
 *  - every asset + link reference becomes relative to the page's own depth
 *  - page links point at index.html explicitly rather than a directory
 *  - Next's client-side router is bypassed for internal links, so navigation is
 *    a plain document load instead of an RSC fetch that would 404
 *
 * Only touches out/. The normal build and dev server are untouched.
 */
import fs from 'node:fs';
import path from 'node:path';

const OUT = 'out';

const walk = (dir, acc = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else acc.push(p);
  }
  return acc;
};

// The artifact host reserves published paths beginning with "_", so Next's
// _next/ asset directory has to be renamed (and every reference to it rewritten).
const ASSET_DIR = 'nx';
if (fs.existsSync(path.join(OUT, '_next'))) {
  fs.renameSync(path.join(OUT, '_next'), path.join(OUT, ASSET_DIR));
}

const files = walk(OUT);

// RSC payloads are only used by the client router, which we are disabling.
let removed = 0;
for (const f of files) {
  if (f.endsWith('.txt')) {
    fs.unlinkSync(f);
    removed++;
  }
}

// Forces a real document load for internal links. Runs in the capture phase so
// it beats React's delegated click handler.
const HARD_NAV = `
<script>
(function () {
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) === '#' || /^[a-z]+:/i.test(href) || a.target === '_blank') return;
    e.preventDefault();
    e.stopPropagation();
    window.location.href = a.href;
  }, true);
})();
</script>`;

let htmlCount = 0;
for (const f of walk(OUT)) {
  const rel = path.relative(OUT, f).split(path.sep);
  const depth = rel.length - 1; // directories above the file
  const up = depth === 0 ? './' : '../'.repeat(depth);

  if (f.endsWith('.html')) {
    let html = fs.readFileSync(f, 'utf8');

    // page links: "/about/" -> "../about/index.html".
    // "/" -> the artifact root itself ("./" or "../../"), because the host
    // reserves index.html for the root page and will not serve that path.
    html = html.replace(/(href=")\/([^"#?]*)"/g, (m, pre, p) => {
      if (p.startsWith('_next/')) return `${pre}${up}${ASSET_DIR}/${p.slice(6)}"`;
      if (p.startsWith('img/')) return `${pre}${up}${p}"`;
      const clean = p.replace(/\/$/, '');
      return clean === '' ? `${pre}${up}"` : `${pre}${up}${clean}/index.html"`;
    });

    // assets referenced from any attribute
    html = html.replace(/(["'(])\/_next\//g, (m, q) => `${q}${up}${ASSET_DIR}/`);
    html = html.replace(/(["'(])\/img\//g, (m, q) => `${q}${up}img/`);

    html = html.replace('</body>', `${HARD_NAV}\n</body>`);
    fs.writeFileSync(f, html);
    htmlCount++;
  }

  if (f.endsWith('.css')) {
    // css sits at out/nx/static/css/x.css; fonts at out/nx/static/media/
    let css = fs.readFileSync(f, 'utf8');
    css = css.replace(/url\(\/_next\//g, 'url(../');
    fs.writeFileSync(f, css);
  }

  if (f.endsWith('.js')) {
    let js = fs.readFileSync(f, 'utf8');
    // the webpack public path is baked in as "/_next/"; make it relative and
    // point at the renamed asset directory
    js = js.replace(/"\/_next\/"/g, `"${ASSET_DIR}/"`);
    js = js.replace(/"\/_next\//g, `"${ASSET_DIR}/`);
    fs.writeFileSync(f, js);
  }
}

const remaining = walk(OUT).length;
console.log(`html rewritten: ${htmlCount}`);
console.log(`rsc payloads removed: ${removed}`);
console.log(`files to publish: ${remaining}`);
