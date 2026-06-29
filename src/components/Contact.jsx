import Section from './Section'
import { profile } from '../lib/profile'
import { MailIcon, GitHubIcon, LinkedInIcon, MediumIcon } from './icons'

const channels = [
  { label: 'Email', href: `mailto:${profile.email}`, Icon: MailIcon, external: false },
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'GitHub', href: profile.github, Icon: GitHubIcon, external: true },
  { label: 'Medium', href: profile.medium, Icon: MediumIcon, external: true },
]

export default function Contact() {
  return (
    <Section id="contact" className="max-w-content mx-auto px-6 py-24 md:py-32 text-center">
      <h2 className="font-display text-4xl md:text-5xl text-text">Let's talk.</h2>
      <p className="text-muted mt-5 max-w-xl mx-auto leading-relaxed">
        Whether it's identity, secure systems, or an idea sharp enough to be worth building —
        I'd like to hear about it. My inbox is always open.
      </p>

      <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12">
        {channels.map(({ label, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex flex-col items-center gap-2 text-accent hover:text-accent-dim transition-colors"
          >
            <Icon className="w-6 h-6" />
            <span className="text-sm">{label}</span>
          </a>
        ))}
      </div>
    </Section>
  )
}
