import styles from './ProcessTimeline.module.css'

const stages = [
  {
    num: '01',
    name: 'Discover',
    duration: '1–2 weeks',
    client: 'Brief, brand docs, access to stakeholders',
    deepDive: 'Story mining, audience research, narrative framework, editorial plan',
    output: 'Story treatment + production brief',
  },
  {
    num: '02',
    name: 'Pre-Production',
    duration: '1–3 weeks',
    client: 'Approvals, talent coordination, logistics support',
    deepDive: 'Scripting, location scouting, crew assembly, talent prep, shot list',
    output: 'Shoot-ready package',
  },
  {
    num: '03',
    name: 'Production',
    duration: '1–5 days on-site',
    client: 'Point of contact on shoot days',
    deepDive: 'Direction, cinematography, interview facilitation, B-roll capture',
    output: 'Rushes + selects',
  },
  {
    num: '04',
    name: 'Post-Production',
    duration: '2–4 weeks',
    client: 'Two rounds of feedback',
    deepDive: 'Narrative edit, color grade, sound design, motion graphics, platform cuts',
    output: 'Master file + all deliverables',
  },
  {
    num: '05',
    name: 'Delivery',
    duration: '1 week',
    client: 'Platform access, rollout decisions',
    deepDive: 'Format exports, distribution strategy, performance tracking setup',
    output: 'Launch-ready asset package',
  },
]

export default function ProcessTimeline() {
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
