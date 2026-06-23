import { COPY } from '../content/copy';

// Raw takes: one horizontal contact-sheet / clip-rail moment.
// NOT a feature grid — a film contact sheet of real raw takes.
const TAKES = [
  '/assets/take-01.webp',
  '/assets/take-02.webp',
  '/assets/take-03.webp',
  '/assets/take-04.webp',
  '/assets/take-05.webp',
];

export function ClipRail() {
  return (
    <section className="mx-auto max-w-editorial px-6 py-24 md:px-10 md:py-32">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-400">
        {COPY.takes.label}
      </p>
      <p className="mt-3 max-w-md font-display text-2xl leading-snug text-ink-900 md:text-3xl">
        {COPY.takes.caption}
      </p>

      <div className="mt-10 flex snap-x gap-3 overflow-x-auto pb-2 md:justify-center md:overflow-visible md:pb-0">
        {TAKES.map((src, i) => (
          <div
            key={src}
            className="shrink-0 snap-start overflow-hidden border border-ink-200 bg-ink-900"
          >
            <img
              src={src}
              alt={`raw take ${i + 1}`}
              loading="lazy"
              className="h-[240px] w-auto object-cover md:h-[300px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
