const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["views/articles/*.ejs"],
  theme: {
    extend: {
      screens: {
        'xs': '350px',
      },
    },
  },
  plugins: [],
}
