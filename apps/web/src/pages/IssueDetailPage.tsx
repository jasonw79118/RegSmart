import { useParams } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { getIssueById } from '../data/mockData'

export function IssueDetailPage() {
  const { id } = useParams()
  const issue = getIssueById(id)

  return (
    <div>
      <PageHeader
        title={`${issue.id} — ${issue.title}`}
        subtitle="Structured lifecycle tracking for audit, compliance, management, and examiner findings."
        actions={<button className="primary-button">Add Evidence</button>}
      />
      <div className="detail-grid detail-grid-wide">
        <SectionCard title="Issue summary" subtitle="Core issue data, ownership, and exposure indicators.">
          <div className="metric-list">
            <div><span>Entity</span><strong>{issue.entity}</strong></div>
            <div><span>Source</span><strong>{issue.source}</strong></div>
            <div><span>Department</span><strong>{issue.department}</strong></div>
            <div><span>Owner</span><strong>{issue.owner}</strong></div>
            <div><span>Severity</span><strong><StatusBadge label={issue.severity} /></strong></div>
            <div><span>Status</span><strong><StatusBadge label={issue.status} /></strong></div>
            <div><span>Due Date</span><strong>{issue.dueDate}</strong></div>
            <div><span>Exposure Score</span><strong>{issue.exposureScore}</strong></div>
            <div><span>Potential Fine</span><strong>{issue.potentialFineRange}</strong></div>
          </div>
          <p className="body-copy">{issue.description}</p>
        </SectionCard>

        <SectionCard title="Action plan" subtitle="Remediation from identification to resolution.">
          <p className="body-copy">{issue.actionPlan}</p>
          <div className="callout-box">
            <strong>Lifecycle target</strong>
            <p>Identified → Logged → Triage → Assigned → Action Plan → Remediation → Evidence → Validation → Closed</p>
          </div>
        </SectionCard>

        <SectionCard title="Evidence linked" subtitle="Files and support items tied to the issue record.">
          <ul className="plain-list">
            {issue.evidence.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </SectionCard>

        <SectionCard title="Activity timeline" subtitle="Chronological record for auditability.">
          <ol className="timeline-list">
            {issue.timeline.map((item) => <li key={item}>{item}</li>)}
          </ol>
        </SectionCard>
      </div>
    </div>
  )
}
