/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",
            ],
  theme: {
    extend: {
      colors: {
        mainColor: '#1C1C1C',
        cardColor: '#374151'
      }
    },
  },
  plugins: [],
}
