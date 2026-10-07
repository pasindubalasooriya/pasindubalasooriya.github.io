import Section from './Section'
import SectionHeader from './SectionHeader'
import { Stagger, StaggerItem } from './Stagger'
import { recommendations, recommendationsUrl } from '../data/recommendations'
import { LinkedInIcon } from './icons'

// Initials for the avatar, skipping honorifics like "Dr."
function initials(name) {
  return name
    .split(' ')
    .filter((w) => !w.endsWith('.'))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

export default function Recommendations() {
  return (
    <Section id="recommendations" className="max-w-content mx-auto px-6 py-24 md:py-32">
      <SectionHeader
        index="07"
        title="Recommendations"
        sublabel={`${recommendations.length} on LinkedIn`}
        className="mb-3"
      />
      <p className="text-muted mb-10">What lecturers at APIIT have said about working with me.</p>

      {/* Masonry via CSS columns so cards of different lengths pack tightly. */}
      <Stagger className="columns-1 md:columns-2 gap-6">
        {recommendations.map((r) => (
          <StaggerItem
            as="figure"
            key={r.name}
            className="break-inside-avoid mb-6 rounded-xl border border-line bg-surface p-6 md:p-7 transition-all duration-300 hover:border-accent hover:shadow-[0_10px_40px_-15px_rgba(29,158,117,0.45)]"
          >
            <span aria-hidden="true" className="block font-display text-5xl leading-none text-accent/70">
              &ldquo;
            </span>
            <blockquote className="flex flex-col gap-3 text-muted leading-relaxed -mt-2">
              {r.text.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </blockquote>

            <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-line">
              <span
                aria-hidden="true"
                className="shrink-0 w-10 h-10 rounded-full bg-accent/10 border border-accent/60 text-accent font-mono text-sm flex items-center justify-center"
              >
                {initials(r.name)}
              </span>
              <div className="min-w-0">
                <p className="text-text font-medium">{r.name}</p>
                <p className="font-mono text-xs text-muted mt-0.5 leading-relaxed">{r.title}</p>
                <p className="font-mono text-xs text-accent mt-0.5">
                  {r.relationship} · {r.date}
                </p>
              </div>
            </figcaption>
          </StaggerItem>
        ))}
      </Stagger>

      <a
        href={recommendationsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md border border-accent bg-accent/10 px-3 py-1.5 mt-4 text-sm text-accent hover:bg-accent hover:text-bg transition-colors"
      >
        <LinkedInIcon className="w-4 h-4" /> View all on LinkedIn
      </a>
    </Section>
  )
}
