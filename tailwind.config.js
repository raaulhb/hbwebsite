/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1a1a1a',
        secondary: '#2d2d2d', 
        accent: '#c0c0c0',
        gold: '#d4af37',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
