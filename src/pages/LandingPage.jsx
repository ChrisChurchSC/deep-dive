import { useParams, Navigate, Link } from 'react-router-dom'
import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import CTASection from '../components/home/CTASection'
import SectionLabel from '../components/primitives/SectionLabel'
import FAQAccordion from '../components/process/FAQAccordion'
import WorkGrid from '../components/work/WorkGrid'
import Reveal from '../components/primitives/Reveal'
import { landingPages } from '../data/landingPages'
import { projects } from '../data/projects'
import styles from './LandingPage.module.css'

export default function LandingPage() {
  const { slug } = useParams()
  const page = landingPages[slug]

  if (!page) return <Navigate to="/" replace />

  const relatedProjects = (page.relatedProjects ?? [])
    .map(s => projects.find(p => p.slug === s))
    .filter(Boolean)

  const relatedPages = (page.related ?? [])
    .map(s => (landingPages[s] ? { slug: s, question: landingPages[s].question } : null))
    .filter(Boolean)

  // FAQPage schema from the FAQ block.
  const faqSchema = page.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: page.faqs.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null

  // HowTo schema from the process steps.
  const howToSchema = page.steps?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: page.question,
        description: page.answer,
        step: page.steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.label,
          text: s.body,
        })),
      }
    : null

  const jsonLd = [faqSchema, howToSchema].filter(Boolean)

  return (
    <>
      <SEO
        title={page.question}
        description={page.seoDescription || page.answer.slice(0, 155)}
        canonical={`/lp/${slug}`}
        ogType="article"
        breadcrumbs={[{ name: page.question, url: `/lp/${slug}` }]}
        jsonLd={jsonLd.length === 1 ? jsonLd[0] : jsonLd.length ? jsonLd : undefined}
      />

      <PageHero eyebrow={page.category} title={page.question} />

      {/* Answer block — the direct, scannable answer engines and readers want up top */}
      <section className={styles.answer}>
        <div className="shell">
          <Reveal><p className={styles.answerLead}>{page.answer}</p></Reveal>
        </div>
      </section>

      {/* Body sections */}
      {page.sections?.length > 0 && (
        <section className={styles.body}>
          <div className="shell">
            {page.sections.map((sec, i) => (
              <div key={i} className={styles.block}>
                <h2 className={styles.blockHeading}>{sec.heading}</h2>
                {(Array.isArray(sec.body) ? sec.body : [sec.body]).map((para, j) => (
                  <p key={j} className={styles.blockBody}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Process / steps */}
      {page.steps?.length > 0 && (
        <section className={styles.process}>
          <div className="shell">
            <div className={styles.sectionHead}>
              <SectionLabel>{page.processLabel || 'How we approach it'}</SectionLabel>
            </div>
            <div className={styles.stepGrid}>
              {page.steps.map((s, i) => (
                <div key={i} className={styles.stepCard}>
                  <div className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</div>
                  <div className={styles.stepName}>{s.label}</div>
                  <p className={styles.stepBody}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related work */}
      {relatedProjects.length > 0 && (
        <section className={styles.work}>
          <div className="shell">
            <div className={styles.workHead}>
              <SectionLabel>Proof</SectionLabel>
              <Link to="/work" className={styles.viewAll}>See all work →</Link>
            </div>
            <WorkGrid projects={relatedProjects} />
          </div>
        </section>
      )}

      {/* FAQ */}
      {page.faqs?.length > 0 && (
        <section className={styles.faq}>
          <div className="shell">
            <div className={styles.sectionHead}>
              <SectionLabel>{page.faqLabel || 'Common questions'}</SectionLabel>
            </div>
            <FAQAccordion items={page.faqs} />
          </div>
        </section>
      )}

      {/* Related questions — internal cluster links */}
      {relatedPages.length > 0 && (
        <section className={styles.related}>
          <div className="shell">
            <div className={styles.sectionHead}>
              <SectionLabel>Related questions</SectionLabel>
            </div>
            <div className={styles.relatedList}>
              {relatedPages.map(r => (
                <Link key={r.slug} to={`/lp/${r.slug}`} className={styles.relatedItem}>
                  <span className={styles.relatedQ}>{r.question}</span>
                  <span className={styles.relatedArrow} aria-hidden>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading={page.ctaHeading} body={page.ctaBody} />
    </>
  )
}
