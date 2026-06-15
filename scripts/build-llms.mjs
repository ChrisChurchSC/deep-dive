// Generate public/llms.txt — a concise, LLM-friendly map of the site
// (see llmstxt.org). Built from the Sanity snapshot + landing page data so it
// stays in sync. Runs at build time alongside the sitemap.

import fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SNAPSHOT  = path.resolve(__dirname, '../src/data/_sanity.json')
const OUT_PATH  = path.resolve(__dirname, '../public/llms.txt')
const SITE_URL  = 'https://deep-dive.studio'

const snap = JSON.parse(await fs.readFile(SNAPSHOT, 'utf-8'))
const {landingPages, landingPageSlugs} = await import(new URL('../src/data/landingPages.js', import.meta.url))

// Collapse whitespace and cap length so each line stays a one-liner.
const oneLine = (s, max = 160) => {
  const t = String(s ?? '').replace(/\s+/g, ' ').trim()
  return t.length > max ? t.slice(0, max - 1).trimEnd() + '…' : t
}

const ss = snap.siteSettings ?? {}
const blurb =
  ss.siteDescription ||
  'Brooklyn-based, Emmy-winning branded edutainment studio. We make documentary films that teach your audience something real and build trust in the brand behind them.'

const lines = []
lines.push('# Deep Dive')
lines.push('')
lines.push(`> ${oneLine(blurb, 240)}`)
lines.push('')
lines.push(
  'Deep Dive makes branded edutainment: video content that genuinely teaches an audience while building the brand behind it. Documentary craft, brand outcomes. Based in Brooklyn, NY.',
)
lines.push('')

// Core pages
lines.push('## Pages')
lines.push(`- [Work](${SITE_URL}/work): Case studies and films across brand, customer, and platform work.`)
lines.push(`- [Services](${SITE_URL}/services): What we make and when to use each format.`)
lines.push(`- [Process](${SITE_URL}/process): The five-stage production framework, start to delivery.`)
lines.push(`- [About](${SITE_URL}/about): Who we are and how we work.`)
lines.push(`- [Journal](${SITE_URL}/journal): Edutainment strategy, case studies, and film craft.`)
lines.push(`- [Contact](${SITE_URL}/contact): Start a project.`)
lines.push('')

// Services
const services = Object.entries(snap.serviceDetails ?? {})
if (services.length) {
  lines.push('## Services')
  for (const [slug, s] of services) {
    lines.push(`- [${s.name}](${SITE_URL}/services/${slug}): ${oneLine(s.tagline || s.description)}`)
  }
  lines.push('')
}

// Work / case studies
const projects = (snap.projects ?? []).filter(p => p.slug)
if (projects.length) {
  lines.push('## Work (case studies)')
  for (const p of projects) {
    const title = [p.client, p.title].filter(Boolean).join(' — ')
    lines.push(`- [${title}](${SITE_URL}/work/${p.slug}): ${oneLine(p.description || p.format)}`)
  }
  lines.push('')
}

// AEO landing pages — question + direct answer is high-value LLM context
const lps = (landingPageSlugs ?? []).filter(s => landingPages[s])
if (lps.length) {
  lines.push('## Answers')
  for (const slug of lps) {
    const p = landingPages[slug]
    lines.push(`- [${p.question}](${SITE_URL}/lp/${slug}): ${oneLine(p.answer)}`)
  }
  lines.push('')
}

// Journal
const articles = (snap.articles ?? []).filter(a => a.slug)
if (articles.length) {
  lines.push('## Journal')
  for (const a of articles) {
    lines.push(`- [${a.title}](${SITE_URL}/journal/${a.slug}): ${oneLine(a.excerpt)}`)
  }
  lines.push('')
}

lines.push('## Contact')
lines.push(`- Start a project: ${SITE_URL}/contact`)
if (ss.contactEmail) lines.push(`- Email: ${ss.contactEmail}`)
lines.push('')

await fs.writeFile(OUT_PATH, lines.join('\n'))
console.log(`  ✓ wrote llms.txt — ${services.length} services, ${projects.length} projects, ${lps.length} answers, ${articles.length} articles`)
