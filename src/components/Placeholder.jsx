// Explicit, intentional placeholder for a missing final asset.
// Cream + faint dot-grid + mono label + hairline border. Reads as
// "awaiting asset", not as broken. Swap for the real element when it lands.
export function Placeholder({ label, ratio = '16 / 9', className = '' }) {
  return (
    <div
      className={`relative w-full overflow-hidden border border-ink-200 bg-cream-50 text-ink-200 dot-grid ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
          {label}
        </span>
      </div>
    </div>
  );
}
