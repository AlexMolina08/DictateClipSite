import { motion } from 'framer-motion';
import { Accent } from './Accent';
import { AppStoreButton } from './AppStoreButton';
import { HeroReel } from './HeroReel';
import { COPY } from '../content/copy';

const fade = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* faint canvas texture, top-anchored */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] text-ink-200/60 dot-grid [mask-image:linear-gradient(to_bottom,#000,transparent)]" />

      <div className="mx-auto grid max-w-editorial items-center gap-12 px-6 pb-20 pt-12 md:grid-cols-12 md:gap-8 md:px-10 md:pb-28 md:pt-20">
        {/* Copy column */}
        <div className="md:col-span-6 lg:col-span-6">
          <motion.div
            {...fade}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-cream-50 px-3.5 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral-500" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
              {COPY.hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            {...fade}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
            className="mt-6 font-display text-[2.9rem] leading-[1.0] tracking-tightest text-ink-900 md:text-6xl lg:text-7xl"
          >
            <Accent text={COPY.hero.headline} />
          </motion.h1>

          <motion.p
            {...fade}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
            className="mt-6 max-w-md font-sans text-lg leading-relaxed text-ink-500 md:text-xl"
          >
            {COPY.hero.subhead}
          </motion.p>

          <motion.div
            {...fade}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.18 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <AppStoreButton />
            <a
              href="#how"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-3 font-sans text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
            >
              See how it works
              <span aria-hidden="true">↓</span>
            </a>
          </motion.div>

          <motion.ul
            {...fade}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {COPY.hero.trust.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-400"
              >
                <span className="h-1 w-1 rounded-full bg-coral-500/70" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Reel column */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="md:col-span-6 lg:col-span-6"
        >
          <HeroReel className="mx-auto w-full max-w-[360px] md:max-w-[400px]" />
        </motion.div>
      </div>
    </section>
  );
}
