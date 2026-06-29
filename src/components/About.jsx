import Section from './Section'
import SectionHeader from './SectionHeader'
import { profile, stats } from '../lib/profile'

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
        </div>

        {/* Photo + stat block 40% */}
        <div className="md:col-span-2 flex flex-col gap-8">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            className="w-full rounded-xl border border-line object-cover aspect-[3/4]"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <div className="flex flex-col gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-5xl text-text leading-none">{s.value}</div>
                <div className="text-sm text-muted mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
