import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'
import { Link } from '../router.jsx'
import { products } from '../data/products.js'

export default function ProductsTeaser() {
  return (
    <section id="products" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Our products"
            title="Ready-to-deploy platforms,"
            highlight="built by Baheka"
            description="Alongside custom engineering, we build our own industry operating systems, proven platforms you can adopt and tailor to your business."
          />
          <Link href="/products" className="btn-ghost shrink-0">
            View all products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 md:grid-cols-3">
          {products.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/products#${p.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-6 transition-colors duration-300 hover:border-gold-400/40 sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/10 text-brand-300 ring-1 ring-white/10">
                      <Icon className="h-6 w-6" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{p.name}</h3>
                  <p className="text-gradient mt-1 text-xs font-semibold uppercase tracking-[0.2em]">{p.category}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.tagline}</p>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
