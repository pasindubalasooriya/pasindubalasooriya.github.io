import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

// Reads the theme the pre-paint script in index.html already applied to <html>.
function getInitialTheme() {
  if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
    return 'dark'
  }
  return 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.style.colorScheme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
