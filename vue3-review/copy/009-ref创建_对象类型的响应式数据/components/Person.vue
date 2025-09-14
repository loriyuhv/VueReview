<template>
  <div class="person">
    <h2>个人信息</h2>
    <p>我是{{ person.name }}，今年{{ person.age }}岁了。</p>
    <button @click="changeAge()">修改年龄</button>
    <h2>个人爱好</h2>
    <ul>
      <li v-for="hobby in hobbies" :key="hobby.id">{{ hobby.title }}</li>
    </ul>
    <button @click="changeFirstHobby()">修改首爱好</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref } from 'vue';

  /* 数据 */
  let person = ref({
    name: 'Jerry',
    age: 18
  });
  let hobbies = ref([
    { id: 1, title: '看书' },
    { id: 2, title: '旅游' },
    { id: 3, title: '美食' }
  ]);

  /* 方法 */
  function changeAge() {
    person.value.age += 1;
    console.log("age:", person.value.age);
  }
  function changeFirstHobby() {
    hobbies.value[0].title = '打游戏';
    console.log("hobbies:", hobbies.value[0]);
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