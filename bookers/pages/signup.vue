<template>
  <div class="container">
    <h2>新規登録</h2>
    <form @submit.prevent="login">
      <div>
        <label for>メールアドレス</label>
        <input type="text" v-model="email" />
      </div>
      <div>
        <label for>名前</label>
        <input type="text" v-model="name" />
      </div>
      <div>
        <label for>パスワード</label>
        <input type="password" v-model="password" />
      </div>

      <input type="submit" />
    </form>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
      name: ""
    };
  },
  methods: {
    login() {
      console.log(this.email);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          const user = {
            email: this.email,
            name: this.name
          };
          axios.post("http://localhost:5000/v1/users", {
            user
          });
          this.email = "";
          this.password = "";
          this.$router.push("/books");
        });
    }
  }
};
</script>

<style>
</style>