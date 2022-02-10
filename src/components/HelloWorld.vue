<template>
  <h1>{{ msg }}</h1>
  <div @click="getPostMAS">666666</div>
  <input type='text'>
</template>
<script setup>
import b from './b.js?worker'

import { ref } from 'vue'

function getPostMAS() {
	console.log(import.meta.url)
	console.log(__TEST__)
	const worker = new b()
	worker.onmessage = function (val) {
		console.log(val)
	}
}

const global = import.meta.glob('./global/*.js')

Object.entries(global).forEach(([key,val])=>{
  val().then(res=>{
    console.log(key, res.default)
  })
})


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
