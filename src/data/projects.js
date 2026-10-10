// Portfolio projects. status: 'Live' (has a public demo) | 'Completed' | 'In Progress'
export const projects = [
  {
    title: 'AuditTrail',
    status: 'Completed',
    description:
      'Payment gateway compliance audit system that records a tamper-evident trail of identity and access events, secured with WSO2 Identity Server.',
    tech: ['Spring Boot', 'WSO2 IS', 'JWT', 'OAuth2'],
    github: 'https://github.com/pasindubalasooriya/AuditTrail',
    demo: '',
    blog: 'https://medium.com/@pasindudilshanbalasooriya/what-building-an-audit-trail-taught-me-about-wso2-identity-server-b65b16661efd',
  },
  {
    title: 'Altrium 360 Review',
    status: 'Completed',
    description:
      '360-degree performance and development review platform where every read and write passes one central authorization layer, combining RBAC, ReBAC and ABAC with SQL-scoped queries.',
    tech: ['Spring Boot', 'React', 'TypeScript', 'MySQL', 'Asgardeo'],
    github: 'https://github.com/pasindubalasooriya/360-Degree-Performance-and-Development-Review-Platform',
    demo: '',
  },
  {
    title: 'AgentID Scope Broker',
    status: 'Completed',
    description:
      "Broker that narrows an AI agent's standing authority to the smallest scope a single delegated request needs, using RFC 8693 token exchange against WSO2 Agent Manager and ThunderID.",
    tech: ['Go', 'Python', 'ThunderID', 'OAuth2'],
    github: 'https://github.com/pasindubalasooriya/agentid-scope-broker',
    demo: '',
    blog: 'https://medium.com/@pasindudilshanbalasooriya/giving-ai-agents-only-the-access-they-need-one-request-at-a-time-212692d28381',
  },
  {
    title: 'Expense Desk MCP',
    status: 'Completed',
    description:
      'Expense-approval MCP server secured with ThunderID in three layers: token scopes, per-call AuthZEN policy decisions and application rules, with an audit trail of which layer decided.',
    tech: ['Python', 'MCP', 'ThunderID', 'AuthZEN'],
    github: 'https://github.com/pasindubalasooriya/thunderid-expense-desk-mcp',
    demo: '',
    blog: 'https://medium.com/@pasindudilshanbalasooriya/securing-an-mcp-server-with-thunderid-86b0eb426ed7',
  },
  {
    title: 'ThunderID Agent Sandbox',
    status: 'Completed',
    description:
      'Local sandbox showing scoped, delegated access for an AI agent: RFC 8693 token exchange, the act claim, and a resource server that enforces scope.',
    tech: ['Python', 'Flask', 'ThunderID', 'OAuth2'],
    github: 'https://github.com/pasindubalasooriya/thunderid-agent-sandbox',
    demo: '',
    blog: 'https://medium.com/@pasindudilshanbalasooriya/i-gave-an-ai-agent-its-own-identity-heres-what-actually-happened-ee0a7cd60757',
  },
  {
    title: 'MediSync',
    status: 'In Progress',
    description: 'Multi-tenant hospital identity microservices platform.',
    tech: ['Spring Boot', 'WSO2 IS', 'OIDC'],
    github: '', // TODO: repo URL
    demo: '',
  },
  {
    title: 'WSO2 IS on AWS',
    status: 'Completed',
    description:
      'Highly available WSO2 Identity Server across two AWS availability zones, defined entirely in Terraform and tuned to run at $0 on the free tier.',
    tech: ['Terraform', 'AWS', 'WSO2 IS', 'OIDC'],
    github: 'https://github.com/pasindubalasooriya/wso2-is-aws',
    demo: '',
    blog: 'https://medium.com/@pasindudilshanbalasooriya/how-i-ran-a-real-identity-server-on-aws-without-spending-a-cent-f7c304478129',
  },
  {
    title: 'Library Management System',
    status: 'Completed',
    description:
      'Microservices library platform with GitOps delivery, .NET backend services and a React UI running on Kubernetes (K3s) on AWS.',
    tech: ['.NET', 'React', 'Docker', 'Kubernetes', 'ArgoCD'],
    github: 'https://github.com/pasindubalasooriya/LMS',
    demo: '',
  },
  {
    title: 'ExpenseFlow',
    status: 'Completed',
    description:
      'Multi-tenant team expense and reimbursement app with live currency conversion, budget-aware approvals and an immutable audit trail, deployed on Railway with CI.',
    tech: ['Laravel', 'Livewire', 'MySQL', 'MongoDB', 'Docker'],
    github: 'https://github.com/pasindubalasooriya/expenseflow',
    demo: '',
  },
  {
    title: 'CityEvents',
    status: 'Completed',
    description:
      'Flutter app for finding and sharing community events in Colombo, with live RSVPs, distance sorting by GPS, venue weather and push notifications.',
    tech: ['Flutter', 'Dart', 'Firebase', 'FCM'],
    github: 'https://github.com/pasindubalasooriya/city_events',
    demo: '',
  },
  {
    title: 'SubTrackr',
    status: 'Live',
    description:
      'Installable PWA for tracking subscriptions, costs, and renewal dates, with cloud sync and spend charts.',
    tech: ['React', 'Vite', 'Firebase', 'Tailwind'],
    github: 'https://github.com/pasindubalasooriya/finance-tracker',
    demo: 'https://subtrackr-720bb.web.app/',
  },
  {
    title: 'GreenBite',
    status: 'Live',
    description:
      'Progressive web app for wellness tracking and building healthier daily habits.',
    tech: ['JavaScript', 'PWA', 'CSS'],
    github: 'https://github.com/pasindubalasooriya/greenbite-wellness',
    demo: 'https://pasindubalasooriya.github.io/greenbite-wellness',
  },
  {
    title: 'OakTown Library',
    status: 'Completed',
    description:
      'Console-based library management system in C#, built around clean object-oriented design.',
    tech: ['C#', '.NET', 'OOP'],
    github: 'https://github.com/pasindubalasooriya/OakTownLibrary',
    demo: '',
  },
]
