import styles from './SuccessState.module.css'

export default function SuccessState({
  label = 'Subscribed',
  heading,
  body,
  tone = 'dark', // 'dark' = light text on dark bg; 'light' = dark text on light bg
}) {
  return (
    <div className={`${styles.root} ${tone === 'light' ? styles.light : styles.dark}`}>
      <svg className={styles.check} width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
        <circle
          className={styles.checkCircle}
          cx="18" cy="18" r="16"
          fill="none" stroke="currentColor" strokeWidth="1.25"
        />
        <path
          className={styles.checkMark}
          d="M11 18.5 L16 23.5 L25 13.5"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
      <p className={styles.label}>// {label}</p>
      {heading && <h3 className={styles.heading}>{heading}</h3>}
      {body && <p className={styles.body}>{body}</p>}
    </div>
  )
}
