import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { stats } from '../data/content.js'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      <span className="text-gradient">{suffix}</span>
    </span>
  )
}

export default function Stats() {
  return (
    <section aria-label="Baheka in numbers" className="relative py-16">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-6 py-14 sm:px-12">
          <div className="absolute -right-24 -top-24 h-72 w-72 animate-spin-slow rounded-full border border-dashed border-brand-400/20" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />
          <dl className="relative grid grid-cols-2 gap-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse text-center">
                <dt className="mt-3 text-sm uppercase tracking-widest text-slate-400">{s.label}</dt>
                <dd className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
