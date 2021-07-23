<template>
  <div>
    <p class="top-background-text">PyCon JP 2021</p>
    <p class="top-text">PyCon JP 2021</p>
    <div>
      <p>2021.10.15...</p>
      <p>Online &amp; Offline Hybrid Conference</p>
      <p>match Pycon JP(2021)....</p>
      <p>Twitter</p>
    </div>
    <div>
      <p>画像入る</p>
    </div>
    <div>
      <p>Time Table Coming Soon</p>
    </div>
    <div>
      <p>Ticket Coming Soon</p>
    </div>
    <div>
      <CustomHeader />
    </div>
  </div>
</template>

<script>
import CustomHeader from '../../Doamins/Header.vue'
export default { components: { CustomHeader } }
</script>

<style scoped>
.top-text {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 72px;
  background: linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.top-background-text {
  /* font-size: 72px; */
  /* color: red; */
  -webkit-text-stroke: 5px red;
  /* background-clip: text;
  -webkit-background-clip: text;
  background: linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%); */
  /* -webkit-text-stroke: 1px
    linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%); */

  font-family: Montserrat;
  font-weight: bold;
  font-size: 72px;
  /* background: linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%); */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
.sticky-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
