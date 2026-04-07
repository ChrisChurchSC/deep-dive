import { Link } from 'react-router-dom'
import Badge from '../primitives/Badge'
import styles from './ArticleCard.module.css'
import Reveal from '../primitives/Reveal'

export default function ArticleCard({ article, featured = false }) {
  const { slug, title, excerpt, topic, date, readTime } = article

  const formatted = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <Reveal as="article" className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <Link to={`/journal/${slug}`} className={styles.link}>
        <div className={styles.top}>
          <div className={styles.meta}>
            <Badge>{topic}</Badge>
            <span className={styles.date}>{formatted}</span>
          </div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.excerpt}>{excerpt}</p>
        </div>
        <div className={styles.bottom}>
          <span className={styles.readTime}>{readTime}</span>
          <span className={styles.arrow}>→</span>
        </div>
      </Link>
    </Reveal>
  )
}
