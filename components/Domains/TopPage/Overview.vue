<template>
  <div class="relative mt-20 overview font-noto">
    <div class="rectangle" />
    <div class="flex flex-col items-end mr-2 font-mont lg:mr-8">
      <p
        class="-mb-8 font-bold text-right text-shadow text-7xl lg:text-9xl lg:-mb-14 opacity-40"
      >
        Overview
      </p>
      <p class="text-4xl font-bold text-right lg:text-6xl color-blue-green">
        Overview
      </p>
    </div>
    <div class="overview-inner">
      <div class="flex flex-col mt-12 lg:flex-row lg:mt-20">
        <div class="flex-1 mb-6 lg:mb-0">
          <div
            class="flex justify-center lg:h-full lg:justify-end lg:items-end"
          >
            <img
              class="overview-image"
              src="~/assets/images/overview.jpg"
              alt="sponsor-logo"
            />
          </div>
        </div>
        <div class="flex-1 lg:ml-12 lg:mr-4">
          <div class="mb-6 text-2xl font-bold font-mont">What is PyCon JP?</div>
          <div>{{ $t('pages.index.overviewDescription') }}</div>
          <div class="flex justify-center lg:justify-start">
            <nuxt-link
              :to="localePath('/code-of-conduct')"
              class="mt-6 custom-button-enable lg:mt-10">
              {{ $t('common.codeOfConduct') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.overview {
  margin-bottom: 6.75rem;

  @media (min-width: 1024px) {
    margin-bottom: 7.125rem;
  }
}

.overview-inner {
  padding: 0 1.5rem;

  @media (min-width: 1024px) {
    padding: 0 10%;
  }
}

.overview-image {
  align-self: center;
  width: 100%;
  height: auto;
  border-radius: 40px 40px 0 40px;

  @media (min-width: 1024px) {
    margin-top: 4.75rem;
    border-radius: 80px 80px 0 80px;
  }
}

.color-blue-green {
  color: #1097aa;
}

.custom-button-enable {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 18px;
  color: white;
  background: linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1), 0 2px 24px rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  padding: 1rem 4rem 1rem 4rem;
}

.rectangle {
  position: absolute;
  right: 0;
  width: 75%;
  z-index: -1;
  background: linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%);
  opacity: 0.2;

  top: 4rem;
  height: 45rem;

  @media (min-width: 1024px) {
    top: 7rem;
    height: 35rem;
  }
}
</style>
