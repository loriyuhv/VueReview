<template>
  <div class="person">
    <h2>个人信息</h2>
    <p>姓名: {{ name }}</p>
    <p>年龄: {{ age }}</p>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="age++">年龄+1</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Person", // 组件名称
  // 组件数据
  data() {
    return {
      name: "John Doe",
      age: 30
    };
  },
  methods: {
    changeName() {
      this.name = "Jane Smith";
    },
    changeAge() {
      this.age += 2;
    },
    showTel() {
      alert("联系方式: 123-456-7890");  
    }
  }
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