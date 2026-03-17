/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pixel-green': '#39ff14',
        'pixel-magenta': '#ff00ff',
        'pixel-cyan': '#00ffff',
        'pixel-yellow': '#ffff00',
        'pixel-bg-dark': '#0a0a0a',
        'pixel-bg-light': '#f0f0f0',
      },
      fontFamily: {
        'pixel-header': ['"Press Start 2P"', 'cursive'],
        'pixel-body': ['"VT323"', 'monospace'],
      },
      boxShadow: {
        'pixel': '4px 4px 0 0 currentColor',
      },
    },
  },
  plugins: [],
};