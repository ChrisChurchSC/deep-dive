import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './WorkCard.module.css'
import Badge from '../primitives/Badge'
import Reveal from '../primitives/Reveal'

export default function WorkCard({ project }) {
  const { slug, client, title, category, format, thumbnail, videoPreview, stat, statLabel } = project
  const [hovered, setHovered] = useState(false)
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    setHovered(true)
    if (videoPreview && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const handleMouseLeave = () => {
    setHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <Reveal
      as="article"
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Thumbnail */}
      <Link to={`/work/${slug}`} className={styles.media}>
        {thumbnail && (
          <img
            src={thumbnail}
            alt={`${client} — ${title}`}
            className={`${styles.thumb} ${hovered && videoPreview ? styles.hidden : ''}`}
            loading="lazy"
          />
        )}
        {videoPreview && (
          <video
            ref={videoRef}
            src={videoPreview}
            className={`${styles.preview} ${hovered ? styles.visible : ''}`}
            muted
            loop
            playsInline
          />
        )}
        <div className={`${styles.playBtn} ${hovered ? styles.show : ''}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="10" fill="rgba(247,246,242,0.95)" />
            <path d="M8 6.5l6 3.5-6 3.5V6.5z" fill="#111110" />
          </svg>
        </div>
        {stat && (
          <div className={styles.stat}>
            <span className={styles.statVal}>{stat}</span>
            <span className={styles.statLbl}>{statLabel}</span>
          </div>
        )}
      </Link>

      {/* Info */}
      <div className={styles.info}>
        <span className={styles.client}>{client}</span>
        {title && (
          <Link to={`/work/${slug}`} className={styles.title}>{title}</Link>
        )}
        <div className={styles.tags}>
          {category && <Badge>{category}</Badge>}
          {format && <Badge>{format}</Badge>}
        </div>
      </div>
    </Reveal>
  )
}
