import { motion } from 'framer-motion';
import { Accent } from './Accent';
import { AppStoreButton } from './AppStoreButton';
import { FinishedFrame } from './FinishedFrame';
import { Placeholder } from './Placeholder';
import { COPY } from '../content/copy';

// Hero: wide cinematic landscape image (placeholder until the real
// art-directed "person recording to iPhone" photo lands) + the finished-frame
// cue + headline/subhead/CTA on cream below.
//
// TODO(asset): replace the landscape Placeholder with a real <picture>
//   providing a desktop landscape crop and a mobile portrait crop (AVIF/WebP).
export function Hero() {
  return (
    <section className="mx-auto max-w-editorial px-6 pt-10 md:px-10 md:pt-16">
      <div className="relative">
        {/* TODO(asset): real hero landscape image — person recording to iPhone. */}
        <Placeholder
          label="PLACEHOLDER — hero landscape image: person recording to iPhone"
          ratio="16 / 9"
          className="rounded-none"
        />

        {/* Finished-frame cue: precise editorial frame, restrained placement. */}
        <FinishedFrame className="absolute bottom-4 right-4 hidden w-[150px] md:block" />
      </div>

      {/* Mobile: finished-frame as a clean mini preview block below the image. */}
      <FinishedFrame className="mt-4 w-[120px] md:hidden" />

      <div className="max-w-2xl pt-12 md:pt-16">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral-600">
          {COPY.hero.eyebrow}
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-5 font-display text-5xl leading-[1.02] tracking-tightest text-ink-900 md:text-7xl"
        >
          <Accent text={COPY.hero.headline} />
        </motion.h1>
        <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-ink-500 md:text-xl">
          {COPY.hero.subhead}
        </p>
        <div className="mt-8">
          <AppStoreButton />
        </div>
      </div>
    </section>
  );
}
