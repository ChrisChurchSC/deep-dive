import { useParams, Navigate, Link } from 'react-router-dom'
import SEO from '../components/global/SEO'
import SectionLabel from '../components/primitives/SectionLabel'
import Badge from '../components/primitives/Badge'
import ArticleCard from '../components/shared/ArticleCard'
import WorkCard from '../components/work/WorkCard'
import Button from '../components/primitives/Button'
import Reveal from '../components/primitives/Reveal'
import { articles } from '../data/articles'
import { projects } from '../data/projects'
import styles from './ArticlePage.module.css'

import { articleBodies } from '../data/articleBodies'

function ArticleBody({ slug }) {
  const content = articleBodies[slug]
  if (!content) {
    return (
      <div className={styles.placeholder}>
        Full article content coming soon. This placeholder represents a complete article — estimated 800–1,200 words covering the topic in depth.
      </div>
    )
  }

  return (
    <div className={styles.body}>
      {content.trim().split('\n\n').map((block, i) => {
        if (block.startsWith('**') && block.endsWith('**')) {
          return <h3 key={i} className={styles.subhead}>{block.slice(2, -2)}</h3>
        }
        return <p key={i}>{block.trim()}</p>
      })}
    </div>
  )
}

export default function ArticlePage() {
  const { slug } = useParams()
  const article = articles.find(a => a.slug === slug)

  if (!article) return <Navigate to="/journal" replace />

  const related = articles.filter(a => a.slug !== slug && a.topic === article.topic).slice(0, 3)
  const relatedWork = article.relatedProjects
    ? projects.filter(p => article.relatedProjects.includes(p.slug))
    : []

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { '@type': 'Organization', name: 'Deep Dive' },
    publisher: {
      '@type': 'Organization',
      name: 'Deep Dive',
      url: 'https://deep-dive.studio',
    },
  }

  const formatted = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <SEO
        title={article.title}
        description={article.excerpt}
        canonical={`/journal/${slug}`}
        ogType="article"
        breadcrumbs={[
          { name: 'Journal', url: '/journal' },
          { name: article.title, url: `/journal/${slug}` },
        ]}
        jsonLd={articleJsonLd}
      />
      {/* Article header */}
      <header className={styles.header}>
        <div className="shell">
          <div className={styles.headerInner}>
            <Reveal><div className={styles.headerMeta}>
              <Badge>{article.topic}</Badge>
              <span className={styles.date}>{formatted}</span>
              <span className={styles.readTime}>{article.readTime}</span>
            </div></Reveal>
            <Reveal delay={1}><h1 className={styles.title}>{article.title}</h1></Reveal>
            <Reveal delay={2}><p className={styles.excerpt}>{article.excerpt}</p></Reveal>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className={styles.article}>
        <div className="shell">
          <div className={styles.articleInner}>
            <ArticleBody slug={slug} />
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className={styles.cta}>
        <div className="shell">
          <div className={styles.ctaInner}>
            <Reveal><p className={styles.ctaLabel}>Want to put this into practice?</p></Reveal>
            <Reveal delay={1}><h2 className={styles.ctaTitle}>Tell us what you're trying to say.</h2></Reveal>
            <Reveal delay={2}><Button href="/contact" variant="accent">Start a conversation</Button></Reveal>
          </div>
        </div>
      </section>

      {/* Related work */}
      {relatedWork.length > 0 && (
        <section className={styles.relatedWork}>
          <div className="shell">
            <div className={styles.relatedHead}>
              <SectionLabel>See it in practice</SectionLabel>
              <Link to="/work" className={styles.viewAll}>All work →</Link>
            </div>
            <div className={styles.workGrid}>
              {relatedWork.map(p => (
                <WorkCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related articles */}
      {related.length > 0 && (
        <section className={styles.related}>
          <div className="shell">
            <div className={styles.relatedHead}>
              <SectionLabel>More in {article.topic}</SectionLabel>
              <Link to="/journal" className={styles.viewAll}>All articles →</Link>
            </div>
            <div className={styles.relatedGrid}>
              {related.map(a => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
