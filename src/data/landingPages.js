// AEO landing pages — one high-intent question per page, answered directly.
//
// This is a plain data module (zero imports) so the React app, the prerender
// script, and the sitemap builder can all read it. If these graduate to being
// editor-managed, mirror the snapshot+local pattern (snap.landingPages ?? here).
//
// Each page renders: H1 (question) + concise answer block + body sections +
// optional process steps (HowTo schema) + related work + FAQ (FAQPage schema) +
// related questions (internal cluster links) + CTA. See src/pages/LandingPage.jsx.
//
// Axes (per GSC validation plan in docs/aeo-landing-pages.md):
//   capability  — what Deep Dive does ("what is branded edutainment")
//   vertical    — industry-specific ("video for healthcare brands")
//   use-case    — outcome/problem ("video people actually finish")

export const landingPages = {
  'what-is-branded-edutainment': {
    axis: 'capability',
    category: 'Capability',
    question: 'What is branded edutainment?',
    answer:
      'Branded edutainment is video content that genuinely teaches your audience something useful while building trust in the brand behind it. It borrows the craft of documentary, the watchability of entertainment, and the intent of marketing, so people choose to watch it instead of skipping it.',
    seoDescription:
      'Branded edutainment is video that teaches your audience something real while building trust in your brand. Here is what it is, how it differs from explainer and brand films, and when to use it.',
    sections: [
      {
        heading: 'More than an explainer, more than a brand film',
        body: [
          'A traditional explainer tells people what you do. A brand film makes people feel something. Branded edutainment does both at once: it delivers real, substantive knowledge your audience wants, and the brand earns trust precisely because it taught them well rather than pitched them hard.',
          'The format works because it respects attention. When a video is genuinely worth watching, people finish it, share it, and remember who made it.',
        ],
      },
      {
        heading: 'Why it outperforms typical branded content',
        body: 'Most branded content is built to be seen. Edutainment is built to be finished. That distinction shows up in the numbers: our SurvivorNet documentary series held a 55% view-through rate against a 2% category benchmark, because the story was worth staying for.',
      },
    ],
    processLabel: 'How we make it',
    steps: [
      { label: 'Find the real story', body: 'We start from what your audience actually needs to understand, not what the brand wants to say. The teachable truth is the hook.' },
      { label: 'Build documentary craft', body: 'Real people, real stakes, real production values. Edutainment only works when the filmmaking is good enough to compete with entertainment.' },
      { label: 'Earn the trust', body: 'The brand shows up by being the one who taught you something, so the association is credibility rather than interruption.' },
    ],
    faqLabel: 'Common questions',
    faqs: [
      { question: 'How is branded edutainment different from an explainer video?', answer: 'An explainer summarizes what a product does. Branded edutainment teaches the audience something genuinely useful about their world, and the brand benefits from being the trusted source of that knowledge.' },
      { question: 'Does educational content actually drive business outcomes?', answer: 'Yes, when it is watchable. Trust and recall compound: audiences who finish a substantive film associate the brand with expertise, which is far stickier than ad recall. Our work has driven view-through rates many times the category average.' },
      { question: 'What kinds of brands is it right for?', answer: 'Any brand whose audience has something real to learn, common in healthcare, technology, finance, and platforms, where the product sits inside a topic people genuinely want to understand.' },
    ],
    relatedProjects: ['survivornet', 'google-language-ai'],
    related: ['videos-people-actually-finish', 'video-production-for-healthcare-brands'],
    ctaHeading: 'Have something worth teaching?',
    ctaBody: 'Tell us what your audience needs to understand. We will make them want to watch it.',
  },

  'videos-people-actually-finish': {
    axis: 'use-case',
    category: 'Outcome',
    question: 'How do you make brand videos people actually finish?',
    answer:
      'You make videos people finish by earning every second instead of assuming it. That means starting from a story the audience genuinely wants, using documentary craft to keep them in it, and resisting the urge to turn the film into a pitch. Completion is a craft outcome, not a media-spend outcome.',
    seoDescription:
      'Brand videos get skipped when they are built to be seen rather than finished. Here is how documentary craft drives completion, with real view-through numbers.',
    sections: [
      {
        heading: 'Completion is a craft problem, not a budget problem',
        body: [
          'Most brand videos lose viewers in the first ten seconds because they open with the brand instead of the story. Spending more on distribution just buys more people who skip.',
          'The fix is upstream: a film that is genuinely worth watching holds attention on its own merits. That is what we engineer for from the first conversation.',
        ],
      },
      {
        heading: 'What "worth watching" looks like in the numbers',
        body: 'For SurvivorNet we built a documentary series designed to be watched through the first commercial. It held a 55% view-through rate against a 2% industry benchmark, in a category where audiences rarely stop to listen.',
      },
    ],
    processLabel: 'How we engineer completion',
    steps: [
      { label: 'Open with the audience, not the brand', body: 'The first frames belong to a real human stake the viewer recognizes, so they lean in before they are asked for anything.' },
      { label: 'Sustain with documentary craft', body: 'Pacing, characters, and tension are built to carry the viewer through, the same tools that keep people watching entertainment.' },
      { label: 'Place the brand where it is earned', body: 'The brand lands once trust is established, so the association is gratitude rather than interruption.' },
    ],
    faqLabel: 'Common questions',
    faqs: [
      { question: 'Why do most brand videos get skipped?', answer: 'They are structured as ads: brand first, value later. Viewers decide in seconds whether a video is for them, and a brand-first open reads as something to skip.' },
      { question: 'Is view-through rate a vanity metric?', answer: 'No. Completion is the gate to every downstream effect: recall, trust, and action all depend on people actually watching. A finished film is the precondition, not the bonus.' },
      { question: 'Does this require a bigger budget?', answer: 'It requires better choices, not always bigger ones. The biggest gains come from story and structure decisions made before a camera rolls.' },
    ],
    relatedProjects: ['survivornet', 'google-language-ai'],
    related: ['what-is-branded-edutainment', 'video-production-for-healthcare-brands'],
    ctaHeading: 'Want videos people finish?',
    ctaBody: 'Tell us what you are trying to say. We will make it worth watching to the end.',
  },

  'video-production-for-healthcare-brands': {
    axis: 'vertical',
    category: 'Healthcare',
    question: 'How do healthcare brands make video people actually watch?',
    answer:
      'Healthcare video works when it treats the audience as people, not patients to be informed. The brands that win use real stories and documentary craft to make clinical material human, so audiences stay through content they would normally skip. The result is trust in a category where trust is the whole game.',
    seoDescription:
      'Healthcare video tends to feel clinical and gets skipped. Here is how documentary-grade edutainment makes health content human and watchable, with real engagement numbers.',
    sections: [
      {
        heading: 'The problem with most healthcare video',
        body: [
          'Healthcare content defaults to clinical: accurate, responsible, and almost impossible to finish. The audience needs the information but will not sit through the way it is usually told.',
          'The brands that break through translate clinical truth into human story without sacrificing accuracy. That is a filmmaking discipline, not a tone you add in post.',
        ],
      },
      {
        heading: 'Proof it works',
        body: 'For SurvivorNet, a leading cancer information platform, we built a documentary series around authentic patient stories. It earned a 55% view-through rate against a 2% category benchmark, with strong retention among an audience that does not typically stop to listen.',
      },
    ],
    processLabel: 'How we approach healthcare work',
    steps: [
      { label: 'Lead with the human', body: 'Real patients, clinicians, and caregivers carry the story, so the audience connects before the information lands.' },
      { label: 'Keep the medicine accurate', body: 'Documentary craft and clinical rigor are not in tension. We hold both, so the film is trustworthy and watchable.' },
      { label: 'Let the brand earn credibility', body: 'The platform shows up as the source that told a true, human story, which is the most durable kind of healthcare trust.' },
    ],
    faqLabel: 'Common questions',
    faqs: [
      { question: 'Can healthcare video be both accurate and watchable?', answer: 'Yes. Accuracy is a constraint, not the enemy of engagement. The craft is translating clinical truth into human story without distorting it.' },
      { question: 'What healthcare topics suit this format?', answer: 'Anything where the audience has something real to understand: patient education, condition awareness, treatment journeys, and platform or product stories that sit inside a health topic people care about.' },
      { question: 'How do you handle compliance and review?', answer: 'We build clinical and legal review into the process from the start, so the human story and the accuracy requirements are reconciled in the edit, not fought over after.' },
    ],
    relatedProjects: ['survivornet'],
    related: ['what-is-branded-edutainment', 'videos-people-actually-finish'],
    ctaHeading: 'Health content worth watching?',
    ctaBody: 'Tell us what your audience needs to understand about their health. We will make it human.',
  },
}

// Ordered slug list for prerender + sitemap (keeps output stable).
export const landingPageSlugs = Object.keys(landingPages)
