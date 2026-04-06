import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { dashboardStats, entities, issueSourceMix, issues, reviews } from '../data/mockData'

export function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="Enterprise Dashboard"
        subtitle="Multi-entity compliance, audit, and issue oversight for bank leadership, compliance, and audit teams. Use Help & User Guide in the left navigation for current workflow guidance."
        actions={<button className="primary-button">Create Issue</button>}
      />

      <div className="stats-grid">
        {dashboardStats.map((item) => (
          <div className="stat-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <StatusBadge label={item.tone === 'critical' ? 'Watch Immediately' : item.tone === 'warning' ? 'Needs Attention' : 'Active'} tone={item.tone as any} />
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <SectionCard title="Entity exposure snapshot" subtitle="Live structure starting with the full bank hierarchy.">
          <table className="data-table compact-table">
            <thead>
              <tr>
                <th>Entity</th>
                <th>Issues</th>
                <th>Reviews</th>
                <th>Exposure</th>
              </tr>
            </thead>
            <tbody>
              {entities.map((entity) => (
                <tr key={entity.id}>
                  <td>{entity.name}</td>
                  <td>{entity.openIssues}</td>
                  <td>{entity.activeReviews}</td>
                  <td>{entity.exposure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionCard>

        <SectionCard title="Issue source mix" subtitle="Issues imported or identified from multiple channels.">
          <div className="stack-list">
            {issueSourceMix.map((item) => (
              <div className="stack-row" key={item.label}>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.value} open or active items</p>
                </div>
                <StatusBadge label={String(item.value)} tone="info" />
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="High-priority issues" subtitle="Issues requiring executive or departmental attention.">
          <div className="stack-list">
            {issues.slice(0, 3).map((issue) => (
              <div className="stack-row" key={issue.id}>
                <div>
                  <strong>{issue.id} — {issue.title}</strong>
                  <p>{issue.entity} · {issue.department}</p>
                </div>
                <div className="row-badges">
                  <StatusBadge label={issue.severity} />
                  <StatusBadge label={issue.status} />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Reviews in motion" subtitle="Audit, compliance, and exam activity across the institution.">
          <div className="stack-list">
            {reviews.map((review) => (
              <div className="stack-row" key={review.id}>
                <div>
                  <strong>{review.id} — {review.title}</strong>
                  <p>{review.entity}</p>
                </div>
                <div className="row-badges">
                  <StatusBadge label={review.type} tone="neutral" />
                  <StatusBadge label={review.status} />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
