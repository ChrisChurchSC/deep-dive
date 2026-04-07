import styles from './Testimonial.module.css'

export default function Testimonial({ quote, name, title, company, logo }) {
  return (
    <figure className={styles.card}>
      <blockquote className={styles.quote}>
        <p>"{quote}"</p>
      </blockquote>
      <figcaption className={styles.attribution}>
        {logo && <img src={logo} alt={company} className={styles.logo} />}
        <div className={styles.person}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{title}{company ? `, ${company}` : ''}</span>
        </div>
      </figcaption>
    </figure>
  )
}
