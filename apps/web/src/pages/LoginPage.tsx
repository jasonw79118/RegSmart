export function LoginPage() {
  return (
    <div className="login-screen">
      <div className="login-card">
        <h1>RegSmart</h1>
        <p>Salesforce-style compliance, audit, and issue management for banks.</p>
        <div className="form-grid">
          <label>
            Institution Email
            <input type="email" placeholder="name@institution.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
        </div>
        <button className="primary-button">Sign In</button>
        <p className="helper-copy">Structure is ready for future SSO and MFA integration.</p>
      </div>
    </div>
  )
}
