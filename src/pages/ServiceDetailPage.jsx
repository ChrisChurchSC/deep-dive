import { useParams, Navigate, Link } from 'react-router-dom'
import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import CTASection from '../components/home/CTASection'
import SectionLabel from '../components/primitives/SectionLabel'
import WorkGrid from '../components/work/WorkGrid'
import { serviceDetails } from '../data/serviceDetails'
import styles from './ServiceDetailPage.module.css'

export default function ServiceDetailPage() {
  const { category } = useParams()
  const service = serviceDetails[category]

  if (!service) return <Navigate to="/services" replace />

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Deep Dive',
      url: 'https://deepdivefilms.com',
    },
    serviceType: 'Branded Documentary Video Production',
    areaServed: 'Worldwide',
  }

  return (
    <>
      <SEO
        title={`${service.name} — Branded Documentary Video`}
        description={`${service.tagline} ${service.description}`}
        canonical={`/services/${category}`}
        breadcrumbs={[
          { name: 'Services', url: '/services' },
          { name: service.name, url: `/services/${category}` },
        ]}
        jsonLd={serviceSchema}
      />
      <PageHero
        eyebrow={service.category}
        title={service.name}
        description={service.tagline}
      />

      {/* What it is */}
      <section className={styles.whatItIs}>
        <div className="shell">
          <div className={styles.twoCol}>
            <div className={styles.left}>
              <SectionLabel>What it is</SectionLabel>
              <h2 className={styles.leftTitle}>{service.whatItIs.heading}</h2>
            </div>
            <div className={styles.right}>
              <p className={styles.body}>{service.whatItIs.body}</p>
              <p className={styles.body}>{service.whatItIs.secondary}</p>
              <div className={styles.examples}>
                {service.examples.map(ex => (
                  <span key={ex} className={styles.chip}>{ex}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to use */}
      <section className={styles.whenToUse}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <SectionLabel>When to use it</SectionLabel>
          </div>
          <div className={styles.triggerGrid}>
            {service.whenToUse.map(item => (
              <div key={item.trigger} className={styles.triggerCard}>
                <div className={styles.triggerName}>{item.trigger}</div>
                <p className={styles.triggerBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related work — only if there are matching projects */}
      {service.relatedProjects.length > 0 && (
        <section className={styles.work}>
          <div className="shell">
            <div className={styles.workHead}>
              <SectionLabel>Related work</SectionLabel>
              <Link to="/work" className={styles.viewAll}>See all work →</Link>
            </div>
            <WorkGrid projects={service.relatedProjects} />
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
