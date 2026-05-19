export function Hero() {
  return (
    <header className="relative overflow-hidden px-4 pb-8 pt-10 text-center">
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(220,80,40,0.15),transparent)]" aria-hidden />
      <div className="absolute top-8 left-0 right-0 led-line opacity-50" aria-hidden />
      <div className="absolute top-16 left-0 right-0 led-line opacity-25" aria-hidden />

      <div className="relative z-10 mx-auto max-w-lg">
        <div
          className="mx-auto mb-4 flex h-8 w-8 items-center justify-center"
          aria-hidden
        >
          <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
            <path
              d="M16 4L26 16L16 28L6 16L16 4Z"
              stroke="#D4AF37"
              strokeWidth="1.2"
              fill="rgba(212,175,55,0.12)"
            />
          </svg>
        </div>

        <h1 className="font-display text-5xl font-bold tracking-[0.15em] text-gold-gradient sm:text-6xl">
          DIAMOND
        </h1>

        <p className="mt-3 text-xs font-medium tracking-[0.35em] text-champagne/70 uppercase">
          Shisha • Drinks • Sweets
        </p>

        <p className="mt-4 font-script text-xl italic text-gold/90 sm:text-2xl">
          Relax. Enjoy. Be Diamond.
        </p>
      </div>

      <div
        className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 opacity-20"
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
