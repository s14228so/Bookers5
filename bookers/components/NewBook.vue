<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-3">
        <h3>New Book</h3>
        <form @submit.prevent="handleSubmit">
          <label for>title</label>
          <input type="text" v-model="title" class="form-control" />
          <label for>body</label>
          <textarea name id cols="30" rows="10" v-model="body" class="form-control"></textarea>
          <input type="submit" class="btn btn-primary mt-3" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import firebase from "@/plugins/firebase";
export default {
  data() {
    return {
      title: "",
      body: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.currentUser;
    }
  },
  methods: {
    async handleSubmit() {
      console.log(this.user.id);
      const book = {
        title: this.title,
        body: this.body,
        user_id: this.user.id
      };
      console.log(book);
      const { data } = await axios.post("http://localhost:5000/v1/books", {
        book
      });
      this.title = "";
      this.body = "";
      book.user = this.user;
      this.$emit("pushBook", book);
    }
  }
};
</script>

<style>
</style>