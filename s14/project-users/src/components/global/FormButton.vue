<template>
   <button :type="buttonType" :class="`btn ${classes}`" :disabled="isDisabled" @click="onButtonClick">
      <i :class="`bi ${icon} me-2`" v-if="icon && !isDisabled"></i>
      <span v-else class="spinner-border spinner-border-sm me-2"></span>
      {{ text }}
   </button>
</template>

<script setup>

const props = defineProps({
   buttonType: {
      type: String,
      default: 'button'
   },
   actionType: {
      type: String,
      required: true
   },
   classes: {
      type: String,
      default: 'btn-primary'
   },
   isDisabled: {
      type: Boolean,
      required: true
   },
   icon: {
      type: String,
      required: true
   },
   text: {
      type: String,
      required: true
   }
});

const emits = defineEmits(['button-callback'])

/* export default {
   name: "FormButton",
   props: {
      buttonType: {
         type: String,
         default: 'button'
      },
      actionType: {
         type: String,
         required: true
      },
      classes: {
         type: String,
         default: 'btn-primary'
      },
      isDisabled: {
         type: Boolean,
         required: true
      },
      icon: {
         type: String,
         required: true
      },
      text: {
         type: String,
         required: true
      }
   },
   emits: ['button-callback'],

   setup({actionType}, {emit}) {
      const onButtonClick = () => {
         emit('button-callback', {type: actionType});
      }

      return {onButtonClick}
   }
} */
</script>

<style scoped>

</style>