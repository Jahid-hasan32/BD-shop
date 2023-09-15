/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container : {
        center : true,
      },
      colors : {
        'c_gray' : '#F1F1F1',
        'c_primary' : '#067D8C',
        'c_secondary' : '#F14705',
      },
      fontFamily : {
        custom : [ 'Oswald',' sans-serif']
      }
    },
  },
  plugins: [],
}