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

      <add-to-cart-action :product-data="productInCart" v-if="productInCart"></add-to-cart-action>
      <button class="btn btn-sm btn-outline-success" v-else @click="addToCart(product)">Add To Cart</button>
      
      <strong>
        <i class="bi bi-currency-dollar"></i>
        {{ formatPrice(product.price) }}
      </strong>
    </div>
  </div>

</template>

<script setup>
import { computed, defineProps } from "vue";
import { useStore } from 'vuex';
import { formatPrice } from "../../functions.js"
import AddToCartAction from '../cart/AddToCartAction.vue';

const store = useStore();
const props = defineProps({
  product: Object
});
const productInCart = computed(() => store.getters['cart/getCartItemData'](props.product.id));

const addToCart = (item) => {
  store.dispatch('cart/addToCart', item)
};

</script>