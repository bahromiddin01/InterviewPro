/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,css,js}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        customGreen: '#05a105',
        customCream: '#F4F2F0',
        customDeepGreen: '#073630',
        customDeepBrown: '#15130ECC',
        customTransparentWhite: '#FFFFFFD9',
        customCoal: '#1A1A1A',
        customDeepGray: '#575757',
        customForestGreen: '#027A48',
        customBluishGray: '#475467',
        customLightGray: '#D0D5DD',
      }
    },
  },
  plugins: [],
}