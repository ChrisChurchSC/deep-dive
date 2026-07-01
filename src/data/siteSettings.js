import snap from './_sanity.json'

const fallback = {
  heroLine: 'Educate your audience.',
  heroReelUrl: '/hero.mp4',
  siteName: 'Deep Dive',
  siteDescription:
    'Brooklyn-based branded edutainment studio. We make documentary films that educate your audience and build your brand.',
  contactEmail: 'contact@deep-dive.studio',
  nav: {
    links: [
      { label: 'Services', to: '/services' },
      { label: 'Work', to: '/work' },
      { label: 'Process', to: '/process' },
      { label: 'About', to: '/about' },
      { label: 'Journal', to: '/journal' },
    ],
    ctaLabel: 'Contact',
    ctaHref: '/contact',
  },
  footer: {
    links: [
      { label: 'Work', to: '/work' },
      { label: 'Services', to: '/services' },
      { label: 'Process', to: '/process' },
      { label: 'About', to: '/about' },
      { label: 'Journal', to: '/journal' },
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy', to: '/privacy' },
    ],
    tagline: 'Are you not Edutained!?',
    newsletterLabel: 'The Deep Dive',
    newsletterSub: 'Edutainment strategy, case studies, and film craft — direct to your inbox.',
    newsletterButton: 'Subscribe →',
    copyrightCity: 'Brooklyn, NY.',
    socials: {
      linkedin: 'https://www.linkedin.com/company/deep-dive-films',
      instagram: 'https://www.instagram.com/deepdivefilms',
      vimeo: 'https://vimeo.com/deepdivefilms',
    },
  },
  cta: {
    heading: 'Ready to make something people actually finish?',
    body: "Tell us what your audience needs to know. We'll make them want to watch it.",
    primaryLabel: 'Start a project',
    primaryHref: '/contact',
    secondaryLabel: 'See the work first →',
    secondaryHref: '/work',
    illustration: '/cta-illustration.png',
  },
}

function merge(base, override) {
  if (!override) return base
  const out = { ...base }
  for (const [k, v] of Object.entries(override)) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      out[k] = merge(base[k] ?? {}, v)
    } else if (v !== null && v !== undefined) {
      out[k] = v
    }
  }
  return out
}

export const siteSettings = merge(fallback, snap?.siteSettings)
