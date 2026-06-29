// Editorial section header: a mono index + short accent rule above the
// serif title (with an optional mono sub-label). Echoes the hero's line.
export default function SectionHeader({ index, title, sublabel, className = '' }) {
  return (
    <div className={`mb-10 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs text-accent tracking-widest">{index}</span>
        <span className="h-px w-12 bg-accent/50" />
      </div>
      <div className="flex items-baseline gap-3 flex-wrap">
        <h2 className="font-display text-3xl md:text-4xl text-text">{title}</h2>
        {sublabel && <span className="font-mono text-xs text-muted">{sublabel}</span>}
      </div>
    </div>
  )
}
