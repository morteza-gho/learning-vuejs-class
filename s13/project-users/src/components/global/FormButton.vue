<template>
   <button :type="buttonType" :class="`btn ${classes}`" :disabled="isDisabled" @click="onButtonClick">
      <i :class="`bi ${icon} me-2`" v-if="icon && !isDisabled"></i>
      <span v-else class="spinner-border spinner-border-sm me-2"></span>
      {{text}}
   </button>
</template>

<script>
   export default {
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
      methods: {
         onButtonClick() {
            this.$emit('button-callback', {type: this.actionType, id: 2});
         }
      }
   }
</script>

<style scoped>

</style>