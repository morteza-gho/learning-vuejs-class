<template>
  <button type="button" :class="`btn btn-${type} btn-${size} ${isDisabled ? 'btn-disabled' : ''} `" :disabled="isDisabled">{{ title }}</button>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'md'
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  }
  
}
</script>
<style scoped>
  .btn {
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
  }
  .btn-sm {
    font-size: 12px;
    padding: 3px 5px;
  }
  .btn-md {
    font-size: 14px;
    padding: 5px 10px;
  }
  .btn-lg {
    font-size: 18px;
    padding: 10px 15px;
  }

  .btn-default {
    background: lightgray;
    color: #333;
  }
  .btn-success {
    background: green;
    color: #FFF
  }
  .btn-danger {
    background: darkred;
    color: #FFF;
  }

  .btn-disabled {
    opacity: .6;
    cursor: not-allowed
  }

</style>