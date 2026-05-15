<script lang="ts">
import PersonVue from './components/PersonVue.vue'

/* 暴露组件选项 */
export default {
  /* 组件名称 */
  name: 'App',
  components: {
    /* 注册Person组件 */
    PersonVue,
  },
}
</script>

<template>
  <PersonVue />
</template>

<style scoped>
div {
  font-family: 'JetBrainsMonoNL Nerd Font Mono', 'Noto Sans CJK SC', monospace;
}
</style>
