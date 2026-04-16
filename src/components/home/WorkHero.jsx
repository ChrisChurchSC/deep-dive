import { useState, useEffect, useRef } from 'react'
import styles from './WorkHero.module.css'
import ReelPlayer from './ReelPlayer'

export default function WorkHero({ src }) {
  const [reelOpen, setReelOpen] = useState(false)
  const videoRef = useRef(null)

  const open  = () => setReelOpen(true)
  const close = () => setReelOpen(false)

  // Autoplay when modal opens, cleanup on close
  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    if (reelOpen) {
      vid.currentTime = 0
      vid.play().catch(() => {})
    } else {
      vid.pause()
    }
  }, [reelOpen])

  // Close on Escape
  useEffect(() => {
    if (!reelOpen) return
    const handler = (e) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [reelOpen])

  return (
    <div className={styles.wrap}>
      <section className={styles.hero}>
        <ReelPlayer src={src} />

        <div className={styles.overlay}>
          <p className={styles.line}>Edutain your audience.</p>
          <button className={styles.playBtn} onClick={open} aria-label="Play reel">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <polygon points="5,2 18,10 5,18" fill="currentColor" />
            </svg>
            <span>Watch reel</span>
          </button>
        </div>

        <div className={styles.scrollCue} aria-hidden>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8" cy="7" r="2" fill="currentColor">
              <animate attributeName="cy" values="7;13;7" dur="1.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0;1" dur="1.8s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
      </section>

      {/* Reel modal */}
      {reelOpen && (
        <div className={styles.modal} onClick={close} role="dialog" aria-modal="true" aria-label="Reel">
          <button className={styles.closeBtn} onClick={close} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
            </svg>
          </button>
          <div className={styles.modalInner} onClick={e => e.stopPropagation()}>
            <video
              ref={videoRef}
              src="/videos/reel/reel-2026.mp4"
              className={styles.reelVideo}
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </div>
  )
}
