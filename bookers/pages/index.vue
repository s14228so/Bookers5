<template>
  <div class="row text-center">
    <div class="col-md-6 offset-md-3 mt-5">
      <h1 class="mb-5">
        welcome to
        <strong>Bookers</strong> !!
      </h1>
      <div class="btn-wrapper">
        <nuxt-link to="/login" class="btn btn-info col-xs-10 col-xs-offset-1 sign_in">Log in</nuxt-link>
        <nuxt-link to="/signup" class="btn btn-success col-xs-10 col-xs-offset-1 sign_up">Sign Up</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
