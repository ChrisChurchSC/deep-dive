import styles from './MarketDataBar.module.css'
import SectionRule from '../shared/SectionRule'

const stats = [
  { value: '131%',  label: 'more likely to buy after educational content', source: 'Conductor / Cornell' },
  { value: '89%',   label: 'of B2B decision-makers say thought leadership influences purchases', source: 'Edelman-LinkedIn' },
  { value: '55%',   label: 'average view-through rate on Deep Dive productions', source: 'SurvivorNet series' },
  { value: '47%',   label: 'of total ad sales lift driven by creative quality alone', source: 'Nielsen' },
]

export default function MarketDataBar() {
  return (
    <section className={styles.section}>
      <SectionRule counter="03" label="By the numbers" dark />
      <div className="shell">
        <div className={styles.grid}>
          {stats.map(s => (
            <div key={s.value} className={styles.item}>
              <div className={styles.value}>{s.value}</div>
              <div className={styles.label}>{s.label}</div>
              <div className={styles.source}>{s.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
