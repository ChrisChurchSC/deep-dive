import styles from './WorkGrid.module.css'
import WorkCard from './WorkCard'

export default function WorkGrid({ projects }) {
  return (
    <div className={styles.root}>
      {projects.length === 0 ? (
        <div className={styles.empty}>No projects in this category yet.</div>
      ) : (
        <div className={styles.grid}>
          {projects.map(project => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  )
}
