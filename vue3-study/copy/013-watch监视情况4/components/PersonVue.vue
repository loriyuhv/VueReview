<template>
  <div class="person">
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changName">修改名字</button>
    <button @click="changAge">修改年龄</button>
    <button @click="changC1">修改第一台车</button>
    <button @click="changC2">修改第二台车</button>
    <button @click="changCar">修改第整台车</button>
  </div>
</template>

<script setup lang="ts" name="PersonVue">
import { reactive, watch } from 'vue'

/* 数据 */
const person = reactive({
  name: 'Jerry',
  age: 18,
  car: {
    c1: 'Xiaomi',
    c2: 'BMW',
  },
})

/* 方法 */
function changName() {
  person.name += '~'
}
function changAge() {
  person.age += 1
}
function changC1() {
  person.car.c1 = 'Audi'
}
function changC2() {
  person.car.c2 = 'Honda'
}
function changCar() {
  person.car = { c1: 'Tesla', c2: 'Ford' }
}

/** 监视：情况四：监视响应式对象中的某个属性，切该属性是基本类型的，要写成函数 */
watch(
  () => person.name,
  (newValue, oldValue) => {
    console.log('person was changed!', newValue, oldValue)
  },
)

/** 监视：情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，更推荐成函数 */
watch(
  () => person.car,
  (newValue, oldValue) => {
    console.log('person.car was changed!', newValue, oldValue)
  },
  { deep: true },
)
</script>

<style scoped>
.person {
  font-family: 'Noto Sans CJK SC', 'JetBrainsMonoNL Nerd Font Mono', monospace;
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
