/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lime-green': '#c1ff72',
        'dark-cyan': '#073b4c',
        'dark-gray': '#222222',
        'warm-gray': '#e4dfda',
      },
    },
  },
  plugins: [],
};
