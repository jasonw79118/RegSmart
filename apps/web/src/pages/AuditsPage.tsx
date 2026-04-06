import { PageHeader } from '../components/PageHeader'

const reviews = [
  { id: 'REV-2001', type: 'Internal Audit', title: 'Deposit Operations Review', status: 'In Progress' },
  { id: 'REV-2002', type: 'Compliance Review', title: 'UDAAP Monitoring Review', status: 'Planning' },
  { id: 'REV-2003', type: 'Exam', title: 'BSA/AML Examination Support', status: 'Open' }
]

export function AuditsPage() {
  return (
    <div>
      <PageHeader title="Audits & Reviews" subtitle="Manage audits, compliance reviews, and exam support work." />
      <div className="panel">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id}>
                <td>{review.id}</td>
                <td>{review.type}</td>
                <td>{review.title}</td>
                <td>{review.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
