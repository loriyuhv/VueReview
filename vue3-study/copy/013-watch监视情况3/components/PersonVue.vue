<template>
  <div class="person">
    <!-- 情况三：监视“reactive”定义的“对象类型”数据 -->
    <h2>情况三：监视“reactive”定义的“对象类型”数据</h2>
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <button @click="changeName()">修改姓名</button>
    <button @click="changeAge()">修改年龄</button>
    <button @click="changePerson()">修改信息</button>
  </div>
</template>

<script setup lang="ts" name="PersonVue">
import { reactive, watch } from 'vue'
const person = reactive({
  name: 'Jerry',
  age: 18,
})
function changeName() {
  person.name += '~'
}
function changeAge() {
  person.age += 1
}

function changePerson() {
  const newPerson = {
    name: 'Tom',
    age: 18,
  }

  Object.assign(person, newPerson)
}

/*
  监视：情况三：监视“reactive”定义的“对象类型”数据，且默认开启深度监视
  隐式地创建了监视
*/
watch(person, (newValue, oldValue) => {
  console.log('person变化了', newValue, oldValue)
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
