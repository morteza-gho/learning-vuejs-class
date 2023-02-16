<template>
  <main-header></main-header>
  <div class="container mt-4">
    <router-view></router-view>
  </div>
</template>


<script setup>
import MainHeader from "../global/MainHeader.vue";
</script>