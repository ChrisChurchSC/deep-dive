import styles from './BTSStrip.module.css'

export default function BTSStrip({ images = [], label = 'From the field', reverse = false }) {
  const repeated = [...images, ...images]

  return (
    <section className={styles.section}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.track}>
        <div className={`${styles.strip} ${reverse ? styles.reverse : ''}`}>
          {repeated.map((src, i) => (
            <figure key={i} className={styles.item}>
              <img src={src} alt="" className={styles.image} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
