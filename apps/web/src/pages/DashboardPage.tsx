import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { dashboardStats, departments, entities, issueSourceMix, issues, metricBands, operatingOutlook, reviews, upcomingDeadlines, workflowRules } from '../data/mockData'
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

  const spotlightIssue = [...visibleIssues].sort((a, b) => b.exposureScore - a.exposureScore)[0]

  return (
    <div>
      <PageHeader
        title="Executive Dashboard"
        subtitle="Enterprise visibility into issue aging, review activity, and exposure trends with a more visible live-system shell."
        actions={<button className="primary-button">Create Issue</button>}
      />

      <section className="hero-panel">
        <div>
          <div className="header-kicker">Portfolio View</div>
          <h3>{selectedEntity === 'Enterprise' ? 'Enterprise compliance command center' : selectedEntity}</h3>
          <p>
            Monitor imported findings, remediation pressure, evidence readiness, and review coverage from one workspace.
            The layout is intentionally moving toward a production-style bank operations interface.
          </p>
          <div className="hero-actions">
            <button className="primary-button">Open Exposure View</button>
            <button className="secondary-button">Review Audit Queue</button>
          </div>
        </div>
        <div className="hero-side-card">
          <span className="eyebrow">Spotlight Issue</span>
          <strong>{spotlightIssue.id}</strong>
          <p>{spotlightIssue.title}</p>
          <div className="row-badges">
            <StatusBadge label={spotlightIssue.severity} />
            <StatusBadge label={spotlightIssue.status} />
          </div>
          <div className="hero-meta">
            <div><span>Exposure</span><strong>{spotlightIssue.exposureScore}</strong></div>
            <div><span>Due Date</span><strong>{spotlightIssue.dueDate}</strong></div>
          </div>
        </div>
      </section>

      <div className="outlook-strip">
        {operatingOutlook.map((item) => (
          <div className="outlook-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <div className="stats-grid">
        {dashboardStats.map((stat) => (
          <div key={stat.label} className="stat-card stat-card-enhanced">
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
            <StatusBadge label={stat.tone === 'critical' ? 'Critical' : stat.tone === 'warning' ? 'Watch' : stat.tone === 'info' ? 'Active' : 'Open'} />
          </div>
        ))}
      </div>

      <SectionCard title="Program readiness bands" subtitle="Visual scorecard so each push looks and feels more like a real operating system.">
        <div className="progress-band-grid">
          {metricBands.map((band) => (
            <div className="progress-card" key={band.label}>
              <div className="progress-card-header">
                <span>{band.label}</span>
                <strong>{band.value}</strong>
              </div>
              <div className="progress-track"><div className="progress-fill" style={{ width: `${band.progress}%` }} /></div></div>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="dashboard-grid">
        <SectionCard title="Entity exposure snapshot" subtitle={`Current scope: ${selectedEntity}`}>
          <div className="portfolio-grid">
            {entities.map((entity) => (
              <div className="portfolio-card" key={entity.id}>
                <div className="portfolio-topline">
                  <span>{entity.type}</span>
                  <strong>{entity.exposure}</strong>
                </div>
                <h4>{entity.name}</h4>
                <p>{entity.jurisdiction}</p>
                <div className="portfolio-metrics">
                  <div><span>Open Issues</span><strong>{entity.openIssues}</strong></div>
                  <div><span>Reviews</span><strong>{entity.activeReviews}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Deadline watchlist" subtitle="Upcoming dates that should stand out in management reporting.">
          <div className="stack-list">
            {upcomingDeadlines.map((item) => (
              <div className="stack-row" key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.owner}</p>
                </div>
                <div className="row-badges">
                  <StatusBadge label={item.date} tone={item.tone as 'critical' | 'warning' | 'info'} />
                </div>
              </div>
            ))}
          </div>
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
          <div className="source-grid">
            {issueSourceMix.map((item) => (
              <div className="source-card" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Workflow rule watchlist" subtitle="Visible governance rules before deeper backend automation is added.">
          <div className="stack-list">
            {workflowRules.map((rule) => (
              <div className="stack-row" key={rule.id}>
                <div>
                  <strong>{rule.name}</strong>
                  <p>{rule.trigger}</p>
                </div>
                <StatusBadge label={rule.status} tone={rule.status === 'Active' ? 'success' : 'warning'} />
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Review timeline" subtitle="Current scoped review portfolio.">
          <div className="stack-list">
            {visibleReviews.map((review) => (
              <div className="stack-row" key={review.id}>
                <div>
                  <strong>{review.id} — {review.title}</strong>
                  <p>{review.type} • {review.owner} • target {review.targetEndDate}</p>
                </div>
                <div className="row-badges">
                  <StatusBadge label={review.status} />
                  <StatusBadge label={`${review.linkedIssues} linked issues`} tone="info" />
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
