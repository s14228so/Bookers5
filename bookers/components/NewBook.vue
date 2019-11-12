<template>
  <div>
    <h3>New Book</h3>
    <form @submit.prevent="handleSubmit">
      <label for>title</label>
      <input type="text" v-model="title" class="form-control" />
      <label for>body</label>
      <textarea name id cols="30" rows="10" v-model="body" class="form-control"></textarea>
      <input type="submit" class="btn btn-primary mt-3" />
    </form>
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
      const book = {
        title: this.title,
        body: this.body,
        user_id: this.user.id
      };
      const { data } = await axios.post("http://localhost:5000/v1/books", {
        book
      });
      this.title = "";
      this.body = "";
      book.user = this.user;
      this.$emit("pushBook", book);

      this.$store.commit("setNotice", {
        status: true,
        message: "投稿しました"
      });
      setTimeout(() => {
        this.$store.commit("setNotice", {});
      }, 2000);
    }
  }
};
</script>

<style>
</style>