/** Decorative, slowly morphing gold and blue blobs for dark sections. Purely visual. */
export function LiquidBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="liquid-blob -top-24 -right-16 size-80 bg-gold-400/25" />
      <div className="liquid-blob -bottom-32 left-1/3 size-96 bg-royal/40 [animation-delay:-6s]" />
      <div className="liquid-blob top-1/4 -left-24 size-64 bg-gold-500/15 [animation-delay:-12s]" />
    </div>
  );
}
