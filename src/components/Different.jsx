import { motion } from 'framer-motion';
import { Accent } from './Accent';
import { COPY } from '../content/copy';

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-12% 0px' },
};

// Minimal 1.6px line icons, coral, matching the three axes.
const ICONS = [
  // on-device / iPhone
  <svg key="a" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M11 5.5h2" />
    <circle cx="12" cy="13" r="2.4" />
    <path d="M12 8.2v1.4M12 16.4v1.4M16.8 13h-1.4M8.6 13H7.2" />
  </svg>,
  // no credits / infinity
  <svg key="b" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 8.5c-2.2 0-3.5 1.6-3.5 3.5s1.3 3.5 3.5 3.5c3.5 0 5-7 8.5-7 2.2 0 3.5 1.6 3.5 3.5s-1.3 3.5-3.5 3.5c-3.5 0-5-7-8.5-7Z" />
  </svg>,
  // private / lock
  <svg key="c" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    <circle cx="12" cy="15.5" r="1.3" />
  </svg>,
];

export function Different() {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-ink-0">
      <div className="pointer-events-none absolute inset-0 text-ink-700/40 dot-grid [mask-image:radial-gradient(60%_60%_at_50%_0%,#000,transparent)]" />
      <div className="coral-aura pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-32">
        <motion.div {...reveal} transition={{ duration: 0.5 }} className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral-400">
            {COPY.different.label}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tightest text-ink-0 md:text-5xl">
            <Accent text={COPY.different.headline} />
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {COPY.different.points.map((p, i) => (
            <motion.div
              key={p.title}
              {...reveal}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-500/12 text-coral-400 ring-1 ring-coral-500/20">
                <span className="h-6 w-6">{ICONS[i]}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-tight text-ink-0">
                {p.title}
              </h3>
              <p className="mt-3 max-w-sm font-sans text-[15px] leading-relaxed text-ink-300">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
