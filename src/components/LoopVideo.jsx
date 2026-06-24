import { useEffect, useRef } from 'react';

// Generic lazy, muted, looping video. Plays when scrolled into view, pauses out.
// Poster-first + preload="none" so it never blocks first paint.
export function LoopVideo({ mp4, webm, poster, className = '', videoClassName = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      autoPlay
      preload="none"
      poster={poster}
      className={`${className} ${videoClassName}`}
    >
      {webm && <source src={webm} type="video/webm" />}
      {mp4 && <source src={mp4} type="video/mp4" />}
    </video>
  );
}
