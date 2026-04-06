import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { issues } from '../data/mockData'

export function IssuesPage() {
  return (
    <div>
      <PageHeader
        title="Issues Tracker"
        subtitle="Track findings from identification through remediation, validation, and closure across all entities."
        actions={<button className="primary-button">Import Issues</button>}
      />
      <SectionCard title="Open issue register" subtitle="Supports internally identified issues plus imported findings from audit, compliance, auditors, and examiners.">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Entity</th>
              <th>Source</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Exposure</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id}>
                <td><Link to={`/issues/${issue.id}`}>{issue.id}</Link></td>
                <td>{issue.title}</td>
                <td>{issue.entity}</td>
                <td>{issue.source}</td>
                <td><StatusBadge label={issue.severity} /></td>
                <td><StatusBadge label={issue.status} /></td>
                <td>{issue.exposureScore}</td>
                <td>{issue.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>
    </div>
  )
}
