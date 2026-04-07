import { useState } from 'react'
import styles from './VideoEmbed.module.css'

// embedUrl: a Vimeo or YouTube embed URL (iframe src)
// thumbnail: optional poster image
// title: accessible label
export default function VideoEmbed({ embedUrl, thumbnail, title = 'Project film' }) {
  const [active, setActive] = useState(false)

  const handleActivate = () => setActive(true)

  return (
    <div className={styles.root}>
      {active && embedUrl ? (
        <iframe
          className={styles.frame}
          src={`${embedUrl}?autoplay=1`}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          className={styles.poster}
          onClick={embedUrl || thumbnail ? handleActivate : undefined}
          role={embedUrl ? 'button' : undefined}
          tabIndex={embedUrl ? 0 : undefined}
          onKeyDown={embedUrl ? (e) => e.key === 'Enter' && handleActivate() : undefined}
          aria-label={embedUrl ? `Play ${title}` : undefined}
        >
          {thumbnail && <img src={thumbnail} alt={title} className={styles.thumb} loading="lazy" />}
          {!thumbnail && <div className={styles.gradient} />}

          {embedUrl && (
            <div className={styles.playWrap}>
              <div className={styles.playBtn}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
                  <path d="M10 8l12 6-12 6V8z" fill="currentColor" />
                </svg>
              </div>
              <span className={styles.playLabel}>Watch film</span>
            </div>
          )}

          {!embedUrl && (
            <div className={styles.unavail}>
              <span>Film coming soon</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
