/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
        Clash: ["Clash Display", 'sans-serif'],
      },
      boxShadow: {
        'dark-shadow': '3px 4px 0px rgba(0, 0, 0, 1)',
        'dark-shadow-lg': '9px 10px 0px rgba(0, 0, 0, 1)',
        'dark-shadow-lg-left': '-9px 10px 0px rgba(0, 0, 0, 1)',
      },
      colors: {
        'primary': '#FEFFF0',
        'custom-orange': '#FFE2A3',
        'custom-baby-blue': '#A7DFFF',
        'custom-baby-green': '#D3FFA5',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}

