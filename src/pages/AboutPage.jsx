import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import CTASection from '../components/home/CTASection'
import SectionLabel from '../components/primitives/SectionLabel'
import styles from './AboutPage.module.css'

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
    outlet: 'HBO',
    title: 'Featured documentary production',
    year: '2022',
    href: '#',
  },
  {
    outlet: 'Digiday',
    title: 'How branded documentary is reshaping content marketing',
    year: '2023',
    href: '#',
  },
  {
    outlet: 'AdAge',
    title: 'The studios bringing documentary craft to brand storytelling',
    year: '2023',
    href: '#',
  },
  {
    outlet: 'Fast Company',
    title: 'Why edutainment is the most trusted format in content',
    year: '2024',
    href: '#',
  },
]

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Deep Dive Films is a Brooklyn-based documentary studio. Our work has aired on HBO. Now we make films for brands."
        canonical="/about"
      />
      <PageHero
        eyebrow="About"
        title="Documentary filmmakers. HBO alumni."
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
                Deep Dive was founded by documentary filmmakers whose work has screened on HBO. We know how to find a true story, earn access, and make something people actually finish watching.
              </p>
              <p className={styles.body}>
                Brands started asking us to do the same thing for them. When you make brand content the way you make documentary — with real subjects and genuine craft — it performs like nothing else. That's the studio we built.
              </p>
            </div>
          </div>
          <div className={styles.introVideo}>
            <video
              src="/videos/about-intro.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className={styles.introVideoEl}
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
