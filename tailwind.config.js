/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 24px rgba(255, 58, 214, .42), 0 0 48px rgba(32, 217, 255, .24)',
        gold: '0 0 22px rgba(255, 211, 90, .45), 0 0 55px rgba(255, 93, 56, .28)',
      },
    },
  },
  plugins: [],
};
