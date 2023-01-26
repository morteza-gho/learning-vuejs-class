<template>
   <div class="btn-group btn-group-sm">
      <button type="button" class="btn btn-outline-secondary" @click="onButtonsClick('show')" title="show">
         <i class="bi bi-eye"></i>
      </button>
      <button type="button" class="btn btn-outline-primary" @click="onButtonsClick('edit')" title="edit">
         <i class="bi bi-pencil"></i>
      </button>
      <button type="button" class="btn btn-outline-danger" @click="onButtonsClick('delete')" title="delete">
         <i class="bi bi-trash"></i>
      </button>
   </div>
</template>

<script setup>

const props = defineProps({
   id: String || Number
});
const emits = defineEmits(['table-action-callback'])

const onButtonsClick = (type) => {
   emits('table-action-callback', { id: props.id, type })
}

/* export default {
   name: "TableActions",
   props: {
      id: String || Number
   },
   emits: ['table-action-callback'],

   /*setup(props, context) {
      const onButtonsClick = (type) => {
         context.emit('table-action-callback', {id: props.id, type})
      }

      return {onButtonsClick}
   }*/

</script>

<style scoped>

</style>