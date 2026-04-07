import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './SiteFooter.module.css'
import wordmark from '../../assets/dd-wordmark.svg'
import { subscribeToKlaviyo } from '../../hooks/useKlaviyoSubscribe'

const footerLinks = [
  { label: 'Work',     to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Process',  to: '/process' },
  { label: 'About',    to: '/about' },
  { label: 'Journal',  to: '/journal' },
  { label: 'Contact',  to: '/contact' },
  { label: 'Privacy',  to: '/privacy' },
]

export default function SiteFooter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    if (!email) return
    try {
      await subscribeToKlaviyo(email)
    } catch (_) {
      // Fail silently — still show success to avoid exposing errors
    }
    setSubmitted(true)
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Nav links */}
        <nav className={styles.links} aria-label="Footer">
          {footerLinks.map((l, i) => (
            <div key={l.to} className={styles.linkRow}>
              {i > 0 && <div className={styles.rule} />}
              <Link to={l.to} className={styles.link}>{l.label}</Link>
            </div>
          ))}
        </nav>

        {/* Middle row: brand + newsletter */}
        <div className={styles.mid}>
          <div className={styles.brand}>
            <img src={wordmark} height={20} alt="Deep Dive Films" className={styles.wordmark} />
            <p className={styles.tagline}>
              We don't just make videos people see.<br />
              We make videos people finish.
            </p>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/company/deep-dive-films" className={styles.social} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/deepdivefilms" className={styles.social} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <p className={styles.newsletterLabel}>The Deep Dive</p>
            <p className={styles.newsletterSub}>
              Edutainment strategy, case studies, and film craft — direct to your inbox.
            </p>
            {submitted ? (
              <p className={styles.thanks}>You're in. We'll be in touch.</p>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button type="submit" className={styles.submitBtn}>
                  Subscribe →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.copy}>© {new Date().getFullYear()} Deep Dive Films. Brooklyn, NY.</span>
          <a href="mailto:hello@deepdivefilms.com" className={styles.email}>
            hello@deepdivefilms.com
          </a>
        </div>

      </div>
    </footer>
  )
}
