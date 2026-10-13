import { createContext, useContext, useEffect, useState } from 'react'

// Theme preference: 'light' | 'dark' | 'system'. The resolved theme is written to
// <html data-theme="..."> which switches the CSS variables in index.css.

const STORAGE_KEY = 'baheka-theme'
const THEME_COLORS = { dark: '#050505', light: '#fcfbf8' }
const ThemeContext = createContext(null)

const media = () => window.matchMedia('(prefers-color-scheme: dark)')

function readPreference() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark' || saved === 'system') return saved
  } catch {
    // Storage can be unavailable (private mode, blocked site data)
  }
  return 'system'
}

function applyTheme(resolved) {
  const root = document.documentElement
  root.dataset.theme = resolved
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[resolved])
}

export function ThemeProvider({ children }) {
  const [preference, setPreference] = useState(readPreference)
  const [systemDark, setSystemDark] = useState(() => media().matches)

  useEffect(() => {
    const mq = media()
    const onChange = (e) => setSystemDark(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const resolved = preference === 'system' ? (systemDark ? 'dark' : 'light') : preference

  useEffect(() => {
    applyTheme(resolved)
  }, [resolved])

  const setTheme = (value) => {
    setPreference(value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // Ignore: the choice still applies for this visit
    }
  }

  return <ThemeContext.Provider value={{ preference, resolved, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
