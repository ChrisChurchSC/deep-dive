import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import CTASection from '../components/home/CTASection'
import SectionLabel from '../components/primitives/SectionLabel'
import BTSStrip from '../components/shared/BTSStrip'
import styles from './AboutPage.module.css'

const btsImages = [
  '/bts/yur08884.jpg',
  '/bts/sadie_bts_092025-7.jpg',
  '/bts/l1000855.jpg',
  '/bts/img_6350.jpg',
  '/bts/yur08912.jpg',
  '/bts/sadie_bts_092025-8.jpg',
  '/bts/l1000857.jpg',
  '/bts/img-2987.jpg',
  '/bts/yur08914.jpg',
  '/bts/sadie_bts_092025-12.jpg',
  '/bts/l1000860.jpg',
  '/bts/img-4903.jpg',
  '/bts/yur08922.jpg',
  '/bts/img_2114.jpg',
]

const values = [
  {
    label: 'Story first',
    desc: 'We start with what the audience wants to know — not what the brand wants to say. The brand earns its place by being the one telling a story worth watching.',
  },
  {
    label: 'Documentary craft',
    desc: 'Real access. Real subjects. Real stakes. We make content the same way we make documentary film — because that\'s the only way it actually works.',
  },
  {
    label: 'Education as trust',
    desc: 'When you teach someone something real, they remember who taught them. That\'s not a content strategy. It\'s the oldest trust mechanic in the world.',
  },
  {
    label: 'Finish rates over views',
    desc: 'We don\'t optimize for impressions. We make things people finish. A video someone watches to the end is worth more than a thousand three-second scrolls.',
  },
]

const press = [
  {
    outlet: 'Hollywood Reporter',
    title: "Harper Steele Boards Deep Dive Berlin-Premiering Doc 'What Will I Become?' as Executive Producer (Exclusive)",
    year: '2026',
    href: '#',
  },
  {
    outlet: 'Axios',
    title: "From Oberlin to CIFF: Deep Dive's 'Big Bass' hooks a personal story",
    year: '2026',
    href: '#',
  },
  {
    outlet: 'Variety',
    title: "2025 Palm Springs International ShortFest Winners: Deep Dive's 'Big Bass' Wins Jury Prize",
    year: '2025',
    href: '#',
  },
  {
    outlet: 'Fast Company',
    title: 'Why edutainment is the most trusted format in content',
    year: '2024',
    href: '#',
  },
  {
    outlet: 'Digiday',
    title: 'Why so many brands are making documentaries',
    year: '2023',
    href: '#',
  },
  {
    outlet: 'Fireboys',
    title: "Praise for Deep Dive's HBO Doc 'Fireboys'",
    year: '2022',
    href: '#',
  },
]

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Deep Dive is a Brooklyn-based branded edutainment studio. Emmy-winning documentary filmmakers who now make films for brands."
        canonical="/about"
      />
      <PageHero
        eyebrow="About"
        title="Documentary filmmakers. Emmy-winning team."
        description="We've spent years making films about real people and complex ideas. Now we make them for brands."
      />

      {/* Intro */}
      <section className={styles.intro}>
        <div className="shell">
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <SectionLabel>Who we are</SectionLabel>
            </div>
            <div className={styles.introRight}>
              <p className={styles.body}>
                Deep Dive was founded by documentary filmmakers with Emmy-winning credentials. We know how to find a true story, earn access, and make something people actually finish watching.
              </p>
              <p className={styles.body}>
                Brands started asking us to do the same thing for them. When you make brand content the way you make documentary, with real subjects and genuine craft, it performs like nothing else. That's the studio we built.
              </p>
            </div>
          </div>
          <div className={styles.introVideo}>
            <img
              src="/about/team.png"
              alt="The Deep Dive team"
              className={styles.introVideoEl}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className="shell">
          <div className={styles.valuesHead}>
            <SectionLabel>What we believe</SectionLabel>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueCard}>
                <span className={styles.valueNum}>0{i + 1}</span>
                <h3 className={styles.valueLabel}>{v.label}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BTSStrip images={btsImages} label="On set — behind the scenes" />

      {/* Press */}
      <section className={styles.pressSection}>
        <div className="shell">
          <div className={styles.pressHead}>
            <SectionLabel>In the press</SectionLabel>
          </div>
          <div className={styles.pressList}>
            {press.map((p, i) => (
              <a key={i} href={p.href} className={styles.pressRow} target="_blank" rel="noopener noreferrer">
                <span className={styles.pressOutlet}>{p.outlet}</span>
                <span className={styles.pressTitle}>{p.title}</span>
                <span className={styles.pressYear}>{p.year} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
