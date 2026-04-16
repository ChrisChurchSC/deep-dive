import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import CTASection from '../components/home/CTASection'
import SectionLabel from '../components/primitives/SectionLabel'
import ProcessTimeline from '../components/process/ProcessTimeline'
import FAQAccordion from '../components/process/FAQAccordion'
import styles from './ProcessPage.module.css'

const faqs = [
  {
    question: 'How long does a typical production take?',
    answer: 'A single mini-film runs 6–10 weeks start to finish: 1–2 weeks of story discovery, 1–3 weeks pre-production, 1–5 shoot days, and 2–4 weeks in post. Series are phased across 3–6 months depending on episode count.',
  },
  {
    question: 'How involved does our team need to be?',
    answer: "Your involvement is highest at the start (brief and stakeholder access) and at feedback milestones. We handle all production logistics — you're reviewing, not managing. Expect 4–6 touchpoints across the process.",
  },
  {
    question: 'What do you need from us to get started?',
    answer: 'A brief (we can help you build one), access to the people or stories at the center of the film, any existing brand guidelines or reference content, and a named point of contact for approvals. That\'s it.',
  },
  {
    question: 'Do you handle distribution?',
    answer: 'Yes — delivery includes platform-optimized cuts (LinkedIn, YouTube, web, paid social) and a distribution strategy brief. For clients who want an ongoing content engine, we can also manage editorial calendars and channel strategy.',
  },
  {
    question: 'How many rounds of revisions do we get?',
    answer: 'Two structured feedback rounds in post-production. We front-load alignment in discovery and pre-production so by the time you see a cut, it\'s close. Revisions beyond two rounds are scoped separately.',
  },
  {
    question: 'Do you work with clients outside New York?',
    answer: "Yes. We're Brooklyn-based but produce globally. If the story is in Antarctica, that's where we go. Remote-first communication with on-site production wherever the story lives. Travel and logistics are factored into every quote.",
  },
  {
    question: 'Can we own the footage?',
    answer: 'Final deliverables and master files are licensed to you for perpetual use across owned channels. Raw footage rights and extended licensing (broadcast, paid media) are available to add. We\'ll cover this in the contract.',
  },
]

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

export default function ProcessPage() {
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
        eyebrow="Process"
        title="Five stages. Zero guesswork."
        description="Every Deep Dive production follows the same rigorous framework — from story discovery to final delivery."
      />

      {/* Timeline */}
      <section className={styles.timeline}>
        <div className="shell">
          <ProcessTimeline />
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq}>
        <div className="shell">
          <div className={styles.faqHead}>
            <SectionLabel>FAQ</SectionLabel>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
