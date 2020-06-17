import Vue from 'vue'
import App from './App.vue'
import * as client from '@iota/iota-rs-wasm/web'
import vuetify from './plugins/vuetify';

const uri = 'https://nodes.comnet.thetangle.org'
Vue.config.productionTip = false
client.addNode(uri);
Vue.prototype.$iota = client;

import { composeAPI } from '@iota/core'
const iotajs = composeAPI({
    provider: uri
})

Vue.prototype.$iotajs = iotajs;


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')