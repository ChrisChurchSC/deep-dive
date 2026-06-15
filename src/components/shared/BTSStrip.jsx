import styles from './BTSStrip.module.css'

export default function BTSStrip({ images = [], label = 'From the field', reverse = false }) {
  const repeated = [...images, ...images]

  return (
    <section className={styles.section}>
      {label && <p className={styles.label}>{label}</p>}
      <div className={styles.track}>
        <div className={`${styles.strip} ${reverse ? styles.reverse : ''}`}>
          {repeated.map((src, i) => {
            // Second pass is a visual clone for the seamless marquee loop — hide it from a11y/SEO.
            const isClone = i >= images.length
            return (
              <figure key={i} className={styles.item} aria-hidden={isClone || undefined}>
                <img
                  src={src}
                  alt={isClone ? '' : `${label || 'Behind the scenes'} — Deep Dive production still`}
                  className={styles.image}
                  loading="lazy"
                />
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
