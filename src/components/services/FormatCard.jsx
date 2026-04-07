import styles from './FormatCard.module.css'

export default function FormatCard({ name, duration, description, useCases = [], accent }) {
  return (
    <div className={styles.card} style={accent ? { borderTopColor: accent } : {}}>
      <div className={styles.header}>
        <div className={styles.name}>{name}</div>
        <div className={styles.duration}>{duration}</div>
      </div>
      <p className={styles.desc}>{description}</p>
      <ul className={styles.list}>
        {useCases.map(u => <li key={u}>{u}</li>)}
      </ul>
    </div>
  )
}
