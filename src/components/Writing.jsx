import { useMemo, useState } from 'react'
import Section from './Section'
import SectionHeader from './SectionHeader'
import { Stagger, StaggerItem } from './Stagger'
import { ArrowUpRightIcon } from './icons'
import { writing } from '../data/writing'

// Teal-palette gradients for the generated thumbnails (no real images).
// Fixed in both themes, so the thumbnail letter stays light for contrast.
const palettes = [
  'linear-gradient(135deg, #0F6E56, #1D9E75)',
  'linear-gradient(135deg, #0A5A42, #1D9E75)',
  'linear-gradient(135deg, #1D9E75, #0A5A42)',
  'linear-gradient(135deg, #134e3a, #26C08E)',
]

export default function Writing() {
  const [filter, setFilter] = useState('All')

  const tabs = useMemo(
    () => ['All', ...Array.from(new Set(writing.map((w) => w.category)))],
    [],
  )

  const visible = filter === 'All' ? writing : writing.filter((w) => w.category === filter)

  return (
    <Section id="writing" className="max-w-content mx-auto px-6 py-24 md:py-32">
      <SectionHeader index="05" title="Writing" />

      <div className="flex flex-wrap gap-2 mb-10">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
              filter === t
                ? 'border-accent text-accent'
                : 'border-line text-muted hover:text-text'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <Stagger key={filter} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((a, i) => (
          <StaggerItem
            as="a"
            key={a.url}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="group rounded-xl border border-line bg-surface overflow-hidden flex flex-col transition-all duration-300 hover:border-accent hover:shadow-[0_10px_40px_-15px_rgba(29,158,117,0.45)]"
          >
            <div
              className="relative h-32 flex items-center justify-center overflow-hidden"
              style={{ background: palettes[i % palettes.length] }}
            >
              {/* Letter tile is always rendered as the base layer; the cover
                  image sits on top and simply reveals it if it fails to load. */}
              <span className="font-display text-5xl text-white/95">{a.title.charAt(0)}</span>
              {a.image && (
                <img
                  src={`${import.meta.env.BASE_URL}${a.image}`}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              )}
            </div>
            <div className="p-5 flex flex-col flex-1">
              <span className="font-mono text-[11px] text-accent">{a.category}</span>
              <h3 className="font-display text-lg text-text mt-1.5 leading-snug group-hover:text-accent transition-colors">
                {a.title}
              </h3>
              <div className="mt-auto pt-4 flex items-center justify-between font-mono text-[11px] text-muted">
                <span>Medium · {a.date} · {a.readTime}</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 transition-all duration-300 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  )
}
