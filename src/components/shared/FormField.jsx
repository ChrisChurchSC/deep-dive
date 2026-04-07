import styles from './FormField.module.css'

export default function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  hint,
  required,
  rows,
  options = [],
}) {
  const id = `field-${name}`

  return (
    <div className={`${styles.field} ${error ? styles.hasError : ''}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.req} aria-hidden>*</span>}
        </label>
      )}

      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          rows={rows || 5}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.input}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={styles.input}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={styles.input}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        />
      )}

      {error && (
        <p id={`${id}-error`} className={styles.error}>{error}</p>
      )}
      {!error && hint && (
        <p id={`${id}-hint`} className={styles.hint}>{hint}</p>
      )}
    </div>
  )
}
