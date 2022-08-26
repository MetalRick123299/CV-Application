/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mxl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }
      },
    },
  },
  plugins: [],
};
