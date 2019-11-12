<template>
  <div v-if="book">
    {{book.title}}
    {{book.body}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      book: this.$route.params.book
    };
  }
};
</script>

<style>
</style>