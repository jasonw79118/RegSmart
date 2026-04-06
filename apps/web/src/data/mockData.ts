export const APP_VERSION = '04.06.2026.0004'

export const entities = [
  { id: 'ENT-001', name: 'RegSmart National Bank', type: 'Lead Bank', jurisdiction: 'Federal / Texas', openIssues: 19, activeReviews: 4, exposure: '$2.4M' },
  { id: 'ENT-002', name: 'RegSmart Mortgage Services', type: 'Subsidiary', jurisdiction: 'Multi-State', openIssues: 8, activeReviews: 2, exposure: '$610K' },
  { id: 'ENT-003', name: 'RegSmart Payments Operations', type: 'Business Unit', jurisdiction: 'Federal / Card / NACHA', openIssues: 5, activeReviews: 1, exposure: '$185K' }
]

export const dashboardStats = [
  { label: 'Open Issues', value: '32', tone: 'neutral' },
  { label: 'Overdue Actions', value: '7', tone: 'warning' },
  { label: 'Active Reviews', value: '7', tone: 'info' },
  { label: 'High Exposure Items', value: '4', tone: 'critical' }
]

export const issues = [
  {
    id: 'ISS-1001',
    title: 'CTR process timing gap',
    severity: 'High',
    owner: 'BSA Team',
    status: 'Assigned',
    lifecycleStage: 'Assigned',
    entity: 'RegSmart National Bank',
    source: 'Internal Audit',
    department: 'BSA / AML',
    dueDate: '2026-05-01',
    potentialFineRange: '$25K-$100K',
    exposureScore: 78,
    rootCause: 'Manual exception handling steps and aging queues were not aligned after transaction volume changes.',
    description: 'Internal audit noted delayed aggregation and filing workflow steps for certain cash activity cases.',
    actionPlan: 'Rebuild exception handling, update procedures, retrain staff, and validate 60-day sample output.',
    timeline: [
      'Identified by Internal Audit on 2026-03-04',
      'Triage completed on 2026-03-08',
      'Assigned to BSA Officer on 2026-03-09',
      'Action plan draft approved on 2026-03-12'
    ],
    evidence: ['Procedure revision draft', 'Training roster', 'Alert handling sample set']
  },
  {
    id: 'ISS-1002',
    title: 'Complaint escalation control weakness',
    severity: 'Moderate',
    owner: 'Compliance',
    status: 'Validation Review',
    lifecycleStage: 'Validation Review',
    entity: 'RegSmart National Bank',
    source: 'Compliance Monitoring',
    department: 'Consumer Compliance',
    dueDate: '2026-04-22',
    potentialFineRange: '$10K-$40K',
    exposureScore: 54,
    rootCause: 'Complaint taxonomy and workflow ownership standards diverged between front-line and second-line teams.',
    description: 'Escalation thresholds for complaint categories were inconsistently documented between front-line and compliance operations.',
    actionPlan: 'Consolidate complaint taxonomy, refresh escalation matrix, and test weekly routing controls.',
    timeline: [
      'Identified by Compliance Monitoring on 2026-02-19',
      'Corrective action launched on 2026-02-28',
      'Evidence submitted on 2026-03-26',
      'Validation review opened on 2026-04-02'
    ],
    evidence: ['Complaint escalation matrix', 'Weekly QA tracker', 'Updated workflow map']
  },
  {
    id: 'ISS-1003',
    title: 'Vendor due diligence file deficiency',
    severity: 'Critical',
    owner: 'Vendor Management',
    status: 'Remediation In Progress',
    lifecycleStage: 'Remediation In Progress',
    entity: 'RegSmart Mortgage Services',
    source: 'Examiner',
    department: 'Third-Party Risk',
    dueDate: '2026-04-18',
    potentialFineRange: '$50K-$250K',
    exposureScore: 91,
    rootCause: 'Critical diligence refreshes were not triggered on schedule after vendor scope expansion.',
    description: 'Critical vendor file lacked current financial review and business continuity evidence for a mortgage servicing provider.',
    actionPlan: 'Obtain refreshed diligence package, perform gap assessment, and route to executive review for residual risk decision.',
    timeline: [
      'Examiner finding uploaded on 2026-03-14',
      'Executive escalation triggered on 2026-03-15',
      'Vendor package request sent on 2026-03-16'
    ],
    evidence: ['Exam excerpt', 'Vendor request email', 'Interim risk memo']
  },
  {
    id: 'ISS-1004',
    title: 'OFAC interdiction parameter drift',
    severity: 'High',
    owner: 'Payments Operations',
    status: 'Identified',
    lifecycleStage: 'Identified',
    entity: 'RegSmart Payments Operations',
    source: 'Self-Identified Management Issue',
    department: 'Payments Risk',
    dueDate: '2026-04-29',
    potentialFineRange: '$15K-$85K',
    exposureScore: 73,
    rootCause: 'Alert tuning assumptions were not refreshed after expansion into a new payment rail.',
    description: 'Alert tuning review found outdated exclusion parameters after product expansion into new payment rails.',
    actionPlan: 'Validate interdiction rules, re-baseline tuning assumptions, and perform targeted retrospective review.',
    timeline: [
      'Self-identified on 2026-04-03',
      'Pending triage assignment'
    ],
    evidence: ['Parameter comparison sheet']
  }
]

export const reviews = [
  {
    id: 'REV-2001',
    type: 'Internal Audit',
    title: 'Deposit Operations Review',
    status: 'In Progress',
    entity: 'RegSmart National Bank',
    owner: 'Internal Audit',
    scope: 'Branch cash controls, account maintenance, teller overrides, and exception handling.',
    linkedIssues: 2,
    issueIds: ['ISS-1001', 'ISS-1002'],
    requestedEvidence: ['Branch exception logs', 'Teller override approvals', 'Deposit operations procedures'],
    targetEndDate: '2026-05-16'
  },
  {
    id: 'REV-2002',
    type: 'Compliance Review',
    title: 'UDAAP Monitoring Review',
    status: 'Planning',
    entity: 'RegSmart National Bank',
    owner: 'Compliance',
    scope: 'Complaints, marketing, adverse action communication, and exception testing.',
    linkedIssues: 1,
    issueIds: ['ISS-1002'],
    requestedEvidence: ['Complaint inventory', 'Marketing approval logs', 'Adverse action sample set'],
    targetEndDate: '2026-06-02'
  },
  {
    id: 'REV-2003',
    type: 'Exam',
    title: 'BSA/AML Examination Support',
    status: 'Open',
    entity: 'RegSmart National Bank',
    owner: 'BSA Officer',
    scope: 'Risk assessment, CIP/CDD, monitoring, SAR decisioning, and independent testing support.',
    linkedIssues: 3,
    issueIds: ['ISS-1001', 'ISS-1003', 'ISS-1004'],
    requestedEvidence: ['BSA risk assessment', 'Alert tuning package', 'Independent testing report'],
    targetEndDate: '2026-04-30'
  }
]

export const users = [
  { name: 'Karen Holt', role: 'Institution Admin', entity: 'Enterprise', department: 'Administration', status: 'Active' },
  { name: 'Marcus Reed', role: 'Audit Admin', entity: 'RegSmart National Bank', department: 'Internal Audit', status: 'Active' },
  { name: 'Tina Perez', role: 'Compliance Admin', entity: 'RegSmart National Bank', department: 'Compliance', status: 'Active' },
  { name: 'Brent Collins', role: 'Manager', entity: 'RegSmart Mortgage Services', department: 'Vendor Management', status: 'Provisioning' },
  { name: 'Alyssa Vaughn', role: 'Security Admin', entity: 'Enterprise', department: 'Information Security', status: 'Active' }
]

export const issueSourceMix = [
  { label: 'Internal Audit', value: 12 },
  { label: 'Compliance', value: 8 },
  { label: 'Examiner', value: 5 },
  { label: 'Management', value: 7 }
]

export const evidenceItems = [
  { id: 'EVD-3001', linkedTo: 'ISS-1001', source: 'Internal Audit Workpaper', retention: '7 Years', redactionStatus: 'Masked Ready' },
  { id: 'EVD-3002', linkedTo: 'REV-2003', source: 'Exam Request Package', retention: 'Exam Cycle', redactionStatus: 'Review Pending' },
  { id: 'EVD-3003', linkedTo: 'ISS-1003', source: 'Vendor Diligence Upload', retention: 'Vendor Record', redactionStatus: 'Masked Ready' }
]

export function getIssueById(id?: string) {
  return issues.find((issue) => issue.id === id) ?? issues[0]
}

export function getReviewById(id?: string) {
  return reviews.find((review) => review.id === id) ?? reviews[0]
}

export const helpSections = [
  {
    title: 'System Overview',
    bullets: [
      'RegSmart is a cloud-based compliance, audit, and issue management operating system for banks.',
      'The platform starts in full enterprise mode so a lead bank, subsidiaries, departments, and shared services can all be represented.',
      'Every core workflow is designed to support examination-ready evidence, issue tracking, and future AI-assisted review.'
    ]
  },
  {
    title: 'Navigation and Core Workspaces',
    bullets: [
      'Dashboard gives enterprise visibility into issue counts, active reviews, and exposure trends.',
      'Issues Tracker handles findings from internal audit, compliance testing, examiners, outside auditors, and management self-identification.',
      'Audits & Reviews organizes review scopes, ownership, target dates, and linked issues.',
      'Evidence Center is the foundation for file intake, retention controls, redaction readiness, and future AI analysis.',
      'Entities & Departments supports the bank structure from enterprise to department level.',
      'Users & Roles is the starting point for institution administration and controlled access.'
    ]
  },
  {
    title: 'Issue Lifecycle',
    bullets: [
      'Issues move from identification to triage, assignment, remediation, evidence submission, validation, and closure.',
      'Every issue should capture source, severity, status, owner, due date, linked evidence, and exposure context.',
      'Imported findings from internal audit, compliance, external audit, and examiners should follow the same lifecycle as internally created items.'
    ]
  },
  {
    title: 'Authentication and Scope',
    bullets: [
      'Protected routes now keep workspaces behind sign-in instead of allowing direct access from the URL.',
      'The entity selector in the top bar is the current foundation for enterprise-aware views and future permission scoping.',
      'Future phases should move this from demo state to persistent authentication and enforced role access.'
    ]
  },
  {
    title: 'Versioning and Upgrades',
    bullets: [
      'The program version is shown in the bottom-left so successful pushes can be confirmed quickly.',
      'Version format is month.day.full-year.build-counter to support controlled releases.',
      'The codebase is structured to allow continuous upgrades without rebuilding the system from scratch.'
    ]
  }
]
