<template>
  <div class="person">
    <h2>个人信息</h2>
    <p>姓名: {{ name }}</p>
    <p>年龄: {{ age }}</p>
    <p>身高：{{ tall }}</p>
    <p>全名：{{ fullName }}</p>
    <button @click="changeTall">修改身高</button>
    <button @click="changeAge()">修改年龄</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PersonVue',
  data() {
    return {
      tall: 170,
      fullName: this.name + ' Tang',
      age: 24,
    }
  },
  methods: {
    changeTall() {
      this.tall += 1
    },
    changeAge() {
      this.age += 1 /* 如果setup()里有age，修改的是该age数据 */
      console.log(this.age)
    },
  },
  setup() {
    /*
      问题：Vue3 使用组合式 API 开发项目时，能不能混用选项式 API 的 data、methods 一起写？
      如果混用出现属性 / 方法同名冲突，会以谁为准？
      1. 可以混用：Vue3 完全支持组合式 API (setup) + 选项式 API (data/methods) 混用，语法不报错、能正常运行。
      2. 如果你同时写了（比如混用选项式 API）：
        - 最终生效的是 setup () 里返回的数据 / 方法
        - 选项式的 data、methods 会被覆盖
      3. 本质原因：setup 执行时机比 data 更早，优先级更高
    */

    const name = 'Jerry'
    // const age = 18

    // return { name, age }
    return { name }
  },
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
