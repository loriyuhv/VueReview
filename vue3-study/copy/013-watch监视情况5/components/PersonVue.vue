<template>
  <div class="person">
    <h2>情况五：监视上述多个数据</h2>
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

/**监视：情况五：监视上述多个数据 */
watch([() => person.name, () => person.car.c1], (newVal, oldVal) => {
  console.log('数据变化了！', newVal, oldVal)
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
