import styles from './CaseStudyHero.module.css'
import Badge from '../primitives/Badge'

export default function CaseStudyHero({ client, category, title, description, stat, statLabel, thumbnail }) {
  return (
    <section className={styles.hero} style={thumbnail ? { backgroundImage: `url(${thumbnail})` } : {}}>
      <div className={styles.overlay} />
      <div className="shell">
        <div className={styles.inner}>
          <div className={styles.meta}>
            <span className={styles.client}>{client}</span>
            {category && <Badge variant="dark">{category}</Badge>}
          </div>
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.desc}>{description}</p>}
          {stat && (
            <div className={styles.stat}>
              <span className={styles.statVal}>{stat}</span>
              <span className={styles.statLbl}>{statLabel}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
