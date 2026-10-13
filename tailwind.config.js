/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Full list (ordered smallest → largest) so custom sizes cascade correctly
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      wide: '1920px',
    },
    extend: {
      // Theme-aware colours read CSS variables defined in src/index.css, so the
      // same classes work in light and dark mode. "white" is the foreground
      // colour and "ink" the background scale; "snow" is always pure white.
      colors: {
        white: 'rgb(var(--fg) / <alpha-value>)',
        snow: '#ffffff',
        ink: {
          950: 'rgb(var(--ink-950) / <alpha-value>)',
          900: 'rgb(var(--ink-900) / <alpha-value>)',
          800: 'rgb(var(--ink-800) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
        },
        slate: {
          200: 'rgb(var(--slate-200) / <alpha-value>)',
          300: 'rgb(var(--slate-300) / <alpha-value>)',
          400: 'rgb(var(--slate-400) / <alpha-value>)',
          500: 'rgb(var(--slate-500) / <alpha-value>)',
        },
        // Baheka brand: black, red and gold
        brand: {
          300: 'rgb(var(--brand-300) / <alpha-value>)',
          400: '#e3242b',
          500: '#c4161c',
          600: '#9b0f14',
        },
        // Metallic gold tones (highlight → base → shadow)
        gold: {
          200: 'rgb(var(--gold-200) / <alpha-value>)',
          300: 'rgb(var(--gold-300) / <alpha-value>)',
          400: '#bf953f',
          500: '#aa771c',
          600: '#8a6116',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-metal': 'var(--gold-metal)',
        'grid-fade':
          'linear-gradient(to right, rgb(var(--fg) / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--fg) / 0.05) 1px, transparent 1px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        sheen: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        sheen: 'sheen 8s linear infinite',
        marquee: 'marquee 40s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
      },
    },
  },
  plugins: [],
}
