module.exports = {
  mode: 'jit',
  purge: ["index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      green: {
        500: '#5FCD81',
        600: '#5FCD81'
      }
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