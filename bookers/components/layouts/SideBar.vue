<template>
  <div class="col-sm-3">
    <Profile class="mb-5" />
    <NewBook @pushBook="pushBook" />
  </div>
</template>

<script>
import Profile from "@/components/Profile";
import NewBook from "@/components/NewBook";
export default {
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