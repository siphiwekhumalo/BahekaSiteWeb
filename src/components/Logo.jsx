import logoUrl from '../logo/Untitled Design (2).png'
import { Link } from '../router.jsx'

// The source logo is black-on-white, so we crop just the "B" mark onto a light
// tile (keeping its original colours) and render the wordmark as live text.
export function LogoMark({ className = 'h-10 w-10' }) {
  return (
    <span
      role="img"
      aria-label="Baheka logo"
      className={`block shrink-0 rounded-xl bg-[#ffffff] bg-no-repeat shadow-sm ring-1 ring-white/15 ${className}`}
      style={{
        backgroundImage: `url("${logoUrl}")`,
        backgroundSize: '415% auto',
        backgroundPosition: '49.8% 32.7%',
      }}
    />
  )
}

export default function Logo({ className = '', tagline = true }) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`} aria-label="Baheka home">
      <LogoMark className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-bold tracking-wide text-white">BAHEKA</span>
        {tagline && (
          <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-gold-300">
            Digital Systems &amp; Solutions
          </span>
        )}
      </span>
    </Link>
  )
}
