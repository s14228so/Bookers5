<template>
  <div class="col-sm-3">
    <h2>ログイン</h2>
    <form @submit.prevent="login">
      <div class="mt-3">
        <label for>Eメール</label>
        <input type="text" v-model="email" class="form-control" />
      </div>
      <div class="mt-3">
        <label for>パスワード</label>
        <input type="password" v-model="password" class="form-control" />
      </div>

      <input type="submit" class="btn btn-info mt-3" />
    </form>
    <button class="btn btn-success mt-3" @click="googleLogin">Googleでログイン</button>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase";
import axios from "@/plugins/axios";
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
          this.email = "";
          this.password = "";
          this.$router.push("/books");
        });
    },
    googleLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(async user => {
          const { data } = await axios.get(`/users?email=${user.email}`);
          this.$store.commit("setUser", data);
        });
    }
  }
};
</script>

<style>
</style>