<template>
   <div class="alert alert-warning mb-0 p-2 text-center w-50 m-auto">
      <i class="bi bi-info-circle"></i> {{text}}
   </div>
</template>

<script>
   export default {
      name: "NotFoundItems",
      props: {
         text: {
            type: String,
            default: 'Not Found items!'
         }
      }
   }
</script>

<style scoped>

</style>