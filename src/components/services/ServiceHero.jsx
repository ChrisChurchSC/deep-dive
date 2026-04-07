import styles from './ServiceHero.module.css'
import Badge from '../primitives/Badge'
import Button from '../primitives/Button'

export default function ServiceHero({ category, name, tagline, description, examples = [] }) {
  return (
    <section className={styles.hero}>
      <div className="shell">
        <div className={styles.inner}>
          <div className={styles.top}>
            <Badge variant="accent">{category}</Badge>
          </div>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.tagline}>{tagline}</p>
          {description && <p className={styles.desc}>{description}</p>}
          {examples.length > 0 && (
            <div className={styles.examples}>
              {examples.map(ex => <Badge key={ex}>{ex}</Badge>)}
            </div>
          )}
          <Button href="/contact" variant="primary">Start a project →</Button>
        </div>
      </div>
    </section>
  )
}
