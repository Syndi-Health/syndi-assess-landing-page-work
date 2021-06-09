module.exports = {
  mode: 'jit',
  purge: ["index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      'text-green': '#5FCD81',
      'bg-green': '#5FCD81'
    },
    fontFamily: {
     'display': ['Poppins'],
     'body': ['Poppins'],
     'sans': ['Poppins'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}