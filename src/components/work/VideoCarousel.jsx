import { useState } from 'react'
import styles from './VideoCarousel.module.css'
import VideoEmbed from './VideoEmbed'

export default function VideoCarousel({ videos = [], thumbnail, title = 'Project film' }) {
  const [activeIdx, setActiveIdx] = useState(0)

  if (!videos.length) return null
  if (videos.length === 1) {
    const v = videos[0]
    return (
      <VideoEmbed
        embedUrl={v.embedUrl ?? null}
        videoUrl={v.url ?? null}
        thumbnail={v.thumb ?? thumbnail}
        title={v.label || title}
      />
    )
  }

  const active = videos[activeIdx]

  return (
    <div className={styles.root}>
      <div key={activeIdx} className={`${styles.videoWrap} ${styles.fadeIn}`}>
        <VideoEmbed
          embedUrl={active.embedUrl ?? null}
          videoUrl={active.url ?? null}
          thumbnail={active.thumb ?? (activeIdx === 0 ? thumbnail : null)}
          title={active.label || title}
        />
      </div>
      <div className={styles.strip}>
        {videos.map((v, i) => (
          <button
            key={i}
            className={`${styles.item} ${i === activeIdx ? styles.active : ''}`}
            onClick={() => setActiveIdx(i)}
            aria-label={v.label || `Part ${i + 1}`}
          >
            <div className={styles.imgWrap}>
              {v.thumb ? (
                <img src={v.thumb} alt="" className={styles.img} />
              ) : (
                <div className={styles.placeholder} />
              )}
            </div>
          </button>
        ))}
      </div>
      <div className={styles.nav}>
        <span className={styles.counter}>
          {String(activeIdx + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
        </span>
        {active.label && <span className={styles.label}>{active.label}</span>}
      </div>
    </div>
  )
}
