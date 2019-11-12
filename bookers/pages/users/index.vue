<template>
  <div class="row">
    <SideBar />
    <div class="col-sm-9">
      <h3>Users</h3>
      <table class="table">
        <thead>
          <th>email</th>
          <th>name</th>
        </thead>
        <tbody v-for="(user, i) in users" :key="i" @click="routerPush(user)" class="user-cell">
          <td>{{user.email}}</td>
          <td>{{user.name}}</td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewBook from "@/components/NewBook";
import SideBar from "@/components/layouts/SideBar";
import axios from "axios";
export default {
  data() {
    return {
      users: []
    };
  },
  fetch({ store, redirect }) {
    if (!store.state.currentUser) {
      redirect("/login");
    }
  },
  components: {
    NewBook,
    SideBar
  },
  async created() {
    const { data } = await axios.get("http://localhost:5000/v1/users");
    this.users = data;
  },
  methods: {
    routerPush(user) {
      this.$router.push({
        name: "users-id",
        params: {
          id: user.id,
          user: user
        }
      });
    }
  }
};
</script>

<style>
.user-cell {
  cursor: pointer;
}
</style>