import { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicesGrid.module.css'
import SectionRule from '../shared/SectionRule'
import Reveal from '../primitives/Reveal'

const services = [
  {
    slug: 'brand-people',
    name: 'Brand & People',
    tagline: 'The brand made visible. The people behind it made human.',
    formats: ['Founder origin stories', 'Culture & hiring films', 'Executive profiles', '"Why We Exist" films'],
    video: null,
    poster: null,
  },
  {
    slug: 'customer-community',
    name: 'Customer & Community',
    tagline: 'Real people, real results. Social proof that feels earned, not staged.',
    formats: ['Customer success stories', 'Community spotlights', 'Patient & user journeys', 'Testimonial series'],
    video: null,
    poster: null,
  },
  {
    slug: 'industry-platform',
    name: 'Industry & Platform',
    tagline: 'Authority-building content that makes your brand the authority.',
    formats: ['Explainer & education films', 'Thought leadership series', 'Product deep-dives', 'Conference & event content'],
    video: null,
    poster: null,
  },
]

function ServiceCard({ s }) {
  const videoRef = useRef(null)

  const handleEnter = () => {
    if (videoRef.current) videoRef.current.play().catch(() => {})
  }
  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      className={styles.card}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className={styles.cardTop}>
        <h3 className={styles.name}>{s.name}</h3>
        <p className={styles.tagline}>{s.tagline}</p>
        <ul className={styles.formats}>
          {s.formats.map(f => <li key={f} className={styles.format}>{f}</li>)}
        </ul>
        <Link to={`/services#${s.slug}`} className={styles.link}>
          Learn more <span aria-hidden>→</span>
        </Link>
      </div>
      <div className={styles.visual}>
        {s.video ? (
          <video
            ref={videoRef}
            src={s.video}
            poster={s.poster || undefined}
            muted
            loop
            playsInline
            className={styles.asset}
          />
        ) : s.poster ? (
          <img src={s.poster} alt={s.name} className={styles.asset} loading="lazy" />
        ) : (
          <div className={`${styles.placeholder} ${styles[`ph_${s.slug.replace(/-/g, '_')}`]}`} />
        )}
      </div>
    </div>
  )
}

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <SectionRule counter="04" label="What we make" />
      <div className="shell">
        <Reveal className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>What we make</p>
            <h2 className={styles.heading}>
              Real people. Real expertise.<br />Real trust.
            </h2>
            <p className={styles.sub}>
              Three formats, all built around what your audience wants to know — and what you need them to believe.
            </p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i + 1}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
