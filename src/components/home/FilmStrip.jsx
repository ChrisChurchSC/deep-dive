import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './FilmStrip.module.css'
import SectionRule from '../shared/SectionRule'

function PlayIcon() {
  return (
    <svg className={styles.playIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.25" />
      <path d="M10 8.5l7 3.5-7 3.5V8.5z" fill="currentColor" />
    </svg>
  )
}

// projects: [{ slug, client, thumbnail, category, format, industry }]
// Falls back to styled placeholders when no projects/thumbnails provided
export default function FilmStrip({ projects = [], label = 'From the field' }) {
  const stripRef = useRef(null)

  const hasProjects = projects.length > 0
  const items = hasProjects
    ? projects
    : Array.from({ length: 8 }, (_, i) => ({ slug: null, client: null, thumbnail: null, _i: i }))

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return
    const mid = strip.children[Math.floor(strip.children.length / 2)]
    if (mid) {
      // Center the middle item's center on the viewport center
      strip.scrollLeft = mid.offsetLeft + mid.offsetWidth / 2 - strip.offsetWidth / 2
    }
  }, [])

  return (
    <div className={styles.root}>
      <SectionRule counter="02" label={label} />
      <div className={styles.heading}>
        <h2 className={styles.headingText}>Films that educate.<br />Brands that earn trust.</h2>
      </div>
      <div className={styles.track}>
        <div className={styles.strip} ref={stripRef}>
          {items.map((item, i) => {
            const tags = [item.industry, item.category, item.format].filter(Boolean)
            const inner = (
              <>
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt={item.client || ''} className={styles.img} loading="lazy" />
                ) : (
                  <div className={styles.placeholder} style={{ '--ph-i': item._i ?? i }} />
                )}
                <div className={styles.overlay}>
                  <div className={styles.overlayInner}>
                    <PlayIcon />
                    {item.client && (
                      <span className={styles.client}>{item.client}</span>
                    )}
                    {tags.length > 0 && (
                      <div className={styles.tags}>
                        {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                      </div>
                    )}
                  </div>
                </div>
              </>
            )

            return item.slug ? (
              <Link key={item.slug} to={`/work/${item.slug}`} className={styles.item}>
                {inner}
              </Link>
            ) : (
              <div key={i} className={styles.item}>
                {inner}
              </div>
            )
          })}
        </div>
        <div className={styles.fadeLeft}  aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />
      </div>
    </div>
  )
}
