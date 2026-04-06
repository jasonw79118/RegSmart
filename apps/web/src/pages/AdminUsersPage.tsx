import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { users } from '../data/mockData'

export function AdminUsersPage() {
  return (
    <div>
      <PageHeader
        title="User Administration"
        subtitle="Institution, entity, department, and role administration for full-structure banks."
        actions={<button className="primary-button">Invite User</button>}
      />
      <div className="detail-grid detail-grid-wide">
        <SectionCard title="Role model" subtitle="Built for bank-grade administration while still allowing future simplification for smaller institutions.">
          <ul className="plain-list">
            <li>Institution Admin</li>
            <li>Security Admin</li>
            <li>Compliance Admin</li>
            <li>Audit Admin</li>
            <li>Manager</li>
            <li>Reviewer</li>
            <li>Read Only / Executive / Examiner View</li>
          </ul>
        </SectionCard>

        <SectionCard title="Provisioned users" subtitle="Initial user administration shell.">
          <table className="data-table compact-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Entity</th>
                <th>Department</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.name}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.entity}</td>
                  <td>{user.department}</td>
                  <td><StatusBadge label={user.status} tone={user.status === 'Active' ? 'success' : 'warning'} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </SectionCard>
      </div>
    </div>
  )
}
