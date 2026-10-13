import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, highlight, description, align = 'center' }) {
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex max-w-3xl flex-col gap-5 ${alignment}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && <p className="text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>}
    </motion.div>
  )
}
