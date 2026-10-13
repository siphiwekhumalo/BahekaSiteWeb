import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { industries } from '../data/content.js'

export default function Industries() {
  const [activeId, setActiveId] = useState(industries[0].id)
  const active = industries.find((i) => i.id === activeId)
  const ActiveIcon = active.icon

  return (
    <section id="industries" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Industries"
          title="Cross-industry expertise,"
          highlight="global reach"
          description="We bring deep domain knowledge to every engagement, so your technology reflects how your industry really works."
        />

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-[280px_1fr] lg:gap-8 xl:grid-cols-[320px_1fr]">
          <div
            role="tablist"
            aria-label="Industries"
            className="no-scrollbar -mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {industries.map((ind) => {
              const Icon = ind.icon
              const selected = ind.id === activeId
              return (
                <button
                  key={ind.id}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="industry-panel"
                  onClick={() => setActiveId(ind.id)}
                  className={`relative flex shrink-0 snap-start items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    selected ? 'text-white' : 'text-slate-400 hover:bg-white/[0.03] hover:text-white'
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="industry-pill"
                      className="absolute inset-0 -z-10 rounded-2xl border border-brand-400/30 bg-brand-400/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <Icon className={`h-5 w-5 ${selected ? 'text-brand-300' : ''}`} />
                  <span className="whitespace-nowrap">{ind.name}</span>
                </button>
              )
            })}
          </div>

          <div id="industry-panel" role="tabpanel" className="relative lg:min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="glass relative h-full overflow-hidden rounded-3xl bg-ink-900/60 p-6 sm:p-10 xl:p-12"
              >
                <ActiveIcon className="absolute -right-8 -top-8 h-40 w-40 text-white/[0.03] sm:h-56 sm:w-56" />
                <span className="text-gradient text-xs font-semibold uppercase tracking-[0.25em]">{active.name}</span>
                <h3 className="mt-4 text-2xl font-semibold sm:text-3xl xl:text-4xl">{active.headline}</h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">{active.body}</p>

                <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
                  {active.outcomes.map((o, i) => (
                    <motion.div
                      key={o}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                    >
                      <CheckCircle2 className="h-5 w-5 text-brand-400" />
                      <p className="mt-3 text-sm font-medium text-white">{o}</p>
                    </motion.div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-300 hover:text-white"
                >
                  Talk to our {active.name.toLowerCase()} team <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
