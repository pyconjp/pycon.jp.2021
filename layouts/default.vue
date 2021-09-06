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

<style>
.overall-color {
  color: #292929;
}

.text-shadow {
  -webkit-text-stroke: 1px #2f9acf;
  opacity: 0.4;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>
