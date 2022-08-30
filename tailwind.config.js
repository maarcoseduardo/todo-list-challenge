/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    colors: {
      'green-light-500': '#B8FF01',
      'gray-light-200': "#e4e4e7",
      'pink-light-500': '#FA8CD5',
      'violet-light-500': '#6D28D9',
      'violet-dark-800': '#5D1F8E',
    },
    extend: {
      animation: {
        'scroll-card-social-media': 'scroll-down 1.5s linear',

      },
      keyframes: {
        'scroll-down': {
          '0%': {
            transform: 'translateY(-15%)',


          },
          '50%': {
            transform: 'translateY(0)',
          }
        },
      },
    },
  },
  plugins: [],
}
