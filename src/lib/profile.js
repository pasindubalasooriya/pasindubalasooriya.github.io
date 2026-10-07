// Single source of truth for personal info, stats, and social links.
// TODO: replace placeholder URLs (marked below) with your real profiles.

export const profile = {
  name: 'Pasindu Dilshan Balasooriya',
  initials: 'PDB',
  role: 'Full-Stack Engineer',
  location: 'Colombo, Sri Lanka',
  tagline: 'Full-stack engineer building secure systems end to end - and writing about what matters.',
  openToWork: true,

  // Portrait shown in the About section. Drop the file at public/profile.jpg.
  photo: `${import.meta.env.BASE_URL}profile.jpg`,

  // Social / contact links
  email: 'pasindudilshanbalasooriya@gmail.com',
  github: 'https://github.com/pasindubalasooriya',
  linkedin: 'https://www.linkedin.com/in/pasindu-dilshan-balasooriya/',
  medium: 'https://medium.com/@pasindudilshanbalasooriya',

  // Research profiles
  researchgate: 'https://www.researchgate.net/profile/Pasindu-Balasooriya-4',
  scholar: 'https://scholar.google.com/citations?user=Y7KCGnwAAAAJ&hl=en',
  orcid: 'https://orcid.org/0009-0003-7994-1195',
}

// Stat block for the About section.
export const stats = [
  { value: '11', label: 'Open-source PRs merged' },
  { value: '7', label: 'Projects built' },
  { value: '23', label: 'Articles on Medium' },
]
