/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Space Grotesk', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'dark-shadow': '2px 3px 0px rgba(0, 0, 0, 1)'
      },
    },
  },
  plugins: [],
}

