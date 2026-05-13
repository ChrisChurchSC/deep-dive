import styles from './ProofBar.module.css'
import Reveal from '../primitives/Reveal'
import { homepage } from '../../data/homepage'

export default function ProofBar() {
  const stats = homepage.proofStats ?? []
  return (
    <section className={styles.section}>
      <div className="shell">
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <Reveal key={i} delay={i + 1} as="div" className={styles.stat}>
              <div className={styles.value}>{s.value}</div>
              <div className={styles.label}>{s.label}</div>
              <div className={styles.note}>{s.note}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
