import { motion } from 'framer-motion'

// Illustrative UI mock-ups for each product (sample data only).

function Frame({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-xl"
    >
      <div className="glass overflow-hidden rounded-3xl bg-ink-900/80 shadow-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-gold-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 truncate text-xs text-slate-500">{title}</span>
        </div>
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </motion.div>
  )
}

function Tile({ label, value, accent = 'text-white' }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/5 bg-white/[0.03] p-3">
      <p className="truncate text-[10px] uppercase tracking-wider text-slate-500 sm:text-[11px]">{label}</p>
      <p className={`mt-0.5 truncate font-display text-base font-semibold sm:text-lg ${accent}`}>{value}</p>
    </div>
  )
}

function ConstructPreview() {
  const tasks = [
    { name: 'Earthworks', start: 0, width: 22, color: 'bg-gold-400' },
    { name: 'Foundations', start: 15, width: 25, color: 'bg-brand-400' },
    { name: 'Structure', start: 35, width: 35, color: 'bg-brand-500' },
    { name: 'Roofing', start: 62, width: 18, color: 'bg-gold-500' },
    { name: 'Finishes', start: 72, width: 28, color: 'bg-white/40' },
  ]
  return (
    <Frame title="ConstructOS · Riverside Office Park">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <Tile label="Progress" value="58%" />
        <Tile label="Budget used" value="54%" accent="text-gold-300" />
        <Tile label="Days LTI-free" value="214" accent="text-brand-300" />
      </div>
      <div className="mt-5 space-y-3">
        {tasks.map((t, i) => (
          <div key={t.name} className="grid grid-cols-[72px_1fr] items-center gap-3 sm:grid-cols-[90px_1fr]">
            <span className="truncate text-xs text-slate-400">{t.name}</span>
            <div className="relative h-3 rounded-full bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${t.width}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                className={`absolute top-0 h-3 rounded-full ${t.color}`}
                style={{ left: `${t.start}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-xs">
        <span className="text-slate-400">Site diary submitted · 07:42</span>
        <span className="rounded-full bg-brand-500/15 px-2 py-0.5 font-semibold text-brand-300">On track</span>
      </div>
    </Frame>
  )
}

function KraalPreview() {
  const camps = [
    { name: 'Camp A', status: 'Grazing', tone: 'bg-gold-400/70' },
    { name: 'Camp B', status: 'Resting', tone: 'bg-white/10' },
    { name: 'Maize 1', status: 'Planted', tone: 'bg-brand-500/60' },
    { name: 'Camp C', status: 'Grazing', tone: 'bg-gold-400/70' },
    { name: 'Lucerne', status: 'Harvest', tone: 'bg-gold-500/90' },
    { name: 'Maize 2', status: 'Planted', tone: 'bg-brand-500/60' },
  ]
  return (
    <Frame title="KraalOS · Farm overview">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <Tile label="Cattle" value="248" />
        <Tile label="Sheep" value="1,120" accent="text-gold-300" />
        <Tile label="Rain (7d)" value="18 mm" accent="text-brand-300" />
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {camps.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.07 }}
            className={`rounded-xl p-3 ${c.tone}`}
          >
            <p className="truncate text-xs font-semibold text-white">{c.name}</p>
            <p className="truncate text-[10px] text-white/70">{c.status}</p>
          </motion.div>
        ))}
      </div>
      <ul className="mt-5 space-y-2 text-xs">
        {[
          ['Vaccination due: 32 heifers', 'Tomorrow'],
          ['Feed stock: lucerne bales', '6 days left'],
        ].map(([a, b]) => (
          <li key={a} className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2">
            <span className="truncate text-slate-300">{a}</span>
            <span className="shrink-0 text-gold-300">{b}</span>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

function NoviaPreview() {
  const holdings = [
    { name: 'Local equities', pct: 38, color: 'bg-brand-400' },
    { name: 'Global equities', pct: 27, color: 'bg-gold-400' },
    { name: 'Fixed income', pct: 22, color: 'bg-white/50' },
    { name: 'Cash & other', pct: 13, color: 'bg-white/20' },
  ]
  return (
    <Frame title="Novia · Client portfolio">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-slate-500">Portfolio value</p>
          <p className="font-display text-2xl font-bold text-white sm:text-3xl">R 12.4m</p>
        </div>
        <span className="rounded-full bg-gold-400/15 px-2.5 py-1 text-xs font-semibold text-gold-300">+8.2% YTD</span>
      </div>
      <svg viewBox="0 0 300 90" className="mt-4 h-24 w-full" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="novia-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#bf953f" stopOpacity="0.35" />
            <stop offset="1" stopColor="#bf953f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 70 L30 62 L60 66 L90 50 L120 54 L150 38 L180 44 L210 28 L240 32 L270 16 L300 20 L300 90 L0 90 Z"
          fill="url(#novia-fill)"
        />
        <motion.path
          d="M0 70 L30 62 L60 66 L90 50 L120 54 L150 38 L180 44 L210 28 L240 32 L270 16 L300 20"
          fill="none"
          style={{ stroke: 'rgb(var(--gold-300))' }}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
        />
      </svg>
      <div className="mt-4 flex h-2.5 overflow-hidden rounded-full">
        {holdings.map((h) => (
          <div key={h.name} className={h.color} style={{ width: `${h.pct}%` }} />
        ))}
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
        {holdings.map((h) => (
          <li key={h.name} className="flex items-center gap-2">
            <span className={`h-2 w-2 shrink-0 rounded-full ${h.color}`} />
            <span className="truncate text-slate-400">{h.name}</span>
            <span className="ml-auto font-semibold text-white">{h.pct}%</span>
          </li>
        ))}
      </ul>
    </Frame>
  )
}

const previews = {
  constructos: ConstructPreview,
  kraalos: KraalPreview,
  novia: NoviaPreview,
}

export default function ProductPreview({ id }) {
  const Preview = previews[id]
  return Preview ? <Preview /> : null
}
