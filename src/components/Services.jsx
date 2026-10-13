import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { services } from '../data/content.js'

function ServiceCard({ service, index }) {
  const Icon = service.icon

  // Spotlight that follows the cursor
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      onMouseMove={onMove}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-8 transition-colors duration-300 hover:border-brand-400/40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(400px circle at var(--x) var(--y), rgba(62,224,165,0.12), transparent 40%)',
        }}
      />
      <div className="relative">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-400/20 to-gold-400/10 text-brand-300 ring-1 ring-white/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">{service.description}</p>
        <ul className="mt-6 space-y-2">
          {service.points.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
              <Check className="h-4 w-4 shrink-0 text-brand-400" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title="End-to-end capabilities for"
          highlight="the digital enterprise"
          description="From the boardroom strategy to the last line of code, we bring the expertise to move your organisation forward, faster."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
