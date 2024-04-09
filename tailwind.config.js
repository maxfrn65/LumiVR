/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      boxShadow: {
        'card-selected': '0px 10px 75px 0px rgba(222, 156, 96, 0.25), 0px -15px 25.5px 0px rgba(0, 0, 0, 0.25) inset',
        'card': '0px -15px 25.5px 0px rgba(0, 0, 0, 0.25) inset'
      },
      content: {
        'asterisk': 'url("/src/assets/asterisk.svg")'
      }
    },
  },
  plugins: [require("daisyui")],
}

