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
      'fs-16': ['16px', '26px'],
      'fs-31': ['31px', '41px'],
    },
    lineHeight: {},
    colors: {
      'viridian-green': '#0095A0',
      cultured: '#F7F5F2',
      ...colors,
    },
  },
  plugins: [],
}
