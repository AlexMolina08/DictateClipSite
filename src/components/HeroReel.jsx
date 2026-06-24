import { useEffect, useRef } from 'react';

// The hero centerpiece: the auge showreel (raw takes → AI shapes → finished,
// captioned video → brand). It's cream‑baked, so it blends into the page canvas
// and the phone‑cards + captions appear to float. Coral aura lifts it off the
// page. Poster‑first + lazy autoplay (plays in view, pauses out) for fast load.
export function HeroReel({ className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.2 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* warm coral aura behind the stage */}
      <div className="coral-aura pointer-events-none absolute -inset-x-12 -inset-y-10 -z-10 blur-2xl" />

      <div className="animate-bob">
        <div className="overflow-hidden rounded-[2.2rem] bg-cream-100 shadow-stage ring-1 ring-ink-200/70">
          <video
            ref={ref}
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            poster="/assets/hero-reel-poster.webp"
            className="block aspect-[760/1040] w-full bg-cream-100 object-cover"
          >
            <source src="/assets/hero-reel.webm" type="video/webm" />
            <source src="/assets/hero-reel.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
