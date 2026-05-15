<template>
  <div class="person">
    <h1 id="title1">中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>海淀</h3>
    <button @click="showTitle1">点击输出h1元素</button>
    <button @click="showTitle2">点击输出h2元素</button>
  </div>
</template>

<script setup lang="ts" name="PersonVue">
import { ref } from 'vue'

// 创建一个title2，用于存储ref标记的内容
const title2 = ref()
const a = ref(0)
const b = ref(0)
const c = ref(0)

function showTitle1() {
  console.log(document.getElementById('title1'))
}
function showTitle2() {
  console.log(title2.value)
}
defineExpose({ a, b, c })
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
