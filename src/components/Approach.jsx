import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from './SectionHeading.jsx'
import { process } from '../data/content.js'

export default function Approach() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="approach" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="Our approach"
            title="A proven path from"
            highlight="idea to impact"
            description="Every engagement follows a clear, collaborative delivery model, keeping risk low, momentum high and your teams in control."
          />
          <div className="mt-10 grid grid-cols-2 gap-4">
            {[
              ['Agile', 'Two-week delivery sprints'],
              ['Transparent', 'Shared boards & demos'],
              ['Secure', 'Security built in, not bolted on'],
              ['Flexible', 'Onshore, nearshore & hybrid teams'],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <p className="font-display font-semibold text-white">{t}</p>
                <p className="mt-1 text-xs text-slate-400">{d}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={ref} className="relative pl-10 sm:pl-14">
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-white/10 sm:left-[19px]" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[15px] top-0 w-px bg-gradient-to-b from-brand-400 to-gold-400 sm:left-[19px]"
          />
          <ol className="space-y-14">
            {process.map((p, i) => (
              <motion.li
                key={p.step}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative"
              >
                <span className="absolute -left-10 top-1 grid h-8 w-8 place-items-center rounded-full border border-brand-400/40 bg-ink-950 font-display text-xs font-bold text-brand-300 sm:-left-14 sm:h-10 sm:w-10 sm:text-sm">
                  {p.step}
                </span>
                <div className="glass rounded-3xl bg-ink-900/40 p-6 sm:p-8">
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-400">{p.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
