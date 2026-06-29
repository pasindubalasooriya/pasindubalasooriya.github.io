import { useTheme } from '../lib/theme'
import { SunIcon, MoonIcon } from './icons'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-md border border-line text-muted hover:text-accent hover:border-accent transition-colors ${className}`}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
