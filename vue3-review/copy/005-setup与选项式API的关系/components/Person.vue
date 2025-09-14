<template>
  <div class="person">
    <h2>个人信息</h2>
    <p>姓名: {{ name }}</p>
    <p>年龄: {{ age }}</p>
    <p>身高：{{ tall }}</p>
    <p>名称：{{ fullName }}</p>
    <button @click="changeAge()">修改年龄</button>
  </div>
</template>

<script lang="ts">
  export default {
    name:'Person',
    data() {
      return {
        tall: 170,
        fullName: this.name + " Tang",
        age: 24
      }
    },
    methods: {
      changeAge() {
        this.age += 1; // 如果setup()里有age，修改的是该age数据
        console.log(this.age);
        
      },
    },
    setup() {
      let name = "Jerry";
      let age = 18;

      return {name, age};
      // return {name};
    }
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
    margin: 0 5px;
  }
</style>