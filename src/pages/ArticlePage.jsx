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

// Placeholder body content — in production this comes from a CMS or markdown
const articleBodies = {
  'why-educational-content-outperforms-branded-advertising': `
    In 2019, Conductor published a study in partnership with Cornell University showing that consumers are 131% more likely to purchase from a brand immediately after consuming educational content from that brand.

    That number is striking enough that it gets misused constantly. Let me explain what it actually means — and why the mechanism matters more than the stat.

    The study wasn't measuring any educational content. It was measuring content that genuinely helped the reader understand something they wanted to understand. Not content that happened to mention a product while teaching something. Content where the teaching was the point.

    This distinction is everything.

    **Why the format works.**

    When a brand produces advertising, the audience brings a skepticism filter. They know the brand's incentives. They discount the claims accordingly. This is rational — brands have every reason to overstate their product's value.

    Educational content works differently. It's subject to the same skepticism filter at first — but if the content is genuinely useful, the filter comes down. The audience stops asking "what are they selling?" and starts asking "is this true?" That's a completely different cognitive mode. One that precedes trust.

    The 131% lift isn't from exposure. It's from that cognitive shift. The audience that finishes a genuinely useful piece of content from your brand has updated their model of you. You are no longer just a vendor — you're a source.

    **The mistake most brands make.**

    They treat educational content as a Trojan horse for the pitch. The "educational" framing is a wrapper around what is, structurally, still an advertisement.

    Audiences feel this immediately. The skepticism filter goes back up. The educational frame makes the deception feel worse, not better — because it violated an implicit contract.

    The brands that win with educational content commit to the format fully. The information stands alone. The brand benefit is associative — trust built by proximity to genuine usefulness — not embedded as a call to action.

    **What this means for video specifically.**

    Video is the hardest format to fake. A written article that sounds educational can hide its promotional intent in the framing. A film can't. The camera captures whether the interviewee is reciting talking points or saying something real. The editing reveals whether the story has actual stakes or invented ones.

    This is why the view-through rate gap between branded and editorial video is so dramatic. Audiences finish what's real. They click away from what's manufactured.

    The implication: the standard for educational video has to be the same standard applied to journalism. Not "is this content strategically useful for our brand?" — but "is this content genuinely useful for our audience?"

    If the answer is yes to both, you're in the right place.
  `,
}

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
    author: { '@type': 'Organization', name: 'Deep Dive Films' },
    publisher: {
      '@type': 'Organization',
      name: 'Deep Dive Films',
      url: 'https://deepdivefilms.com',
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
