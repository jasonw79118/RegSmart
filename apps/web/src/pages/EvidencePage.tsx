import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { evidenceItems } from '../data/mockData'

export function EvidencePage() {
  return (
    <div>
      <PageHeader
        title="Evidence Center"
        subtitle="Track uploaded support, external findings, validation packages, and future AI review inputs across issues and reviews."
        actions={<button className="primary-button">Upload Evidence</button>}
      />

      <div className="dashboard-grid">
        <SectionCard title="Evidence intake workflow" subtitle="Supports institution uploads and outside issue packages from audit, compliance, auditor, or examiner sources.">
          <ol className="plain-list spaced-list ordered-list">
            <li>Upload the source file or support package.</li>
            <li>Tag the linked issue or review.</li>
            <li>Apply retention class and masking requirements.</li>
            <li>Route for validation or future AI pre-review.</li>
          </ol>
        </SectionCard>

        <SectionCard title="Current evidence register" subtitle="Foundation for future redaction, masking, and AI extraction.">
          <table className="data-table compact-table">
            <thead>
              <tr>
                <th>Evidence ID</th>
                <th>Linked To</th>
                <th>Source</th>
                <th>Retention</th>
                <th>Redaction</th>
              </tr>
            </thead>
            <tbody>
              {evidenceItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.linkedTo}</td>
                  <td>{item.source}</td>
                  <td>{item.retention}</td>
                  <td><StatusBadge label={item.redactionStatus} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionCard>
      </div>
    </div>
  )
}
