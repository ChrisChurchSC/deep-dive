import SEO from '../components/global/SEO'
import WorkHero from '../components/home/WorkHero'
import CategoryStatement from '../components/home/CategoryStatement'
import FilmStrip from '../components/home/FilmStrip'
import ServicesGrid from '../components/home/ServicesGrid'
import CTASection from '../components/home/CTASection'
import ProofBar from '../components/home/ProofBar'
import ClientLogos from '../components/shared/ClientLogos'
import { projects as allProjects } from '../data/projects'
const projects = allProjects.filter(p => p.videoUrl)

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

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://deepdivefilms.com/#organization',
    name: 'Deep Dive',
    url: 'https://deepdivefilms.com',
    logo: 'https://deepdivefilms.com/og-default.jpg',
    description: 'Brooklyn-based branded edutainment video production studio. Documentary films that educate your audience and build your brand.',
    slogan: "We don't just make videos people see. We make videos people finish.",
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brooklyn',
      addressRegion: 'NY',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hello@deepdivefilms.com',
      url: 'https://deepdivefilms.com/contact',
    },
    sameAs: [
      'https://www.linkedin.com/company/deep-dive-films',
      'https://vimeo.com/deepdivefilms',
    ],
    knowsAbout: [
      'Branded content',
      'Documentary film production',
      'Edutainment',
      'Video marketing',
      'Content strategy',
      'B2B video',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://deepdivefilms.com/#website',
    url: 'https://deepdivefilms.com',
    name: 'Deep Dive',
    publisher: { '@id': 'https://deepdivefilms.com/#organization' },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.category-statement', '.market-data'],
    },
  },
]

export default function HomePage() {
  return (
    <>
      <SEO
        canonical="/"
        description="Brooklyn-based branded edutainment studio. We make documentary films that educate your audience and build your brand. Documentary craft. Brand outcomes."
        jsonLd={homeJsonLd}
      />
      <WorkHero src="/hero.mp4" />

      <ClientLogos clients={clients} label="Selected clients" />
      <CategoryStatement />
      <ProofBar />
      <FilmStrip projects={projects} label="Selected work" />
      <ServicesGrid />

      <CTASection />
    </>
  )
}
