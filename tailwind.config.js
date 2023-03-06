const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
    fontSize: {
      '3.1xl': '1.96rem',
    },
    lineHeight: {
      12: '2.93rem',
    },
    colors: {
      'viridian-green': '#0095A0',
    },
  },
  plugins: [],
}
