<template>
  <div>
    <h3>User info</h3>
    <div class="image">
      <img src />
    </div>
    <table class="table">
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
    <div class="row text-center">
      <nuxt-link
        :to="{ name: 'users-id-edit', params: { id: user.id } }"
        class="col-xs-12 btn btn-default m-auto"
      >編集</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.currentUser;
    }
  }
};
</script>

<style scoped>
.m-auto {
  margin: 0 auto;
}
</style>