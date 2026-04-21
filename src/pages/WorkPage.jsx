import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import WorkGrid from '../components/work/WorkGrid'
import { projects as allProjects } from '../data/projects'
const projects = allProjects.filter(p => p.videoUrl || p.embedUrl || p.videos?.some(v => v.url || v.embedUrl))
import styles from './WorkPage.module.css'

export default function WorkPage() {
  return (
    <>
      <SEO
        title="The Work"
        description="A portfolio of branded documentary films for Google, SurvivorNet, Arbitrum, and more. Customer stories, founder films, and expert series."
        canonical="/work"
      />
      <PageHero
        eyebrow="The work"
        title="What we make."
        description="Every project starts with a story worth telling. Here's what that looks like in practice."
      />
      <section className={styles.grid}>
        <div className="shell">
          <WorkGrid projects={projects} />
        </div>
      </section>
    </>
  )
}
