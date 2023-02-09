<template>

  <main-loading v-if="isLoading"></main-loading>

  <div v-else class="products row">

    <div class="col-md-3 col-sm-6 col-12" v-for="product in products" :key="product.id">
      <product-item :product="product"></product-item>
    </div>

  </div>

</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import MainLoading from "../global/MainLoading.vue"
import ProductItem from './ProductItem.vue';
import { useStore } from 'vuex';

const store = useStore();
const isLoading = ref(false);
const products = computed(() => store.getters['products/allProducts']);

const fetchProducts = async () => {
  isLoading.value = true;
  await store.dispatch('products/fetchProducts');
  isLoading.value = false;
}

onMounted(() => {
  fetchProducts();
});

</script>