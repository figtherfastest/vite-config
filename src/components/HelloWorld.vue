<template>
  <h1>{{ msg }}</h1>
  <div @click="getPostMAS">666666</div>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>
<script setup>
import b from './b.js?worker'

import { ref } from "vue"

function getPostMAS() {
  const worker = new b();
  worker.onmessage = function (val) {
    console.log(val);
  }
};

defineProps({
  msg: String,
})

const count = ref(0)
</script>
<style scoped lang="scss">
a {
  color: black;
}
</style>
