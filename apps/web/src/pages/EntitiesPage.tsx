import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { entities } from '../data/mockData'

export function EntitiesPage() {
  return (
    <div>
      <PageHeader
        title="Entities & Legal Structure"
        subtitle="Full multi-entity structure from day one so RegSmart can scale from a single bank to complex organizations."
        actions={<button className="primary-button">Add Entity</button>}
      />

      <SectionCard title="Institution hierarchy" subtitle="Lead bank, subsidiaries, and business units scoped for role-based administration.">
        <div className="portfolio-grid">
          {entities.map((entity) => (
            <div className="portfolio-card" key={entity.id}>
              <div className="portfolio-topline">
                <span>{entity.id}</span>
                <strong>{entity.exposure}</strong>
              </div>
              <h4>{entity.name}</h4>
              <p>{entity.type} • {entity.jurisdiction}</p>
              <div className="portfolio-metrics">
                <div><span>Open Issues</span><strong>{entity.openIssues}</strong></div>
                <div><span>Reviews</span><strong>{entity.activeReviews}</strong></div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  )
}
