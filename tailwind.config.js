import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
// auge design tokens — mirror DictateClip/DesignSystem/DesignTokens.swift.
// Coral is the signature accent; cream is the canvas; ink is the neutral.
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#FFF1F3', 100: '#FFE0E4', 200: '#FFB8C1', 300: '#FF8A98',
          400: '#FF6776', 500: '#FF4252', 600: '#E5293A', 700: '#BF1E2D',
          800: '#8F1622', 900: '#5C0E16',
        },
        ink: {
          0: '#FFFFFF', 50: '#F7F7F8', 100: '#EEEEF1', 200: '#DDDDE3',
          300: '#B8B8C0', 400: '#85858F', 500: '#5C5C66', 600: '#3D3D45',
          700: '#2A2A32', 750: '#26272C', 780: '#1E1F23', 800: '#1C1C22',
          900: '#14161D', 950: '#0E0E10', 975: '#08080A',
        },
        cream: {
          50: '#FCFAF6', 100: '#F7F2EC', 200: '#EDE6DC',
        },
        sky: {
          500: '#0F7BFF', 600: '#0860D4',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"SF Mono"', 'Menlo', 'monospace'],
      },
      maxWidth: {
        editorial: '1200px',
      },
      letterSpacing: {
        tightest: '-0.03em',
      },
      boxShadow: {
        frame: '0 1px 2px rgba(20,16,12,0.04)',
      },
    },
  },
  plugins: [
    typography,
  ],
}
