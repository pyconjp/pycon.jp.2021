<template>
  <div class="flex-1 m-auto text-black font-mont">
    <div class="flex-wrap flex-1">
      <p class="font-bold text-center text-shadow text-7xl md:text-9xl">
        Sponsors
      </p>
      <p class="mb-8 text-4xl font-bold text-center md:text-6xl">Sponsors</p>
    </div>
    <div class="flex flex-col text-2xl font-bold sponsors-background">
      <div class="items-end flex-1 p-6">
        <p class="text-center">Platinum</p>
        <div class="flex flex-wrap items-center justify-center">
          <p class="m-2 md:w-1/4">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="m-2 md:w-1/4">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="m-2 md:w-1/4">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
        </div>
      </div>
      <div class="flex-1 p-6">
        <p class="text-center">Gold</p>
        <div class="flex flex-wrap items-center justify-center">
          <p class="w-1/3 m-2 md:w-1/5">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/3 m-2 md:w-1/5">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/3 m-2 md:w-1/5">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/3 m-2 md:w-1/5">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/3 m-2 md:w-1/5">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
        </div>
      </div>
      <div class="flex-1 p-6">
        <p class="text-center">Silver</p>
        <div class="flex flex-wrap items-center justify-center">
          <p class="w-1/3 m-2 md:w-1/6">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/3 m-2 md:w-1/6">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/3 m-2 md:w-1/6">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/3 m-2 md:w-1/6">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/3 m-2 md:w-1/6">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
          <p class="w-1/3 m-2 md:w-1/6">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
        </div>
      </div>
      <div class="items-center justify-center flex-1 p-6 mb-20">
        <p class="text-center">Special</p>
        <div class="flex flex-wrap items-center justify-center">
          <p class="w-1/3 m-2 md:w-1/5">
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
</style>
