<template>
  <div>
    <img
      src="~/assets/images/background-message.png"
      alt="PyCon JP 2021"
      class="background-message"
    />
    <div></div>
    <p class="top-text">PyCon JP 2021</p>
    <div class="items-center justify-center w-2/3">
      <div class="flex">
        <img
          src="~/assets/images/icon-calendar.png"
          alt="icon calendar"
          class="w-5 h-5"
        />
        <p>2021.10.15(Sat.)-16(Sun.)</p>
      </div>

      <div class="flex">
        <img
          src="~/assets/images/icon-people.png"
          alt="icon people"
          class="w-5 h-5"
        />
        <p>Online &amp; Offline Hybrid Conference</p>
      </div>

      <div class="flex">
        <img
          src="~/assets/images/icon-location.png"
          alt="icon location"
          class="w-5 h-5"
        />
        <div>
          <p>match PyconJP(2021):</p>
          <p>case["ONLINE"]: Zoom</p>
          <p class="relative">
            case["ONSITE"]:ベルサール神田
            <img
              src="~/assets/images/icon-link.png"
              alt="icon link"
              class="absolute top-0 w-5 h-5 -right-8"
            />
          </p>
        </div>
      </div>

      <div class="flex">
        <img src="~/assets/images/icon-twitter.png" alt="icon twitter" />
        <p>Twitter</p>
      </div>
    </div>
    <div>
      <img src="~/assets/images/slide-sample.png" alt="icon twitter" />
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
  display: inline;
  font-weight: 700;
  font-size: 72px;
  background: linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.background-message {
  position: absolute;
  top: 0;
  width: 100vw;
  object-fit: cover;
}
.sticky-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
</style>
