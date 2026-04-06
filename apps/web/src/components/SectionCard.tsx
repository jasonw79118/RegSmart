import { ReactNode } from 'react'

type Props = {
  title: string
  subtitle?: string
  actions?: ReactNode
  children: ReactNode
}

export function SectionCard({ title, subtitle, actions, children }: Props) {
  return (
    <section className="panel section-card">
      <div className="section-card-header">
        <div>
          <h3>{title}</h3>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        {actions ? <div>{actions}</div> : null}
      </div>
      {children}
    </section>
  )
}
