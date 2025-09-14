<template>
  <div class="person">
    姓：<input type="text" v-model="lastName"> <br>
    名：<input type="text" v-model="firstName"> <br>
    全名：<span>{{ fullName }}</span> <br>
    <button @click="changeFullName()">修改全名</button>
    <!-- 验证：计算属性有缓存 -->
    <!-- 全名：<span>{{ fullName }}</span> <br> -->
    <!-- 全名：<span>{{ fullName }}</span> <br> -->
    <!-- <hr> -->
    <!-- 验证：方法有缓存 -->
    <!-- 全名：<span>{{ fullNameMethod() }}</span> <br>
    全名：<span>{{ fullNameMethod() }}</span> <br>
    全名：<span>{{ fullNameMethod() }}</span> <br>
    全名：<span>{{ fullNameMethod() }}</span> <br> -->
    <!-- 不建议在模板中编写逻辑代码 -->
    <!-- 全名：<span>{{ firstName.slice(0,1).toUpperCase() + firstName.slice(1) }} - {{ lastName }}</span> <br> -->
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed } from 'vue';

let firstName = ref("alan");
let lastName = ref("walker");

/* 方法没有缓存 */
function fullNameMethod() {
  console.log("fullNameMethod: ", 1);  
  return capitalizeFirstLetter(firstName.value) + "-" + capitalizeFirstLetter(lastName.value);
}

/* 计算属性有缓存 */
/* 这么定义的fullName是一个计算属性，且是只读的。*/
// let fullName = computed(() => {
//   console.log("fullName:", 1);  
//   return capitalizeFirstLetter(firstName.value) + "-" + capitalizeFirstLetter(lastName.value);
// });

/* 这么定义的fullName是一个计算属性，可读可写。*/
let fullName = computed({
  get() {
    console.log("fullName:", 1);
    
    return capitalizeFirstLetter(firstName.value) + "-" + capitalizeFirstLetter(lastName.value);
  },
  set(value) {
    console.log("set", value);
    const [str1, str2] = value.split("-");
    firstName.value = capitalizeFirstLetter(str1);
    lastName.value = capitalizeFirstLetter(str2);
  }
});

function capitalizeFirstLetter(string:string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function changeFullName() {
  fullName.value = 'jerry-walker';
}
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