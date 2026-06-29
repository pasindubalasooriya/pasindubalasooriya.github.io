import { useState } from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import { Stagger, StaggerItem } from './Stagger'
import { techstack } from '../data/techstack'
import { useTheme } from '../lib/theme'

// Icon from Simple Icons CDN, rendered monochrome in the current theme's text
// color. Falls back to a letter tile if the slug is empty or the CDN 404s.
function TechIcon({ name, slug }) {
  const { theme } = useTheme()
  const [failed, setFailed] = useState(false)
  const showImg = slug && !failed
  const color = theme === 'dark' ? 'F0EDE8' : '1A1814'

  if (!showImg) {
    return (
      <div className="w-8 h-8 flex items-center justify-center rounded bg-bg border border-line font-mono text-sm text-text">
        {name.charAt(0)}
      </div>
    )
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color}`}
      alt=""
      aria-hidden="true"
      className="w-8 h-8"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function TechStack() {
  return (
    <Section id="techstack" className="max-w-content mx-auto px-6 py-24 md:py-32">
      <SectionHeader index="04" title="Tech Stack" />

      <div className="flex flex-col gap-10">
        {techstack.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs text-muted uppercase tracking-widest mb-5">
              {group.category}
            </h3>
            <Stagger className="grid grid-cols-[repeat(auto-fill,minmax(88px,1fr))] gap-x-4 gap-y-7">
              {group.items.map((item) => (
                <StaggerItem
                  key={item.name}
                  className="group flex flex-col items-center gap-2.5 text-center"
                >
                  <span className="transition-transform duration-200 group-hover:scale-110">
                    <TechIcon name={item.name} slug={item.slug} />
                  </span>
                  <span className="text-xs text-muted group-hover:text-accent transition-colors">
                    {item.name}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        ))}
      </div>
    </Section>
  )
}
