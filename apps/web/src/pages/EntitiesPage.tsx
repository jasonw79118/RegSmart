import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
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
        <table className="data-table">
          <thead>
            <tr>
              <th>Entity ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Jurisdiction</th>
              <th>Open Issues</th>
              <th>Active Reviews</th>
              <th>Exposure</th>
            </tr>
          </thead>
          <tbody>
            {entities.map((entity) => (
              <tr key={entity.id}>
                <td>{entity.id}</td>
                <td>{entity.name}</td>
                <td>{entity.type}</td>
                <td>{entity.jurisdiction}</td>
                <td><StatusBadge label={String(entity.openIssues)} tone="warning" /></td>
                <td>{entity.activeReviews}</td>
                <td>{entity.exposure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>
    </div>
  )
}
