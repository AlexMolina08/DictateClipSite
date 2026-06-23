import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Accent } from './Accent';
import { COPY } from '../content/copy';

// auge shapes it: the welcome showreel (H.264 MP4, cream baked in) in a
// hairline frame, with a short editorial explanation. Lazy-loaded: plays on
// scroll-into-view, pauses off-screen, poster fallback if decode fails.
export function Showreel() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <section className="border-y border-ink-200 bg-cream-50">
      <div className="mx-auto grid max-w-editorial items-center gap-10 px-6 py-24 md:grid-cols-2 md:px-10 md:py-32">
        <div className="order-2 md:order-1">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-coral-600">
            {COPY.shape.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tightest text-ink-900 md:text-5xl">
            <Accent text={COPY.shape.headline} />
          </h2>
          <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-ink-500">
            {COPY.shape.body}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="order-1 mx-auto w-full max-w-[340px] md:order-2"
        >
          <div className="overflow-hidden border border-ink-200 bg-cream-100 shadow-frame">
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="none"
              poster="/assets/showreel-poster.webp"
              className="block aspect-[1170/1600] w-full bg-cream-100 object-cover"
            >
              <source src="/assets/showreel.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
