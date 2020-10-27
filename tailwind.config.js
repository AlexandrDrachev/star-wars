module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
      "./public/index.html",
      "./src/index.js",
      "./src/components/app/app.js",
      "./src/components/content/content.js",
      "./src/components/footer/footer.js",
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
