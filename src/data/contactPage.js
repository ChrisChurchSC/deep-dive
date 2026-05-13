import snap from './_sanity.json'

const fallback = {
  heroEyebrow: 'Contact',
  heroTitle: "Tell us what you're trying to say.",
  heroDescription: "We'll tell you if there's a film in it.",
  reasonsLabel: 'Who this is for',
  reasons: [
    { icon: '◎', title: 'You have a story that needs a film.', body: 'A customer transformation, a founder journey, an industry truth — something real that your audience would actually watch.' },
    { icon: '◎', title: 'You want trust, not just traffic.', body: "You're not looking for views. You're looking for the kind of content that changes how people think about your brand." },
    { icon: '◎', title: "You're done with generic video.", body: 'You\'ve seen what "branded content" usually looks like. You want something that earns attention rather than interrupting it.' },
  ],
  responseTimeLabel: 'Response time',
  responseTimeValue: 'Within 24 hours',
  responseTimeNote: 'Every inquiry gets a real reply, not an auto-responder.',
}

export const contactPage = snap?.contactPage ? { ...fallback, ...snap.contactPage } : fallback
