// Renders a string with **accent** segments as the single coral italic word.
// Used sparingly — one accent per headline, per the auge design system.
export function Accent({ text }) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? (
      <em key={i} className="italic text-coral-500">
        {p.slice(2, -2)}
      </em>
    ) : (
      <span key={i}>{p}</span>
    )
  );
}
