/** @type {import('tailwindcss').Config} */


const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat','Ramaraja', ...defaultTheme.fontFamily.sans],
        fancy: [ 'Lobster'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
