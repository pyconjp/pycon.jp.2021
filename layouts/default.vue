<template>
  <div class="sticky-header">
    <Nuxt />
    <CustomFooter />
  </div>
</template>

<script>
import CustomFooter from '../components/Doamins/Footer.vue'
export default {
  components: { CustomFooter },
}
</script>

<style scoped>
.sticky-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
