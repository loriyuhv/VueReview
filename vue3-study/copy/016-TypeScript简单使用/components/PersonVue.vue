<template>
  <div class="person">???</div>
</template>

<script setup lang="ts" name="PersonVue">
import { type IPerson, type People } from '@/types'

const person: IPerson = { id: '1001', name: 'Jerry', age: 18 }
console.log(person.name)

const people: Array<IPerson> = [
  { id: '1001', name: 'Jerry', age: 18 },
  { id: '1002', name: 'Tom', age: 18 },
]
console.log(people[0])

const people2: People = [
  { id: '1001', name: 'Jame', age: 18 },
  { id: '1002', name: 'Alan', age: 18 },
]
console.log(people2[0])
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
