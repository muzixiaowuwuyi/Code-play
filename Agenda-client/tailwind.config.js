/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cp-blue': '#285f7a',
        'cp-light-blue': '#EAECF5',
        'cp-dark-blue': '#293056',
        'cp-middle-blue': '#279ab4',
      },

      keyframes: {
        slideUpFadeIn: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },

    backdropBlur: {
      25: '25px',
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar-hide'),
  ],
};
