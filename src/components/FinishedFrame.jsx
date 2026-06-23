import { COPY } from '../content/copy';

// The finished-frame cue: a precise product/editorial frame (NOT a polaroid).
// Hairline border, restrained, with an auge-style coral caption strip.
// Used as the hero overlay (desktop) and a mini preview block (mobile).
export function FinishedFrame({ className = '' }) {
  return (
    <figure
      className={`overflow-hidden border border-ink-200 bg-ink-900 shadow-frame ${className}`}
    >
      <div className="relative aspect-[3/4] w-full">
        <img
          src="/assets/finished-frame.webp"
          alt="auge finished clip preview"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-ink-950/85 px-2 py-1.5 text-center">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-coral-400">
            {COPY.finishedCaption}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
