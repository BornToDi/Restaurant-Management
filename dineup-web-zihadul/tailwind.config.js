/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      "primary": "#26a69a",
      "maroon": "#d54720",
    },
  },
  plugins: [],
}
