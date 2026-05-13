import snap from './_sanity.json'

const fallback = {
  heroEyebrow: 'Process',
  heroTitle: 'Five stages. Zero guesswork.',
  heroDescription:
    'Every Deep Dive production follows the same rigorous framework — from story discovery to final delivery.',
  stages: [
    { num: '01', name: 'Discover', duration: '1–2 weeks', client: 'Brief, brand docs, access to stakeholders', deepDive: 'Story mining, audience research, narrative framework, editorial plan', output: 'Story treatment + production brief' },
    { num: '02', name: 'Pre-Production', duration: '1–3 weeks', client: 'Approvals, talent coordination, logistics support', deepDive: 'Scripting, location scouting, crew assembly, talent prep, shot list', output: 'Shoot-ready package' },
    { num: '03', name: 'Production', duration: '1–5 days on-site', client: 'Point of contact on shoot days', deepDive: 'Direction, cinematography, interview facilitation, B-roll capture', output: 'Rushes + selects' },
    { num: '04', name: 'Post-Production', duration: '2–4 weeks', client: 'Two rounds of feedback', deepDive: 'Narrative edit, color grade, sound design, motion graphics, platform cuts', output: 'Master file + all deliverables' },
    { num: '05', name: 'Delivery', duration: '1 week', client: 'Platform access, rollout decisions', deepDive: 'Format exports, distribution strategy, performance tracking setup', output: 'Launch-ready asset package' },
  ],
  faqLabel: 'FAQ',
  faqs: [
    { question: 'How long does a typical production take?', answer: 'A single mini-film runs 6–10 weeks start to finish: 1–2 weeks of story discovery, 1–3 weeks pre-production, 1–5 shoot days, and 2–4 weeks in post. Series are phased across 3–6 months depending on episode count. Rush timelines are available.' },
    { question: 'How involved does our team need to be?', answer: "Your involvement is highest at the start (brief and stakeholder access) and at feedback milestones. We handle all production logistics — you're reviewing, not managing. Expect 4–6 touchpoints across the process." },
    { question: 'What do you need from us to get started?', answer: "A brief (we can help you build one), access to the people or stories at the center of the film, any existing brand guidelines or reference content, and a named point of contact for approvals. That's it." },
    { question: 'Do you handle distribution?', answer: 'Yes — delivery includes platform-optimized cuts (LinkedIn, YouTube, web, paid social) and a distribution strategy brief. For clients who want an ongoing content engine, we can also manage editorial calendars and channel strategy.' },
    { question: 'How many rounds of revisions do we get?', answer: "Two structured feedback rounds in post-production. We front-load alignment in discovery and pre-production so by the time you see a cut, it's close. Revisions beyond two rounds are scoped separately." },
    { question: 'Do you work with clients outside New York?', answer: "Yes. We're Brooklyn-based but produce globally. If the story is in Antarctica, that's where we go. Remote-first communication with on-site production wherever the story lives. Travel and logistics are factored into every quote." },
    { question: 'Can we own the footage?', answer: "Final deliverables and master files are licensed to you for perpetual use across owned channels. Raw footage rights and extended licensing (broadcast, paid media) are available to add. We'll cover this in the contract." },
  ],
}

export const processPage = snap?.processPage ? { ...fallback, ...snap.processPage } : fallback
