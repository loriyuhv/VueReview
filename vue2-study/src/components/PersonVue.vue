<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PersonVue",
  // 数据
  data() {
    return {
      sum: 1,
    };
  },
  // 方法
  methods: {
    add() {
      this.sum++;
    },
  },
  // 创建前的钩子
  beforeCreate() {
    console.log("beforeCreate");
  },
  // 创建完毕的钩子
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
    // debugger;
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
    // debugger;
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
});
</script>

<template>
  <div class="person">
    <h2>the sum: {{ sum }}</h2>
    <button @click="add">click</button>
  </div>
</template>

<style scoped>
.person {
  background-color: skyblue;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
