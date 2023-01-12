<script>
   import MainHeader from "./components/MainHeader.vue";

   export default {
      data() {
         return {};
      },
      components: {MainHeader}
   }
</script>

<template>
   <MainHeader></MainHeader>
   <router-view></router-view>
</template>
