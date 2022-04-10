const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark': '#141C2F',
        'card-dark': '#1F2A48',
        'light': '#F5F8FF',
        'card-light': '#FEFEFE',
        'accent-blue': '#017BFD',
      },
      fontFamily: {
        'mono': ['Jetbrains Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],
};
