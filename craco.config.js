const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    configure: (webpackConfig) => {
      // Ensure extensions are resolved
      webpackConfig.resolve = webpackConfig.resolve || {};
      webpackConfig.resolve.extensions = webpackConfig.resolve.extensions || ['.js', '.jsx', '.ts', '.tsx'];
      return webpackConfig;
    },
  },
};

