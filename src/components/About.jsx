import Section from './Section'
import SectionHeader from './SectionHeader'
import { profile, stats } from '../lib/profile'
import { LinkedInIcon, ArrowUpRightIcon } from './icons'

export default function About() {
  return (
    <Section id="about" className="max-w-content mx-auto px-6 py-24 md:py-32">
      <SectionHeader index="01" title="About" />
      <div className="grid md:grid-cols-5 gap-12 md:gap-16">
        <div className="md:col-span-3">
          <p className="text-muted leading-relaxed">
            I'm a second-year Software Engineering undergraduate at the University of Staffordshire,
            and a full-stack developer who'd rather build real things than wait until graduation to
            start. I work across the stack with Java, C# and Spring Boot, React on the front end, and
            AWS with DevOps and CI/CD practices underneath, with a soft spot for the security
            layer: IAM, OAuth2, and OIDC.
          </p>
          <p className="text-muted leading-relaxed mt-5">
            What sets me apart isn't just the stack - it's pairing engineering discipline with
            strong writing and an open-source mindset. I'm a logophile who breaks down what I learn
            into clear, digestible articles, because explaining a thing well is the same discipline
            that builds it well. Open source keeps me connected to how the industry actually moves.
          </p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-block mt-8 text-sm text-accent hover:text-accent-dim transition-colors"
          >
            Connect on LinkedIn →
          </a>

          {/* Themed LinkedIn card (custom, not the off-theme LinkedIn iframe widget). */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 block max-w-sm rounded-xl border border-line bg-surface p-5 transition-all duration-300 hover:border-accent hover:shadow-[0_10px_40px_-15px_rgba(29,158,117,0.45)]"
          >
            <div className="flex items-center gap-2 text-muted">
              <LinkedInIcon className="w-5 h-5 text-accent" />
              <span className="font-mono text-xs">LinkedIn</span>
            </div>
            <div className="mt-3 font-display text-lg text-text leading-snug">{profile.name}</div>
            <p className="text-sm text-muted mt-1">
              {profile.role} · {profile.location}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent group-hover:text-accent-dim transition-colors">
              View profile
              <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        {/* Photo 40% */}
        <div className="md:col-span-2">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="w-full rounded-xl border border-line object-cover aspect-[3/4]"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      </div>

      {/* Stats — horizontal card spanning the full width */}
      <div className="mt-12 md:mt-16 grid grid-cols-3 overflow-hidden rounded-xl border border-line bg-surface divide-x divide-line">
        {stats.map((s) => (
          <div
            key={s.label}
            className="group relative px-6 py-8 text-center transition-colors duration-300 hover:bg-accent/5"
          >
            {/* Accent bar that grows in on hover */}
            <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            <div className="font-display text-4xl md:text-5xl text-accent leading-none">
              {s.value}
            </div>
            <div className="text-sm text-muted mt-3 transition-colors duration-300 group-hover:text-text">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
