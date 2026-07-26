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
