import { Link } from 'react-router-dom'
import styles from './CTASection.module.css'
import Button from '../primitives/Button'
import Reveal from '../primitives/Reveal'
import { siteSettings } from '../../data/siteSettings'

export default function CTASection() {
  const cta = siteSettings.cta ?? {}
  return (
    <section className={styles.section}>
      <div className="shell">
        <div className={styles.inner}>
          {cta.illustration && (
            <img
              src={cta.illustration}
              alt=""
              className={styles.illustration}
              aria-hidden="true"
            />
          )}
          <div className={styles.content}>
            <Reveal><h2 className={styles.heading}>{cta.heading}</h2></Reveal>
            <Reveal delay={1}><p className={styles.body}>{cta.body}</p></Reveal>
            <Reveal delay={2}><div className={styles.actions}>
              {cta.primaryLabel && (
                <Button href={cta.primaryHref || '#'} variant="cream">{cta.primaryLabel}</Button>
              )}
              {cta.secondaryLabel && (
                <Link to={cta.secondaryHref || '#'} className={styles.seeWork}>{cta.secondaryLabel}</Link>
              )}
            </div></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
