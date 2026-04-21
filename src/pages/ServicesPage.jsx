import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import CTASection from '../components/home/CTASection'
import SectionLabel from '../components/primitives/SectionLabel'
import ComparisonBlock from '../components/services/ComparisonBlock'
import FormatCard from '../components/services/FormatCard'
import ServiceHero from '../components/services/ServiceHero'
import ClientLogos from '../components/shared/ClientLogos'
import styles from './ServicesPage.module.css'

const categories = [
  {
    slug: 'brand-people',
    name: 'Brand & People',
    tagline: 'The brand made visible. The people behind it made human.',
    description: 'Founder origin stories, culture documents, leadership profiles — the brand brought to life through the people who built it. When audiences understand why a company exists, they trust it differently.',
    examples: ['Founder origin stories', 'Culture & hiring films', 'Executive profiles', '"Why We Exist" films'],
    video: '/previews/brooklyn-brewery.mp4',
    thumbnail: '/thumbnails/brooklyn-brewery.jpg',
  },
  {
    slug: 'customer-community',
    name: 'Customer & Community',
    tagline: 'Real people, real results. Social proof that feels earned, not staged.',
    description: 'Long-form customer success stories, transformation narratives, and community films that build genuine trust. Not "testimonials" — full stories with stakes, struggle, and resolution.',
    examples: ['Customer success stories', '"Day in the Life" films', 'Before/after narratives', 'Community impact docs'],
    video: '/previews/survivornet.mp4',
    thumbnail: '/thumbnails/survivornet.jpg',
  },
  {
    slug: 'industry-platform',
    name: 'Industry & Platform',
    tagline: 'Authority-building content that makes your brand the authority.',
    description: 'Expert interview series, industry trend documentaries, and episodic content that positions your brand as the definitive voice in your space. The kind of content people cite.',
    examples: ['Expert interview series', 'Industry trend docs', 'Episodic docu-series', 'Conference & event capture'],
    video: '/previews/think-with-google.mp4',
    thumbnail: '/thumbnails/think-with-google.jpg',
  },
]

const formats = [
  {
    name: 'Mini-Film',
    duration: '3–7 min',
    description: 'The workhorse. Long enough to build genuine trust, short enough for digital distribution. One strong story, told with craft.',
    useCases: ['Customer success', 'Founder story', 'Product origin', 'Partnership narrative'],
    accent: 'var(--accent)',
  },
  {
    name: 'Documentary Series',
    duration: '3–8 episodes',
    description: 'Episodic content that builds an audience over time. Each episode stands alone; together they build a point of view your brand owns.',
    useCases: ['Industry series', 'Expert interview series', 'Community stories', 'Annual franchise'],
    accent: 'var(--accent)',
  },
  {
    name: 'Long-Form Doc',
    duration: '12–45 min',
    description: 'For the story that deserves full treatment. Cinematic craft, deep access, full arc. Designed for owned channels and event contexts.',
    useCases: ['Brand origin film', 'Impact documentary', 'Category-defining piece', 'Film festival submission'],
    accent: 'var(--accent)',
  },
  {
    name: 'Distribution Cuts',
    duration: '30 sec – 2 min',
    description: 'Every production includes cuts sized for how people actually consume content — platform-optimized, attention-aware.',
    useCases: ['Paid social', 'LinkedIn native', 'Website hero', 'Sales enablement'],
    accent: 'var(--accent)',
  },
]

const clients = [
  { name: 'Google', logo: '/logos/google.png', scale: 1.3 },
  { name: 'Walmart', logo: '/logos/walmart.png', scale: 1.45 },
  { name: 'YouTube', logo: '/logos/youtube.png', scale: 1.3 },
  { name: 'Barnes & Noble', logo: '/logos/barnes-noble.png', scale: 0.85 },
  { name: 'Brooklyn Brewery', logo: '/logos/brooklyn-brewery.svg', scale: 1.4 },
  { name: 'SurvivorNet', logo: '/logos/survivornet.png', scale: 0.75 },
  { name: 'SingleCare', logo: '/logos/singlecare.png', scale: 0.75 },
  { name: 'RTPI', logo: '/logos/rtpi.webp', scale: 1.15 },
]

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services — Branded Edutainment Video"
        description="Three categories of branded documentary film: Brand & People, Customer & Community, and Industry & Platform. Mini-films, docu-series, and long-form docs."
        canonical="/services"
      />
      <PageHero
        eyebrow="Services"
        title="Three categories. One format."
        description="Branded edutainment built around what your audience wants to know — and what you need them to believe."
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
                    {cat.examples.map(ex => (
                      <span key={ex} className={styles.exampleChip}>{ex}</span>
                    ))}
                  </div>
                </div>
                {cat.video && (
                  <div className={styles.catVideo}>
                    <video
                      src={cat.video}
                      poster={cat.thumbnail}
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
            <SectionLabel>One shoot. Many assets.</SectionLabel>
            <h2 className={styles.repurposeTitle}>We capture everything.<br />You keep it all.</h2>
            <p className={styles.repurposeSub}>
              Every production is built for maximum asset yield. One shoot produces a full suite — the hero film and everything that comes with it.
            </p>
          </div>
          <div className={styles.assetGrid}>
            {[
              { num: '01', label: 'Hero film', desc: 'The anchor piece — 2 to 12 minutes, built for owned channels and long-form distribution.' },
              { num: '02', label: 'Social cuts', desc: '15s, 30s, and 60s edits optimized for LinkedIn, Instagram, and paid social.' },
              { num: '03', label: 'Audiogram & quote cards', desc: 'Key moments pulled for static and motion assets across organic and paid.' },
              { num: '04', label: 'Interview transcripts', desc: 'Full transcripts for blog posts, newsletters, and SEO content.' },
              { num: '05', label: 'B-roll library', desc: 'Unedited footage passed to your team for future use — internal comms, events, decks.' },
              { num: '06', label: 'Sales enablement cuts', desc: 'Shorter proof-point edits designed for outbound sequences and pitch decks.' },
            ].map(item => (
              <div key={item.num} className={styles.assetCard}>
                <span className={styles.assetNum}>{item.num}</span>
                <h3 className={styles.assetLabel}>{item.label}</h3>
                <p className={styles.assetDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.repurposeImages}>
            <img src="/bts/sadie_bts_092025-7.jpg" alt="On set" className={styles.repurposeImage} loading="lazy" />
            <img src="/bts/yur08922.jpg" alt="On set" className={styles.repurposeImage} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Format options */}
      <section className={styles.formats}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <SectionLabel>Formats</SectionLabel>
            <h2 className={styles.sectionTitle}>What gets made.</h2>
          </div>
          <div className={styles.formatGrid}>
            {formats.map(f => (
              <FormatCard key={f.name} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className={styles.comparison}>
        <div className="shell">
          <div className={styles.sectionHead}>
            <SectionLabel>Why Deep Dive</SectionLabel>
            <h2 className={styles.sectionTitle}>The gap we fill.</h2>
            <p className={styles.sectionSub}>
              Generic video agencies know marketing but can't film. Documentary filmmakers can film but don't know brands. We trained in both — and built a studio to bridge them.
            </p>
          </div>
          <ComparisonBlock />
        </div>
      </section>

      <ClientLogos clients={clients} label="Selected clients" />

      <CTASection />
    </>
  )
}
