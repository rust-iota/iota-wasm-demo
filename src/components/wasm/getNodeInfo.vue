<template>
  <div class="getNodeInfo">
    <v-btn color="primary" @click="onClick">getNodeInfo</v-btn>
    <pre>{{nodeInfo}}</pre>
  </div>
</template>

<script>
export default {
  name: 'getNodeInfo',
  data() {
    return {
      nodeInfo: null
    }
  },
  methods: {
    onClick() {

      this.$iotajs.getNodeInfo().then(nodeInfo => {
          console.log("nodeInfo", nodeInfo)
          this.nodeInfo = nodeInfo
      })
    }
  }
}
</script>