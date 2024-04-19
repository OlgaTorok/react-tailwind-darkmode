/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      slate: '#64748b',
      lightSlate: '#e2e8f0',
      darkSlate: '#1e293b',
    },
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
      cursive: ['Marck Script', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
};
