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
        <li class="nav-item active" v-for="(link, i) in linkItems" :key="i">
          <nuxt-link :to="link.href" class="nav-link">{{link.pathName}}</nuxt-link>
        </li>
        <li class="nav-item" v-if="user">
          <a class="nav-link" @click="logOut">ログアウト</a>
        </li>
      </ul>
    </div>
    <div v-if="user">{{user.email}}</div>
  </nav>
</template>

<script>
import firebase from "@/plugins/firebase";

export default {
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.currentUser;
    },
    linkItems() {
      return this.user
        ? [
            { pathName: "Books", href: "/books" },
            { pathName: "Users", href: "/users" },
            { pathName: "マイページ", href: "/mypage" }
          ]
        : [{ pathName: "ログイン", href: "/login" }];
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