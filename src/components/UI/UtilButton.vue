<template>
  <v-btn :prepend-icon="icon">
    <slot></slot>
  </v-btn>
</template>
<script>
export default {
  name: 'util-button', 
  props: {
    icon: String,
    round: Boolean,
  }
}
</script>
<style scoped>
  
</style>