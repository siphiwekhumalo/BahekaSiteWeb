import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { caseStudies } from '../data/content.js'

export default function CaseStudies() {
  return (
    <section id="work" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title="Outcomes that"
            highlight="speak for themselves"
            description="A glimpse of how we've helped organisations across continents turn complexity into competitive advantage."
          />
          <a href="#contact" className="btn-ghost shrink-0">
            Discuss your project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-ink-900 p-8"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="absolute inset-0 bg-grid-fade bg-[size:32px_32px] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

              <div className="relative flex items-start justify-between gap-4">
                <span className="rounded-full border border-white/15 bg-ink-950/40 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur">
                  {c.tag}
                </span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-ink-950">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>

              <div className="relative">
                <p className="font-display text-6xl font-bold text-white">{c.result}</p>
                <p className="mt-1 text-sm text-slate-300">{c.resultLabel}</p>
                <h3 className="mt-6 text-xl font-semibold leading-snug">{c.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
