module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        body: {
          100: '#FFFFFF',
          200: '#F7F7F7',
        },
        note: '#353535',
        brand: {
          300: '#005DFF',
          500: '#005DFF',
        },
      },
      borderRadius: {
        md: '0.25rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')],
};
