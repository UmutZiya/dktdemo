import fs from 'node:fs';
import assert from 'node:assert/strict';

const origin = process.env.PREVIEW_URL || 'http://localhost:3000';
const manifest = JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8'));
const routes = Object.keys(manifest.routes).filter(route => !route.startsWith('/_'));
const links = new Set();
const assets = new Set();
for (const route of routes) {
  const response = await fetch(new URL(route, origin));
  assert.equal(response.status, 200, `${route}: HTTP ${response.status}`);
  if (!response.headers.get('content-type')?.includes('text/html')) continue;
  const html = await response.text();
  assert.match(html, /<html[^>]*lang="tr"/, `${route}: Turkish document language`);
  assert.match(html, /<title>[^<]+<\/title>/, `${route}: missing title`);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${route}: exactly one h1`);
  assert(!html.includes('https://instagram.com'), `${route}: placeholder social link`);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
    const pathname = match[1].split('?')[0];
    if (pathname.startsWith('/_next/') || pathname.endsWith('.svg')) assets.add(pathname);
    else links.add(pathname);
  }
  for (const match of html.matchAll(/<(?:input|select|textarea)\b[^>]*id="([^"]+)"/g)) {
    assert(html.includes(`for="${match[1]}"`), `${route}: missing label for ${match[1]}`);
  }
  console.log(`PASS ${route}`);
}
for (const pathname of new Set([...links, ...assets])) {
  const response = await fetch(new URL(pathname, origin));
  assert.equal(response.status, 200, `${pathname}: broken link or asset (${response.status})`);
}
const missing = await fetch(new URL('/olmayan-sayfa-kontrol/', origin));
assert.equal(missing.status, 404, 'Unknown routes should return 404');
console.log(`Verified ${routes.length} prerendered routes, ${links.size} internal links, ${assets.size} assets, field labels and the 404 response.`);
