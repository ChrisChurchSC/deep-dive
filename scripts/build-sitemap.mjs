// Generate sitemap.xml from the Sanity snapshot.
// Runs at build time, writes to public/sitemap.xml (which is then copied into dist/).

import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SNAPSHOT  = path.resolve(__dirname, '../src/data/_sanity.json')
const OUT_PATH  = path.resolve(__dirname, '../public/sitemap.xml')
const SITE_URL  = 'https://deepdivefilms.com'

const snap = JSON.parse(await fs.readFile(SNAPSHOT, 'utf-8'))

// Core static routes — keep in sync with src/App.jsx routes.
const staticRoutes = [
  { path: '/',         priority: '1.0', changefreq: 'weekly' },
  { path: '/work',     priority: '0.9', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/process',  priority: '0.7', changefreq: 'monthly' },
  { path: '/about',    priority: '0.7', changefreq: 'monthly' },
  { path: '/journal',  priority: '0.8', changefreq: 'weekly' },
  { path: '/contact',  priority: '0.6', changefreq: 'monthly' },
]

const projectRoutes = (snap.projects ?? [])
  .filter((p) => p.slug)
  .map((p) => ({ path: `/work/${p.slug}`, priority: '0.7', changefreq: 'monthly' }))

const articleRoutes = (snap.articles ?? [])
  .filter((a) => a.slug)
  .map((a) => ({ path: `/journal/${a.slug}`, priority: '0.6', changefreq: 'monthly', lastmod: a.date }))

const serviceRoutes = Object.keys(snap.serviceDetails ?? {}).map((slug) => ({
  path: `/services/${slug}`, priority: '0.7', changefreq: 'monthly',
}))

const all = [...staticRoutes, ...projectRoutes, ...serviceRoutes, ...articleRoutes]

const urls = all
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    ${r.lastmod ? `<lastmod>${r.lastmod}</lastmod>\n    ` : ''}<changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

await fs.writeFile(OUT_PATH, xml)
console.log(`  ✓ wrote sitemap.xml — ${all.length} routes`)
