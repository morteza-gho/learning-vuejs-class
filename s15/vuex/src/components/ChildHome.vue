<template>
  <div class="child-home">
    <h3>ChildHome</h3>
    Count In ChildHome: {{ count }}
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
}
</script>
<style scoped>
.child-home {
  border: 1px solid blue;
  padding: 30px;
}
</style>