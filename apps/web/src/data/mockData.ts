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
    entity: 'RegSmart National Bank',
    source: 'Internal Audit',
    department: 'BSA / AML',
    dueDate: '2026-05-01',
    potentialFineRange: '$25K-$100K',
    exposureScore: 78,
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
    entity: 'RegSmart National Bank',
    source: 'Compliance Monitoring',
    department: 'Consumer Compliance',
    dueDate: '2026-04-22',
    potentialFineRange: '$10K-$40K',
    exposureScore: 54,
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
    entity: 'RegSmart Mortgage Services',
    source: 'Examiner',
    department: 'Third-Party Risk',
    dueDate: '2026-04-18',
    potentialFineRange: '$50K-$250K',
    exposureScore: 91,
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
    entity: 'RegSmart Payments Operations',
    source: 'Self-Identified Management Issue',
    department: 'Payments Risk',
    dueDate: '2026-04-29',
    potentialFineRange: '$15K-$85K',
    exposureScore: 73,
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

export function getIssueById(id?: string) {
  return issues.find((issue) => issue.id === id) ?? issues[0]
}

export function getReviewById(id?: string) {
  return reviews.find((review) => review.id === id) ?? reviews[0]
}
