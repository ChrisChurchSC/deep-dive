import styles from './ComparisonBlock.module.css'

const rows = [
  { label: 'Primary skill',       agency: 'Marketing + production', docFilm: 'Journalism + filmmaking', deepDive: 'Both — by design' },
  { label: 'Story approach',      agency: 'Brand-first narrative',  docFilm: 'Truth-first narrative',   deepDive: 'Truth-first with brand outcomes' },
  { label: 'Audience trust',      agency: 'Low — it feels like an ad', docFilm: 'High — but no commercial goal', deepDive: 'High — and commercially intentional' },
  { label: 'Distribution IQ',     agency: 'Strong',                 docFilm: 'Weak',                    deepDive: 'Strong' },
  { label: 'View-through rate',   agency: '2–5%',                   docFilm: 'N/A',                     deepDive: '40–60%' },
  { label: 'Brand fluency',       agency: 'High',                   docFilm: 'Low',                     deepDive: 'High' },
  { label: 'Cinematic craft',     agency: 'Variable',               docFilm: 'High',                    deepDive: 'High' },
]

export default function ComparisonBlock() {
  return (
    <div className={styles.root}>
      <div className={styles.table}>
        <div className={styles.head}>
          <div className={styles.rowLabel} />
          <div className={styles.colHead}>Generic Video Agency</div>
          <div className={styles.colHead}>Documentary Filmmaker</div>
          <div className={`${styles.colHead} ${styles.us}`}>Deep Dive</div>
        </div>
        {rows.map(row => (
          <div key={row.label} className={styles.row}>
            <div className={styles.rowLabel}>{row.label}</div>
            <div className={styles.cell}>{row.agency}</div>
            <div className={styles.cell}>{row.docFilm}</div>
            <div className={`${styles.cell} ${styles.us}`}>{row.deepDive}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
