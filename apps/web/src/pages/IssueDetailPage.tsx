import { useParams } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { getIssueById } from '../data/mockData'

const lifecycleStages = [
  'Identified',
  'Triage',
  'Assigned',
  'Action Plan Drafted',
  'Remediation In Progress',
  'Evidence Submitted',
  'Validation Review',
  'Closed'
]

export function IssueDetailPage() {
  const params = useParams()
  const issue = getIssueById(params.id)
  const activeStageIndex = lifecycleStages.findIndex((stage) => stage === issue.lifecycleStage)

  return (
    <div>
      <PageHeader
        title={`${issue.id} — ${issue.title}`}
        subtitle="Issue lifecycle, ownership, action planning, evidence support, and validation view."
        actions={<button className="primary-button">Add Activity Note</button>}
      />

      <div className="detail-grid detail-grid-wide">
        <SectionCard title="Issue summary">
          <div className="metric-list">
            <div><span>Severity</span><strong><StatusBadge label={issue.severity} /></strong></div>
            <div><span>Status</span><strong><StatusBadge label={issue.status} /></strong></div>
            <div><span>Exposure Score</span><strong>{issue.exposureScore}</strong></div>
            <div><span>Potential Fine Range</span><strong>{issue.potentialFineRange}</strong></div>
            <div><span>Owner</span><strong>{issue.owner}</strong></div>
            <div><span>Due Date</span><strong>{issue.dueDate}</strong></div>
          </div>
          <div className="callout-box">
            <strong>Description</strong>
            <p>{issue.description}</p>
          </div>
        </SectionCard>

        <SectionCard title="Lifecycle tracker" subtitle="Visual workflow foundation for status enforcement and future approval gates.">
          <div className="lifecycle-grid">
            {lifecycleStages.map((stage, index) => (
              <div key={stage} className={index <= activeStageIndex ? 'lifecycle-step active' : 'lifecycle-step'}>
                <strong>{index + 1}</strong>
                <span>{stage}</span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Resolution profile" subtitle="Core fields that management, auditors, and examiners typically care about first.">
          <div className="metric-list">
            <div><span>Entity</span><strong>{issue.entity}</strong></div>
            <div><span>Department</span><strong>{issue.department}</strong></div>
            <div><span>Source</span><strong>{issue.source}</strong></div>
            <div><span>Lifecycle Stage</span><strong>{issue.lifecycleStage}</strong></div>
          </div>
        </SectionCard>

        <SectionCard title="Action plan and root cause">
          <div className="callout-box">
            <strong>Root Cause</strong>
            <p>{issue.rootCause}</p>
          </div>
          <div className="callout-box">
            <strong>Corrective Action</strong>
            <p>{issue.actionPlan}</p>
          </div>
        </SectionCard>

        <SectionCard title="Evidence package">
          <ul className="plain-list spaced-list">
            {issue.evidence.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Activity timeline">
          <ol className="timeline-list spaced-list ordered-list">
            {issue.timeline.map((event) => (
              <li key={event}>{event}</li>
            ))}
          </ol>
        </SectionCard>
      </div>
    </div>
  )
}
