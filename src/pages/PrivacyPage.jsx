import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import styles from './PrivacyPage.module.css'

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How Deep Dive Films collects, uses, and protects your information."
        canonical="/privacy"
        noIndex={true}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How Deep Dive Films collects, uses, and protects your information."
      />

      <section className={styles.body}>
        <div className="shell">
          <div className={styles.inner}>

            <div className={styles.meta}>
              Last updated: October 2025
            </div>

            <div className={styles.section}>
              <h2 className={styles.heading}>What we collect</h2>
              <p>When you contact us through our website, we collect the information you provide: your name, email address, company, and the details of your project inquiry. We do not collect any information beyond what you voluntarily provide.</p>
              <p>We use standard analytics tools (Google Analytics) to understand how visitors use our site. This data is anonymous and aggregated — we cannot identify individual visitors from it.</p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.heading}>How we use it</h2>
              <p>Information you submit through our contact form is used solely to respond to your inquiry and manage any resulting project relationship. We do not sell, rent, or share your personal information with third parties.</p>
              <p>If you subscribe to our newsletter (The Brief), we use your email address to send that newsletter. You can unsubscribe at any time via the link in each email.</p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.heading}>Cookies</h2>
              <p>Our website uses cookies for analytics purposes only (Google Analytics). These cookies do not contain personally identifiable information. You can disable cookies in your browser settings, though this may affect the functionality of some site features.</p>
              <p>We use UTM parameters to understand which marketing channels drive inquiries. This information is collected anonymously and used only to improve our marketing effectiveness.</p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.heading}>Data retention</h2>
              <p>We retain project inquiry data for the duration of any business relationship and for a period of three years thereafter. If you would like your data removed, contact us at the address below.</p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.heading}>Contact</h2>
              <p>For privacy-related questions or requests, contact us at <a href="mailto:hello@deepdivefilms.com" className={styles.link}>hello@deepdivefilms.com</a>.</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
