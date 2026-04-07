import styles from './Checkbox.module.css'

export default function Checkbox({ label, name, checked, onChange, hint }) {
  return (
    <label className={styles.wrap}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={styles.input}
      />
      <span className={styles.box} aria-hidden>
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className={styles.content}>
        <span className={styles.label}>{label}</span>
        {hint && <span className={styles.hint}>{hint}</span>}
      </span>
    </label>
  )
}
