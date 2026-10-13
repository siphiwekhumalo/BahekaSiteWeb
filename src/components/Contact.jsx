import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { services } from '../data/content.js'
import { products } from '../data/products.js'

const initialForm = { name: '', email: '', company: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/.test(form.email)) next.email = 'Please enter a valid email'
    if (form.message.trim().length < 10) next.message = 'Tell us a little more (10+ characters)'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    // TODO: connect to your form backend / CRM endpoint
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
    setForm(initialForm)
  }

  const field =
    'w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-brand-400/60 focus:ring-2 focus:ring-brand-400/20'

  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="container-x">
        <div className="glass grid overflow-hidden rounded-3xl bg-ink-900/60 sm:rounded-[2rem] lg:grid-cols-[1fr_1.3fr]">
          <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-brand-600/10 via-ink-900 to-ink-900 p-6 sm:p-10 lg:border-b-0 lg:border-r xl:p-12">
            <span className="eyebrow">Let's talk</span>
            <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl">
              Ready to build what's <span className="text-gradient">next?</span>
            </h2>
            <p className="mt-4 text-slate-400">
              Tell us about your challenge. A senior consultant will get back to you within one business day.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'hello@bahekatech.co.za', href: 'mailto:hello@bahekatech.co.za' },
                { icon: Phone, label: 'Phone', value: '+27 (0)10 000 0000', href: 'tel:+27100000000' },
                { icon: MapPin, label: 'Office', value: 'Johannesburg, South Africa' },
              ].map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-brand-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-slate-500">{label}</p>
                    {href ? (
                      <a href={href} className="break-all font-medium text-white hover:text-brand-300 sm:break-normal">
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-white">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative p-6 sm:p-10 xl:p-12">
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[400px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-brand-400" />
                  <h3 className="mt-6 text-2xl font-semibold">Thank you!</h3>
                  <p className="mt-2 max-w-sm text-slate-400">
                    Your message is on its way. We'll be in touch within one business day.
                  </p>
                  <button type="button" onClick={() => setStatus('idle')} className="btn-ghost mt-8">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  noValidate
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                      Full name *
                    </label>
                    <input id="name" name="name" value={form.name} onChange={update} className={field} placeholder="Your name" />
                    {errors.name && <p className="mt-1.5 text-xs text-rose-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                      Work email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      className={field}
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-rose-400">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-300">
                      Company
                    </label>
                    <input id="company" name="company" value={form.company} onChange={update} className={field} placeholder="Company name" />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-300">
                      Area of interest
                    </label>
                    <select id="service" name="service" value={form.service} onChange={update} className={field}>
                      <option value="">Select a service or product</option>
                      <optgroup label="Services">
                        {services.map((s) => (
                          <option key={s.title} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Products">
                        {products.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name} ({p.category})
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={update}
                      className={`${field} resize-none`}
                      placeholder="Tell us about your project, goals and timelines..."
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-rose-400">{errors.message}</p>}
                  </div>
                  <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                      We respect your privacy. Your details are handled in line with POPIA.
                    </p>
                    <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-70 sm:w-auto">
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          Send message <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
