import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Logo from './Logo.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import { Link } from '../router.jsx'
import { navLinks } from '../data/content.js'

export default function Navbar({ path }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the current page, or on the home page the section currently in view
  useEffect(() => {
    const pageLink = navLinks.find((l) => !l.section && l.href === path)
    if (pageLink) {
      setActive(pageLink.href)
      return
    }
    setActive('')
    const sections = navLinks
      .filter((l) => l.section)
      .map((l) => document.getElementById(l.section))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`/#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [path])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink-950/70 py-3 backdrop-blur-xl' : 'py-5'
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                  active === link.href ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle id="theme-desktop" />
          <a href="#contact" className="btn-primary hidden !py-2.5 xl:inline-flex">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="container-x lg:hidden"
          >
            <div className="glass mt-3 max-h-[calc(100svh-6rem)] overflow-y-auto rounded-2xl bg-ink-900/95 p-4">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-medium hover:bg-white/5 ${
                        active === link.href ? 'bg-white/5 text-white' : 'text-slate-200'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-3 border-t border-white/10 px-4 pt-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Theme</p>
                <ThemeToggle id="theme-mobile" showLabels className="w-full" />
              </div>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
