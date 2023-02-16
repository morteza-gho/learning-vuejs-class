<template>

  <div v-if="cartItems.length">

    <h1 class="mb-3">Products In Your cart</h1>

    <table class="table table-bordered text-center">
      <thead>
        <tr class="bg-light">
          <th>Row</th>
          <th>Product</th>
          <th>Price</th>
          <th>Count</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in cartItems" :key="product.id">
          <td>{{ index + 1 }}</td>
          <td>
            <span class="d-flex align-items-center">
              <router-link :to="{ name: 'product', params: { id: product.id } }">
                <img :src="product.image" :alt="product.title" class="img-thumbnail me-2" width="50" />
              </router-link>
              <p class="mb-0 fs-5">{{ product.title }}</p>
            </span>
          </td>
          <td>{{ formatPrice(product.price) }}</td>
          <td>
            <add-to-cart-action :product-data="product"></add-to-cart-action>
          </td>
          <td>{{ formatPrice(product.value * product.price) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="bg-light">
          <td colspan="4" class="text-start">
            <b class="fs-5">Total Cart Price</b>
          </td>
          <td>
            <b class="fs-5"><b class="bi bi-currency-dollar"></b>{{ formatPrice(totalCartPrice) }}</b>
          </td>
        </tr>
      </tfoot>
    </table>

    <div class="d-flex justify-content-end">
      <button class="btn btn-lg btn-success">
        <b class="bi bi-cart"></b>
        Checkout
      </button>
    </div>
  </div>

  <div v-else class="alert alert-warning w-50 m-auto text-center px-5 py-4 mt-5">
    <h3 class="card-title mb-5">There Is No Product In Your Cart</h3>
    <router-link :to="{ name: 'products' }" class="btn btn-lg btn-dark">Go To Products</router-link>
  </div>

</template>

<script setup>

import {computed } from 'vue';
import { useStore } from 'vuex';
import { formatPrice } from "../../functions.js"
import AddToCartAction from './AddToCartAction.vue';

const store = useStore();
const cartItems = computed(() => store.getters['cart/allCartItems']);
const totalCartPrice = computed(() => store.getters['cart/totalCartPrice']);

</script>

<style>
tr td {
  vertical-align: middle;
}
</style>