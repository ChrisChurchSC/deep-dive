import snap from './_sanity.json'

const fallback = {
  heroEyebrow: 'Journal',
  heroTitle: 'On the craft of making people care.',
  heroDescription: 'Strategy, storytelling, and the business case for content that actually gets watched.',
  newsletterTitle: 'Get The Brief.',
  newsletterBody: 'Monthly — strategy, new work, and one insight worth remembering.',
  newsletterButton: 'Subscribe',
  newsletterThanks: "You're in. First issue lands soon.",
}

export const journalPage = snap?.journalPage ? { ...fallback, ...snap.journalPage } : fallback
