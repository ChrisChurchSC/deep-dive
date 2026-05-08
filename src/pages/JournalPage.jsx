import { useState } from 'react'
import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import ArticleCard from '../components/shared/ArticleCard'
import { articles } from '../data/articles'
import { subscribeToKlaviyo } from '../hooks/useKlaviyoSubscribe'
import styles from './JournalPage.module.css'

export default function JournalPage() {
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

  const featured = articles.find(a => a.featured)
  const rest = articles.filter(a => !a.featured)

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

      <section className={styles.articles}>
        <div className="shell">
          {featured && (
            <div className={styles.featuredWrap}>
              <ArticleCard article={featured} featured />
            </div>
          )}

          <div className={styles.grid}>
            {rest.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
