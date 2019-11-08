<template>
  <div>
    <table class="table">
      <thead>
        <th>タイトル</th>
        <th>本文</th>
      </thead>
      <tbody v-for="(book, i) in books" :key="i" @click="routerPush(book)">
        <td>{{book.title}}</td>
        <td>{{book.body}}</td>
      </tbody>
    </table>

    <NewBook />
  </div>
</template>

<script>
import NewBook from "@/components/NewBook";
import axios from "axios";
export default {
  data() {
    return {
      books: []
    };
  },
  components: {
    NewBook
  },
  async created() {
    const { data } = await axios.get("http://localhost:5000/v1/books");
    console.log(data);
    this.books = data;
  },
  methods: {
    routerPush(book) {
      this.$router.push({
        name: "books-id",
        params: {
          id: book.id,
          book: book
        }
      });
    }
  }
};
</script>

<style>
</style>