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
      backgroundImage: {
        'barber-bg': "url('/src/assets/images/else/bgimg.jpg')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '50%': '50%',
        '75%': '75%',
        '85%': '85%',
        '100%': '100%',
      },
    },
  },
  plugins: [],
};
