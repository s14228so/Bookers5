<template>
  <div>
    <h3>User info</h3>
    <div class="image">
      <img src />
    </div>
    <table class="table" v-if="user">
      <tbody>
        <tr></tr>
        <tr>
          <th>name</th>
          <th>{{user.name}}</th>
        </tr>
        <tr>
          <th>introduction</th>
          <th>{{user.introduction}}</th>
        </tr>
      </tbody>
    </table>
    <div class="row text-center" v-if="user">
      <nuxt-link
        :to="{ name: 'users-id-edit', params: { id: user.id } }"
        class="col-xs-12 btn btn-default m-auto"
      >編集</nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  data() {
    return {
      user: this.$route.params.id
        ? this.getUser()
        : this.$store.state.currentUser
    };
  },
  methods: {
    async getUser() {
      const { data } = await axios.get(`/users/${this.$route.params.id}`);
      this.user = data;
    }
  }
};
</script>

<style scoped>
.m-auto {
  margin: 0 auto;
}
</style>