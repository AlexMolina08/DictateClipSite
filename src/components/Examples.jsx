import { motion } from 'framer-motion';
import { Accent } from './Accent';
import { Waveform } from './Waveform';
import { COPY } from '../content/copy';

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-12% 0px' },
};

const POP = [0.34, 1.56, 0.64, 1];

// A finished-look auge card over REAL footage: still + caption + waveform.
// The caption punches in when the card scrolls into view.
function ExampleCard({ card, i }) {
  return (
    <motion.figure
      {...reveal}
      transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.08 }}
      className="relative aspect-[9/16] w-[200px] shrink-0 snap-start overflow-hidden rounded-[1.4rem] bg-ink-900 shadow-float ring-1 ring-ink-200"
    >
      <img
        src={`/assets/${card.img}.webp`}
        alt={`${card.type} — auge example`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-950/85 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-ink-950/55 to-transparent" />

      <figcaption className="absolute left-3 top-3 rounded-full bg-ink-950/55 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
        {card.type}
      </figcaption>

      <div className="absolute inset-x-0 bottom-9 flex justify-center px-3">
        <div className="font-caption text-xl leading-none">
          <span className="text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">
            {card.words[0]}{' '}
          </span>
          <motion.span
            initial={{ scale: 0.6, opacity: 0, rotate: -3 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: POP, delay: 0.25 + i * 0.08 }}
            className="inline-block rounded-[0.26em] bg-[#FFE03B] px-[0.26em] py-[0.03em] text-ink-950"
          >
            {card.words[1]}
          </motion.span>
        </div>
      </div>

      <Waveform className="absolute inset-x-4 bottom-3 text-white/70" accentAt={13} />
    </motion.figure>
  );
}

export function Examples() {
  return (
    <section className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-28">
      <motion.div
        {...reveal}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral-600">
          {COPY.examples.label}
        </p>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tightest text-ink-900 md:text-5xl">
          <Accent text={COPY.examples.headline} />
        </h2>
        <p className="mx-auto mt-5 max-w-lg font-sans text-lg leading-relaxed text-ink-500">
          {COPY.examples.body}
        </p>
      </motion.div>

      {/* mobile: snap scroll; desktop: 4-up grid */}
      <div className="edge-fade-x mt-12 flex snap-x gap-4 overflow-x-auto pb-2 md:justify-center md:overflow-visible md:pb-0 md:[mask-image:none]">
        {COPY.examples.cards.map((card, i) => (
          <ExampleCard key={card.img} card={card} i={i} />
        ))}
      </div>
    </section>
  );
}
