import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { billTrackerItems } from '../data/mockData'

function hotspotTone(score: number): 'critical' | 'warning' | 'info' {
  if (score >= 90) return 'critical'
  if (score >= 75) return 'warning'
  return 'info'
}

export function BillsPage() {
  const sortedBills = [...billTrackerItems].sort((a, b) => b.hotspotScore - a.hotspotScore)

  return (
    <div>
      <PageHeader
        title="Bills & Deadlines"
        subtitle="Track legislative items, early adoption dates, hard deadlines, and likely operational hotspots."
      />
      <div className="dashboard-grid">
        <SectionCard title="Bills register" subtitle="Legislative tracking with early adoption and hard deadline focus.">
          <div className="table-shell">
            <table className="data-table">
              <thead>
                <tr><th>ID</th><th>Bill</th><th>Jurisdiction</th><th>Stage</th><th>Early Adoption</th><th>Hard Deadline</th><th>Hotspot</th></tr>
              </thead>
              <tbody>
                {sortedBills.map((bill) => (
                  <tr key={bill.id}>
                    <td>{bill.id}</td>
                    <td className="table-title-cell"><strong>{bill.title}</strong><span>{bill.source} • owner: {bill.owner}</span></td>
                    <td>{bill.jurisdiction}</td>
                    <td>{bill.stage}</td>
                    <td>{bill.earlyAdoptionDate}</td>
                    <td>{bill.hardDeadlineDate}</td>
                    <td><StatusBadge label={`${bill.hotspotScore}`} tone={hotspotTone(bill.hotspotScore)} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
