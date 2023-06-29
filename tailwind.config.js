/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      backgroundPosition: {
        'position-lg': '10px 60px',
        'position-md': '40px 60px',
        'position-sm': '10px 60px',
      },
    },
  },
  plugins: [],
};
