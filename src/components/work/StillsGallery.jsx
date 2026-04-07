import styles from './StillsGallery.module.css'
import SectionLabel from '../primitives/SectionLabel'

// stills: [{ src, alt }]
// Shows gradient placeholders when no stills provided
export default function StillsGallery({ stills = [], label = 'Production stills' }) {
  const hasStills = stills.length > 0
  // Default: 5 placeholder tiles in a mixed layout
  const items = hasStills ? stills : Array.from({ length: 5 }, (_, i) => ({ src: null, alt: '', _i: i }))

  return (
    <div className={styles.root}>
      <SectionLabel>{label}</SectionLabel>
      <div className={styles.grid}>
        {items.map((still, i) => (
          <div key={i} className={`${styles.item} ${styles[`item${i}`] || ''}`}>
            {still.src ? (
              <img src={still.src} alt={still.alt || ''} className={styles.img} loading="lazy" />
            ) : (
              <div className={styles.placeholder} style={{ '--ph-i': i }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
