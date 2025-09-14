<template>
  <div class="person">
    <!-- 情况一：监视“ref”定义的“基本类型”数据 -->
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum()">sum+1</button>
  </div>
</template>

<script setup lang="ts" name="Person">
import { ref, watch } from 'vue';

// 数据
let sum = ref(0);

// 方法
function changeSum() {
  sum.value += 2;
}

// 监视
const stopWatch = watch(sum, (newValue, oldValue)=>{
  console.log("sum变化了",newValue, oldValue);
  if (newValue >= 10) {
    stopWatch();
  }
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