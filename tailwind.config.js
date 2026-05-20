/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        deep: 'var(--bg-deep)',
        lounge: 'var(--bg-brown)',
        gold: 'var(--gold)',
        'gold-muted': 'var(--gold-muted)',
        'diamond-amber': 'var(--amber)',
        champagne: 'var(--text-champagne)',
        muted: 'var(--text-muted)',
        'green-accent': 'var(--green-accent)',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        script: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        gold: '0 0 20px rgba(214, 179, 90, 0.2)',
        'gold-lg': '0 0 40px rgba(214, 179, 90, 0.28)',
        glow: '0 0 30px var(--glow-red)',
        card: '0 4px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(180, 60, 30, 0.2) 0%, transparent 55%), radial-gradient(ellipse 100% 80% at 50% 100%, #1a120e 0%, #0a0806 70%)',
        'gold-text': 'linear-gradient(180deg, #f2e0a8 0%, #d6b35a 50%, #a88a3d 100%)',
      },
    },
  },
  plugins: [],
}
