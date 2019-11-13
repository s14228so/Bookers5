<template>
  <div>
    {{count}}
    <button @click="counter++">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  computed: {
    count() {
      return this.counter;
    }
  }
};
</script>

<style>
</style>