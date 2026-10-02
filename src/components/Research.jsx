import Section from './Section'
import SectionHeader from './SectionHeader'
import { Stagger, StaggerItem } from './Stagger'
import { research } from '../data/research'
import { ExternalIcon, MediumIcon, TrophyIcon } from './icons'

export default function Research() {
  return (
    <Section id="research" className="max-w-content mx-auto px-6 py-24 md:py-32">
      <SectionHeader index="04" title="Research" className="mb-3" />
      <p className="text-muted mb-10">Peer-reviewed work on cloud security and compliance.</p>

      <Stagger className="flex flex-col gap-6">
        {research.map((r) => (
          <StaggerItem
            as="article"
            key={r.title}
            className="rounded-xl border border-line bg-surface p-6 md:p-8 transition-all duration-300 hover:border-accent hover:shadow-[0_10px_40px_-15px_rgba(29,158,117,0.45)]"
          >
            <div className="rounded-lg border border-accent/60 bg-accent/10 p-4 md:p-5">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent">
                <TrophyIcon className="w-4 h-4" /> Awards won
              </div>
              <ul className="flex flex-wrap gap-3 mt-3">
                {r.awards.map((a) => (
                  <li
                    key={a}
                    className="inline-flex items-center gap-2 rounded-md bg-accent text-bg px-4 py-2 shadow-[0_8px_24px_-12px_rgba(29,158,117,0.8)]"
                  >
                    <TrophyIcon className="w-5 h-5" />
                    <span className="font-display text-lg leading-none">{a} Award</span>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs text-muted mt-3">
                {r.track} track · {r.venue} {r.date.split(' ')[1]}
              </p>
            </div>

            <h3 className="font-display text-2xl md:text-3xl text-text mt-5 leading-snug">
              {r.title}
            </h3>

            <p className="font-mono text-xs text-muted mt-3 leading-relaxed">
              {r.authors.join(', ')}
            </p>
            <p className="font-mono text-xs text-accent mt-1 leading-relaxed">
              {r.venue} · {r.track} · {r.date}
            </p>

            <p className="text-muted mt-5 leading-relaxed">{r.summary}</p>

            <ul className="flex flex-wrap gap-2 mt-5">
              {r.keywords.map((k) => (
                <li
                  key={k}
                  className="font-mono text-xs text-muted bg-bg border border-line rounded px-2 py-1"
                >
                  {k}
                </li>
              ))}
            </ul>

            {(r.links.pdf || r.links.doi || r.links.blog) && (
              <div className="flex flex-wrap items-center gap-3 mt-6 text-sm">
                {r.links.pdf && (
                  <a
                    href={r.links.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-accent bg-accent/10 px-3 py-1.5 text-accent hover:bg-accent hover:text-bg transition-colors"
                  >
                    <ExternalIcon /> Read on ResearchGate
                  </a>
                )}
                {r.links.doi && (
                  <a
                    href={r.links.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-text hover:border-accent hover:text-accent transition-colors"
                  >
                    <ExternalIcon /> DOI
                  </a>
                )}
                {r.links.blog && (
                  <a
                    href={r.links.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-text hover:border-accent hover:text-accent transition-colors"
                  >
                    <MediumIcon className="w-4 h-4" /> Related article
                  </a>
                )}
              </div>
            )}
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
