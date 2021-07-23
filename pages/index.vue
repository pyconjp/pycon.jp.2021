<template>
  <div>
    <MainVisual />
    <CustomHeader class="sticky-header" />
    <Sponsors />
  </div>
</template>

<script>
import MainVisual from '../components/Doamins/TopPage/MainVisual.vue'
import Sponsors from '../components/Doamins/TopPage/Sponsors'
import CustomHeader from '../components/Doamins/Header.vue'
export default {
  components: { MainVisual, Sponsors, CustomHeader },
}
</script>

<style scoped>
.sticky-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
