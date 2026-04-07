import SEO from '../components/global/SEO'
import PageHero from '../components/shared/PageHero'
import WorkGrid from '../components/work/WorkGrid'
import { projects } from '../data/projects'
import styles from './WorkPage.module.css'

export default function WorkPage() {
  return (
    <>
      <SEO
        title="The Work"
        description="A portfolio of branded documentary films for Google, SurvivorNet, and more. Customer stories, founder films, and expert series with an average 55% view-through rate."
        canonical="/work"
      />
      <PageHero
        eyebrow="The work"
        title="Films that educate. Brands that earn trust."
        description="Every project starts with a story worth telling. Here's what that looks like in practice."
      />
      <section className={styles.grid}>
        <div className="shell">
          <WorkGrid projects={projects} showFilter />
        </div>
      </section>
    </>
  )
}
