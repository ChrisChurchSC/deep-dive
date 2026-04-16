import { projects } from './projects'

export const serviceDetails = {
  'brand-people': {
    slug: 'brand-people',
    category: 'Brand & People',
    name: 'Brand & People',
    tagline: 'The brand made visible. The people behind it made human.',
    description: 'Founder origin stories, culture films, leadership profiles — content that builds brand trust through the people who created it. When audiences see the humans behind a company, they trust it differently.',
    examples: ['Founder origin stories', 'Culture & hiring films', 'Executive profiles', '"Why We Exist" films'],
    whatItIs: {
      heading: 'What it is.',
      body: "Brand & People films are not about your product or service. They're about why your company exists — the founding moment, the conviction behind it, the people who showed up to make it real. These are the films that make a brand feel like something worth rooting for.",
      secondary: "They work because audiences have infinite tolerance for a genuine story and zero tolerance for a pitch. A founder origin done right earns more trust than any campaign.",
    },
    whenToUse: [
      { trigger: 'Hiring & culture', body: 'Show what it actually feels like to work there. The best talent filter for culture before applying.' },
      { trigger: 'New market entry', body: 'A new audience needs to understand who you are before they can trust what you do.' },
      { trigger: 'Rebrand or pivot', body: 'When what you stand for has changed, a film communicates it faster than copy.' },
      { trigger: 'Post-funding visibility', body: "You've just raised — the world is watching. This is how you define the narrative." },
    ],
    relatedProjects: projects.filter(p => p.category === 'Brand & People' && p.videoUrl),
  },

  'customer-community': {
    slug: 'customer-community',
    category: 'Customer & Community',
    name: 'Customer & Community',
    tagline: 'Real people, real results. Social proof that feels earned, not staged.',
    description: "Long-form customer success stories, transformation narratives, and community films that build genuine trust — not testimonials, but full stories with stakes, struggle, and resolution. The kind of proof that changes minds.",
    examples: ['Customer success stories', '"Day in the Life" films', 'Before/after narratives', 'Community impact docs'],
    whatItIs: {
      heading: 'What it is.',
      body: "Customer & Community films are the most trusted format in B2B marketing — because they're not about you. They're about what happens to people after they work with you. The transformation, the result, the unexpected outcome. Told in the subject's own words.",
      secondary: "SurvivorNet ran this format across a series of patient stories — real people, real doctors, real stakes. The result was extraordinary engagement in a category where clinical content typically gets skipped. That gap is what authentic storytelling does.",
    },
    whenToUse: [
      { trigger: 'Mid-funnel conviction', body: 'A prospect has done their research. A real customer story is what moves them from "interested" to "ready".' },
      { trigger: 'Category credibility', body: 'Show a customer solving the exact problem your category solves. Let them make the case you\'re not allowed to make.' },
      { trigger: 'Community building', body: "When your customers' identity is part of the product — document that identity. Give it a story." },
      { trigger: 'Post-launch proof', body: "You've shipped. Now show it working in the real world, with real people, and real numbers." },
    ],
    relatedProjects: projects.filter(p => p.category === 'Customer & Community' && p.videoUrl),
  },

  'industry-platform': {
    slug: 'industry-platform',
    category: 'Industry & Platform',
    name: 'Industry & Platform',
    tagline: 'Authority-building content that makes your brand the definitive voice.',
    description: 'Expert interview series, industry trend documentaries, and episodic content that positions your brand as the reference point in your space. The kind of content people cite, share, and come back to.',
    examples: ['Expert interview series', 'Industry trend docs', 'Episodic docu-series', 'Conference & event capture'],
    whatItIs: {
      heading: 'What it is.',
      body: "Industry & Platform films are about the space you operate in — not your product. You bring in the experts, the data, the competing perspectives. You produce the definitive guide to something your audience genuinely wants to understand.",
      secondary: "The brand benefit is authority. When your logo is on the most insightful thing in your category, you own that category intellectually. Arbitrum's blockchain deep-dive did exactly this — the film was widely cited as the clearest explanation of what that technology was actually for.",
    },
    whenToUse: [
      { trigger: 'Category creation', body: 'If your category doesn\'t fully exist yet, you need to define it. A series does that faster than a whitepaper.' },
      { trigger: 'Thought leadership at scale', body: "Your executives have opinions the market needs to hear. A series gives those opinions staying power." },
      { trigger: 'Conference or event amplification', body: 'Turn a single event into a content franchise. Capture the conversations that happen around it.' },
      { trigger: 'Enterprise pipeline', body: "Procurement committees consume content. An industry series pre-builds trust before the first sales call." },
    ],
    relatedProjects: projects.filter(p => p.category === 'Industry & Platform' && p.videoUrl),
  },
}
