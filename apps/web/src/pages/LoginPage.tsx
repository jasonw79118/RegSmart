export function LoginPage() {
  return (
    <div className="login-screen">
      <div className="login-card">
        <h1>RegSmart</h1>
        <p>Salesforce-style compliance, audit, and issue management for multi-entity banks and regulated financial institutions.</p>
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
        <p className="helper-copy">Enterprise-mode shell is ready for future SSO, MFA, and entity-scoped access controls.</p>
      </div>
    </div>
  )
}
