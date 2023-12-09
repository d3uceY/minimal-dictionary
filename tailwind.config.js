/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-1": "#EEEEEE",
        "grey-2": "#00ADB5",
        "grey-3": "#393E46",
        "grey-4": "#222831"
      },
      fontFamily: {
        'edu': ['"Edu TAS Beginner"', 'cursive'],
        'mono': ['"Spline Sans Mono"', 'monospace'],
        'zen': ['"Zen Dots"', 'sans-serif'],
        'play': ['"Playfair Display"', 'sans-serif']
      }
    },
  },
  plugins: [],
}