import { useState } from 'react'
import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import ArticleCard from '../components/shared/ArticleCard'
import SectionLabel from '../components/primitives/SectionLabel'
import { articles, topics } from '../data/articles'
import { subscribeToKlaviyo } from '../hooks/useKlaviyoSubscribe'
import styles from './JournalPage.module.css'

export default function JournalPage() {
  const [activeTopic, setActiveTopic] = useState('All')
  const [subEmail, setSubEmail]       = useState('')
  const [subDone, setSubDone]         = useState(false)

  const handleSubscribe = async e => {
    e.preventDefault()
    if (!subEmail) return
    try {
      await subscribeToKlaviyo(subEmail)
    } catch (_) {
      // Fail silently
    }
    setSubDone(true)
  }

  const filtered = activeTopic === 'All'
    ? articles
    : articles.filter(a => a.topic === activeTopic)

  const featured = filtered.find(a => a.featured)
  const rest = filtered.filter(a => !a.featured || activeTopic !== 'All')

  return (
    <>
      <SEO
        title="Journal — Strategy, Craft & Insight"
        description="On the business case for content that actually gets watched. Strategy, storytelling, and lessons from productions for Google, SurvivorNet, and more."
        canonical="/journal"
      />
      <PageHero
        eyebrow="Journal"
        title="On the craft of making people care."
        description="Strategy, storytelling, and the business case for content that actually gets watched."
      />

      {/* Newsletter signup */}
      <section className={styles.subscribe}>
        <div className="shell">
          <div className={styles.subscribeInner}>
            <div className={styles.subscribeCopy}>
              <div className={styles.subscribeTitle}>Get The Brief.</div>
              <p className={styles.subscribeBody}>
                Monthly — strategy, new work, and one insight worth remembering.
              </p>
            </div>
            {subDone ? (
              <p className={styles.subThanks}>You're in. First issue lands soon.</p>
            ) : (
              <form className={styles.subscribeForm} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={styles.subscribeInput}
                  value={subEmail}
                  onChange={e => setSubEmail(e.target.value)}
                  required
                />
                <button type="submit" className={styles.subscribeBtn}>Subscribe</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Topic filter */}
      <section className={styles.articles}>
        <div className="shell">
          <div className={styles.filterBar}>
            {topics.map(t => (
              <button
                key={t}
                className={`${styles.filterBtn} ${activeTopic === t ? styles.active : ''}`}
                onClick={() => setActiveTopic(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Featured article */}
          {activeTopic === 'All' && featured && (
            <div className={styles.featuredWrap}>
              <ArticleCard article={featured} featured />
            </div>
          )}

          {/* Article grid */}
          <div className={styles.grid}>
            {(activeTopic === 'All' ? rest : filtered).map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className={styles.empty}>No articles in this topic yet.</div>
          )}
        </div>
      </section>
    </>
  )
}
