<template>
  <div class="relative">
    <div class="circle"></div>
    <MainVisual class="relative z-10" />
    <CustomHeader class="z-10 sticky-header" />
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
.circle {
  position: absolute;
  top: -200px;
  left: -150px;
  z-index: 0;
  width: 934px;
  height: 934px;
  border-radius: 50%;
  background: linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%);
  opacity: 0.2;
}
</style>
