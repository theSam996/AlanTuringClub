/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        wide: ['"Brigends Expanded"', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      colors: {
        primary: '#000000',
        background: '#FFFFFF',
        secondary: '#444444',
        'card-text': '#555555',
        'tag-muted': '#666666',
        'meta-muted': '#888888',
        'meta-subtle': '#999999',
        'border-light': '#E0E0E0',
        'badge-bg': '#F0F0F0',
        'grid-line': 'rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        pill: '40px',
        card: '6px',
        cta: '5px',
        badge: '3px',
      },
      boxShadow: {
        brutalist: '4px 4px 0 #000000',
        'brutalist-lg': '8px 8px 0 #000000',
        banner: '6px 6px 0 rgba(0, 0, 0, 0.15)',
        'brutalist-banner': '6px 6px 0 rgba(0, 0, 0, 0.15)',
      },
      letterSpacing: {
        'tight-display': '-1px',
        'widest-plus': '2.5px',
        'spaced-lg': '4px',
        'spaced-xl': '5px',
        'spaced-2xl': '6px',
      },
    },
  },
  plugins: [],
};
