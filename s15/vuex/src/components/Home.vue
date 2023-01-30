<template>
  <div class="home">
  <h2>Home</h2>

  Count In Home: {{ count }}

  <child-home></child-home>
  </div>
</template>
<script>
import ChildHome from './ChildHome.vue';

export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  },
  components: { ChildHome }
}
</script>
<style scoped>
  .home {
    border: 1px solid red;
    padding: 30px;
  }
</style>
