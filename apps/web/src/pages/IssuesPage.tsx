import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { StatusBadge } from '../components/StatusBadge'
import { FilterBar } from '../components/FilterBar'
import { issues } from '../data/mockData'
import { useAuth } from '../context/AuthContext'

export function IssuesPage() {
  const { selectedEntity } = useAuth()
  const [statusFilter, setStatusFilter] = useState('All')
  const [severityFilter, setSeverityFilter] = useState('All')
  const [departmentFilter, setDepartmentFilter] = useState('All')

  const visibleIssues = useMemo(() => {
    return issues.filter((issue) => {
      const entityMatch = selectedEntity === 'Enterprise' || issue.entity === selectedEntity
      const statusMatch = statusFilter === 'All' || issue.status === statusFilter
      const severityMatch = severityFilter === 'All' || issue.severity === severityFilter
      const departmentMatch = departmentFilter === 'All' || issue.department === departmentFilter
      return entityMatch && statusMatch && severityMatch && departmentMatch
    })
  }, [departmentFilter, selectedEntity, severityFilter, statusFilter])

  return (
    <div>
      <PageHeader
        title="Issues Tracker"
        subtitle="Track findings from identification through remediation, validation, and closure across all entities."
        actions={<button className="primary-button">Import Issues</button>}
      />
      <SectionCard title="Open issue register" subtitle="Supports internally identified issues plus imported findings from audit, compliance, auditors, and examiners.">
        <FilterBar
          filters={[
            {
              label: 'Status',
              value: statusFilter,
              onChange: setStatusFilter,
              options: ['All', 'Identified', 'Assigned', 'Remediation In Progress', 'Validation Review'].map((value) => ({ label: value, value }))
            },
            {
              label: 'Severity',
              value: severityFilter,
              onChange: setSeverityFilter,
              options: ['All', 'Critical', 'High', 'Moderate'].map((value) => ({ label: value, value }))
            },
            {
              label: 'Department',
              value: departmentFilter,
              onChange: setDepartmentFilter,
              options: ['All', 'BSA / AML', 'Consumer Compliance', 'Third-Party Risk', 'Payments Risk'].map((value) => ({ label: value, value }))
            }
          ]}
        />

        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Entity</th>
              <th>Department</th>
              <th>Source</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Exposure</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {visibleIssues.map((issue) => (
              <tr key={issue.id}>
                <td><Link to={`/issues/${issue.id}`}>{issue.id}</Link></td>
                <td>{issue.title}</td>
                <td>{issue.entity}</td>
                <td>{issue.department}</td>
                <td>{issue.source}</td>
                <td><StatusBadge label={issue.severity} /></td>
                <td><StatusBadge label={issue.status} /></td>
                <td>{issue.exposureScore}</td>
                <td>{issue.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </SectionCard>
    </div>
  )
}
