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
      <div className="login-card">
        <h1>RegSmart</h1>
        <p className="body-copy">Cloud-based compliance, audit, and issue management built for banks with scalable enterprise structure from day one.</p>

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

        <button className="primary-button" onClick={() => {
          login(email, password)
          navigate(redirectPath, { replace: true })
        }}>
          Sign In
        </button>

        <p className="helper-copy">Demo sign-in enables protected routes, entity switching, and role-aware header behavior. Version {APP_VERSION}</p>
      </div>
    </div>
  )
}
