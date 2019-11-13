<template>
  <div class="col-sm-4">
    <h3>User編集</h3>
    <div>
      <form @submit.prevent="edit">
        <div class="form-group">
          <label for>名前</label>
          <input type="text" v-model="user.name" class="form-control" />
        </div>
        <div class="form-group">
          <label for>自己紹介</label>
          <input type="text" v-model="user.introduction" class="form-control" />
        </div>

        <input type="submit" value="更新" 　class="btn btn-info" />
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
  fetch({ store, redirect, params }) {
    if (params.id !== store.state.currentUser.id) {
      redirect("/books");
    }
  },
  methods: {
    async edit() {
      const user = {
        name: this.user.name,
        introduction: this.user.introduction
      };
      const { data } = await axios.put(`/users/${this.user.id}`, { user });
      this.$router.push("/books");
      this.$store.commit("setUser", data);
      this.$store.commit("setNotice", {
        status: true,
        message: "ユーザー情報を更新しました"
      });
      setTimeout(() => {
        this.$store.commit("setNotice", {});
      }, 2000);
    }
  }
};
</script>

<style>
</style>