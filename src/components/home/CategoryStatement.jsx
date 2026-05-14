import styles from './CategoryStatement.module.css'
import SectionRule from '../shared/SectionRule'
import Reveal from '../primitives/Reveal'
import NoiseStatic from './NoiseStatic'
import { homepage } from '../../data/homepage'

export default function CategoryStatement() {
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
            <video
              className={styles.video}
              src={homepage.categoryVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
            />
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
