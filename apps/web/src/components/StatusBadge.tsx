type Props = {
  label: string
  tone?: 'neutral' | 'info' | 'success' | 'warning' | 'critical'
}

function inferTone(label: string): Props['tone'] {
  const value = label.toLowerCase()
  if (value.includes('critical')) return 'critical'
  if (value.includes('high')) return 'warning'
  if (value.includes('validation')) return 'info'
  if (value.includes('closed')) return 'success'
  if (value.includes('progress')) return 'warning'
  return 'neutral'
}

export function StatusBadge({ label, tone }: Props) {
  const resolvedTone = tone ?? inferTone(label)
  return <span className={`badge badge-${resolvedTone}`}>{label}</span>
}
