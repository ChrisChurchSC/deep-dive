import snap from './_sanity.json'

const fallback = {
  categoryLabel: 'The format',
  categoryWord: 'Branded Edutainment',
  categoryPhonetic: '/ˌej·oo·ˈteɪn·mənt/',
  categoryPos: 'n.',
  categoryDefinition:
    'Content that teaches an audience something they genuinely want to know, told compellingly and made by a brand. Not a product demo. Not a brand film. Something more useful than either.',
  categoryUsage:
    '"Consumers are 131% more likely to buy after consuming educational content."',
  categoryVideo: '/videos/edutainment.mp4',
  categoryPoster: '/thumbnails/edutainment.jpg',

  filmStripLabel: 'Selected work',
  filmStripHeading: 'Films that educate.\nBrands that earn trust.',

  marketDataLabel: 'By the numbers',
  marketDataStats: [
    { value: '131%', label: 'more likely to buy after educational content', source: 'Conductor / Cornell' },
    { value: '89%', label: 'of B2B decision-makers say thought leadership influences purchases', source: 'Edelman-LinkedIn' },
    { value: '55%', label: 'average view-through rate on Deep Dive productions', source: 'SurvivorNet series' },
    { value: '47%', label: 'of total ad sales lift driven by creative quality alone', source: 'Nielsen' },
  ],

  servicesLabel: 'What we make',
  servicesEyebrow: 'What we make',
  servicesHeading: 'Real people. Real expertise.\nReal trust.',
  servicesSub:
    'Three formats, all built around what your audience wants to know — and what you need them to believe.',
  servicesCards: [
    { slug: 'brand-people', name: 'Brand & People', tagline: 'The brand made visible. The people behind it made human.', formats: ['Founder origin stories', 'Culture & hiring films', 'Executive profiles', '"Why We Exist" films'], video: '/previews/brooklyn-brewery.mp4', poster: '/thumbnails/brooklyn-brewery.jpg' },
    { slug: 'customer-community', name: 'Customer & Community', tagline: 'Real people, real results. Social proof that feels earned, not staged.', formats: ['Customer success stories', 'Community spotlights', 'Patient & user journeys', 'Testimonial series'], video: '/previews/customer-community.mp4', poster: null },
    { slug: 'industry-platform', name: 'Industry & Platform', tagline: 'Authority-building content that makes your brand the authority.', formats: ['Explainer & education films', 'Thought leadership series', 'Product deep-dives', 'Conference & event content'], video: '/previews/industry-platform.mp4', poster: null },
  ],

  proofStats: [
    { value: '131%', label: 'more likely to buy after consuming educational content', note: 'Conductor / Cornell University' },
    { value: '89%', label: 'of B2B buyers say thought leadership builds trust', note: 'Edelman-LinkedIn B2B Study' },
    { value: '47%', label: 'of total ad sales lift is driven by creative quality alone', note: 'Nielsen' },
  ],
}

export const homepage = snap?.homepage ? { ...fallback, ...snap.homepage } : fallback
