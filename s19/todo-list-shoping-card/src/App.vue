<script>
   import MainHeader from "./components/global/MainHeader.vue";
   export default {
      components: {MainHeader},
      data() {
         return {};
      }
   }
</script>

<template>
   <main-header></main-header>
   <div class="container mt-4">
      <router-view></router-view>
   </div>
</template>
