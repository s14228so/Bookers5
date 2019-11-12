<template>
  <div v-if="book">
    <form @submit.prevent="editBook">
      <input type="text" v-model="book.title" />
      <input type="text" v-model="book.body" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  data() {
    return {
      book: this.$route.params.book
    };
  },
  methods: {
    async editBook() {
      const { data } = await axios.put(`/books/${this.book.id}`, {
        book
      });
    }
  }
};
</script>

<style>
</style>