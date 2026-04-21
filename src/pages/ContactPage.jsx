import SEO from '../components/global/SEO'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import ContactForm from '../components/shared/ContactForm'
import SectionLabel from '../components/primitives/SectionLabel'
import styles from './ContactPage.module.css'

// Capture UTM params into sessionStorage for form attribution
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

const reasons = [
  {
    icon: '◎',
    title: 'You have a story that needs a film.',
    body: 'A customer transformation, a founder journey, an industry truth — something real that your audience would actually watch.',
  },
  {
    icon: '◎',
    title: 'You want trust, not just traffic.',
    body: "You're not looking for views. You're looking for the kind of content that changes how people think about your brand.",
  },
  {
    icon: '◎',
    title: "You're done with generic video.",
    body: 'You\'ve seen what "branded content" usually looks like. You want something that earns attention rather than interrupting it.',
  },
]

export default function ContactPage() {
  useUTMCapture()

  return (
    <>
      <SEO
        title="Start a Project"
        description="Tell us what you're trying to say — we'll tell you if there's a film in it. Deep Dive responds within 48 hours."
        canonical="/contact"
        noIndex={false}
      />
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're trying to say."
        description="We'll tell you if there's a film in it."
      />

      <section className={styles.body}>
        <div className="shell">
          <div className={styles.grid}>

            {/* Left: context */}
            <div className={styles.left}>
              <SectionLabel>Who this is for</SectionLabel>
              <div className={styles.reasons}>
                {reasons.map(r => (
                  <div key={r.title} className={styles.reason}>
                    <span className={styles.reasonIcon}>{r.icon}</span>
                    <div>
                      <div className={styles.reasonTitle}>{r.title}</div>
                      <p className={styles.reasonBody}>{r.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.turnaround}>
                <div className={styles.turnaroundLabel}>Response time</div>
                <div className={styles.turnaroundVal}>Within 24 hours</div>
                <p className={styles.turnaroundNote}>
                  Every inquiry gets a real reply, not an auto-responder.
                </p>
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
