import { motion } from 'framer-motion'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../theme.jsx'

const options = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
]

export default function ThemeToggle({ id = 'theme', showLabels = false, className = '' }) {
  const { preference, setTheme } = useTheme()

  return (
    <div
      role="radiogroup"
      aria-label="Colour theme"
      className={`isolate inline-flex items-center gap-0.5 rounded-full border border-white/10 bg-white/[0.04] p-1 ${className}`}
    >
      {options.map(({ value, label, icon: Icon }) => {
        const selected = preference === value
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={`${label} theme`}
            title={`${label} theme`}
            onClick={() => setTheme(value)}
            className={`relative flex items-center gap-1.5 rounded-full text-xs font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 ${
              showLabels ? 'flex-1 justify-center px-3 py-2' : 'h-7 w-7 justify-center'
            } ${selected ? 'text-white' : 'text-slate-500 hover:text-white'}`}
          >
            {selected && (
              <motion.span
                layoutId={`${id}-pill`}
                className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/10"
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
              />
            )}
            <Icon className="h-3.5 w-3.5" />
            {showLabels && <span>{label}</span>}
          </button>
        )
      })}
    </div>
  )
}
