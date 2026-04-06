import { NavLink, Outlet } from 'react-router-dom'
import { APP_VERSION } from '../data/mockData'

const sections = [
  {
    label: 'Workspaces',
    links: [
      { to: '/dashboard', label: 'Dashboard' },
      { to: '/issues', label: 'Issues Tracker' },
      { to: '/audits', label: 'Audits & Reviews' }
    ]
  },
  {
    label: 'Structure',
    links: [
      { to: '/entities', label: 'Entities & Departments' },
      { to: '/admin/users', label: 'Users & Roles' }
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
          <div>
            <strong>Enterprise Mode</strong>
            <p>Lead bank + subsidiaries + business units enabled from the start.</p>
          </div>
          <div className="topbar-user">
            <span className="user-chip">Institution Admin</span>
            <span className="user-name">Karen Holt</span>
          </div>
        </header>
        <main className="content">
          <Outlet />
        </main>
      </main>
    </div>
  )
}
