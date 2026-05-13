import snap from './_sanity.json'

const fallback = {
  heroEyebrow: 'About',
  heroTitle: 'Documentary filmmakers. Emmy-winning team.',
  heroDescription:
    "We've spent years making films about real people and complex ideas. Now we make them for brands.",
  introLabel: 'Who we are',
  introBody: [
    'Deep Dive was founded by documentary filmmakers with Emmy-winning credentials. We know how to find a true story, earn access, and make something people actually finish watching.',
    "Brands started asking us to do the same thing for them. When you make brand content the way you make documentary, with real subjects and genuine craft, it performs like nothing else. That's the studio we built.",
  ],
  introImage: '/about/team.png',
  valuesLabel: 'What we believe',
  values: [
    { label: 'Story first', desc: 'We start with what the audience wants to know — not what the brand wants to say. The brand earns its place by being the one telling a story worth watching.' },
    { label: 'Documentary craft', desc: "Real access. Real subjects. Real stakes. We make content the same way we make documentary film — because that's the only way it actually works." },
    { label: 'Education as trust', desc: "When you teach someone something real, they remember who taught them. That's not a content strategy. It's the oldest trust mechanic in the world." },
    { label: 'Finish rates over views', desc: "We don't optimize for impressions. We make things people finish. A video someone watches to the end is worth more than a thousand three-second scrolls." },
  ],
  btsLabel: 'On set — behind the scenes',
  btsImages: [
    '/bts/yur08884.jpg', '/bts/sadie_bts_092025-7.jpg', '/bts/l1000855.jpg', '/bts/img_6350.jpg',
    '/bts/yur08912.jpg', '/bts/sadie_bts_092025-8.jpg', '/bts/l1000857.jpg', '/bts/img-2987.jpg',
    '/bts/yur08914.jpg', '/bts/sadie_bts_092025-12.jpg', '/bts/l1000860.jpg', '/bts/img-4903.jpg',
    '/bts/yur08922.jpg', '/bts/img_2114.jpg',
  ],
  pressLabel: 'In the press',
  press: [
    { outlet: 'Hollywood Reporter', title: "Harper Steele Boards Deep Dive Berlin-Premiering Doc 'What Will I Become?' as Executive Producer (Exclusive)", year: '2026', href: '#' },
    { outlet: 'Axios', title: "From Oberlin to CIFF: Deep Dive's 'Big Bass' hooks a personal story", year: '2026', href: '#' },
    { outlet: 'Variety', title: "2025 Palm Springs International ShortFest Winners: Deep Dive's 'Big Bass' Wins Jury Prize", year: '2025', href: '#' },
    { outlet: 'Fast Company', title: 'Why edutainment is the most trusted format in content', year: '2024', href: '#' },
    { outlet: 'Digiday', title: 'Why so many brands are making documentaries', year: '2023', href: '#' },
    { outlet: 'Fireboys', title: "Praise for Deep Dive's HBO Doc 'Fireboys'", year: '2022', href: '#' },
  ],
}

export const aboutPage = snap?.aboutPage ? { ...fallback, ...snap.aboutPage } : fallback
