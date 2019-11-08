<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Bookers2</a>
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
          <li class="nav-item">
            <a class="nav-link" @click="logOut">ログアウト</a>
          </li>
        </ul>
      </div>
    </nav>

    <nuxt />
  </div>
</template>
<script>
import firebase from "@/plugins/firebase";
export default {
  data() {
    return {
      user: null
    };
  },
  methods: {
    logOut() {
      let vm = this;
      firebase
        .auth()
        .signOut()
        .then(function() {
          console.log(" Sign-out successful.");
          vm.$router.push("/login");
        });
    }
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
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.nav-link {
  cursor: pointer;
}
</style>
