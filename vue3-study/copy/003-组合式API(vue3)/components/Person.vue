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
  /* 组件名称 */
  name: 'PersonVue',
  setup() {
    /* 数据 */
    let name = 'John Doe' /* 非响应式数据 */
    let age = 30 /* 非响应式数据 */
    const tel = '123-456-7890' /* 非响应式数据 */

    /* 方法 */
    function changeName() {
      name = 'Jane Smith'
    }
    function changeAge() {
      age += 2
    }
    function showTel() {
      alert('联系方式: ' + tel)
    }

    /* 返回需要在模板中使用的数据和方法 */
    return { name, age, changeName, changeAge, showTel }
  },
}
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
}
</style>
