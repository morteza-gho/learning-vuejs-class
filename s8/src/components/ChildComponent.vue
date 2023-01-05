<template>
  <div class="child-component">
    <p>{{ title }}</p>
    <button @click="addCounter">add counter</button>
  </div>
</template>
<script>
export default {
  props: ['title'],
  emits: ['increaseCounter'],
  methods: {
    addCounter() {
      this.$emit('increaseCounter', {number: 2});
      console.log('button clicked in child component');
    }
  }
  
}
</script>
<style scoped>
  .child-component {
    width: 50%;
    border: 1px solid red;
    padding: 10px
  }
</style>