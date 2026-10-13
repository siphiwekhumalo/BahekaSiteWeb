import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarCheck, Check, Boxes } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'
import ProductPreview from '../components/ProductPreview.jsx'
import Contact from '../components/Contact.jsx'
import { Link } from '../router.jsx'
import { products, productPillars } from '../data/products.js'

function ProductsHero() {
  return (
    <section id="top" className="relative isolate pb-12 pt-32 sm:pb-16 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-grid-fade bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)] sm:bg-[size:56px_56px]" />
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="eyebrow">
            <Boxes className="h-3.5 w-3.5" /> Baheka products
          </span>
          <h1 className="mt-6 text-[2.1rem] font-bold leading-[1.08] tracking-tight xs:text-4xl sm:text-5xl lg:text-6xl">
            Operating systems for the industries <span className="text-gradient">that move economies</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Proven, configurable platforms for construction, agriculture and finance, engineered by Baheka and ready
            to deploy in weeks, not years.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:mt-16 sm:gap-4 md:grid-cols-3">
          {products.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <Link
                  href={`#${p.id}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-900/60 p-4 transition-colors hover:border-gold-400/40"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-300 ring-1 ring-white/10">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-lg font-semibold text-white">{p.name}</span>
                    <span className="block truncate text-xs text-slate-400">{p.category}</span>
                  </span>
                  <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProductNav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    products.forEach((p) => {
      const el = document.getElementById(p.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="sticky top-16 z-40 border-y border-white/10 bg-ink-950/80 backdrop-blur-xl">
      <div className="container-x">
        <nav aria-label="Products" className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 py-2 sm:mx-0 sm:justify-center sm:px-0">
          {products.map((p) => (
            <Link
              key={p.id}
              href={`#${p.id}`}
              className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === p.id ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {active === p.id && (
                <motion.span
                  layoutId="product-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-brand-400/30 bg-brand-400/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              {p.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

function ProductSection({ product, reverse }) {
  const Icon = product.icon
  return (
    <section id={product.id} className="relative scroll-mt-32 border-b border-white/5 py-20 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className={reverse ? 'lg:order-2' : ''}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/10 text-brand-300 ring-1 ring-white/10">
                <Icon className="h-6 w-6" />
              </span>
              <span className="text-gradient text-xs font-semibold uppercase tracking-[0.2em]">{product.category}</span>
            </div>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">{product.name}</h2>
            <p className="mt-3 font-display text-xl font-medium text-white/90 sm:text-2xl">{product.tagline}</p>
            <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">{product.description}</p>

            <ul className="mt-6 space-y-2">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-slate-200">
                  <Check className="h-4 w-4 shrink-0 text-gold-400" /> {h}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.audience.map((a) => (
                <span key={a} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
                  {a}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 xs:flex-row">
              <Link href="#contact" className="btn-primary">
                <CalendarCheck className="h-4 w-4" /> Request a demo
              </Link>
              <Link href={`#${product.id}-features`} className="btn-ghost">
                See features <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <div className={reverse ? 'lg:order-1' : ''}>
            <ProductPreview id={product.id} />
          </div>
        </div>

        <div id={`${product.id}-features`} className="mt-16 scroll-mt-36 sm:mt-20">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            What's inside {product.name}
          </h3>
          <div className="mt-6 grid gap-3 xs:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {product.features.map((f, i) => {
              const FIcon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-ink-900/50 p-5 transition-colors hover:border-brand-400/40"
                >
                  <FIcon className="h-5 w-5 text-brand-300" />
                  <p className="mt-3 font-display font-semibold text-white">{f.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{f.body}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function Pillars() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Baheka products"
          title="Platforms that fit"
          highlight="the way you work"
          description="Every Baheka product is backed by our engineering team, so it can be tailored, integrated and extended as your business grows."
        />
        <div className="mt-12 grid gap-3 xs:grid-cols-2 sm:mt-16 sm:gap-4 lg:grid-cols-4">
          {productPillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center transition-colors hover:border-gold-400/40"
            >
              <p className="text-gradient font-display text-xl font-semibold">{p.title}</p>
              <p className="mt-2 text-sm text-slate-400">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductNav />
      {products.map((p, i) => (
        <ProductSection key={p.id} product={p} reverse={i % 2 === 1} />
      ))}
      <Pillars />
      <Contact />
    </>
  )
}
