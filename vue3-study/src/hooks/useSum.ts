import { computed, onMounted, ref } from 'vue'

export default () => {
  // data
  const sum = ref(0)
  const bigSum = computed(() => {
    return sum.value * 10
  })

  // methods
  const add = () => {
    sum.value++
  }

  onMounted(() => {
    sum.value = 1
  })

  return { sum, bigSum, add }
}
