module.exports = {
  purge: {
    layers: ['components', 'utilities'],
    content: ["./public/**/*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ["disabled"]
    },
  },
  plugins: [],
}
