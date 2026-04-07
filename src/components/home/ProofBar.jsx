import styles from './ProofBar.module.css'
import Reveal from '../primitives/Reveal'

const stats = [
  {
    value: '55%',
    label: 'Average view-through rate',
    note: 'vs 2% industry benchmark',
  },
  {
    value: '131%',
    label: 'Purchase lift from educational content',
    note: 'Conductor / Cornell University',
  },
  {
    value: '89%',
    label: 'of B2B buyers say thought leadership builds trust',
    note: 'Edelman-LinkedIn B2B Study',
  },
]

export default function ProofBar() {
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
