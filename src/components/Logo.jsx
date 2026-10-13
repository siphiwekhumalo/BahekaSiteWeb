export default function Logo({ className = '' }) {
  return (
    <a href="#top" className={`group flex items-center gap-2.5 ${className}`} aria-label="Baheka Technology home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-gold-400 shadow-lg shadow-brand-500/20 transition-transform duration-300 group-hover:rotate-6">
        <span className="font-display text-lg font-bold text-ink-950">B</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-white">Baheka</span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400">Technology</span>
      </span>
    </a>
  )
}
