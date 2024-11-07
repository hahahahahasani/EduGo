/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '968px',
      xl: '1200px'
    },
    fontFamily: {
      primary: 'Lato',
      secondary: 'Playfair Display',
      third: 'Playwrite GB S'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('flowbite-typography')
  ],
}