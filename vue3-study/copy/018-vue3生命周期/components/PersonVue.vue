<template>
  <div class="person">
    <h2>The sum is {{ sum }}</h2>
    <button @click="add">sum</button>
  </div>
</template>

<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from 'vue'

// data
const sum = ref(0)

// method
const add = () => {
  sum.value++
}
// create
console.log('created')
// before mount
onBeforeMount(() => {
  console.log('before mount')
})
// mounted
onMounted(() => {
  console.log('person vue mounted')
})
// before update
onBeforeUpdate(() => {
  console.log('before update')
})
// updated
onUpdated(() => {
  console.log('updated')
})
// before mounted
onBeforeUnmount(() => {
  console.log('before unmount')
})
// unmounted
onUnmounted(() => {
  console.log('unmounted')
})
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
}
button {
  margin-right: 5px;
}
</style>
