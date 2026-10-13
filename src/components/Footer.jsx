import { ArrowUp, Linkedin, Github, Twitter } from 'lucide-react'
import Logo from './Logo.jsx'
import { Link } from '../router.jsx'
import { navLinks, services } from '../data/content.js'
import { products } from '../data/products.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/10 bg-ink-950 pt-14 sm:pt-20">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Digital transformation and custom software engineering for ambitious organisations worldwide. Proudly
              South African.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub' },
                { icon: Twitter, label: 'X / Twitter' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-brand-400/50 hover:text-brand-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Company" links={[...navLinks, { label: 'Contact', href: '#contact' }]} />
          <FooterColumn title="Services" links={services.map((s) => ({ label: s.title, href: '/#services' }))} />
          <FooterColumn
            title="Products"
            links={[
              ...products.map((p) => ({ label: p.name, href: `/products#${p.id}` })),
              { label: 'All products', href: '/products' },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-white/10 py-8 text-center text-sm text-slate-500 sm:mt-16 md:flex-row md:text-left">
          <p>© {year} Baheka Technology (Pty) Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">POPIA</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white transition hover:-translate-y-0.5 hover:border-brand-400/50"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden text-center font-display text-[22vw] font-bold leading-[0.8] tracking-tighter text-white/[0.03]"
      >
        BAHEKA
      </p>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-300 sm:text-sm">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-sm text-slate-400 transition hover:text-brand-300">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
