const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        'dark': '#141C2F',
        'card-dark': '#1F2A48',
        'light': '#F5F8FF',
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
