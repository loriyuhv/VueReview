<template>
  <div class="person">
    <ul>
      <li v-for="person in list" :key="person.id">{{ person.name }} -- {{ person.age }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { People } from '@/types'

// 只接收list
// defineProps(['list'])

// 接收list，同时将props保存起来
// const t = defineProps(['list'])
// console.log(t)

// 接收list + 限制类型
// defineProps<{ list: People }>()

// 接收personList + 限制类型 + 限制必要性 + 指定默认值
withDefaults(defineProps<{ list?: People }>(), {
  list: () => [{ id: '9999', name: 'Jerry', age: 26 }],
})
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
