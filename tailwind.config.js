/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto',
        vera: 'Vera',
      },
      colors: {
        'background-light': '#262529',
        'background-dark': '#1d1c20',
      },
    },
  },
  plugins: [],
};
