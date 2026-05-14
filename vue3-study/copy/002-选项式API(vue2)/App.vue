<script lang="ts">
import PersonVue from './components/Person.vue'

// 暴露组件选项
export default {
  // 组件名称
  name: 'App',
  components: {
    PersonVue, // 注册Person组件
  },
}
</script>

<template>
  <div class="app">
    <h1>Hello vue3</h1>
  </div>
  <PersonVue />
</template>

<style scoped>
.app {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
