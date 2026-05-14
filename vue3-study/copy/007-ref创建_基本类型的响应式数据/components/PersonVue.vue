<template>
  <div class="person">
    <h2>个人信息</h2>
    <p>名称：{{ name }}</p>
    <p>年龄：{{ age }}</p>
    <button @click="changeName()">修改名称</button>
    <button @click="changeAge()">修改年龄</button>
    <button @click="showTel()">联系方式</button>
  </div>
</template>

<script setup lang="ts" name="PersonVue">
import { ref } from 'vue'

/* 数据 */
const name = ref('Jerry')
const age = ref(18)
const tel = ref('18377208023')

/* 方法 */
function changeName() {
  name.value = 'Jane Smith'
}
function changeAge() {
  age.value += 2
}
function showTel() {
  alert('联系方式: ' + tel.value)
}
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin-right: 10px;
}
</style>
