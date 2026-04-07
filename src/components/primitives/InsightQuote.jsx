import styles from './InsightQuote.module.css'

export default function InsightQuote({ children }) {
  return (
    <blockquote className={styles.insight}>
      <p className={styles.text}>{children}</p>
    </blockquote>
  )
}
