<template>
  <div class="mt-5">
    <div class="row">
      <div class="col-sm-5">
        <h2>新規登録</h2>
        <form @submit.prevent="login">
          <div>
            <label for>メールアドレス</label>
            <input type="text" v-model="email" class="form-control" />
          </div>
          <div>
            <label for>名前</label>
            <input type="text" v-model="name" class="form-control" />
          </div>
          <div>
            <label for>パスワード</label>
            <input type="password" v-model="password" class="form-control" />
          </div>
          <div class="mt-3">
            <input type="submit" class="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
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
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          const user = {
            email: this.email,
            name: this.name
          };
          axios
            .post("http://localhost:5000/v1/users", {
              user
            })
            .then(user => {
              this.$store.commit("setUser", user);
              this.email = "";
              this.password = "";
              this.$router.push("/books");
            });
        });
    }
  }
};
</script>

<style>
</style>