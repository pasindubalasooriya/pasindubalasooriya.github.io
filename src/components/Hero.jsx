import { motion, useReducedMotion } from 'framer-motion'
import { profile } from '../lib/profile'

export default function Hero() {
  const reduce = useReducedMotion()

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center max-w-content mx-auto px-6 overflow-hidden"
    >
      {/* Soft radial teal glow behind the name for depth. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 left-0 top-1/3 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent/20 blur-[130px]"
      />

      <p className="font-mono text-sm text-muted tracking-wide">
        {profile.role} · {profile.location}
      </p>

      {/* The only entrance animation: a thin teal line drawing left-to-right. */}
      <motion.div
        className="h-0.5 bg-accent my-6 origin-left"
        style={{ width: 60 }}
        initial={reduce ? false : { scaleX: 0 }}
        animate={reduce ? undefined : { scaleX: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      <h1 className="font-display text-text leading-[1.05]" style={{ fontSize: 'clamp(48px, 9vw, 80px)' }}>
        {profile.name}
      </h1>

      <p className="mt-5 text-lg md:text-xl text-muted max-w-xl">
        {profile.tagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={() => scrollTo('projects')}
          className="px-5 py-2.5 rounded-md border border-accent text-accent text-sm font-medium hover:bg-accent hover:text-bg transition-colors"
        >
          View Projects
        </button>
        <button
          onClick={() => scrollTo('writing')}
          className="px-5 py-2.5 rounded-md border border-transparent text-muted text-sm font-medium hover:text-text transition-colors"
        >
          Read Writing
        </button>
      </div>

      {profile.openToWork && (
        <div className="mt-12 inline-flex items-center gap-2.5 self-start rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted">
          <span className="relative flex h-2.5 w-2.5">
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            )}
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          Open to internships
        </div>
      )}
    </section>
  )
}
