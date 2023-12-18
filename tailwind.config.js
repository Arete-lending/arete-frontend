/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      tblack: '#141414',
      twhite: '#ffffffd9'
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
