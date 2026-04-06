import { PageHeader } from '../components/PageHeader'
import { SectionCard } from '../components/SectionCard'
import { APP_VERSION, helpSections, releaseNotes } from '../data/mockData'

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
            <p>This release focused on making the interface read more like a working bank operations platform instead of a plain shell.</p>
          </div>
        </SectionCard>

        <SectionCard title="Key user guide points" subtitle="What users should understand immediately in the current build.">
          <ul className="plain-list spaced-list">
            <li>The entity selector changes the scope of dashboard and issue views.</li>
            <li>Issues from internal audit, compliance, outside audit, examiners, and management should all live in the same tracker.</li>
            <li>Evidence and masking controls are being built in parallel with audit and issue workflows.</li>
            <li>The version number in the lower-left corner is part of release control, not decoration.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Release notes" subtitle="Track what changed by version as the product grows.">
          <ul className="plain-list spaced-list">
            {releaseNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
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
