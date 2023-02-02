/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  plugins: [
    require('flowbite/plugin'),
  ],
  theme: {
    fontSize: {
      'display-m': '3.5rem',
      'display-s': '3rem',
      'headline-m': '2rem',
      'headline-s': '1.5rem',
      'body-l': '1.25rem',
      'body-m': '1rem',
      'body-s': '0.875rem',
      'label': '12rem'
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
        gentona: ['gentona']
      },
      colors: {
        'secondary': '#B9D20A',
        'primary':  '#000563'
      },
      margin: {
        '22': '5.25rem',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.02em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      }
    },
  },
}
