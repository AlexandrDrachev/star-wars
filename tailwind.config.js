module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
      "./public/index.html",
      "./src/index.js",
      "./src/components/app/app.js"
  ],
  theme: {
    extend: {},
    fontFamily: {
        'blackOpsOne': 'Black Ops One'
    }
  },
  variants: {},
  plugins: [],
}
