import SEO from '../components/global/SEO'
import WorkHero from '../components/home/WorkHero'
import CategoryStatement from '../components/home/CategoryStatement'
import FilmStrip from '../components/home/FilmStrip'
import ServicesGrid from '../components/home/ServicesGrid'
import CTASection from '../components/home/CTASection'
import ProofBar from '../components/home/ProofBar'
import ClientLogos from '../components/shared/ClientLogos'
import { projects } from '../data/projects'

const clients = [
  { name: 'Google' },
  { name: 'SurvivorNet' },
  { name: 'Meta' },
  { name: 'Harlem Capital' },
  { name: 'Ethereum' },
]

const homeJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': 'https://deepdivefilms.com/#organization',
    name: 'Deep Dive Films',
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
    name: 'Deep Dive Films',
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
        description="Brooklyn-based branded edutainment studio. We make documentary films that educate your audience and build your brand. 55% average view-through rate."
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
