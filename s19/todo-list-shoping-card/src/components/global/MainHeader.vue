<template>
   <header id="main-header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
         <div class="container">
            <router-link to="/" class="navbar-brand">Todo List</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNav">
               <div class="w-100 d-flex justify-content-between align-items-center">
                  <ul class="navbar-nav">
                     <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                     </li>
                     <li class="nav-item">
                        <router-link :to="{ name: 'tasks' }" class="nav-link">Tasks</router-link>
                     </li>
                     <li class="nav-item">
                        <router-link :to="{ name: 'products' }" class="nav-link">Products</router-link>
                     </li>
                  </ul>

                  <div class="position-relative">
                     <router-link :to="{name: 'cart'}">
                        <b class="bi bi-cart text-white fs-4"></b>
                        <span
                           v-if="cartCount > 0"
                          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-2">
                           {{ cartCount }}
                        </span>
                     </router-link>
                  </div>

               </div>

            </div>
         </div>
      </nav>
   </header>
</template>

<script setup>

import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const cartCount = computed(() => store.getters['cart/cartItemsCount']);

const fetchCartItems = async () => {
   await store.dispatch('cart/fetchCartItems');
}

onMounted(() => {
   fetchCartItems();
});

</script>

<style scoped>
.router-link-active,
.router-link-exact-active {
   color: #FFF !important;
}
</style>