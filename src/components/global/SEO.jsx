import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Deep Dive'
const SITE_URL  = 'https://deepdivefilms.com'
const OG_IMAGE  = `${SITE_URL}/og-default.jpg`

// Set this once you have a GSC property verified
const GSC_VERIFICATION = ''

export default function SEO({
  title,
  description,
  canonical,
  ogImage   = OG_IMAGE,
  ogType    = 'website',
  noIndex   = false,
  jsonLd,
  breadcrumbs,  // [{ name, url }] — auto-builds BreadcrumbList schema
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Branded Edutainment Video Production`

  const resolvedCanonical = canonical ? `${SITE_URL}${canonical}` : null

  // Auto-build BreadcrumbList schema from breadcrumbs prop
  const breadcrumbSchema = breadcrumbs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          ...breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: b.name,
            item: `${SITE_URL}${b.url}`,
          })),
        ],
      }
    : null

  return (
    <Helmet>
      {/* Core */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}

      {/* Robots */}
      {noIndex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      }

      {/* Google Search Console verification */}
      {GSC_VERIFICATION && (
        <meta name="google-site-verification" content={GSC_VERIFICATION} />
      )}

      {resolvedCanonical && <link rel="canonical" href={resolvedCanonical} />}

      {/* Open Graph */}
      <meta property="og:type"        content={ogType} />
      <meta property="og:title"       content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image"       content={ogImage} />
      {resolvedCanonical && <meta property="og:url" content={resolvedCanonical} />}
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:locale"      content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content="@deepdivefilms" />
      <meta name="twitter:title"       content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image"       content={ogImage} />

      {/* JSON-LD — page-specific */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}

      {/* JSON-LD — breadcrumbs (auto-generated) */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  )
}
