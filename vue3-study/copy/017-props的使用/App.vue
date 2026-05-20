<template>
  <!-- 只接收list -->
  <!-- <PersonVue :list="personList" /> -->

  <!-- 接收list + 限制类型 -->
  <PersonVue :list="personList" />
  <!-- <PersonVue :list="name" /> -->
</template>

<script setup lang="ts">
import PersonVue from './components/PersonVue.vue'
import { reactive } from 'vue'
import type { People } from '@/types'

const personList = reactive<People>([
  { id: '1001', name: 'Jerry', age: 15 },
  { id: '1002', name: 'Alan', age: 19 },
  { id: '1003', name: 'James', age: 18, tall: 170.32 },
])

// const name = 'Jerry'
</script>

<style scoped></style>
