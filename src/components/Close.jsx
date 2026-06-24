import { motion } from 'framer-motion';
import { AugeMark } from './AugeMark';
import { AppStoreButton } from './AppStoreButton';
import { Accent } from './Accent';
import { COPY } from '../content/copy';

// Final close: the auge mark draws itself on (mirroring the Remotion outro),
// one confident line, the CTA. Quiet and sure of itself.
export function Close() {
  return (
    <section className="relative overflow-hidden">
      <div className="coral-aura pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="relative mx-auto max-w-editorial px-6 py-28 text-center md:px-10 md:py-40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <AugeMark size={84} animated />
        </motion.div>

        <p className="mx-auto mt-10 max-w-2xl font-display text-4xl leading-[1.04] tracking-tightest text-ink-900 md:text-6xl">
          <Accent text={COPY.close.line} />
        </p>

        <p className="mx-auto mt-5 font-sans text-base text-ink-500">
          {COPY.close.sub}
        </p>

        <div className="mt-10 flex justify-center">
          <AppStoreButton />
        </div>
      </div>
    </section>
  );
}
