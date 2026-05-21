<template>
  <div>
    <button @click="isShow = isShow ? !isShow : !isShow">display</button>
    <PersonVue v-if="isShow" />
  </div>
</template>

<script>
import PersonVue from "@/components/PersonVue.vue";

export default {
  name: "App",
  components: { PersonVue },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
button {
  margin: 10px 0;
}
</style>
