<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="grey lighten-5">
      <v-row>
        <v-responsive width="50%">
          <h2>Javascript Core</h2>
          <JsGetNodeInfo />
          <JsGenerateSeed />
          <JsGetNewAddress />
          <JsSendTransfers />
        </v-responsive>
        <v-responsive width="50%">
          <h2>WebAssemlby</h2>
          <getNodeInfo />
          <generateSeed />
          <getNewAddress />
          <sendTransfers />
        </v-responsive>
      </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import getNodeInfo from "./components/wasm/getNodeInfo.vue";
import generateSeed from "./components/wasm/generateSeed.vue";
import getNewAddress from "./components/wasm/getNewAddress.vue";
import sendTransfers from "./components/wasm/sendTransfers.vue";
import JsGetNodeInfo from "./components/js/getNodeInfo.vue";
import JsGenerateSeed from "./components/js/generateSeed.vue";
import JsGetNewAddress from "./components/js/getNewAddress.vue";
import JsSendTransfers from "./components/js/sendTransfers.vue";
export default {
  name: "App",
  components: {
    getNodeInfo,
    generateSeed,
    getNewAddress,
    sendTransfers,
    JsGetNodeInfo,
    JsGenerateSeed,
    JsGetNewAddress,
    JsSendTransfers
  },
  created() {
    console.log("created", this.$iota);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>