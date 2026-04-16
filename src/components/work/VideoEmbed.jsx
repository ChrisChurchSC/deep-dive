import { useState } from 'react'
import styles from './VideoEmbed.module.css'

// embedUrl: Vimeo or YouTube iframe src
// videoUrl: direct mp4/video file path
// thumbnail: optional poster image
// title: accessible label
export default function VideoEmbed({ embedUrl, videoUrl, thumbnail, title = 'Project film' }) {
  const [active, setActive] = useState(false)

  const hasVideo = embedUrl || videoUrl

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
      ) : active && videoUrl ? (
        <video
          className={styles.frame}
          src={videoUrl}
          autoPlay
          controls
          playsInline
          title={title}
        />
      ) : (
        <div
          className={styles.poster}
          onClick={hasVideo ? () => setActive(true) : undefined}
          role={hasVideo ? 'button' : undefined}
          tabIndex={hasVideo ? 0 : undefined}
          onKeyDown={hasVideo ? (e) => e.key === 'Enter' && setActive(true) : undefined}
          aria-label={hasVideo ? `Play ${title}` : undefined}
        >
          {thumbnail && <img src={thumbnail} alt={title} className={styles.thumb} loading="lazy" />}
          {!thumbnail && <div className={styles.gradient} />}

          {hasVideo && (
            <div className={styles.playWrap}>
              <div className={styles.playBtn}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
                  <path d="M10 8l12 6-12 6V8z" fill="currentColor" />
                </svg>
              </div>
              <span className={styles.playLabel}>Watch film</span>
            </div>
          )}

          {!hasVideo && (
            <div className={styles.unavail}>
              <span>Film coming soon</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
