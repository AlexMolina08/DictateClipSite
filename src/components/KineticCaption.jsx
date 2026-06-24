import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// The auge caption, reproduced live in the DOM: words punch in with an
// overshoot, the last word lands in a yellow highlight box — the same
// MrBeast-energy karaoke beat auge bakes into a video, but free and crisp.
// Cycles through `phrases` (each = array of words; final word highlighted).

const POP = [0.34, 1.56, 0.64, 1];

function Word({ word, highlight, i }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10, scale: 0.5, rotate: i % 2 ? 3 : -3 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.15 } }}
      transition={{ duration: 0.34, ease: POP, delay: 0.16 + i * 0.16 }}
      className={
        highlight
          ? 'inline-block rounded-[0.28em] bg-[#FFE03B] px-[0.3em] py-[0.04em] text-ink-950 shadow-[0_3px_0_rgba(20,16,12,0.18)]'
          : 'inline-block text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.45)]'
      }
    >
      {word}
    </motion.span>
  );
}

export function KineticCaption({
  phrases,
  interval = 2600,
  className = '',
  size = 'text-3xl md:text-4xl',
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % phrases.length), interval);
    return () => clearInterval(id);
  }, [phrases.length, interval]);

  const words = phrases[i];

  return (
    <div className={`font-caption ${size} ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          className="flex flex-wrap items-center justify-center gap-x-[0.3em] gap-y-[0.18em] leading-none"
        >
          {words.map((w, idx) => (
            <Word
              key={w + idx}
              word={w}
              highlight={idx === words.length - 1}
              i={idx}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
