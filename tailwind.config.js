const { blackA, violet } = require('@radix-ui/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx,jsx}',
    './components/**/*.{ts,tsx,jsx}',
    './app/**/*.{ts,tsx,jsx}',
    './src/**/*.{ts,tsx,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...violet
      }
    }
  },
  plugins: []
}
