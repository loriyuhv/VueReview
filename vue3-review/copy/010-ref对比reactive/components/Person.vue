<template>
  <div class="person">
    <h3>个人信息：ref实现</h3>
    <p>我是{{ personRef.name }}，今年{{ personRef.age }}岁了。</p>
    <button @click="changePersonRef()">修改信息</button>
    <hr>
    <h3>个人信息：reactive实现</h3>
    <p>我是{{ personReactive.name }}，今年{{ personReactive.age }}岁了。</p>
    <button @click="changePersonReactive()">修改信息</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, reactive } from 'vue';

  /* 数据 */
  let personRef = ref({
    name: 'Jerry',
    age: 18
  });

  let personReactive = reactive({
    name: 'Tom',
    age: 20
  });

  /* 方法 */
  function changePersonRef() {
    let newPerson = {
      name: 'Alice',
      age: 28
    };
    personRef.value = newPerson;
    console.log("personRef:", personRef);
  }
  function changePersonReactive() {
    let newPerson = {
      name: "Jack",
      age: 12
    };
    // personReactive = newPerson; // 行不通 这就是和ref的区别
    Object.assign(personReactive, newPerson);
    console.log("personReactive: ", personReactive);
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