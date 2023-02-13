<template>

  <main-loading v-if="isLoading"></main-loading>

  <div v-else-if="product">

    <div class="card p-4">

      <div class="row">

        <div class="col-sm-4 col-12">
          <img :src="product.image" class="card-img-top" alt="product.title" />
        </div>

        <div class="col-sm-8 col-12">
          <div class="card-body">
            <h1 class="card-title mb-4">{{ product.title }}</h1>
            <p class="card-text fs-3 mb-5">{{ product.description }}</p>

            <div class="d-flex justify-content-between align-items-center mt-5">

              <add-to-cart-action :product-data="productInCart" size="lg" v-if="productInCart"></add-to-cart-action>
              <button class="btn btn-lg btn-success" v-else @click="addToCart">
                <i class="bi bi-cart-plus"></i>
                Add To Cart
              </button>

              <strong class="fs-2">
                <i class="bi bi-currency-dollar"></i>
                {{ formatPrice(product.price) }}
              </strong>
            </div>

          </div>
        </div>

      </div>


    </div>


  </div>

</template>

<script setup>

import { onMounted, ref, computed } from 'vue';
import { useStore } from 'vuex';
import MainLoading from "../global/MainLoading.vue"
import AddToCartAction from '../cart/AddToCartAction.vue';
import { formatPrice } from "../../functions.js"
import { useRoute } from "vue-router";
import { useToast } from "vue-toast-notification";
import axios from "axios"
import { BASE_URL } from '../../constants.js'

const toast = useToast();
const store = useStore();
const isLoading = ref(false);
const route = useRoute();
const product = ref(null);
const productInCart = computed(() => store.getters['cart/getCartItemData'](route.params.id));

const getProductData = async () => {

  try {
    isLoading.value = true;
    const { status, data } = await axios.get(`${BASE_URL}/products/${route.params.id}`);
    isLoading.value = false;
    if (status === 200) {
      product.value = data;
    }
  } catch (err) {
    toast.error(err.message);
  }

  isLoading.value = false;
}

onMounted(() => {
  getProductData();
});

const addToCart = () => {
  store.dispatch('cart/addToCart', product.value)
};

</script>