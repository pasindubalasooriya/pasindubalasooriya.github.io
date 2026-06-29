// Tech stack grouped by category. Icons come from Simple Icons via CDN
// (https://cdn.simpleicons.org/<slug>). If a slug has no icon, the component
// falls back to a letter tile, so an empty/unknown `slug` is safe.
// Keep this honest — only things actually used in a project or writing.
export const techstack = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', slug: 'openjdk' },
      { name: 'C#', slug: 'csharp' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'Python', slug: 'python' },
      { name: 'TypeScript', slug: 'typescript' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Spring Boot', slug: 'springboot' },
      { name: '.NET', slug: 'dotnet' },
      { name: 'React', slug: 'react' },
      { name: 'Node.js', slug: 'nodedotjs' },
    ],
  },
  {
    category: 'Identity & Security',
    items: [
      { name: 'WSO2 IS', slug: 'wso2' },
      { name: 'Asgardeo', slug: '' },
      { name: 'OAuth2', slug: '' },
      { name: 'OIDC', slug: 'openid' },
      { name: 'JWT', slug: 'jsonwebtokens' },
    ],
  },
  {
    category: 'Cloud & Infra',
    items: [
      { name: 'AWS', slug: 'amazonwebservices' },
      { name: 'Docker', slug: 'docker' },
      { name: 'Terraform', slug: 'terraform' },
      { name: 'Firebase', slug: 'firebase' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', slug: 'git' },
      { name: 'GitHub', slug: 'github' },
      { name: 'Figma', slug: 'figma' },
      { name: 'Postman', slug: 'postman' },
    ],
  },
]
