<template>
  <div class="person">
    <!-- 情况二：监视“ref”定义的“对象类型”数据 -->
    <h2>情况二：监视“ref”定义的“对象类型”数据</h2>
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <button @click="changeName()">修改姓名</button>
    <button @click="changeAge()">修改姓名</button>
    <button @click="changePerson()">修改信息</button>
    
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch } from 'vue';
const person = ref({
  name: 'Jerry',
  age: 18
})
function changeName() {
  person.value.name += '~'
}
function changeAge() {
  person.value.age += 1
}

function changePerson() {
  const newPerson = {
    name: 'Tom',
    age: 18
  }

  person.value = newPerson;
}
/* 
  监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
  watch的第一个参数是：被监视的数据
  watch的第二个参数是：监视的回调
  watch的第三个参数是：配置对象（deep、immediate等等.....） 
*/
watch(person, (newValue, oldValue)=>{
  console.log('person变化了', newValue, oldValue);
},{deep:true, immediate:true})
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