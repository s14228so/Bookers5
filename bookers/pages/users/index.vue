<template>
  <div>
    <table class="table">
      <thead>
        <th>email</th>
        <th>name</th>
      </thead>
      <tbody v-for="(book, i) in books" :key="i" @click="routerPush(book)">
        <td>{{book.email}}</td>
        <td>{{book.name}}</td>
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
    const { data } = await axios.get("http://localhost:5000/v1/users");
    console.log(data);
    this.books = data;
  },
  methods: {
    routerPush(user) {
      this.$router.push({
        name: "users-id",
        params: {
          id: user.id,
          user: user
        }
      });
    }
  }
};
</script>

<style>
</style>