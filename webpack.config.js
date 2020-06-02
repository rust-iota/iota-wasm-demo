const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'node_modules/@iota/iota-rs-wasm/wasm-web/iota_wasm_bg.wasm', to: 'iota_client.wasm' }
      ],
    }),
  ],
};