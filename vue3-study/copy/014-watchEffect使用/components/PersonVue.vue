<template>
  <div class="person">
    <h2>需求：当水温达到60度，或水位达到80cm时，给服务器发送请求</h2>
    <h2>当前水温：{{ temperature }}°C</h2>
    <h2>当前水位：{{ height }}cm</h2>
    <button @click="changeTemperature">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script setup lang="ts">
// import { ref, watch, watchEffect } from 'vue'
import { ref, watchEffect } from 'vue'

/** 数据 */
const temperature = ref(10)
const height = ref(0)

/** 方法 */
function changeTemperature() {
  temperature.value += 10
}
function changeHeight() {
  height.value += 10
}

// 监视 ==> watch写法
/* watch([temperature, height], (value) => {
  const [newTemperature, newHeight] = value
  if (newTemperature >= 60 || newHeight >= 80) {
    console.log('给服务器发送请求')
  }
}) */

// 监视 ==> watchEffect写法
watchEffect(() => {
  if (temperature.value >= 60 || height.value >= 80) {
    console.log('给服务器发送请求')
  }
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
