import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { APP_VERSION, helpSections } from '../data/mockData'

export function HelpPage() {
  return (
    <div>
      <PageHeader
        title="Help & User Guide"
        subtitle="Living documentation for RegSmart. This page expands as features are added so users always have current guidance."
      />

      <div className="dashboard-grid help-grid">
        <SectionCard title="Current release guidance" subtitle="Use the version in the lower-left corner to confirm successful updates after pushes.">
          <div className="callout-box">
            <strong>Current version: {APP_VERSION}</strong>
            <p>This build adds protected routes, enterprise entity switching, issue filtering, the evidence center, and deeper audit-to-issue linkage.</p>
          </div>
        </SectionCard>

        {helpSections.map((section) => (
          <SectionCard key={section.title} title={section.title}>
            <ul className="plain-list spaced-list">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </SectionCard>
        ))}
      </div>
    </div>
  )
}
