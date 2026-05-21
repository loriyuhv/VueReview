<template>
  <div class="person">
    <h2>the current sum is {{ sum }}</h2>
    <h2>the sum * 10 is {{ bigSum }}</h2>
    <button @click="add">sum</button>
    <hr />
    <img v-for="(dog, index) in dogs" :src="dog" :key="index" alt="dog" />
    <hr />
    <button @click="getDog">getDog</button>
  </div>
</template>

<script setup lang="ts">
import useDog from '@/hooks/useDog.ts'
import useSum from '@/hooks/useSum.ts'

const { sum, bigSum, add } = useSum()
const { dogs, getDog } = useDog()
</script>

<style scoped>
img {
  height: 150px;
  margin: 10px 10px 10px 0;
}
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
