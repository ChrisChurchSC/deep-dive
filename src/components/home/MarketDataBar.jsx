import styles from './MarketDataBar.module.css'
import SectionRule from '../shared/SectionRule'
import { homepage } from '../../data/homepage'

export default function MarketDataBar() {
  const stats = homepage.marketDataStats ?? []
  return (
    <section className={styles.section}>
      <SectionRule counter="03" label={homepage.marketDataLabel} dark />
      <div className="shell">
        <div className={styles.grid}>
          {stats.map((s, i) => (
            <div key={i} className={styles.item}>
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
