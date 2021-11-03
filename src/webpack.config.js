module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],

  },
};
module.export = {
  // ...
  resolve: {
    alias: {
      'mapbox-gl': 'maplibre-gl'
    }
  }
}