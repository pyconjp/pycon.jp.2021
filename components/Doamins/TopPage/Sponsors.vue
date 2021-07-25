<template>
  <div class="text-black font-mont">
    <div>
      <p
        class="-mb-8 font-bold text-center  text-shadow text-7xl lg:text-9xl lg:-mb-14"
      >
        Sponsors
      </p>
      <p class="text-4xl font-bold text-center lg:text-6xl">Sponsors</p>
    </div>
    <div class="flex flex-col text-2xl font-bold sponsors-background">
      <div class="pt-14">
        <p class="text-center">Platinum</p>
        <div class="sponsors-items-list">
          <p class="p-2 md:w-1/3">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="p-2 md:w-1/3">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="p-2 md:w-1/3">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="p-2 md:w-1/3">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
        </div>
      </div>
      <div>
        <p class="text-center">Gold</p>
        <div class="sponsors-items-list">
          <p class="w-1/2 p-2 md:w-1/4">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/2 p-2 md:w-1/4">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/2 p-2 md:w-1/4">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/2 p-2 md:w-1/4">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/2 p-2 md:w-1/4">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
        </div>
      </div>
      <div>
        <p class="text-center">Silver</p>
        <div class="sponsors-items-list">
          <p class="w-1/2 p-2 md:w-1/5">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/2 p-2 md:w-1/5">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/2 p-2 md:w-1/5">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/2 p-2 md:w-1/5">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/2 p-2 md:w-1/5">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/2 p-2 md:w-1/5">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
        </div>
      </div>
      <div class="mb-20">
        <p class="text-center">Special</p>
        <div class="sponsors-items-list">
          <p class="w-1/2 p-2 md:w-1/4">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scped>
.sponsors-background {
  background: rgba(221, 221, 221, 0.2);
}

.text-shadow {
  -webkit-text-stroke: 1px #2f9acf;
  opacity: 0.4;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.sponsors-items-list {
  @apply flex flex-wrap justify-center px-9 py-3 mb-3;
}
</style>
