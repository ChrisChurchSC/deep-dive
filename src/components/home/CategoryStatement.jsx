import styles from './CategoryStatement.module.css'
import SectionRule from '../shared/SectionRule'
import Reveal from '../primitives/Reveal'

export default function CategoryStatement() {
  return (
    <section className={`${styles.section} section`}>
      <SectionRule counter="01" label="The format" />
      <div className="shell">
        <Reveal className={styles.entry}>
          <div className={styles.term}>
            <span className={styles.word}>Branded Edutainment</span>
            <span className={styles.phonetic}>/ˌej·oo·ˈteɪn·mənt/</span>
            <span className={styles.pos}>n.</span>
          </div>
          <p className={styles.definition}>
            Content that teaches an audience something they genuinely want to know,
            told compellingly enough to watch — and made by a brand. Not a product demo.
            Not a brand film. Something more useful than either.
          </p>
          <p className={styles.usage}>
            <em>"Consumers are 131% more likely to buy after consuming educational content."</em>
          </p>
        </Reveal>
        <Reveal delay={2} className={styles.videoWrap}>
          <video
            className={styles.video}
            src="/videos/edutainment.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
        </Reveal>
      </div>
    </section>
  )
}
