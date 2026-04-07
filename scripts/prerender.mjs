import fs   from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root      = path.resolve(__dirname, '..')
const distDir   = path.resolve(root, 'dist')
const ssrDir    = path.resolve(root, 'dist-ssr')

const routes = [
  '/',
  '/work',
  '/work/survivornet',
  '/work/google',
  '/work/vitalik-blockchain',
  '/work/harlem-capital',
  '/work/meta-creators',
  '/work/pfas-water',
  '/work/survivornet-doctors',
  '/work/ethereum-foundation',
  '/work/google-dei',
  '/work/harlem-capital-portfolio',
  '/work/cancer-clinical-trials',
  '/work/defi-explained',
  '/services',
  '/services/brand-people',
  '/services/customer-community',
  '/services/industry-platform',
  '/process',
  '/about',
  '/contact',
  '/journal',
  '/journal/why-educational-content-outperforms-branded-advertising',
  '/journal/the-view-through-rate-that-changed-how-we-think-about-video',
  '/journal/the-difference-between-a-testimonial-and-a-trust-film',
  '/journal/what-documentary-filmmaking-taught-us-about-b2b-content',
  '/journal/how-to-brief-a-video-production-that-wont-disappoint-you',
  '/journal/episodic-vs-single-film-which-format-is-right-for-your-brand',
  '/privacy',
]

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
const { render } = await import(path.join(ssrDir, 'entry-server.js'))

let rendered = 0
let skipped  = 0

for (const url of routes) {
  try {
    const { html: appHtml, helmet } = render(url)

    const headTags = helmet
      ? [
          helmet.title?.toString()  ?? '',
          helmet.meta?.toString()   ?? '',
          helmet.link?.toString()   ?? '',
          helmet.script?.toString() ?? '',
        ].join('\n    ').trim()
      : ''

    const page = template
      .replace('<!--app-head-->', headTags)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

    const outPath = url === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, url.slice(1), 'index.html')

    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, page)
    rendered++
    console.log(`  ✓ ${url}`)
  } catch (err) {
    skipped++
    console.warn(`  ⚠ ${url} — skipped (${err.message})`)
  }
}

fs.rmSync(ssrDir, { recursive: true, force: true })
console.log(`\n  ${rendered} pages prerendered${skipped ? `, ${skipped} skipped` : ''}.`)
