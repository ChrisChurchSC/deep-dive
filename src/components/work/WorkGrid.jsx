import { useState } from 'react'
import styles from './WorkGrid.module.css'
import WorkCard from './WorkCard'

const PAGE_SIZE = 6

export default function WorkGrid({ projects, showFilter = false }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeIndustry, setActiveIndustry] = useState('All')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const categories = ['All', ...new Set(projects.map(p => p.category).filter(Boolean))]
  const industries = ['All', ...new Set(projects.map(p => p.industry).filter(Boolean))]

  const filtered = projects.filter(p => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory
    const indMatch = activeIndustry === 'All' || p.industry === activeIndustry
    return catMatch && indMatch
  })

  const shown = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  const handleFilterChange = () => setVisible(PAGE_SIZE)

  return (
    <div className={styles.root}>
      {showFilter && (
        <div className={styles.filters}>
          <div className={styles.filterBar}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => { setActiveCategory(cat); handleFilterChange() }}
              >
                {cat}
              </button>
            ))}
          </div>
          <select
            className={styles.industrySelect}
            value={activeIndustry}
            onChange={e => { setActiveIndustry(e.target.value); handleFilterChange() }}
          >
            {industries.map(ind => (
              <option key={ind} value={ind}>{ind === 'All' ? 'All Industries' : ind}</option>
            ))}
          </select>
        </div>
      )}

      {shown.length === 0 ? (
        <div className={styles.empty}>No projects in this category yet.</div>
      ) : (
        <div className={styles.gridWrap}>
          <div className={styles.grid}>
            {shown.map(project => (
              <WorkCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
          {hasMore && (
            <div className={styles.fadeOverlay}>
              <button className={styles.loadMoreBtn} onClick={() => setVisible(v => v + PAGE_SIZE)}>
                Load more
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  )
}
