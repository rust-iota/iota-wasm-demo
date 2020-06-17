const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/iota-wasm-demo/'
    : '/',
    transpileDependencies: [
      "vuetify"
    ],
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'node_modules/@iota/iota-rs-wasm/wasm-web/iota_wasm_bg.wasm', to: 'iota_client.wasm' }
                ],
            }),
        ],
    }

};