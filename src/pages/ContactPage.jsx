import SEO from '../components/global/SEO'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import ContactForm from '../components/shared/ContactForm'
import SectionLabel from '../components/primitives/SectionLabel'
import styles from './ContactPage.module.css'
import { contactPage } from '../data/contactPage'

function useUTMCapture() {
  const location = useLocation()
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    utmKeys.forEach(k => {
      const val = params.get(k)
      if (val) sessionStorage.setItem(k, val)
    })
  }, [location.search])
}

export default function ContactPage() {
  useUTMCapture()
  const reasons = contactPage.reasons ?? []

  return (
    <>
      <SEO
        title="Start a Project"
        description="Tell us what you're trying to say — we'll tell you if there's a film in it. Deep Dive responds within 48 hours."
        canonical="/contact"
        noIndex={false}
      />
      <PageHero
        eyebrow={contactPage.heroEyebrow}
        title={contactPage.heroTitle}
        description={contactPage.heroDescription}
      />

      <section className={styles.body}>
        <div className="shell">
          <div className={styles.grid}>

            {/* Left: context */}
            <div className={styles.left}>
              <SectionLabel>{contactPage.reasonsLabel}</SectionLabel>
              <div className={styles.reasons}>
                {reasons.map((r, i) => (
                  <div key={i} className={styles.reason}>
                    <span className={styles.reasonIcon}>{r.icon}</span>
                    <div>
                      <div className={styles.reasonTitle}>{r.title}</div>
                      <p className={styles.reasonBody}>{r.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.turnaround}>
                <div className={styles.turnaroundLabel}>{contactPage.responseTimeLabel}</div>
                <div className={styles.turnaroundVal}>{contactPage.responseTimeValue}</div>
                <p className={styles.turnaroundNote}>{contactPage.responseTimeNote}</p>
              </div>
            </div>

            {/* Right: form */}
            <div className={styles.right}>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
