<script lang="ts" setup name="App">
import PersonVue from './components/PersonVue.vue'
import { ref } from 'vue'

const title2 = ref()
const person = ref()

function showTitle2() {
  console.log(title2.value)
}
function showPerson() {
  console.log(person.value)
}
</script>

<template>
  <h1 id="title1">Vue学习教程</h1>
  <h2 ref="title2">1.1 概述</h2>
  <button @click="showTitle2">点击输出h2内容</button>
  <button @click="showPerson">点击输出person内容</button>
  <PersonVue ref="person" />
</template>

<style scoped>
div {
  font-family: 'JetBrainsMonoNL Nerd Font Mono', 'Noto Sans CJK SC', monospace;
}
</style>
