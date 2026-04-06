import { useParams } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { getReviewById, issues } from '../data/mockData'

export function AuditDetailPage() {
  const params = useParams()
  const review = getReviewById(params.id)
  const linkedIssues = issues.filter((issue) => review.issueIds.includes(issue.id))

  return (
    <div>
      <PageHeader
        title={`${review.id} — ${review.title}`}
        subtitle="Review scope, evidence planning, and linked issue management for audit and examiner readiness."
        actions={<button className="primary-button">Request Evidence</button>}
      />

      <div className="detail-grid detail-grid-wide">
        <SectionCard title="Review profile">
          <div className="metric-list">
            <div><span>Type</span><strong>{review.type}</strong></div>
            <div><span>Status</span><strong>{review.status}</strong></div>
            <div><span>Owner</span><strong>{review.owner}</strong></div>
            <div><span>Entity</span><strong>{review.entity}</strong></div>
            <div><span>Target End Date</span><strong>{review.targetEndDate}</strong></div>
            <div><span>Linked Issues</span><strong>{review.linkedIssues}</strong></div>
          </div>
          <div className="callout-box">
            <strong>Scope</strong>
            <p>{review.scope}</p>
          </div>
        </SectionCard>

        <SectionCard title="Requested evidence">
          <ul className="plain-list spaced-list">
            {review.requestedEvidence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Linked issues">
          <div className="stack-list">
            {linkedIssues.map((issue) => (
              <div className="stack-row" key={issue.id}>
                <div>
                  <strong>{issue.id} — {issue.title}</strong>
                  <p>{issue.department} • {issue.status}</p>
                </div>
                <div>{issue.exposureScore}</div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
