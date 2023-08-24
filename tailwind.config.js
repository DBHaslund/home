/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dgray': 'var(--dark-gray)',
        'gray': 'var(--gray)',
        'lgray': 'var(--light-gray)',
        'bteal': 'var(--bteal)',
        'cteal': 'var(--cteal)',
        'purple': 'var(--purple)',
      },
    },
  },
  plugins: [],
};
