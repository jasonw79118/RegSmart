import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { LoginPage } from './pages/LoginPage'
import { DashboardPage } from './pages/DashboardPage'
import { IssuesPage } from './pages/IssuesPage'
import { IssueDetailPage } from './pages/IssueDetailPage'
import { AuditsPage } from './pages/AuditsPage'
import { AuditDetailPage } from './pages/AuditDetailPage'
import { AdminUsersPage } from './pages/AdminUsersPage'
import { EntitiesPage } from './pages/EntitiesPage'
import { HelpPage } from './pages/HelpPage'
import { EvidencePage } from './pages/EvidencePage'
import { ProtectedRoute } from './components/ProtectedRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/issues" element={<IssuesPage />} />
          <Route path="/issues/:id" element={<IssueDetailPage />} />
          <Route path="/audits" element={<AuditsPage />} />
          <Route path="/audits/:id" element={<AuditDetailPage />} />
          <Route path="/evidence" element={<EvidencePage />} />
          <Route path="/entities" element={<EntitiesPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
