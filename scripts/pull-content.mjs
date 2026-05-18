// Pull Sanity content at build/dev time and write a static snapshot
// that the data shims in src/data/* read synchronously.
//
// If Sanity is unreachable or the dataset is empty, the existing snapshot
// (if any) is kept so dev never breaks.

import {createClient} from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SNAPSHOT_PATH = path.resolve(__dirname, '../src/data/_sanity.json')

const client = createClient({
  projectId: 'n3plha5r',
  dataset: 'production',
  apiVersion: '2024-10-01',
  useCdn: false,
})

const QUERY = `{
  "projects": *[_type == "project"] | order(coalesce(order, 999) asc) {
    "slug": slug.current,
    client, title, category, format, industry, portrait,
    "thumbnail": thumbnail.asset->url,
    "videoPreview": coalesce(videoPreview.asset->url, videoPreview),
    "videoUrl": coalesce(videoUrl.asset->url, videoUrl),
    embedUrl,
    videos[]{label, "url": coalesce(url.asset->url, url), "thumb": thumb.asset->url},
    "stills": stills[].asset->url,
    description, challenge, result,
    stat, statLabel
  },
  "articles": *[_type == "article"] | order(date desc) {
    "slug": slug.current,
    title, excerpt, topic, date, readTime, featured, body,
    "relatedProjects": relatedProjects[]->slug.current
  },
  "services": *[_type == "serviceCategory"] | order(coalesce(order, 999) asc) {
    "slug": slug.current,
    name, category, tagline, description, examples,
    whatItIs, whenToUse[]{trigger, body}
  },
  "siteSettings": *[_id == "siteSettings"][0] {
    heroLine, heroReelUrl, siteName, siteDescription, contactEmail, social,
    cta {
      heading, body, primaryLabel, primaryHref, secondaryLabel, secondaryHref,
      "illustration": illustration.asset->url
    },
    nav { links[]{label, to}, ctaLabel, ctaHref },
    footer { links[]{label, to}, tagline, newsletterLabel, newsletterSub, newsletterButton, copyrightCity, socials }
  },
  "homepage": *[_id == "homepage"][0] {
    categoryLabel, categoryWord, categoryPhonetic, categoryPos,
    categoryDefinition, categoryUsage,
    "categoryVideo": coalesce(categoryVideo.asset->url, categoryVideo),
    filmStripLabel, filmStripHeading,
    marketDataLabel, marketDataStats[]{value, label, source},
    servicesLabel, servicesEyebrow, servicesHeading, servicesSub,
    servicesCards[]{slug, name, tagline, formats, "video": coalesce(video.asset->url, video), "poster": poster.asset->url},
    proofStats[]{value, label, note}
  },
  "aboutPage": *[_id == "aboutPage"][0] {
    heroEyebrow, heroTitle, heroDescription,
    introLabel, introBody, "introImage": introImage.asset->url,
    valuesLabel, values[]{label, desc},
    btsLabel, "btsImages": btsImages[].asset->url,
    pressLabel, press[]{outlet, title, year, href}
  },
  "processPage": *[_id == "processPage"][0] {
    heroEyebrow, heroTitle, heroDescription,
    stages[]{num, name, duration, client, deepDive, output},
    faqLabel, faqs[]{question, answer}
  },
  "contactPage": *[_id == "contactPage"][0] {
    heroEyebrow, heroTitle, heroDescription,
    reasonsLabel, reasons[]{icon, title, body},
    responseTimeLabel, responseTimeValue, responseTimeNote
  },
  "servicesPage": *[_id == "servicesPage"][0] {
    heroEyebrow, heroTitle, heroDescription,
    categories[]{slug, name, tagline, description, examples, video, "thumbnail": thumbnail.asset->url},
    repurposeLabel, repurposeTitle, repurposeSub,
    repurposeAssets[]{num, label, desc},
    "repurposeImages": repurposeImages[].asset->url,
    formatsLabel, formatsTitle,
    formats[]{name, duration, description, useCases},
    comparisonLabel, comparisonTitle, comparisonSub,
    clientsLabel, clients[]{name, "logo": logo.asset->url, scale}
  },
  "journalPage": *[_id == "journalPage"][0] {
    heroEyebrow, heroTitle, heroDescription,
    newsletterTitle, newsletterBody, newsletterButton, newsletterThanks
  },
  "privacyPage": *[_id == "privacyPage"][0] {
    heroEyebrow, heroTitle, heroDescription, lastUpdated,
    sections[]{heading, paragraphs}
  }
}`

const empty = (data) =>
  !data ||
  (data.projects?.length === 0 &&
    data.articles?.length === 0 &&
    data.services?.length === 0 &&
    !data.siteSettings)

try {
  console.log('  ↓ pulling content from Sanity (project n3plha5r)…')
  const data = await client.fetch(QUERY)

  if (empty(data)) {
    console.warn('  ⚠ Sanity returned no content — keeping existing snapshot.')
    process.exit(0)
  }

  // Build articleBodies map for the existing ArticleBody renderer.
  const articleBodies = Object.fromEntries(
    (data.articles ?? []).map((a) => [a.slug, a.body ?? ''])
  )

  // Strip body out of the article list (kept separately, matches current shape).
  const articles = (data.articles ?? []).map(({body, ...rest}) => rest)

  // Service details as keyed object (matches current serviceDetails export).
  const serviceDetails = Object.fromEntries(
    (data.services ?? []).map((s) => [s.slug, s])
  )

  const topics = ['All', ...new Set((articles ?? []).map((a) => a.topic).filter(Boolean))]

  const snapshot = {
    projects: data.projects ?? [],
    articles,
    articleBodies,
    serviceDetails,
    siteSettings: data.siteSettings ?? null,
    homepage: data.homepage ?? null,
    aboutPage: data.aboutPage ?? null,
    processPage: data.processPage ?? null,
    contactPage: data.contactPage ?? null,
    servicesPage: data.servicesPage ?? null,
    journalPage: data.journalPage ?? null,
    privacyPage: data.privacyPage ?? null,
    topics,
    _pulledAt: new Date().toISOString(),
  }

  fs.mkdirSync(path.dirname(SNAPSHOT_PATH), {recursive: true})
  fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(snapshot, null, 2))
  console.log(
    `  ✓ wrote snapshot: ${snapshot.projects.length} projects, ${snapshot.articles.length} articles, ${Object.keys(snapshot.serviceDetails).length} services`
  )
} catch (err) {
  console.warn(`  ⚠ pull-content failed: ${err.message}`)
  console.warn('  Continuing with whatever snapshot exists on disk.')
  // Don't fail the build if Sanity is unreachable — the existing snapshot
  // (or fallback in the data shims) keeps the site working.
  process.exit(0)
}
