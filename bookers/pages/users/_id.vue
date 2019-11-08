<template>
  <div v-if="user">
    {{user.email}}
    {{user.name}}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: this.$route.params.user
    };
  }
};
</script>

<style>
</style>