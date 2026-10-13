import { techStack } from '../data/content.js'

export default function TechMarquee() {
  const items = [...techStack, ...techStack]
  return (
    <section aria-label="Technologies we work with" className="border-y border-white/5 bg-ink-900/50 py-8">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
        Technology-agnostic. Outcome-obsessed.
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <li
              key={`${t}-${i}`}
              aria-hidden={i >= techStack.length}
              className="whitespace-nowrap font-display text-xl font-semibold text-slate-500 transition-colors hover:text-white"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
