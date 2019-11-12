<template>
  <div>
    <h3>User編集</h3>
    <div>
      <form @submit.prevent="edit">
        <input type="text" v-model="user.name" />
        <input type="text" v-model="user.introduction" />
        <input type="submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  data() {
    return {
      user: this.$store.state.currentUser
    };
  },
  methods: {
    async edit() {
      const user = {
        name: this.user.name,
        introduction: this.user.introduction
      };
      const { data } = await axios.put(`/users/${this.user.id}`, { user });
      console.log(data);
      this.$router.push("/books");
      this.$store.commit("setUser", data);
    }
  }
};
</script>

<style>
</style>