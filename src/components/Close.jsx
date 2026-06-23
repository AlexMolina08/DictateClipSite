import { motion } from 'framer-motion';
import { AugeMark } from './AugeMark';
import { AppStoreButton } from './AppStoreButton';
import { Accent } from './Accent';
import { COPY } from '../content/copy';

// Final close: the auge mark draws itself on (mirroring the Remotion close),
// one confident line, and the App Store CTA. Quiet and confident.
export function Close() {
  return (
    <section className="mx-auto max-w-editorial px-6 py-28 text-center md:px-10 md:py-40">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <AugeMark size={88} animated />
      </motion.div>

      <p className="mx-auto mt-10 max-w-xl font-display text-4xl leading-[1.05] tracking-tightest text-ink-900 md:text-6xl">
        <Accent text={COPY.close.line} />
      </p>

      <div className="mt-10 flex justify-center">
        <AppStoreButton />
      </div>
    </section>
  );
}
