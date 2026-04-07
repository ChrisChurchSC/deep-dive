import { useEffect, useState } from 'react'
import styles from './DepthMeter.module.css'

const DEPTHS = [
  { label: '0m',    pos: 0 },
  { label: '10m',   pos: 0.15 },
  { label: '25m',   pos: 0.28 },
  { label: '50m',   pos: 0.44 },
  { label: '100m',  pos: 0.60 },
  { label: '200m',  pos: 0.76 },
  { label: '500m',  pos: 1 },
]

export default function DepthMeter() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={styles.meter} aria-hidden="true">
      <div className={styles.track}>
        {/* Vertical rule */}
        <div className={styles.line} />

        {/* Depth tick marks + labels */}
        {DEPTHS.map(({ label, pos }) => (
          <div
            key={label}
            className={styles.tick}
            style={{ top: `${pos * 100}%` }}
          >
            <span className={styles.label}>{label}</span>
            <div className={styles.tickMark} />
          </div>
        ))}

      </div>
    </div>
  )
}
