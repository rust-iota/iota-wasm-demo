<template>
  <div class="JsGetNodeInfo">
    <v-btn color="primary" @click="onClick">getNodeInfo</v-btn>
    <pre>{{nodeInfo}}</pre>
  </div>
</template>

<script>
export default {
  name: 'JsGetNodeInfo',
  data() {
    return {
      nodeInfo: null
    }
  },
  methods: {
    onClick() {

      this.$iotajs.getNodeInfo().then(nodeInfo => {
          console.log("JsGetNodeInfo::nodeInfo", nodeInfo)
          this.nodeInfo = nodeInfo
      })
    }
  }
}
</script>