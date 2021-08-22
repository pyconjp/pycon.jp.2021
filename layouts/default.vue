<template>
  <div class="overall-color">
    <Nuxt />
    <CustomFooter />
  </div>
</template>

<script>
import CustomFooter from '../components/Domains/Footer.vue'
export default {
  components: { CustomFooter },
}
</script>

<style scoped>
.overall-color {
  color: #292929;
}
</style>
