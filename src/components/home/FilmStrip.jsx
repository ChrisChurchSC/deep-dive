import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styles from './FilmStrip.module.css'
import SectionRule from '../shared/SectionRule'
import { homepage } from '../../data/homepage'

const SPEED = 0.5 // px per frame
const NAV_PAUSE = 2500 // ms to pause auto-scroll after nav click

function PlayIcon() {
  return (
    <svg className={styles.playIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.25" />
      <path d="M10 8.5l7 3.5-7 3.5V8.5z" fill="currentColor" />
    </svg>
  )
}

function StripItem({ item, i, isCenter }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    if (isCenter) {
      vid.play().catch(() => {})
    } else {
      vid.pause()
      vid.currentTime = 0
    }
  }, [isCenter])

  const tags = [item.industry, item.category, item.format].filter(Boolean)

  const inner = (
    <>
      {item.thumbnail && (
        <img
          src={item.thumbnail}
          alt={item.client ? `${item.client}${item.format ? ` — ${item.format}` : ''}` : ''}
          className={`${styles.img} ${isCenter && item.videoPreview ? styles.imgHidden : ''}`}
          loading="lazy"
        />
      )}
      {!item.thumbnail && (
        <div className={styles.placeholder} style={{ '--ph-i': item._i ?? i }} />
      )}
      {item.videoPreview && (
        <video
          ref={videoRef}
          src={item.videoPreview}
          className={`${styles.preview} ${isCenter ? styles.previewActive : ''}`}
          muted
          loop
          playsInline
        />
      )}
      <div className={styles.overlay}>
        <div className={styles.overlayInner}>
          <PlayIcon />
          {item.client && <span className={styles.client}>{item.client}</span>}
          {tags.length > 0 && (
            <div className={styles.tags}>
              {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          )}
        </div>
      </div>
    </>
  )

  const cls = `${styles.item} ${isCenter ? styles.itemCenter : styles.itemDim}`
  return item.slug ? (
    <Link to={`/work/${item.slug}`} className={cls}>{inner}</Link>
  ) : (
    <div className={cls}>{inner}</div>
  )
}

export default function FilmStrip({ projects = [], label = homepage.filmStripLabel }) {
  const stripRef      = useRef(null)
  const rafRef        = useRef(null)
  const pausedRef     = useRef(false)
  const targetRef     = useRef(null)  // target scrollLeft for nav animation
  const resumeTimer   = useRef(null)
  const [centerIndex, setCenterIndex] = useState(null)

  const hasProjects = projects.length > 0
  const baseItems = hasProjects
    ? projects
    : Array.from({ length: 8 }, (_, i) => ({ slug: null, client: null, thumbnail: null, _i: i }))

  const items = [...baseItems, ...baseItems]

  // Navigate to an adjacent item
  const goTo = useCallback((dir) => {
    const strip = stripRef.current
    if (!strip) return
    const children = Array.from(strip.children)
    const stripCenter = strip.scrollLeft + strip.offsetWidth / 2

    let currentIdx = 0
    let minDist = Infinity
    children.forEach((child, i) => {
      const dist = Math.abs(child.offsetLeft + child.offsetWidth / 2 - stripCenter)
      if (dist < minDist) { minDist = dist; currentIdx = i }
    })

    const targetIdx = Math.max(0, Math.min(children.length - 1, currentIdx + dir))
    const child = children[targetIdx]
    targetRef.current = child.offsetLeft + child.offsetWidth / 2 - strip.offsetWidth / 2

    // Pause auto-scroll then resume
    pausedRef.current = true
    clearTimeout(resumeTimer.current)
    resumeTimer.current = setTimeout(() => { pausedRef.current = false }, NAV_PAUSE)
  }, [])

  useEffect(() => {
    const strip = stripRef.current
    if (!strip) return

    const tick = () => {
      if (targetRef.current !== null) {
        // Ease toward nav target
        const diff = targetRef.current - strip.scrollLeft
        if (Math.abs(diff) < 0.5) {
          strip.scrollLeft = targetRef.current
          targetRef.current = null
        } else {
          strip.scrollLeft += diff * 0.1
        }
      } else if (!pausedRef.current) {
        strip.scrollLeft += SPEED
        if (strip.scrollLeft >= strip.scrollWidth / 2) {
          strip.scrollLeft -= strip.scrollWidth / 2
        }
      }

      const stripCenter = strip.scrollLeft + strip.offsetWidth / 2
      let closest = 0, minDist = Infinity
      Array.from(strip.children).forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft + child.offsetWidth / 2 - stripCenter)
        if (dist < minDist) { minDist = dist; closest = i }
      })
      setCenterIndex(closest % baseItems.length)

      rafRef.current = requestAnimationFrame(tick)
    }

    const pause  = () => { pausedRef.current = true }
    const resume = () => {
      if (targetRef.current === null) pausedRef.current = false
    }

    strip.addEventListener('mouseenter', pause)
    strip.addEventListener('mouseleave', resume)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      clearTimeout(resumeTimer.current)
      strip.removeEventListener('mouseenter', pause)
      strip.removeEventListener('mouseleave', resume)
    }
  }, [baseItems.length])

  const displayIndex = centerIndex !== null ? centerIndex + 1 : 1

  return (
    <div className={styles.root}>
      <SectionRule counter="02" label={label} />
      <div className={styles.heading}>
        <h2 className={styles.headingText}>
          {(homepage.filmStripHeading ?? '').split('\n').map((line, i, arr) => (
            <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
          ))}
        </h2>
      </div>
      <div className={styles.track}>
        <div className={styles.strip} ref={stripRef}>
          {items.map((item, i) => (
            <StripItem
              key={`${item.slug ?? i}-${i}`}
              item={item}
              i={i}
              isCenter={centerIndex === (i % baseItems.length)}
            />
          ))}
        </div>
        <div className={styles.fadeLeft}  aria-hidden="true" />
        <div className={styles.fadeRight} aria-hidden="true" />

        {/* Nav arrows */}
        <button className={`${styles.navBtn} ${styles.navPrev}`} onClick={() => goTo(-1)} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M11 3.5L5.5 9 11 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={`${styles.navBtn} ${styles.navNext}`} onClick={() => goTo(1)} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M7 3.5L12.5 9 7 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Counter */}
      <div className={styles.controls}>
        <span className={styles.counter}>
          <span className={styles.counterCurrent}>{String(displayIndex).padStart(2, '0')}</span>
          <span className={styles.counterSep}> / </span>
          <span className={styles.counterTotal}>{String(baseItems.length).padStart(2, '0')}</span>
        </span>
      </div>
    </div>
  )
}
