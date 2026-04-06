import { PageHeader } from '../components/PageHeader'

export function DashboardPage() {
  return (
    <div>
      <PageHeader title="Executive Dashboard" subtitle="Bank-wide compliance, audit, and issue visibility." />
      <div className="stats-grid">
        <div className="stat-card"><span>Open Issues</span><strong>42</strong></div>
        <div className="stat-card"><span>Overdue Actions</span><strong>8</strong></div>
        <div className="stat-card"><span>Active Reviews</span><strong>6</strong></div>
        <div className="stat-card"><span>Critical Exposure Items</span><strong>3</strong></div>
      </div>
      <div className="panel">
        <h3>Phase 1 shell</h3>
        <p>This dashboard is the initial shell for RegSmart and will expand into executive, compliance, audit, and personal workspaces.</p>
      </div>
    </div>
  )
}
