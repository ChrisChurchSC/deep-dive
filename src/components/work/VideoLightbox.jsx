import { useEffect, useRef } from 'react'
import styles from './VideoLightbox.module.css'

export default function VideoLightbox({ project, onClose }) {
  const { client, title, videoUrl, embedUrl } = project
  const overlayRef = useRef(null)

  // Close on Escape
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleOverlayClick = e => {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.client}>{client}</span>
            {title && <span className={styles.title}>{title}</span>}
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className={styles.player}>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={`${client} — ${title}`}
              className={styles.iframe}
            />
          ) : videoUrl ? (
            <video
              src={videoUrl}
              controls
              autoPlay
              className={styles.video}
            />
          ) : (
            <div className={styles.placeholder}>
              <span>Video coming soon</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
