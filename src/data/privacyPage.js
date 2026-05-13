import snap from './_sanity.json'

const fallback = {
  heroEyebrow: 'Legal',
  heroTitle: 'Privacy Policy',
  heroDescription: 'How Deep Dive collects, uses, and protects your information.',
  lastUpdated: 'Last updated: October 2025',
  sections: [
    { heading: 'What we collect', paragraphs: [
      'When you contact us through our website, we collect the information you provide: your name, email address, company, and the details of your project inquiry. We do not collect any information beyond what you voluntarily provide.',
      'We use standard analytics tools (Google Analytics) to understand how visitors use our site. This data is anonymous and aggregated — we cannot identify individual visitors from it.',
    ]},
    { heading: 'How we use it', paragraphs: [
      'Information you submit through our contact form is used solely to respond to your inquiry and manage any resulting project relationship. We do not sell, rent, or share your personal information with third parties.',
      'If you subscribe to our newsletter (The Brief), we use your email address to send that newsletter. You can unsubscribe at any time via the link in each email.',
    ]},
    { heading: 'Cookies', paragraphs: [
      'Our website uses cookies for analytics purposes only (Google Analytics). These cookies do not contain personally identifiable information. You can disable cookies in your browser settings, though this may affect the functionality of some site features.',
      'We use UTM parameters to understand which marketing channels drive inquiries. This information is collected anonymously and used only to improve our marketing effectiveness.',
    ]},
    { heading: 'Data retention', paragraphs: [
      'We retain project inquiry data for the duration of any business relationship and for a period of three years thereafter. If you would like your data removed, contact us at the address below.',
    ]},
    { heading: 'Contact', paragraphs: [
      'For privacy-related questions or requests, contact us at hello@deepdivefilms.com.',
    ]},
  ],
}

export const privacyPage = snap?.privacyPage ? { ...fallback, ...snap.privacyPage } : fallback
