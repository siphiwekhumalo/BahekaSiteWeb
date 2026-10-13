import { ArrowUp, Linkedin, Github, Twitter } from 'lucide-react'
import Logo from './Logo.jsx'
import { navLinks, services, industries } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/10 bg-ink-950 pt-20">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
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
          <FooterColumn title="Services" links={services.map((s) => ({ label: s.title, href: '#services' }))} />
          <FooterColumn
            title="Industries"
            links={industries.slice(0, 6).map((i) => ({ label: i.name, href: '#industries' }))}
          />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-500 sm:flex-row">
          <p>© {year} Baheka Technology (Pty) Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
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
      <h4 className="text-sm font-semibold uppercase tracking-widest text-white">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-slate-400 transition hover:text-brand-300">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
