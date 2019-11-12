<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <nuxt-link to="/" class="navbar-brand">Bookers2</nuxt-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <nuxt-link to="/books" class="nav-link">Books</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/users" class="nav-link">Users</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/mypage" class="nav-link">Mypage</nuxt-link>
        </li>
        <li class="nav-item" v-if="user">
          <a class="nav-link" @click="logOut">ログアウト</a>
        </li>
        <li class="nav-item" v-else>
          <nuxt-link to="/login" class="nav-link">ログイン</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  computed: {
    user() {
      return this.$store.state.currentUser;
    }
  },
  methods: {
    logOut() {
      let vm = this;
      firebase
        .auth()
        .signOut()
        .then(function() {
          vm.$router.push("/login");
          vm.$store.commit("setUser", null);
        });
    }
  }
};
</script>

<style>
</style>