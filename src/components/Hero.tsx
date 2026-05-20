export function Hero() {
  return (
    <header className="relative overflow-hidden px-4 pb-5 pt-6 text-center sm:pb-6 sm:pt-8">
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(220,80,40,0.12),transparent)]" aria-hidden />
      <div className="absolute top-6 left-0 right-0 led-line opacity-40" aria-hidden />
      <div className="absolute top-12 left-0 right-0 led-line opacity-20" aria-hidden />

      <div className="relative z-10 mx-auto max-w-lg">
        <div
          className="mx-auto mb-3 flex h-7 w-7 items-center justify-center sm:mb-4 sm:h-8 sm:w-8"
          aria-hidden
        >
          <svg viewBox="0 0 32 32" className="h-6 w-6 sm:h-7 sm:w-7" fill="none">
            <path
              d="M16 4L26 16L16 28L6 16L16 4Z"
              stroke="var(--gold)"
              strokeWidth="1.2"
              fill="rgba(214, 179, 90, 0.1)"
            />
          </svg>
        </div>

        <h1 className="font-display text-4xl font-bold tracking-[0.18em] text-gold-gradient sm:text-5xl sm:tracking-[0.16em]">
          DIAMOND
        </h1>

        <p className="mt-2 text-[10px] font-medium tracking-[0.32em] text-muted uppercase sm:mt-2.5 sm:text-[11px] sm:tracking-[0.34em]">
          Shisha • Drinks • Sweets
        </p>

        <p className="mt-2.5 font-script text-base italic leading-snug text-gold/70 sm:mt-3 sm:text-lg">
          Relax. Enjoy. Be Diamond.
        </p>
      </div>

      <div
        className="pointer-events-none absolute -left-8 bottom-0 h-28 w-28 opacity-15 sm:h-32 sm:w-32"
        aria-hidden
      >
        <svg viewBox="0 0 80 120" className="h-full w-full text-gold/30">
          <ellipse cx="40" cy="100" rx="25" ry="8" fill="currentColor" opacity="0.3" />
          <path
            d="M35 100 L35 40 Q40 20 45 40 L45 100"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="40" cy="35" r="12" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
    </header>
  )
}
