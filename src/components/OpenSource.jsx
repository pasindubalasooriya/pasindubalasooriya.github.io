import Section from './Section'
import SectionHeader from './SectionHeader'
import { Stagger, StaggerItem } from './Stagger'
import { contributions } from '../data/contributions'
import { ExternalIcon } from './icons'

export default function OpenSource() {
  return (
    <Section id="opensource" className="max-w-content mx-auto px-6 py-24 md:py-32">
      <SectionHeader index="03" title="Open Source" sublabel="WSO2 repositories" className="mb-3" />
      <p className="text-muted mb-10">Contributing to the projects I want to work on.</p>

      <Stagger as="ul" className="divide-y divide-line border-t border-b border-line">
        {contributions.map((c) => (
          <StaggerItem as="li" key={c.url}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid md:grid-cols-[minmax(0,16rem)_1fr_auto] gap-2 md:gap-6 items-start md:items-center py-5"
            >
              <span className="font-mono text-sm text-accent">
                {c.repo} <span className="text-muted">{c.pr}</span>
              </span>
              <span className="text-muted text-sm leading-relaxed group-hover:text-text transition-colors">
                {c.description}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 font-mono text-xs whitespace-nowrap ${
                  c.status === 'Merged' ? 'text-accent' : 'text-muted'
                }`}
              >
                {c.status === 'Merged' ? 'Merged ✓' : 'Open'}
                <ExternalIcon className="w-3.5 h-3.5" />
              </span>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
