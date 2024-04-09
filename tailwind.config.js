/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      content: {
        'asterisk': 'url("/src/assets/asterisk.svg")'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}

