/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-1": "#FDF7E4",
        "grey-2": "#FAEED1",
        "grey-3": "#DED0B6",
        "grey-4": "#BBAB8C"
      },
      fontFamily: {
        'edu': ['"Edu TAS Beginner"', 'cursive'],
        'mono': ['"Spline Sans Mono"', 'monospace'],
        'zen': ['"Zen Dots"', 'sans-serif']
      }
    },
  },
  plugins: [],
}