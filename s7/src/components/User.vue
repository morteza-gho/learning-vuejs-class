<template>
  <h1 :style="{color: textColor}">{{ title }}</h1>
  <p>Name: {{ user.name }}</p>
  <p>Family: {{ user.family }}</p>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title is here'
    },
    user: {
      type: Object,
      default() {
        return {
          name: 'User Name',
          family: 'User Family'
        }
      }
    },
    textColor: {
      type: String,
      default: 'black',
      validator(value) {
        return ['black', 'red', 'blue'].includes(value)
      }
    }
  }
}
</script>

<style>

</style>