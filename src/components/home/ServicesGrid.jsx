import { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './ServicesGrid.module.css'
import SectionRule from '../shared/SectionRule'
import Reveal from '../primitives/Reveal'
import { homepage } from '../../data/homepage'

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

function renderMultiline(text) {
  return (text ?? '').split('\n').map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ))
}

export default function ServicesGrid() {
  const services = homepage.servicesCards ?? []
  return (
    <section className={styles.section}>
      <SectionRule counter="04" label={homepage.servicesLabel} />
      <div className="shell">
        <Reveal className={styles.header}>
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>{homepage.servicesEyebrow}</p>
            <h2 className={styles.heading}>{renderMultiline(homepage.servicesHeading)}</h2>
            <p className={styles.sub}>{homepage.servicesSub}</p>
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
