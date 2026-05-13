import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import CTASection from '../components/home/CTASection'
import SectionLabel from '../components/primitives/SectionLabel'
import ComparisonBlock from '../components/services/ComparisonBlock'
import FormatCard from '../components/services/FormatCard'
import ClientLogos from '../components/shared/ClientLogos'
import styles from './ServicesPage.module.css'
import { servicesPage } from '../data/servicesPage'

function renderMultiline(text) {
  return (text ?? '').split('\n').map((line, i, arr) => (
    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
  ))
}

export default function ServicesPage() {
  const categories = servicesPage.categories ?? []
  const formats = servicesPage.formats ?? []
  const assets = servicesPage.repurposeAssets ?? []
  const images = servicesPage.repurposeImages ?? []
  const clients = servicesPage.clients ?? []

  return (
    <>
      <SEO
        title="Services — Branded Edutainment Video"
        description="Three categories of branded documentary film: Brand & People, Customer & Community, and Industry & Platform. Mini-films, docu-series, and long-form docs."
        canonical="/services"
      />
      <PageHero
        eyebrow={servicesPage.heroEyebrow}
        title={servicesPage.heroTitle}
        description={servicesPage.heroDescription}
      />

      {/* Three service categories */}
      <section className={styles.categories} id="categories">
        <div className="shell">
          <div className={styles.categoryGrid}>
            {categories.map((cat, i) => (
              <div key={cat.slug} id={cat.slug} className={styles.categoryCard}>
                <div className={styles.catContent}>
                  <div className={styles.catNum}>0{i + 1}</div>
                  <h2 className={styles.catName}>{cat.name}</h2>
                  <p className={styles.catTagline}>{cat.tagline}</p>
                  <p className={styles.catDesc}>{cat.description}</p>
                  <div className={styles.catExamples}>
                    {(cat.examples ?? []).map(ex => (
                      <span key={ex} className={styles.exampleChip}>{ex}</span>
                    ))}
                  </div>
                </div>
                {cat.video && (
                  <div className={styles.catVideo}>
                    <video
                      src={cat.video}
                      poster={cat.thumbnail || undefined}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      className={styles.catVideoEl}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* One shoot, many assets */}
      <section className={styles.repurpose}>
        <div className="shell">
          <div className={styles.repurposeHead}>
            <SectionLabel>{servicesPage.repurposeLabel}</SectionLabel>
            <h2 className={styles.repurposeTitle}>{renderMultiline(servicesPage.repurposeTitle)}</h2>
            <p className={styles.repurposeSub}>{servicesPage.repurposeSub}</p>
          </div>
          <div className={styles.assetGrid}>
            {assets.map(item => (
              <div key={item.num} className={styles.assetCard}>
                <span className={styles.assetNum}>{item.num}</span>
                <h3 className={styles.assetLabel}>{item.label}</h3>
                <p className={styles.assetDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.repurposeImages}>
            {images.map((src, i) => (
              <img key={i} src={src} alt="On set" className={styles.repurposeImage} loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Format options */}
      <section className={styles.formats}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <SectionLabel>{servicesPage.formatsLabel}</SectionLabel>
            <h2 className={styles.sectionTitle}>{servicesPage.formatsTitle}</h2>
          </div>
          <div className={styles.formatGrid}>
            {formats.map(f => (
              <FormatCard key={f.name} {...f} accent="var(--accent)" />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className={styles.comparison}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <SectionLabel>{servicesPage.comparisonLabel}</SectionLabel>
            <h2 className={styles.sectionTitle}>{servicesPage.comparisonTitle}</h2>
            <p className={styles.sectionSub}>{servicesPage.comparisonSub}</p>
          </div>
          <ComparisonBlock />
        </div>
      </section>

      <ClientLogos clients={clients} label={servicesPage.clientsLabel} />

      <CTASection />
    </>
  )
}
