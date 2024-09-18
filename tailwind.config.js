/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,css,js}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customGreen: '#05a105'
      }
    },
  },
  plugins: [],
}