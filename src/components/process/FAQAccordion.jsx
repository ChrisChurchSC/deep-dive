import { useState } from 'react'
import styles from './FAQAccordion.module.css'

export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(null)

  const toggle = i => setOpen(prev => prev === i ? null : i)

  return (
    <div className={styles.root}>
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <button
              className={styles.trigger}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
            >
              <span className={styles.question}>{item.question}</span>
              <span className={styles.icon} aria-hidden>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
            <div className={styles.panel} aria-hidden={!isOpen}>
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
