// Writes a static HTML file for every page in every language, so search engines and slow phones get
// the content before JavaScript loads. React then hydrates it. Runs after the client and SSR builds.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const SITE = 'https://teki.ge'
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
const { render, langs, pages } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function page(lang, url, meta, alternates) {
  const full = meta.title ? `${meta.title} — Teki.GE` : 'Teki.GE'
  const head = [
    `<title>${esc(full)}</title>`,
    `<meta name="description" content="${esc(meta.description)}">`,
    `<meta property="og:title" content="${esc(full)}">`,
    `<meta property="og:description" content="${esc(meta.description)}">`,
    `<meta property="og:locale" content="${lang.locale}">`,
    alternates && `<meta property="og:url" content="${SITE}${url}">`,
    alternates && `<link rel="canonical" href="${SITE}${url}">`,
    ...(alternates ?? []),
  ].filter(Boolean).join('\n')
  return template
    .replace('<html lang="ka">', `<html lang="${lang.code}">`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', render(url))
}

const urls = []
for (const pg of pages) {
  // Tell search engines which pages are translations of each other; Georgian is the default.
  const alternates = [
    ...langs.map((l) => `<link rel="alternate" hreflang="${l.code}" href="${SITE}${l.prefix}${pg.path}">`),
    `<link rel="alternate" hreflang="x-default" href="${SITE}${pg.path}">`,
  ]
  for (const l of langs) {
    const url = l.prefix + pg.path
    const dir = path.join(dist, url)
    fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(path.join(dir, 'index.html'), page(l, url, l.meta[pg.key], alternates))
    urls.push(url)
  }
}
console.log(`prerendered ${urls.length} pages:`, urls.join(' '))

// GitHub Pages serves 404.html for unknown paths.
const ka = langs[0]
fs.writeFileSync(path.join(dist, '404.html'), page(ka, '/404', ka.meta.notFound, null))
fs.writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n')}
</urlset>
`)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
