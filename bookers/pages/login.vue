<template>
  <div>
    <h2>ログイン</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="email" />
      <input type="password" v-model="password" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("ログイン！");
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