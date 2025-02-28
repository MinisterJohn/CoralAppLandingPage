/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        background: '#1a1a2e',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s infinite ease-in-out',
        'pulse-slow': 'pulse 4s infinite',
      }
    },
  },
  plugins: [],
}