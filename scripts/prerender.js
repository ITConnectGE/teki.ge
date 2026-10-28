// Writes a static HTML file for every page, so search engines and slow phones get the content
// before JavaScript loads. React then hydrates it. Runs after the client and SSR builds.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')
const { render, pages } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function page(url, title, description, canonical = true) {
  const full = title ? `${title} — Teki.GE` : 'Teki.GE'
  const head = [
    `<title>${esc(full)}</title>`,
    `<meta name="description" content="${esc(description)}">`,
    `<meta property="og:title" content="${esc(full)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    canonical && `<meta property="og:url" content="https://teki.ge${url}">`,
    canonical && `<link rel="canonical" href="https://teki.ge${url}">`,
  ].filter(Boolean).join('\n')
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', render(url))
}

for (const p of pages) {
  const dir = path.join(dist, p.path)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), page(p.path, p.title, p.description))
  console.log('prerendered', p.path)
}
// GitHub Pages serves 404.html for unknown paths.
fs.writeFileSync(path.join(dist, '404.html'), page('/404', 'გვერდი ვერ მოიძებნა', 'Teki.GE — გვერდი ვერ მოიძებნა.', false))
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
