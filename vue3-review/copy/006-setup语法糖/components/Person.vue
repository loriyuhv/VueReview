<template>
  <div class="person">
    <h2>个人信息</h2>
    <p>姓名: {{ name }}</p>
    <p>年龄: {{ age }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<!--
  引入vite-plugin-vue-setup-extend插件可以省略以下代码
  1. 安装：npm i vite-plugin-vue-setup-extend -D
  2. 在vite.config.ts文件中引入
-->
<!-- <script lang="ts">
export default {
  name: "Person", // 组件名称
}
</script> -->

<script lang="ts" setup name="Person">
  /* 数据 */
  let name = "Jerry";
  let age = 20;
  let tel = "123-456-7890";
  /* 方法 */
  function changeName() {
    name = "Jane Smith";
  }
  function changeAge() {
    age += 2;
  }
  function showTel() {
    alert("联系方式: " + tel);  
  }
</script>

<style>
  .person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>