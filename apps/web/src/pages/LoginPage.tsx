import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { APP_VERSION } from '../data/mockData'
import { useAuth } from '../context/AuthContext'

export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('admin@regsmartbank.com')
  const [password, setPassword] = useState('')

  const redirectPath = (location.state as { from?: string } | null)?.from ?? '/dashboard'

  return (
    <div className="login-screen">
      <div className="login-card login-card-wide">
        <div>
          <div className="header-kicker">Enterprise Banking Shell</div>
          <h1>RegSmart</h1>
          <p className="body-copy">Cloud-based compliance, audit, and issue management built for banks with scalable enterprise structure from day one.</p>
        </div>

        <div className="login-grid">
          <div className="panel login-side-panel">
            <span className="eyebrow">What this build shows</span>
            <ul className="plain-list spaced-list">
              <li>Enterprise entity-aware navigation</li>
              <li>Issue, audit, and evidence workspaces</li>
              <li>Bottom-left release tracking for push confirmation</li>
              <li>Help page growing with the product</li>
              <li>Live interface direction closer to a bank operations platform</li>
            </ul>
          </div>

          <div>
            <div className="login-banner">
              <span>Institution-ready shell</span>
              <strong>Use the demo sign-in to enter the full-structure interface.</strong>
            </div>

            <div className="form-grid">
              <label>
                Institution Email
                <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@institution.com" />
              </label>
              <label>
                Password
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" />
              </label>
            </div>

            <button className="primary-button full-width" onClick={() => {
              login(email, password)
              navigate(redirectPath, { replace: true })
            }}>
              Sign In
            </button>

            <p className="helper-copy">Demo sign-in enables protected routes, entity switching, and role-aware header behavior. Version {APP_VERSION}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
