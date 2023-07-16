/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
      30: '30',
      24: '24',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        serif: ['Roboto Slab', 'ui-serif', 'Georgia'],
      },
      colors: {
        primary: '#e0f7fa',
      },
      dropShadow: {
        '3xl': [
          '0px 1px 1px rgba(0, 0, 0, 0.07)',
          '0px 10px 10px rgba(0, 0, 0, 0.07)',
          '0px 4px 4px rgba(0, 0, 0, 0.07)',
          '0px 8px 8px rgba(0, 0, 0, 0.07)',
          '0px 16px 16px rgba(0, 0, 0, 0.07)',
        ],
        '4xl': [
          '0 35px 65px rgba(0, 0, 0, 0.25)',
          '0 25px 65px rgba(0, 0, 0, 0.45)',
        ],
      },
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
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
};
