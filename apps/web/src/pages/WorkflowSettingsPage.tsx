import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { workflowRules } from '../data/mockData'

export function WorkflowSettingsPage() {
  return (
    <div>
      <PageHeader
        title="Workflow Settings"
        subtitle="Document the issue routing, escalation, privacy, and approval rules that will later move into configurable administration."
        actions={<button className="primary-button">Add Rule</button>}
      />

      <div className="dashboard-grid">
        <SectionCard title="Configured workflow rules" subtitle="Current phase shows visible workflow design before backend enforcement is added.">
          <table className="data-table compact-table">
            <thead>
              <tr>
                <th>Rule ID</th>
                <th>Name</th>
                <th>Trigger</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {workflowRules.map((rule) => (
                <tr key={rule.id}>
                  <td>{rule.id}</td>
                  <td>{rule.name}</td>
                  <td>{rule.trigger}</td>
                  <td>{rule.action}</td>
                  <td><StatusBadge label={rule.status} tone={rule.status === 'Active' ? 'success' : 'warning'} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionCard>

        <SectionCard title="Why this matters" subtitle="Workflow visibility is part of building an examiner-ready operating system.">
          <ul className="plain-list spaced-list">
            <li>Critical findings need documented escalation paths.</li>
            <li>Examiner and auditor findings often require elevated closure governance.</li>
            <li>Privacy-sensitive evidence should not be broadly visible before masking or access approval.</li>
            <li>Overdue items should show consistent routing logic so management reporting is explainable.</li>
          </ul>
        </SectionCard>
      </div>
    </div>
  )
}
