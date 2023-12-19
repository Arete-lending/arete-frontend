/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      tblack: '#141414',
      twhite: '#ffffffd9',
      tprimary: '#dc4446'
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
