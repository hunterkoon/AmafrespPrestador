import alias from '@rollup/plugin-alias';

module.exports = {
  plugins: [
    alias({
      entries: [
        { find: 'mapbox-gl', replacement: 'maplibre-gl' },
      ]
    })
  ]
};