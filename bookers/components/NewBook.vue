<template>
  <div>
    <h3>New Book</h3>
    <p style="color: orange;">{{titleMessage}}</p>

    <p style="color: orange;">{{bodyMessage}}</p>

    <form @submit.prevent="handleSubmit">
      <label for>title</label>
      {{title.length}} / 10
      <input type="text" v-model="title" class="form-control" />

      <label for>body</label>
      {{body.length}} / 20
      <textarea
        name
        id
        cols="30"
        rows="10"
        v-model="body"
        class="form-control"
      ></textarea>
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
      body: "",
      titleOver: false,
      bodyOver: false,
      titleMessage: "",
      bodyMessage: ""
    };
  },
  computed: {
    user() {
      return this.$store.state.currentUser;
    }
  },
  watch: {
    title: function(newValue, oldValue) {
      this.titleOver = newValue.length > 10 ? true : false;
      this.titleMessage = newValue.length > 10 ? "タイトルが多すぎだよ" : "";
    },
    body: function(newValue, oldValue) {
      this.bodyOver = newValue.length > 20 ? true : false;
      this.bodyMessage = newValue.length > 20 ? "本文が多すぎだよ" : "";
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
      book.isEdit = false;
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