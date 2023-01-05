<template>
  <button @click="showLoading" :disabled="isLoading">
    <span v-if="!isLoading">show loading</span>
    <span v-else>loading...</span>
  </button>
</template>
<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['showParentLoading'],
  methods: {
    showLoading() {
      this.$emit('showParentLoading')
    }
  }
}
</script>
