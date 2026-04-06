import { useParams } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'

export function IssueDetailPage() {
  const { id } = useParams()

  return (
    <div>
      <PageHeader title={`Issue ${id}`} subtitle="Structured lifecycle tracking for audit, compliance, and examiner findings." />
      <div className="detail-grid">
        <div className="panel">
          <h3>Issue Summary</h3>
          <p>Source: Internal Audit</p>
          <p>Status: Assigned</p>
          <p>Severity: High</p>
          <p>Potential exposure: To be scored in later phases.</p>
        </div>
        <div className="panel">
          <h3>Action Plan</h3>
          <p>Owner assignment, remediation steps, evidence linkage, and validation workflow will expand here.</p>
        </div>
      </div>
    </div>
  )
}
