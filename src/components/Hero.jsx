import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Globe2, Sparkles, Cpu, Activity, CheckCircle2 } from 'lucide-react'
import { rotatingWords } from '../data/content.js'

function RotatingWord() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), 2400)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient inline-block"
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

function DashboardCard() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 })

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  const bars = [40, 65, 50, 80, 62, 92, 74, 100]

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-500/10 to-gold-400/5 blur-2xl" />
      <div className="glass relative rounded-3xl bg-ink-900/80 p-5 shadow-2xl sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500">Transformation index</p>
            <p className="mt-1 font-display text-3xl font-bold text-white">+248%</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-brand-400/15 px-3 py-1 text-xs font-semibold text-brand-300">
            <Activity className="h-3.5 w-3.5" /> Live
          </span>
        </div>

        <div className="mt-6 flex h-36 items-end gap-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.08, ease: 'easeOut' }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-brand-600/60 to-brand-300"
            />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            { label: 'Cloud migration', value: '100%' },
            { label: 'Release cadence', value: 'Daily' },
          ].map((m) => (
            <div key={m.label} className="rounded-2xl border border-white/5 bg-white/[0.03] p-3">
              <p className="text-[11px] text-slate-500">{m.label}</p>
              <p className="font-display text-lg font-semibold text-white">{m.value}</p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="glass absolute -left-6 top-10 hidden items-center gap-2 rounded-2xl bg-ink-900/90 px-4 py-3 shadow-xl sm:flex"
      >
        <Cpu className="h-5 w-5 text-gold-300" />
        <div>
          <p className="text-[11px] text-slate-500">AI models</p>
          <p className="text-sm font-semibold text-white">In production</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="glass absolute -bottom-6 -right-4 hidden items-center gap-2 rounded-2xl bg-ink-900/90 px-4 py-3 shadow-xl sm:flex"
      >
        <CheckCircle2 className="h-5 w-5 text-brand-400" />
        <div>
          <p className="text-[11px] text-slate-500">Deployment</p>
          <p className="text-sm font-semibold text-white">Successful</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] sm:bg-[size:56px_56px]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[420px] w-[min(900px,100vw)] -translate-x-1/2 rounded-full bg-brand-600/[0.07] blur-[120px]" />

      <div className="container-x grid items-center gap-12 sm:gap-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Globe2 className="h-3.5 w-3.5 shrink-0" /> Proudly South African
            <span className="hidden sm:inline">· Delivering globally</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-[2.1rem] font-bold leading-[1.08] tracking-tight xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Engineering software
            <br />
            that helps you <RotatingWord />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            Baheka Technology is a digital transformation and custom software engineering partner. We help ambitious
            organisations across industries reimagine how they work, with technology built to last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 xs:flex-row sm:mt-10 sm:gap-4"
          >
            <a href="#contact" className="btn-primary">
              Start your transformation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-ghost">
              <Sparkles className="h-4 w-4" /> Explore our services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6 sm:mt-14 sm:gap-6 sm:pt-8"
          >
            {[
              ['150+', 'Projects'],
              ['18', 'Countries'],
              ['24/7', 'Support'],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-2xl font-bold text-white sm:text-3xl">{v}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">{l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <DashboardCard />
      </div>
    </section>
  )
}
