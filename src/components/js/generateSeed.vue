<template>
  <div class="generateSeed">
    <v-btn color="primary" @click="onClick">Generate Seed</v-btn>
    <pre>{{seed}}</pre>
  </div>
</template>

<script>
export default {
  name: 'generateSeed',
  data() {
    return {
      seed: null
    }
  },
  methods: {
    onClick() {
     this.seed = "123"
    }
  }
}
</script>