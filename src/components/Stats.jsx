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
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950 px-4 py-10 sm:rounded-[2rem] sm:px-12 sm:py-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 animate-spin-slow rounded-full border border-dashed border-gold-400/20" />
          <dl className="relative grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse text-center">
                <dt className="mt-2 text-xs uppercase tracking-wider text-slate-400 sm:mt-3 sm:text-sm sm:tracking-widest">{s.label}</dt>
                <dd className="font-display text-3xl font-bold text-white xs:text-4xl sm:text-5xl lg:text-6xl">
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
