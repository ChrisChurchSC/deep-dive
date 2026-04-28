import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/global/SEO'
import VideoEmbed from '../components/work/VideoEmbed'
import VideoCarousel from '../components/work/VideoCarousel'
import WorkCard from '../components/work/WorkCard'
import SectionLabel from '../components/primitives/SectionLabel'
import CTASection from '../components/home/CTASection'
import Reveal from '../components/primitives/Reveal'
import { projects } from '../data/projects'
import styles from './CaseStudyPage.module.css'

export default function CaseStudyPage() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  const related = projects.filter(p => p.slug !== slug && p.videoUrl).slice(0, 3)

  const seoDesc = project.stat
    ? `${project.client} — ${project.format}. ${project.stat} ${project.statLabel}. ${project.description}`
    : `${project.client} — ${project.format}. ${project.description}`

  return (
    <>
      <SEO
        title={`${project.client} — ${project.title}`}
        description={seoDesc}
        canonical={`/work/${slug}`}
        ogType="article"
        breadcrumbs={[
          { name: 'Work', url: '/work' },
          { name: project.client, url: `/work/${slug}` },
        ]}
      />

      {/* Header */}
      <section className={styles.header}>
        <div className="shell">
          <Reveal><p className={styles.eyebrow}>{project.client}</p></Reveal>
          <Reveal delay={1}><h1 className={styles.title}>{project.title}</h1></Reveal>
          <Reveal delay={2}><div className={styles.meta}>
            {project.format && <span className={styles.chip}>{project.format}</span>}
            {project.category && <span className={styles.chip}>{project.category}</span>}
            {project.industry && <span className={styles.chip}>{project.industry}</span>}
            {project.tags?.map(tag => (
              <span key={tag} className={styles.chip}>{tag}</span>
            ))}
          </div></Reveal>
        </div>
      </section>

      {/* Video */}
      <section className={styles.film}>
        {project.videos?.length > 1 ? (
          <VideoCarousel
            videos={project.videos}
            thumbnail={project.thumbnail}
            title={`${project.client} — ${project.title}`}
            portrait={project.portrait ?? false}
          />
        ) : (
          <div className="shell">
            <VideoEmbed
              embedUrl={project.embedUrl ?? project.videos?.[0]?.embedUrl ?? null}
              videoUrl={project.videoUrl ?? project.videos?.[0]?.url ?? null}
              thumbnail={project.thumbnail}
              title={`${project.client} — ${project.title}`}
              portrait={project.portrait ?? false}
            />
          </div>
        )}
      </section>

      {/* Info */}
      <section className={styles.info}>
        <div className="shell">
          <div className={styles.infoGrid}>
            <div className={styles.infoMeta}>
              <div className={styles.metaBlock}>
                <div className={styles.metaLabel}>Client</div>
                <div className={styles.metaVal}>{project.client}</div>
              </div>
              <div className={styles.metaBlock}>
                <div className={styles.metaLabel}>Format</div>
                <div className={styles.metaVal}>{project.format}</div>
              </div>
              <div className={styles.metaBlock}>
                <div className={styles.metaLabel}>Category</div>
                <div className={styles.metaVal}>{project.category}</div>
              </div>
              {project.stat && (
                <div className={styles.statBlock}>
                  <div className={styles.statVal}>{project.stat}</div>
                  <div className={styles.statLabel}>{project.statLabel}</div>
                </div>
              )}
            </div>

            <div className={styles.infoBody}>
              {project.description && <p className={styles.lead}>{project.description}</p>}
              {project.challenge && <p className={styles.body}>{project.challenge}</p>}
              {project.result && <p className={styles.body}>{project.result}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className={styles.related}>
          <div className="shell">
            <div className={styles.relatedHead}>
              <SectionLabel>More work</SectionLabel>
              <Link to="/work" className={styles.viewAll}>See all →</Link>
            </div>
            <div className={styles.relatedGrid}>
              {related.map(p => (
                <WorkCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
