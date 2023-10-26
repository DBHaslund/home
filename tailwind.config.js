/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
