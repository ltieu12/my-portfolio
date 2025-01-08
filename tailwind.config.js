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
        'dark-shadow': '2px 3px 0px rgba(0, 0, 0, 1)',
        'dark-shadow-lg': '6px 8px 0px rgba(0, 0, 0, 1)',
        'dark-shadow-lg-left': '-6px 8px 0px rgba(0, 0, 0, 1)',
        'project-shadow-left': '-5px 6px 0px rgba(0, 0, 0, 1)',
        'project-shadow-right': '5px 6px 0px rgba(0, 0, 0, 1)',
      },
      colors: {
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

