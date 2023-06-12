/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // add custom colors, primary, secondary, etc
      colors: {
        primary: {
          default: '#1B45B9',
          50: '#E6E9F9',
          100: '#C2C9F2',
          200: '#9DA8EC',
          300: '#7987E6',
          400: '#5466E0',
          500: '#3045DA',
          600: '#2438B2',
          700: '#1B2C8A',
          800: '#121F62',
          
        }
      }
    },
  },
  plugins: [],
}

