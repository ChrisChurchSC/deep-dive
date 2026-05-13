import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import styles from './PrivacyPage.module.css'
import { privacyPage } from '../data/privacyPage'

export default function PrivacyPage() {
  const sections = privacyPage.sections ?? []

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How Deep Dive collects, uses, and protects your information."
        canonical="/privacy"
        noIndex={true}
      />
      <PageHero
        eyebrow={privacyPage.heroEyebrow}
        title={privacyPage.heroTitle}
        description={privacyPage.heroDescription}
      />

      <section className={styles.body}>
        <div className="shell">
          <div className={styles.inner}>

            <div className={styles.meta}>{privacyPage.lastUpdated}</div>

            {sections.map((s, i) => (
              <div key={i} className={styles.section}>
                <h2 className={styles.heading}>{s.heading}</h2>
                {(s.paragraphs ?? []).map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}
