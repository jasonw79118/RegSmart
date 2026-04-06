import { PageHeader } from '../components/PageHeader'

export function AdminUsersPage() {
  return (
    <div>
      <PageHeader title="Admin Users" subtitle="Institution-level role and access administration." />
      <div className="detail-grid">
        <div className="panel">
          <h3>Roles planned</h3>
          <ul>
            <li>Institution Admin</li>
            <li>Security Admin</li>
            <li>Compliance Admin</li>
            <li>Audit Admin</li>
            <li>Manager</li>
            <li>Reviewer</li>
            <li>Read Only</li>
          </ul>
        </div>
        <div className="panel">
          <h3>Access model</h3>
          <p>Role plus scope permissions by institution, entity, department, and workflow area.</p>
        </div>
      </div>
    </div>
  )
}
