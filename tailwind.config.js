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
      "./src/components/planet-info/planet-info.js",
      "./src/components/footer/footer.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
        'blackOpsOne': 'Black Ops One'
    },
      minHeight: {
        '120': '120px'
      }
  },
  variants: {},
  plugins: [],
}
