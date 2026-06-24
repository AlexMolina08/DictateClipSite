// Animated audio waveform strip — echoes the scrubber baked into auge's output.
// Pure CSS (staggered scaleY bounce). `playing` gates the motion.
const BARS = [
  0.4, 0.7, 1, 0.6, 0.85, 0.5, 0.9, 0.45, 0.7, 1, 0.55, 0.8, 0.4, 0.95, 0.6,
  0.75, 0.5, 0.9, 0.65, 1, 0.45, 0.8, 0.55, 0.7, 0.4, 0.85, 0.6, 0.5,
];

export function Waveform({ className = '', accentAt = 13, playing = true }) {
  return (
    <div
      className={`flex h-6 items-center gap-[3px] ${className}`}
      aria-hidden="true"
    >
      {BARS.map((h, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full ${
            i === accentAt ? 'bg-coral-500' : 'bg-current'
          } ${playing ? 'animate-wave' : ''}`}
          style={{
            height: `${Math.round(h * 100)}%`,
            animationDelay: `${(i % 7) * 0.09}s`,
            opacity: i === accentAt ? 1 : 0.55,
          }}
        />
      ))}
    </div>
  );
}
