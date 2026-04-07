import { useState } from 'react'
import styles from './Tabs.module.css'

export default function Tabs({ tabs, defaultTab }) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id)

  const current = tabs.find(t => t.id === active)

  return (
    <div className={styles.root}>
      <div className={styles.bar} role="tablist">
        {tabs.map(tab => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === tab.id}
            className={`${styles.tab} ${active === tab.id ? styles.active : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.panel} role="tabpanel">
        {current?.content}
      </div>
    </div>
  )
}
