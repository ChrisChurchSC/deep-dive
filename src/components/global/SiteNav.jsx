import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../primitives/Button'
import styles from './SiteNav.module.css'
import wordmark from '../../assets/dd-wordmark.svg'
import icon from '../../assets/dd-icon.svg'
import MobileNav from './MobileNav'

const links = [
  { label: 'Services', to: '/services' },
  { label: 'Work',     to: '/work' },
  { label: 'Process',  to: '/process' },
  { label: 'About',    to: '/about' },
  { label: 'Journal',  to: '/journal' },
]

export default function SiteNav() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.brand}>
            <img src={icon} height={30} alt="" className={styles.icon} aria-hidden="true" />
            <img src={wordmark} height={20} alt="Deep Dive" className={styles.wordmark} />
          </Link>

          <nav className={styles.links} aria-label="Primary">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`${styles.link} ${pathname.startsWith(l.to) ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Button href="/contact" variant="primary">Contact</Button>
          </div>

          <button
            className={styles.hamburger}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
          >
            <span className={`${styles.bar} ${mobileOpen ? styles.open : ''}`} />
            <span className={`${styles.bar} ${mobileOpen ? styles.open : ''}`} />
          </button>
        </div>
      </header>

      <MobileNav links={links} isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
