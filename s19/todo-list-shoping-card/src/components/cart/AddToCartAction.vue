<template>

  <div :class="`btn-group btn-group-${size}`">
    <button class="btn btn-outline-danger" title="Decrease" v-if="productData.value > 1"
      @click="changeCartItemValue('dec')" :disabled="miniLoading">
      <b class="bi bi-dash-lg"></b>
    </button>
    <button class="btn btn-outline-danger" title="Delete" v-else @click="deleteItem()" :disabled="miniLoading">
      <b class="bi bi-trash"></b>
    </button>
    <button class="btn btn-outline-secondary text-black px-3" disabled>
      {{ productData.value }}
    </button>
    <button class="btn btn-outline-success" title="Increase" @click="changeCartItemValue('inc')"
      :disabled="miniLoading">
      <b class="bi bi-plus-lg"></b>
    </button>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useToast } from "vue-toast-notification";

const store = useStore();
const toast = useToast();
const props = defineProps({
  productData: {
    type: Object,
    required: true
  },
  size: {
    type: String,
    default: 'sm'
  }
})
const miniLoading = ref(false)

const changeCartItemValue = async (type) => {
  miniLoading.value = true;
  if (type === 'inc') {
    props.productData.value++;
  } else {
    props.productData.value--;
  }
  await store.dispatch('cart/updateCartItem', props.productData);
  miniLoading.value = false;
  toast.success('Cart updated');
};

const deleteItem = async () => {
  if (window.confirm('Are you sure to delete this product?')) {
    miniLoading.value = true;
    await store.dispatch('cart/deleteCartItem', props.productData.id)
    miniLoading.value = false;
    toast.success('Product Deleted');
  }
};

</script>