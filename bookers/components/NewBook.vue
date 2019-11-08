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
      body: "",
      user: null
    };
  },
  async created() {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        console.log(this.user.email);
      } else {
        console.log("userいないよ");
      }
    });
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
    }
  }
};
</script>

<style>
</style>