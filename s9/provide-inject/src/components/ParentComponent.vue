<template>
  <div class="ParentComponent">
    <h1>parent component</h1>
    <!-- {{ title }} -->
    <ChildComponent :childTitle="title"></ChildComponent>
  </div>
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default {
  props: ['title'],
  components: { ChildComponent }
}
</script>
<style>
.ParentComponent {
  padding: 30px;
  border: 1px solid red;
}
</style>