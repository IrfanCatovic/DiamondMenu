import { FOOTER_CONFIG } from '../data/menuConfig'

export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/10 px-4 py-10">
      <div className="led-line mb-8 opacity-40" aria-hidden />
      <div className="mx-auto grid max-w-lg gap-8 text-center sm:grid-cols-3 sm:text-left">
        <div>
          <p className="text-[10px] font-semibold tracking-[0.2em] text-gold/70 uppercase">
            WiFi
          </p>
          <p className="mt-2 font-medium text-champagne">
            {FOOTER_CONFIG.wifiName}
          </p>
          <p className="mt-1 text-sm text-champagne/60">
            Šifra:{' '}
            <span className="font-mono text-gold/90">
              {FOOTER_CONFIG.wifiPassword}
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-center">
          <svg viewBox="0 0 32 32" className="mb-2 h-6 w-6" fill="none" aria-hidden>
            <path
              d="M16 4L26 16L16 28L6 16L16 4Z"
              stroke="#D4AF37"
              strokeWidth="1.2"
              fill="rgba(212,175,55,0.12)"
            />
          </svg>
          <p className="text-xs leading-relaxed tracking-wide text-champagne/70">
            Hvala što ste izabrali Diamond
          </p>
        </div>

        <div className="sm:text-right">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-gold/70 uppercase">
            Pratite nas
          </p>
          <a
            href={FOOTER_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 text-sm text-gold transition-colors hover:text-diamond-amber sm:justify-end"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            {FOOTER_CONFIG.instagramHandle}
          </a>
        </div>
      </div>
    </footer>
  )
}
