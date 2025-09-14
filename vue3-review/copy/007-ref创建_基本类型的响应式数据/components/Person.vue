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

<script lang="ts" setup name="Person">
  import { ref } from "vue";
  
  /* 数据 */
  let name = ref("Jerry");
  let age = ref(20);
  let tel = "123-456-7890";

  /* 方法 */
  function changeName() {
    name.value = "Tom";
    console.log("name:", name);
    
  }
  function changeAge() {
    age.value += 1;
    console.log("age:", age);
  }
  function showTel() {
    alert("联系方式: " + tel);
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
    margin-right: 5px;
  }
</style>