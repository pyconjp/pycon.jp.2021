const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'base-message': '#1097AA',
        'blue-green': '#1097AA',
        'custom-gray': '#cecece',
        'custom-black': '#292929',
      },
    },
    fontFamily: {
      noto: ["'Noto Sans JP'", ...defaultTheme.fontFamily.sans],
      oswald: 'Oswald',
      source: 'Source Sans Pro',
      mont: 'Montserrat',
      serif: ['Merriweather', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
