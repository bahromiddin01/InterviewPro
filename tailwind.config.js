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
      },

      keyframes: {
        leftToRight: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        rightToLeft: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },

      animation: {
        leftToRight: 'leftToRight 60s linear infinite',
        rightToLeft: 'rightToLeft 60s linear infinite',
      },
    },
  },
  plugins: [],
}