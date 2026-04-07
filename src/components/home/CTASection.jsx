import { Link } from 'react-router-dom'
import styles from './CTASection.module.css'
import Button from '../primitives/Button'
import Reveal from '../primitives/Reveal'

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className="shell">
        <div className={styles.inner}>
          <div className={styles.content}>
            <Reveal><h2 className={styles.heading}>
              Are you not edutained!?
            </h2></Reveal>
            <Reveal delay={1}><p className={styles.body}>
              Tell us what your audience needs to know. We'll make them want to watch it.
            </p></Reveal>
            <Reveal delay={2}><div className={styles.actions}>
              <Button href="/contact" variant="cream">Start a project</Button>
              <Link to="/work" className={styles.seeWork}>See the work first →</Link>
            </div></Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
