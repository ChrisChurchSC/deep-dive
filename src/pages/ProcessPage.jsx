import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import CTASection from '../components/home/CTASection'
import SectionLabel from '../components/primitives/SectionLabel'
import ProcessTimeline from '../components/process/ProcessTimeline'
import FAQAccordion from '../components/process/FAQAccordion'
import styles from './ProcessPage.module.css'
import { processPage } from '../data/processPage'

export default function ProcessPage() {
  const faqs = processPage.faqs ?? []

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  return (
    <>
      <SEO
        title="Our Process — Five Stages, Zero Guesswork"
        description="Every Deep Dive production follows the same rigorous five-stage framework: Discover, Pre-Production, Production, Post-Production, Delivery. Here's exactly what to expect."
        canonical="/process"
        breadcrumbs={[{ name: 'Process', url: '/process' }]}
        jsonLd={faqSchema}
      />
      <PageHero
        eyebrow={processPage.heroEyebrow}
        title={processPage.heroTitle}
        description={processPage.heroDescription}
      />

      {/* Timeline */}
      <section className={styles.timeline}>
        <div className="shell">
          <ProcessTimeline stages={processPage.stages} />
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="shell">
          <div className={styles.faqHead}>
            <SectionLabel>{processPage.faqLabel}</SectionLabel>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
