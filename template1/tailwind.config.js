/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js","./node_modules/tw-elements/dist/js/**/*.js"],
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      'displaym': '3.5rem',
    },
    height: {
      '100': '25rem',
    },
    extend: {
      width:{
        '30': '7.5rem',
        '90': '21.313rem',
        '70': '17.375rem'
      },


      fontFamily: {
        'albert': ['Albert Sans', 'sans-serif']
      },
      colors: {
        'secondary': '#B9D20A',
        'primary':  '#000563'
      },
      margin: {
        '22': '5.25rem',
      }
    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.5rem'
    },
  },
}
