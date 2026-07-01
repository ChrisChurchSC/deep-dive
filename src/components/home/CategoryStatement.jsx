import { useRef, useState } from 'react'
import styles from './CategoryStatement.module.css'
import SectionRule from '../shared/SectionRule'
import Reveal from '../primitives/Reveal'
import NoiseStatic from './NoiseStatic'
import { homepage } from '../../data/homepage'

export default function CategoryStatement() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section className={`${styles.section} section`}>
      <SectionRule counter="01" label={homepage.categoryLabel} />
      <div className="shell">
        <Reveal className={styles.entry}>
          <div className={styles.term}>
            <span className={styles.word}>{homepage.categoryWord}</span>
            <span className={styles.phonetic}>{homepage.categoryPhonetic}</span>
            <span className={styles.pos}>{homepage.categoryPos}</span>
          </div>
          <p className={styles.definition}>{homepage.categoryDefinition}</p>
          {homepage.categoryUsage && (
            <p className={styles.usage}>
              <em>{homepage.categoryUsage}</em>
            </p>
          )}
        </Reveal>
        <Reveal delay={2} className={styles.videoWrap}>
          {homepage.categoryVideo ? (
            <div className={styles.videoContainer} onClick={toggle}>
              <video
                ref={videoRef}
                className={styles.video}
                src={homepage.categoryVideo}
                poster={homepage.categoryPoster || undefined}
                playsInline
                preload="metadata"
                onEnded={() => setPlaying(false)}
              />
              <button
                className={`${styles.playBtn} ${playing ? styles.playBtnHidden : ''}`}
                aria-label={playing ? 'Pause' : 'Play'}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="32" fill="rgba(247,246,242,0.95)" />
                  <path d="M26 20l20 12-20 12V20z" fill="#111110" />
                </svg>
              </button>
            </div>
          ) : (
            <div className={styles.video} style={{ position: 'relative', overflow: 'hidden' }}>
              <NoiseStatic />
              <span className={styles.comingSoon}>Coming soon…</span>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
