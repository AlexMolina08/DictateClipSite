import { motion } from 'framer-motion';
import { Accent } from './Accent';
import { KineticCaption } from './KineticCaption';
import { LoopVideo } from './LoopVideo';
import { Waveform } from './Waveform';
import { COPY } from '../content/copy';

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-12% 0px' },
};

// A small dark "phone screen" frame shared by the three step visuals.
function Screen({ children }) {
  return (
    <div className="relative mb-7 aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ink-900 ring-1 ring-ink-700/60 shadow-float">
      {children}
    </div>
  );
}

// 01 — a raw, unedited take: real footage under a recorder overlay.
function RawTake() {
  return (
    <Screen>
      <LoopVideo
        mp4="/assets/raw-take.mp4"
        webm="/assets/raw-take.webm"
        poster="/assets/raw-take-poster.webp"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* legibility gradients top + bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink-950/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-950/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 py-2.5">
        <span className="flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-white">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-coral-500" />
          REC
        </span>
        <span className="font-mono text-[10px] text-white/80">0:47</span>
      </div>
      <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.16em] text-white/85">
        Raw take
      </span>
    </Screen>
  );
}

// 02 — auge shapes it: captions + a contextual asset.
function Shaped() {
  return (
    <Screen>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-3">
        <KineticCaption
          phrases={[
            ['THIS', 'CAKE'],
            ['IS', 'INSANE'],
          ]}
          size="text-2xl"
        />
        <Waveform className="w-1/2 text-ink-500" accentAt={13} />
      </div>
      <div className="absolute right-3 top-3 rounded-full bg-coral-500 px-2 py-0.5 font-caption text-xs text-white shadow-float">
        🔥 +1
      </div>
    </Screen>
  );
}

// 03 — post it.
function Posted() {
  const targets = ['TikTok', 'Reels', 'Shorts', 'LinkedIn'];
  return (
    <Screen>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral-500 text-lg text-white shadow-float">
          ✓
        </span>
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {targets.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink-700 bg-ink-800 px-2.5 py-1 font-mono text-[10px] text-ink-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
        Ready to post
      </span>
    </Screen>
  );
}

const VISUALS = [RawTake, Shaped, Posted];

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-32">
      <motion.div {...reveal} transition={{ duration: 0.5 }} className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral-600">
          {COPY.how.label}
        </p>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tightest text-ink-900 md:text-5xl">
          <Accent text={COPY.how.headline} />
        </h2>
      </motion.div>

      <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-3">
        {COPY.how.steps.map((step, i) => {
          const Visual = VISUALS[i];
          return (
            <motion.div
              key={step.n}
              {...reveal}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
            >
              <Visual />
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-coral-500">{step.n}</span>
                <h3 className="font-display text-2xl tracking-tight text-ink-900">
                  {step.title}
                </h3>
              </div>
              <p className="mt-2.5 font-sans text-[15px] leading-relaxed text-ink-500">
                {step.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
