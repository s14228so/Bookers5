<template>
  <div class="col-sm-3">
    <Profile class="mb-5" user="user" />
    <NewBook @pushBook="pushBook" />
  </div>
</template>

<script>
import Profile from "@/components/Profile";
import NewBook from "@/components/NewBook";
export default {
  props: ["user"],
  components: {
    Profile,
    NewBook
  },
  methods: {
    pushBook(book) {
      this.$emit("pushBook", book);
    }
  }
};
</script>

<style>
</style>