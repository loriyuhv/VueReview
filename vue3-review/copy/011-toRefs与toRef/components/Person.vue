<template>
  <div class="person">
    <h2>个人信息</h2>
    <p>姓名：{{ person.name }}</p>
    <p>年龄：{{ person.age }}</p>
    <button @click="changeName()">修改姓名</button>
    <button @click="changeAge()">修改年龄</button>
    <button @click="changeFullName()">修改全名</button>

  </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, toRefs, toRef } from 'vue';

  /* 数据 */
  let person = reactive({
    name: "Jerry",
    age: 24
  })

  let {name, age} = toRefs(person);
  let fullName = toRef(person, "name");

  /* 方法 */
  function changeName() {
    name.value = "Tom"; 
    console.log(name);
  }

  function changeAge() {
    age.value += 1;
    console.log(age);
  }
  function changeFullName() {
    fullName.value = "James";
    console.log(fullName);
  }
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