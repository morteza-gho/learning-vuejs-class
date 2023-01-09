<template>
  <div class="childComponent">
    <h3>child component</h3>
    {{ childTitle }}
    <hr />
    {{ appDesc }}
  </div>
</template>
<script>
export default {
  props: ['childTitle'],
  inject: ['appDesc']
}
</script>
<style >
  .childComponent {
    padding: 30px;
    border: 1px solid blue;
  }
</style>