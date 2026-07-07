import snap from './_sanity.json'

const fallback = {
  heroEyebrow: 'Services',
  heroTitle: 'Three categories. One format.',
  heroDescription:
    'Branded edutainment built around what your audience wants to know, and what you need them to believe.',
  categories: [
    { slug: 'brand-people', name: 'Brand & People', tagline: 'The brand made visible. The people behind it made human.', description: 'Founder origin stories, culture documents, leadership profiles: the brand brought to life through the people who built it. When audiences understand why a company exists, they trust it differently.', examples: ['Founder origin stories', 'Culture & hiring films', 'Executive profiles', '"Why We Exist" films'], video: '/previews/brooklyn-brewery.mp4', thumbnail: '/thumbnails/brooklyn-brewery.jpg' },
    { slug: 'customer-community', name: 'Customer & Community', tagline: 'Real people, real results. Social proof that feels earned, not staged.', description: 'Long-form customer success stories, transformation narratives, and community films that build genuine trust. Not "testimonials," but full stories with stakes, struggle, and resolution.', examples: ['Customer success stories', '"Day in the Life" films', 'Before/after narratives', 'Community impact docs'], video: '/previews/customer-community.mp4', thumbnail: null },
    { slug: 'industry-platform', name: 'Industry & Platform', tagline: 'Authority-building content that makes your brand the authority.', description: 'Expert interview series, industry trend documentaries, and episodic content that positions your brand as the definitive voice in your space. The kind of content people cite.', examples: ['Expert interview series', 'Industry trend docs', 'Episodic docu-series', 'Conference & event capture'], video: '/previews/industry-platform.mp4', thumbnail: null },
  ],
  repurposeLabel: 'One shoot. Many assets.',
  repurposeTitle: 'We capture everything.\nYou keep it all.',
  repurposeSub: 'Every production is built for maximum asset yield. One shoot produces a full suite: the hero film and everything that comes with it.',
  repurposeAssets: [
    { num: '01', label: 'Hero film', desc: 'The anchor piece, 2 to 12 minutes, built for owned channels and long-form distribution.' },
    { num: '02', label: 'Social cuts', desc: '15s, 30s, and 60s edits optimized for LinkedIn, Instagram, and paid social.' },
    { num: '03', label: 'Audiogram & quote cards', desc: 'Key moments pulled for static and motion assets across organic and paid.' },
    { num: '04', label: 'Interview transcripts', desc: 'Full transcripts for blog posts, newsletters, and SEO content.' },
    { num: '05', label: 'B-roll library', desc: 'Unedited footage passed to your team for future use: internal comms, events, decks.' },
    { num: '06', label: 'Sales enablement cuts', desc: 'Shorter proof-point edits designed for outbound sequences and pitch decks.' },
  ],
  repurposeImages: ['/bts/sadie_bts_092025-7.jpg', '/bts/yur08922.jpg'],
  formatsLabel: 'Formats',
  formatsTitle: 'What gets made.',
  formats: [
    { name: 'Mini-Film', duration: '3–7 min', description: 'The workhorse. Long enough to build genuine trust, short enough for digital distribution. One strong story, told with craft.', useCases: ['Customer success', 'Founder story', 'Product origin', 'Partnership narrative'] },
    { name: 'Documentary Series', duration: '3–8 episodes', description: 'Episodic content that builds an audience over time. Each episode stands alone; together they build a point of view your brand owns.', useCases: ['Industry series', 'Expert interview series', 'Community stories', 'Annual franchise'] },
    { name: 'Long-Form Doc', duration: '12–45 min', description: 'For the story that deserves full treatment. Cinematic craft, deep access, full arc. Designed for owned channels and event contexts.', useCases: ['Brand origin film', 'Impact documentary', 'Category-defining piece', 'Film festival submission'] },
    { name: 'Distribution Cuts', duration: '30 sec – 2 min', description: 'Every production includes cuts sized for how people actually consume content: platform-optimized, attention-aware.', useCases: ['Paid social', 'LinkedIn native', 'Website hero', 'Sales enablement'] },
  ],
  comparisonLabel: 'Why Deep Dive',
  comparisonTitle: 'The gap we fill.',
  comparisonSub: "Generic video agencies know marketing but can't film. Documentary filmmakers can film but don't know brands. We trained in both, and built a studio to bridge them.",
  clientsLabel: 'Selected clients',
  clients: [
    { name: 'Google', logo: '/logos/google.png', scale: 1.3 },
    { name: 'Walmart', logo: '/logos/walmart.png', scale: 1.45 },
    { name: 'YouTube', logo: '/logos/youtube.png', scale: 1.3 },
    { name: 'Barnes & Noble', logo: '/logos/barnes-noble.png', scale: 0.85 },
    { name: 'Brooklyn Brewery', logo: '/logos/brooklyn-brewery.svg', scale: 1.4 },
    { name: 'SurvivorNet', logo: '/logos/survivornet.png', scale: 0.75 },
    { name: 'SingleCare', logo: '/logos/singlecare.png', scale: 0.75 },
    { name: 'RTPI', logo: '/logos/rtpi.webp', scale: 1.15 },
  ],
}

export const servicesPage = snap?.servicesPage ? { ...fallback, ...snap.servicesPage } : fallback
