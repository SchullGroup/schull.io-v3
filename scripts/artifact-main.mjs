/**
 * The Artifact host wraps the page passed as file_path in its own
 * <!doctype><html><head></head><body> skeleton, so the root page cannot be a
 * full document. This produces out/_artifact-main.html: the same page as
 * body-level content.
 *
 * next/font puts its CSS custom properties on classes applied to <html>, so
 * those classes are re-applied at runtime or the display font silently falls
 * back.
 */
import fs from 'node:fs';

const src = fs.readFileSync('out/index.html', 'utf8');

const htmlClass = (src.match(/<html[^>]*class="([^"]*)"/) || [, ''])[1];
const bodyClass = (src.match(/<body[^>]*class="([^"]*)"/) || [, ''])[1];
const lang = (src.match(/<html[^>]*lang="([^"]*)"/) || [, 'en-GB'])[1];

const head = (src.match(/<head[^>]*>([\s\S]*?)<\/head>/) || [, ''])[1];
const body = (src.match(/<body[^>]*>([\s\S]*?)<\/body>/) || [, ''])[1];

// <title> and <meta charset> belong to the host's skeleton; keep the title so
// the artifact is named correctly, drop the charset/viewport it already sets.
const headKept = head
  .replace(/<meta charset="[^"]*"\s*\/?>/gi, '')
  .replace(/<meta name="viewport"[^>]*>/gi, '');

const restoreClasses = `<script>
(function () {
  var h = ${JSON.stringify(htmlClass)};
  var b = ${JSON.stringify(bodyClass)};
  if (h) document.documentElement.className += ' ' + h;
  if (b) document.body.className += ' ' + b;
  document.documentElement.lang = ${JSON.stringify(lang)};
})();
</script>`;

fs.writeFileSync('out/_artifact-main.html', `${restoreClasses}\n${headKept}\n${body}\n`);

console.log('html class:', htmlClass || '(none)');
console.log('body class:', bodyClass || '(none)');
console.log('wrote out/_artifact-main.html');
