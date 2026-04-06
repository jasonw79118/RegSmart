import { useParams } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { getReviewById } from '../data/mockData'

export function AuditDetailPage() {
  const { id } = useParams()
  const review = getReviewById(id)

  return (
    <div>
      <PageHeader
        title={`${review.id} — ${review.title}`}
        subtitle="Review workbench for audit, compliance review, and exam support."
        actions={<button className="primary-button">Upload Findings</button>}
      />
      <div className="detail-grid detail-grid-wide">
        <SectionCard title="Review summary" subtitle="Core review metadata and ownership.">
          <div className="metric-list">
            <div><span>Type</span><strong>{review.type}</strong></div>
            <div><span>Status</span><strong><StatusBadge label={review.status} /></strong></div>
            <div><span>Entity</span><strong>{review.entity}</strong></div>
            <div><span>Owner</span><strong>{review.owner}</strong></div>
            <div><span>Linked issues</span><strong>{review.linkedIssues}</strong></div>
            <div><span>Target end</span><strong>{review.targetEndDate}</strong></div>
          </div>
        </SectionCard>
        <SectionCard title="Scope" subtitle="Exam or audit scope for the review record.">
          <p>{review.scope}</p>
        </SectionCard>
        <SectionCard title="Imported finding support" subtitle="External reports can be uploaded and turned into issue records.">
          <ul className="plain-list">
            <li>Map findings from auditor, examiner, or compliance uploads.</li>
            <li>Route extracted issues to departments and owners.</li>
            <li>Retain source linkage while managing remediation centrally.</li>
          </ul>
        </SectionCard>
      </div>
    </div>
  )
}
