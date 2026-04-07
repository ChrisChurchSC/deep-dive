import styles from './StatNumber.module.css'

export default function StatNumber({ value, label }) {
  return (
    <div className={styles.stat}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}
