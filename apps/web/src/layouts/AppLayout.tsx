import { NavLink, Outlet } from 'react-router-dom'
import { APP_VERSION } from '../data/mockData'
import { useAuth } from '../context/AuthContext'

const sections = [
  {
    label: 'Workspaces',
    links: [
      { to: '/dashboard', label: 'Dashboard' },
      { to: '/issues', label: 'Issues Tracker' },
      { to: '/audits', label: 'Audits & Reviews' },
      { to: '/evidence', label: 'Evidence Center' }
    ]
  },
  {
    label: 'Structure',
    links: [
      { to: '/entities', label: 'Entities' },
      { to: '/departments', label: 'Departments' },
      { to: '/admin/users', label: 'Users & Roles' },
      { to: '/workflow', label: 'Workflow Settings' }
    ]
  },
  {
    label: 'Support',
    links: [
      { to: '/help', label: 'Help & User Guide' }
    ]
  }
]

export function AppLayout() {
  const { user, availableEntities, selectedEntity, setSelectedEntity, logout } = useAuth()

  return (
    <div className="shell">
      <aside className="sidebar">
        <div>
          <div className="brand">
            <div className="brand-mark">RS</div>
            <div>
              <h1>RegSmart</h1>
              <p>Regulatory Intelligence & Audit OS</p>
            </div>
          </div>

          {sections.map((section) => (
            <div className="nav-section" key={section.label}>
              <p className="nav-section-title">{section.label}</p>
              <nav className="nav">
                {section.links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="version-label">Version</div>
          <div className="version-value">{APP_VERSION}</div>
        </div>
      </aside>

      <main className="content-shell">
        <header className="topbar">
          <div className="topbar-left">
            <div>
              <strong>Enterprise Mode</strong>
              <p>Lead bank + subsidiaries + business units enabled from the start.</p>
            </div>
            <label className="entity-switcher">
              <span>Entity Scope</span>
              <select value={selectedEntity} onChange={(event) => setSelectedEntity(event.target.value)}>
                {availableEntities.map((entity) => (
                  <option key={entity} value={entity}>{entity}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="topbar-user">
            <span className="user-chip">{user?.role}</span>
            <span className="user-name">{user?.name}</span>
            <button className="secondary-button" onClick={logout}>Log Out</button>
          </div>
        </header>
        <main className="content">
          <Outlet />
        </main>
      </main>
    </div>
  )
}
