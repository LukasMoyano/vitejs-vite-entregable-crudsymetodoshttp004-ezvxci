const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ef4444',
        secondary: '#db2777',
      },
    },
  },
  plugins: [],
};
