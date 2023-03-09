const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    fontSize: {
      'fs-12': ['12px', '18px'],
      'fs-13': ['13px', '20px'],
      'fs-14': ['14px', '22px'],
      'fs-15': ['15px', '22px'],
      'fs-16': ['16px', '24px'],
      'fs-24': ['24px', '36px'],
      'fs-31': ['31px', '41px'],
    },
    lineHeight: {},
    colors: {
      'viridian-green': '#0095A0',
      cultured: '#F7F5F2',
      'sonic-silver': '#74777B',
      'davys-grey': '#575757',
      gray: '#B7B8BC',
      'white-next': '#FDFDFF',
      ...colors,
    },
  },
  plugins: [],
}
