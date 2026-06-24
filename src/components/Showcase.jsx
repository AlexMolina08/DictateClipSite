import { motion } from 'framer-motion';
import { Accent } from './Accent';
import { Counter } from './Counter';
import { COPY } from '../content/copy';

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-12% 0px' },
};

// Each card demonstrates one caption style from auge's catalog. Dark "screen"
// cards so the type reads the way it does over footage.
function StyleCard({ name, children, delay = 0 }) {
  return (
    <motion.div
      {...reveal}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className="relative flex aspect-[5/4] flex-col items-center justify-center overflow-hidden rounded-2xl bg-ink-900 p-4 ring-1 ring-ink-700/60 shadow-float"
    >
      <div className="flex flex-1 items-center justify-center">{children}</div>
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-400">
        {name}
      </span>
    </motion.div>
  );
}

const pulse = {
  initial: { scale: 0.9, opacity: 0.5 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
};

export function Showcase() {
  return (
    <section className="border-y border-ink-200 bg-cream-50">
      <div className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-32">
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral-600">
            {COPY.showcase.label}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tightest text-ink-900 md:text-5xl">
            <Accent text={COPY.showcase.headline} />
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-sans text-lg leading-relaxed text-ink-500">
            {COPY.showcase.body}
          </p>
        </motion.div>

        {/* Caption-style previews */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <StyleCard name="Viral" delay={0}>
            <div className="font-caption text-2xl leading-none">
              <span className="text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.45)]">THIS </span>
              <motion.span
                {...pulse}
                className="inline-block rounded-[0.28em] bg-[#FFE03B] px-[0.28em] py-[0.04em] text-ink-950"
              >
                CAKE
              </motion.span>
            </div>
          </StyleCard>

          <StyleCard name="Karaoke" delay={0.06}>
            <div className="font-caption text-2xl leading-none">
              <span className="text-coral-400">IS </span>
              <span className="text-white">AMAZING</span>
            </div>
          </StyleCard>

          <StyleCard name="Punch" delay={0.12}>
            <motion.div
              {...pulse}
              className="font-caption text-4xl italic leading-none text-coral-500"
            >
              INSANE
            </motion.div>
          </StyleCard>

          <StyleCard name="Clean" delay={0.18}>
            <div className="font-sans text-xl font-medium lowercase text-white">
              wait for it
            </div>
          </StyleCard>

          <StyleCard name="Pill" delay={0.24}>
            <motion.div
              {...pulse}
              className="rounded-full bg-coral-500 px-4 py-1.5 font-caption text-xl text-white shadow-float"
            >
              best in town
            </motion.div>
          </StyleCard>
        </div>

        {/* Contextual life-asset row, with a live counter */}
        <motion.div
          {...reveal}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
        >
          {COPY.showcase.assets.map((a) => (
            <span
              key={a}
              className="rounded-full border border-ink-200 bg-cream-100 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-500"
            >
              {a}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-coral-200 bg-coral-50 px-3.5 py-1.5 font-caption text-sm text-coral-700">
            <Counter to={1240} /> views
          </span>
        </motion.div>
      </div>
    </section>
  );
}
