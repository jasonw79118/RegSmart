import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { departments } from '../data/mockData'
import { useAuth } from '../context/AuthContext'

export function DepartmentsPage() {
  const { selectedEntity } = useAuth()
  const visibleDepartments = selectedEntity === 'Enterprise'
    ? departments
    : departments.filter((department) => department.entity === selectedEntity)

  return (
    <div>
      <PageHeader
        title="Departments"
        subtitle="Department-level structure for assigning ownership, routing workflows, and scoping issue and review visibility."
        actions={<button className="primary-button">Add Department</button>}
      />

      <SectionCard title="Department register" subtitle={`Current scope: ${selectedEntity}`}>
        <table className="data-table">
          <thead>
            <tr>
              <th>Department ID</th>
              <th>Entity</th>
              <th>Department</th>
              <th>Manager</th>
              <th>Open Issues</th>
              <th>Active Reviews</th>
            </tr>
          </thead>
          <tbody>
            {visibleDepartments.map((department) => (
              <tr key={department.id}>
                <td>{department.id}</td>
                <td>{department.entity}</td>
                <td>{department.name}</td>
                <td>{department.manager}</td>
                <td>{department.openIssues}</td>
                <td>{department.activeReviews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>
    </div>
  )
}
