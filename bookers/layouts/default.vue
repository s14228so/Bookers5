<template>
  <div>
    <Success />
    <Header />
    <div class="wrapper mt-3">
      <nuxt />
    </div>
  </div>
</template>
<script>
import Header from "@/components/layouts/Header";
import Success from "@/components/atoms/Success";
export default {
  components: {
    Header,
    Success
  }
};
</script>

<style>
.wrapper {
  width: 90%;
  margin: 0 auto;
}

.nav-link {
  cursor: pointer;
}
</style>
