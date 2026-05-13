import styles from './ProcessTimeline.module.css'
import { processPage } from '../../data/processPage'

export default function ProcessTimeline({ stages = processPage.stages ?? [] }) {
  return (
    <div className={styles.table}>
      <div className={styles.tableHead}>
        <div className={styles.headCell} />
        <div className={styles.headCell}>Stage</div>
        <div className={styles.headCell}>You provide</div>
        <div className={styles.headCell}>We handle</div>
        <div className={styles.headCell}>Output</div>
      </div>
      {stages.map(stage => (
        <div key={stage.num} className={styles.row}>
          <div className={styles.numCell}>
            <span className={styles.num}>{stage.num}</span>
          </div>
          <div className={styles.nameCell}>
            <h3 className={styles.stageName}>{stage.name}</h3>
            <span className={styles.duration}>{stage.duration}</span>
          </div>
          <div className={styles.cell}>{stage.client}</div>
          <div className={styles.cell}>{stage.deepDive}</div>
          <div className={styles.outputCell}>{stage.output}</div>
        </div>
      ))}
    </div>
  )
}
