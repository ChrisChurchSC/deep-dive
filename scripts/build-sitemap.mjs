// Generate sitemap.xml from the Sanity snapshot.
// Runs at build time, writes to public/sitemap.xml (which is then copied into dist/).
// Includes image + video sitemap extensions for case-study pages.

import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SNAPSHOT  = path.resolve(__dirname, '../src/data/_sanity.json')
const OUT_PATH  = path.resolve(__dirname, '../public/sitemap.xml')
const SITE_URL  = 'https://deep-dive.studio'

const snap = JSON.parse(await fs.readFile(SNAPSHOT, 'utf-8'))
const {landingPageSlugs} = await import(new URL('../src/data/landingPages.js', import.meta.url))

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

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

// Build <video:video> entries — one per playable clip with a thumbnail + content URL.
function videoEntries(p) {
  const clips = p.videos?.length
    ? p.videos
    : p.videoUrl
      ? [{ label: p.title, url: p.videoUrl, thumb: p.thumbnail }]
      : []
  return clips
    .map((c) => {
      const thumb = c.thumb ?? p.thumbnail
      const content = c.url ?? null
      if (!thumb || !content) return null
      const title = c.label && c.label !== p.title ? `${p.title} — ${c.label}` : p.title
      return { thumb, title, description: p.description || `${p.client} — ${p.format}`, content, publishDate: p.publishDate }
    })
    .filter(Boolean)
}

const projectRoutes = (snap.projects ?? [])
  .filter((p) => p.slug)
  .map((p) => ({
    path: `/work/${p.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
    images: [p.thumbnail, ...(p.videos ?? []).map((v) => v.thumb)].filter(Boolean),
    videos: videoEntries(p),
  }))

const articleRoutes = (snap.articles ?? [])
  .filter((a) => a.slug)
  .map((a) => ({ path: `/journal/${a.slug}`, priority: '0.6', changefreq: 'monthly', lastmod: a.date }))

const serviceRoutes = Object.keys(snap.serviceDetails ?? {}).map((slug) => ({
  path: `/services/${slug}`, priority: '0.7', changefreq: 'monthly',
}))

const landingRoutes = (landingPageSlugs ?? []).map((slug) => ({
  path: `/lp/${slug}`, priority: '0.8', changefreq: 'monthly',
}))

const all = [...staticRoutes, ...projectRoutes, ...serviceRoutes, ...articleRoutes, ...landingRoutes]

const urls = all
  .map((r) => {
    const images = (r.images ?? [])
      .map((loc) => `    <image:image><image:loc>${esc(loc)}</image:loc></image:image>`)
      .join('\n')
    const videos = (r.videos ?? [])
      .map(
        (v) => `    <video:video>
      <video:thumbnail_loc>${esc(v.thumb)}</video:thumbnail_loc>
      <video:title>${esc(v.title)}</video:title>
      <video:description>${esc(v.description)}</video:description>
      <video:content_loc>${esc(v.content)}</video:content_loc>${v.publishDate ? `\n      <video:publication_date>${esc(v.publishDate)}</video:publication_date>` : ''}
    </video:video>`,
      )
      .join('\n')
    const extra = [images, videos].filter(Boolean).join('\n')
    return `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    ${r.lastmod ? `<lastmod>${r.lastmod}</lastmod>\n    ` : ''}<changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>${extra ? '\n' + extra : ''}
  </url>`
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${urls}
</urlset>
`

await fs.writeFile(OUT_PATH, xml)
const videoCount = projectRoutes.reduce((n, r) => n + r.videos.length, 0)
console.log(`  ✓ wrote sitemap.xml — ${all.length} routes, ${videoCount} videos`)
