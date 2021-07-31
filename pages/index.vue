<template>
  <div class="relative">
    <div class="absolute w-full h-screen overflow-hidden">
      <div class="circle"></div>
    </div>
    <MainVisual class="relative z-10" />
    <div class="z-20 flex items-center justify-center w-full sticky-header">
      <CustomHeader class="w-11/12" />
      <div v-if="!isMobile" class="scroll">Scroll</div>
    </div>

    <Overview/>

    <Sponsors />
  </div>
</template>

<script>
import MainVisual from '../components/Doamins/TopPage/MainVisual.vue'
import Sponsors from '../components/Doamins/TopPage/Sponsors'
import CustomHeader from '../components/Doamins/Header.vue'
import Overview from '~/components/Doamins/TopPage/Overview'
export default {
  components: { Overview, MainVisual, Sponsors, CustomHeader },
  data() {
    return { isMobile: false }
  },
  mounted() {
    const mediaQuery = window.matchMedia('(max-width: 1023px)')
    if (mediaQuery.matches) {
      this.isMobile = true
    }
  },
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

.scroll {
  display: inline-block;
  position: absolute;
  right: 20px;
  bottom: 0;
  z-index: 10;
  padding: 10px 10px 260px;
  overflow: hidden;
  color: black;
  font-size: 16px;
  font-family: 'Noto Sans JP';
  line-height: 1;
  text-decoration: none;
  writing-mode: vertical-lr;
}
.scroll::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 1px;
  height: 250px;
  background: #1097aa;
}
.scroll::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 1px;
  height: 250px;
  background: rgba(255, 255, 255, 0.4);
}
.scroll::after {
  animation: sdl 2.5s cubic-bezier(1, 0, 0, 1) infinite;
}
@keyframes sdl {
  0% {
    transform: scale(1, 0);
    transform-origin: 0 0;
  }
  50% {
    transform: scale(1, 1);
    transform-origin: 0 0;
  }
  50.1% {
    transform: scale(1, 1);
    transform-origin: 0 100%;
  }
  100% {
    transform: scale(1, 0);
    transform-origin: 0 100%;
  }
}

@media screen and (max-width: 1023px) {
  .circle {
    position: absolute;
    top: -200px;
    left: -150px;
    z-index: 0;
    width: 703px;
    height: 703px;
  }
}

@media screen and (min-width: 1024px) {
  .circle {
    position: absolute;
    top: -200px;
    left: -150px;
    width: 703px;
    height: 703px;
  }
}
</style>
