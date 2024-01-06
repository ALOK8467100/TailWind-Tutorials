/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        xsm: '500px'
      },
      spacing:{
        13: '3.25rem'
      },
      fontSize:{
        '10xl':['9rem',{lineHeight: '1.5'}],
      }
    },
  },
  plugins: [],
}

// we can customize various values and components in tailwind.config.js