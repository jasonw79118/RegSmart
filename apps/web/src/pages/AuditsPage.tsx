import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { reviews } from '../data/mockData'

export function AuditsPage() {
  return (
    <div>
      <PageHeader
        title="Audits & Reviews"
        subtitle="Manage internal audit, compliance review, and examiner support records across entities."
        actions={<button className="primary-button">Create Review</button>}
      />
      <SectionCard title="Review register" subtitle="Includes compliance reviews, internal audit, and examiner-driven work. ">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Title</th>
              <th>Entity</th>
              <th>Status</th>
              <th>Linked Issues</th>
              <th>Target End</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review.id}>
                <td><Link to={`/audits/${review.id}`}>{review.id}</Link></td>
                <td>{review.type}</td>
                <td>{review.title}</td>
                <td>{review.entity}</td>
                <td><StatusBadge label={review.status} /></td>
                <td>{review.linkedIssues}</td>
                <td>{review.targetEndDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>
    </div>
  )
}
