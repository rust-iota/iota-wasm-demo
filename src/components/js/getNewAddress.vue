<template>
  <div class="getNewAddress">
    <v-btn color="primary" @click="onClick">getNewAddress</v-btn>
    <pre>{{address}}</pre>
  </div>
</template>

<script>
export default {
  name: 'getNewAddress',
  data() {
    return {
      address: null
    }
  },
  methods: {
    onClick() {
      let seed = "ABC"
      console.log("his.$iota", this.$iota)
      this.address = this.$iota.getNewAddress(seed)

    }
  }
}
</script>