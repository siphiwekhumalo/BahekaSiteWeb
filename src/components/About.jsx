import { motion } from 'framer-motion'
import { MapPin, Globe2, Users } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { values } from '../data/content.js'

const hubs = [
  { city: 'Johannesburg', label: 'Headquarters', top: '72%', left: '54%' },
  { city: 'London', label: 'Europe', top: '24%', left: '48%' },
  { city: 'Dubai', label: 'Middle East', top: '42%', left: '62%' },
  { city: 'New York', label: 'Americas', top: '32%', left: '26%' },
]

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About Baheka"
            title="Rooted in Africa,"
            highlight="built for the world"
            description="Baheka Technology was founded in South Africa with a simple belief: world-class software can come from anywhere. Today our engineers, designers and strategists partner with organisations across continents and industries to deliver technology that moves businesses forward."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-gold-400/40"
              >
                <p className="font-display text-lg font-semibold text-white">{v.title}</p>
                <p className="mt-1 text-sm text-slate-400">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="glass relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-ink-900/60">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {hubs.slice(1).map((h) => (
                <motion.path
                  key={h.city}
                  d={`M54 72 Q ${(54 + parseFloat(h.left)) / 2} ${Math.min(72, parseFloat(h.top)) - 18} ${parseFloat(h.left)} ${parseFloat(h.top)}`}
                  fill="none"
                  stroke="url(#arc)"
                  strokeWidth="0.4"
                  strokeDasharray="1.5 1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, delay: 0.4 }}
                />
              ))}
              <defs>
                <linearGradient id="arc" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0" stopColor="#3ee0a5" />
                  <stop offset="1" stopColor="#ffc94d" />
                </linearGradient>
              </defs>
            </svg>

            {hubs.map((h, i) => (
              <div key={h.city} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: h.top, left: h.left }}>
                <span className="relative flex h-3.5 w-3.5">
                  <span
                    className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-60 ${
                      i === 0 ? 'bg-brand-400' : 'bg-gold-400'
                    }`}
                  />
                  <span
                    className={`relative inline-flex h-3.5 w-3.5 rounded-full ${i === 0 ? 'bg-brand-400' : 'bg-gold-400'}`}
                  />
                </span>
                <span className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-ink-950/80 px-2 py-1 text-[11px] font-medium text-white backdrop-blur">
                  {h.city}
                  <span className="ml-1 text-slate-500">· {h.label}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            {[
              { icon: MapPin, label: 'HQ', value: 'Johannesburg' },
              { icon: Globe2, label: 'Reach', value: '4 continents' },
              { icon: Users, label: 'Team', value: '120+ experts' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <Icon className="h-5 w-5 text-brand-400" />
                <p className="mt-2 text-[11px] uppercase tracking-widest text-slate-500">{label}</p>
                <p className="text-sm font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
