import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { reviews } from '../data/mockData'
import { useAuth } from '../context/AuthContext'

export function AuditsPage() {
  const { selectedEntity } = useAuth()
  const visibleReviews = selectedEntity === 'Enterprise'
    ? reviews
    : reviews.filter((review) => review.entity === selectedEntity)

  return (
    <div>
      <PageHeader
        title="Audits & Reviews"
        subtitle="Register of internal audit, compliance review, and examination support activity with linked issue management."
        actions={<button className="primary-button">Create Review</button>}
      />
      <SectionCard title="Review register" subtitle="Each review is structured to connect scope, ownership, linked issues, and evidence requests.">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>Title</th>
              <th>Entity</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Linked Issues</th>
              <th>Target End Date</th>
            </tr>
          </thead>
          <tbody>
            {visibleReviews.map((review) => (
              <tr key={review.id}>
                <td><Link to={`/audits/${review.id}`}>{review.id}</Link></td>
                <td>{review.type}</td>
                <td>{review.title}</td>
                <td>{review.entity}</td>
                <td>{review.owner}</td>
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
