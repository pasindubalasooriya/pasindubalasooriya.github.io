import { useEffect, useState } from 'react'
import { profile } from '../lib/profile'
import { MenuIcon, CloseIcon } from './icons'
import ThemeToggle from './ThemeToggle'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'opensource', label: 'Open Source' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  // Highlight the link for the section currently in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/95 backdrop-blur border-b border-line">
      <nav className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, 'hero')}
          className="font-display text-2xl text-accent tracking-tight"
        >
          {profile.initials}
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-7 text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => handleClick(e, l.id)}
                  className={`link-underline transition-colors hover:text-text ${
                    active === l.id ? 'text-accent' : 'text-muted'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-text"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="md:hidden border-t border-line bg-surface px-6 py-4 flex flex-col gap-4 text-sm">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={(e) => handleClick(e, l.id)}
                className={`block transition-colors ${
                  active === l.id ? 'text-accent' : 'text-muted'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
