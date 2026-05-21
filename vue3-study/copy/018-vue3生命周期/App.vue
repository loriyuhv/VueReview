<template>
  <button @click="isShow = isShow ? !isShow : !isShow">display</button>
  <PersonVue v-if="isShow" />
</template>

<script setup lang="ts">
import PersonVue from '@/components/PersonVue.vue'
import { onMounted, ref } from 'vue'

const isShow = ref(true)

onMounted(() => {
  console.log('app mounted')
})
</script>

<style scoped></style>
