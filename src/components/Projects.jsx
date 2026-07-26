import Section from './Section'
import SectionHeader from './SectionHeader'
import { Stagger, StaggerItem } from './Stagger'
import { projects } from '../data/projects'
import { GitHubIcon, ExternalIcon, MediumIcon, ArrowUpRightIcon } from './icons'

export default function Projects() {
  return (
    <Section id="projects" className="max-w-content mx-auto px-6 py-24 md:py-32">
      <SectionHeader index="02" title="Projects" />

      <Stagger className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <StaggerItem
            as="article"
            key={p.title}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="group rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:border-accent hover:shadow-[0_10px_40px_-15px_rgba(29,158,117,0.45)]"
          >
            <div className="flex items-start justify-between">
              <span
                className={`font-mono text-xs ${
                  p.status === 'Live' ? 'text-accent' : 'text-muted'
                }`}
              >
                {p.status}
              </span>
              <ArrowUpRightIcon className="w-4 h-4 text-muted transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>

            <h3 className="font-display text-2xl text-text mt-2">{p.title}</h3>
            <p className="text-muted mt-2 leading-relaxed">{p.description}</p>

            <ul className="flex flex-wrap gap-2 mt-5">
              {p.tech.map((t) => (
                <li
                  key={t}
                  className="font-mono text-xs text-muted bg-bg border border-line rounded px-2 py-1"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 mt-6 text-sm">
              {p.github ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-text hover:border-accent hover:text-accent transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" /> GitHub
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-line px-3 py-1.5 text-muted/60 cursor-default">
                  <GitHubIcon className="w-4 h-4" /> Private
                </span>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-accent bg-accent/10 px-3 py-1.5 text-accent hover:bg-accent hover:text-bg transition-colors"
                >
                  <ExternalIcon /> Live Demo
                </a>
              )}
              {p.blog && (
                <a
                  href={p.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 text-text hover:border-accent hover:text-accent transition-colors"
                >
                  <MediumIcon className="w-4 h-4" /> Blog
                </a>
              )}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
