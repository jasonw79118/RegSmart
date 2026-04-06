import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { dashboardStats, departments, entities, issueSourceMix, issues, reviews, workflowRules } from '../data/mockData'
import { useAuth } from '../context/AuthContext'

export function DashboardPage() {
  const { selectedEntity } = useAuth()

  const visibleIssues = selectedEntity === 'Enterprise'
    ? issues
    : issues.filter((issue) => issue.entity === selectedEntity)

  const visibleReviews = selectedEntity === 'Enterprise'
    ? reviews
    : reviews.filter((review) => review.entity === selectedEntity)

  const visibleDepartments = selectedEntity === 'Enterprise'
    ? departments
    : departments.filter((department) => department.entity === selectedEntity)

  return (
    <div>
      <PageHeader
        title="Executive Dashboard"
        subtitle="Enterprise visibility into issue aging, review activity, and exposure trends with entity scope controls ready for future permissions."
      />

      <div className="stats-grid">
        {dashboardStats.map((stat) => (
          <div key={stat.label} className="stat-card">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <StatusBadge label={stat.tone === 'critical' ? 'Critical' : stat.tone === 'warning' ? 'Watch' : stat.tone === 'info' ? 'Active' : 'Open'} />
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <SectionCard title="Entity exposure snapshot" subtitle={`Current scope: ${selectedEntity}`}>
          <table className="data-table compact-table">
            <thead>
              <tr>
                <th>Entity</th>
                <th>Open Issues</th>
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

        <SectionCard title="Department pressure points" subtitle="Manager-level concentration view for issues and review workload.">
          <div className="stack-list">
            {visibleDepartments.map((department) => (
              <div className="stack-row" key={department.id}>
                <div>
                  <strong>{department.name}</strong>
                  <p>{department.entity} • manager: {department.manager}</p>
                </div>
                <div className="row-badges">
                  <StatusBadge label={`${department.openIssues} open issues`} tone="warning" />
                  <StatusBadge label={`${department.activeReviews} active reviews`} tone="info" />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Issue source mix" subtitle="Imported findings and internal items are tracked on the same lifecycle.">
          <div className="metric-list">
            {issueSourceMix.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Workflow rule watchlist" subtitle="Visible governance rules before deeper backend automation is added.">
          <div className="stack-list">
            {workflowRules.slice(0, 3).map((rule) => (
              <div className="stack-row" key={rule.id}>
                <div>
                  <strong>{rule.name}</strong>
                  <p>{rule.trigger}</p>
                </div>
                <div className="row-badges">
                  <StatusBadge label={rule.status} tone={rule.status === 'Active' ? 'success' : 'warning'} />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Active issue priorities" subtitle="Escalation focus based on severity, exposure, and due date.">
          <div className="stack-list">
            {visibleIssues.slice(0, 3).map((issue) => (
              <div className="stack-row" key={issue.id}>
                <div>
                  <strong>{issue.id} — {issue.title}</strong>
                  <p>{issue.department} • {issue.entity}</p>
                </div>
                <div className="row-badges">
                  <StatusBadge label={issue.severity} />
                  <StatusBadge label={issue.status} />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Review queue" subtitle="Review ownership and issue linkage at a glance.">
          <div className="stack-list">
            {visibleReviews.map((review) => (
              <div className="stack-row" key={review.id}>
                <div>
                  <strong>{review.id} — {review.title}</strong>
                  <p>{review.owner} • linked issues: {review.linkedIssues}</p>
                </div>
                <div className="row-badges">
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
