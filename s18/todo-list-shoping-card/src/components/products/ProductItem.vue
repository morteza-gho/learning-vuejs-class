<template>

  <div class="card">
    <router-link :to="{ name: 'product', params: { id: product.id } }">
      <img :src="product.image" class="card-img-top" alt="product.title">
    </router-link>
    <div class="card-body">
      <h5 class="card-title">{{ product.titel }}</h5>
      <p class="card-text">{{ product.description }}</p>
    </div>
    <div class="card-footer d-flex justify-content-between align-items-center">
      <button class="btn btn-sm btn-outline-success" @click="addToCart(product)">Add To Cart</button>
      <strong>
        <i class="bi bi-currency-dollar"></i>
        {{ formatPrice(product.price) }}
      </strong>
    </div>
  </div>

</template>

<script setup>
import { defineProps } from "vue";
import { useStore } from 'vuex';
import { formatPrice } from "../../functions.js"

const store = useStore();

const props = defineProps({
  product: Object
});

const addToCart = (item) => {
  store.dispatch('cart/addToCart', item)
};

</script>