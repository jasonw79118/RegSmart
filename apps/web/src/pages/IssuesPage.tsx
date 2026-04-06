import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'

const issues = [
  { id: 'ISS-1001', title: 'CTR process timing gap', severity: 'High', owner: 'BSA Team', status: 'Assigned' },
  { id: 'ISS-1002', title: 'Complaint escalation control weakness', severity: 'Moderate', owner: 'Compliance', status: 'Validation Review' },
  { id: 'ISS-1003', title: 'Vendor due diligence file deficiency', severity: 'Critical', owner: 'Vendor Mgmt', status: 'Remediation In Progress' }
]

export function IssuesPage() {
  return (
    <div>
      <PageHeader title="Issues" subtitle="Track findings from identification to closure." />
      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Severity</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id}>
                <td><Link to={`/issues/${issue.id}`}>{issue.id}</Link></td>
                <td>{issue.title}</td>
                <td>{issue.severity}</td>
                <td>{issue.owner}</td>
                <td>{issue.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
