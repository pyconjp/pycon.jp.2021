<template>
  <div class="relative">
    <div class="absolute w-full h-screen overflow-hidden">
      <div class="circle"></div>
    </div>
    <div
      class="z-20 flex items-center justify-center w-full mt-6 sticky-header"
    >
      <CustomHeader class="w-11/12" />
    </div>
    <div class="text-black">
      <div class="mx-4 my-14 lg:m-20">
        <p
          class="-mb-8 font-bold  font-mont text-shadow text-7xl lg:text-9xl lg:-mb-14"
        >
          Sponsors
        </p>
        <p class="text-4xl font-bold font-mont lg:text-6xl text-blue-green">
          Sponsors
        </p>
      </div>

      <div class="flex flex-col items-center justify-center pb-20 text-2xl">
        <div class="container lg:pt-14">
          <p class="heading">Platinum</p>
          <div class="img-items-list">
            <div
              v-for="sponsor in platinumSponsorsList"
              :key="sponsor.nameJp"
              class="w-full p-2 my-1 lg:w-1/2"
              :class="{ 'touch-action-none': sponsor.link === '#' }"
            >
              <a
                :href="sponsor.link"
                target="_blank"
                rel="noopener noreferrer"
                :class="{ 'pointer-events-none': sponsor.link === '#' }"
              >
                <p
                  v-if="sponsor.imgURL === ''"
                  class="m-2 text-xl text-center break-all lg:text-2xl"
                >
                  {{ sponsor.nameJp }}
                </p>
                <div v-else class="p-3 lg:p-6 v-card v-sheet theme-light">
                  <div class="z-0 v-responsive">
                    <div style="padding-bottom: 66.6667%"></div>
                    <div
                      class="bg-contain v-image-image"
                      :style="{
                        backgroundImage:
                          'url(' +
                          require(`@/assets/images/${sponsor.imgURL}`) +
                          ')',
                        backgroundPosition: 'center center',
                      }"
                    ></div>
                  </div>
                </div>
              </a>
              <div class="py-4 lg:h-96">
                <a
                  :href="sponsor.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full text-center"
                  :class="{ 'pointer-events-none': sponsor.link === '#' }"
                >
                  <div class="sp-name">
                    {{
                      $i18n.locale === 'ja' ? sponsor.nameJp : sponsor.nameEn
                    }}
                  </div>
                </a>
                <p class="sp-intro">
                  {{
                    $i18n.locale === 'ja' ? sponsor.introJP : sponsor.introEn
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <p class="mt-10 heading">Gold</p>
          <div class="img-items-list">
            <div
              v-for="sponsor in goldSponsorsList"
              :key="sponsor.nameEn"
              class="w-full p-2 my-1 lg:w-1/3"
              :class="{ 'touch-action-none': sponsor.link === '#' }"
            >
              <a
                :href="sponsor.link"
                target="_blank"
                rel="noopener noreferrer"
                :class="{ 'pointer-events-none': sponsor.link === '#' }"
              >
                <div class="p-3 lg:p-6 v-card v-sheet theme-light">
                  <div class="z-0 v-responsive">
                    <div style="padding-bottom: 66.6667%"></div>
                    <div
                      class="bg-contain v-image-image"
                      :style="{
                        backgroundImage:
                          'url(' +
                          require(`@/assets/images/${sponsor.imgURL}`) +
                          ')',
                        backgroundPosition: 'center center',
                      }"
                    ></div>
                  </div></div
              ></a>
              <div class="py-4 fixed-height">
                <a
                  :href="sponsor.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full text-center"
                  :class="{ 'pointer-events-none': sponsor.link === '#' }"
                >
                  <div class="sp-name">
                    {{
                      $i18n.locale === 'ja' ? sponsor.nameJp : sponsor.nameEn
                    }}
                  </div>
                </a>
                <p class="sp-intro">
                  {{
                    $i18n.locale === 'ja' ? sponsor.introJP : sponsor.introEn
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="my-10 heading">Silver</p>
          <div class="text-items-list text-blue-green">
            <a
              v-for="sponsor in silverSponsorsList"
              :key="sponsor.nameJp"
              :href="sponsor.link"
              target="_blank"
              rel="noopener noreferrer"
              :class="{ 'pointer-events-none': sponsor.link === '#' }"
            >
              <p class="m-2 text-xl break-all lg:text-2xl">
                {{ $i18n.locale === 'ja' ? sponsor.nameJp : sponsor.nameEn }}
              </p>
            </a>
          </div>
        </div>
        <div class="container mb-20">
          <p class="mt-10 heading">Special</p>
          <div class="img-items-list">
            <div
              v-for="sponsor in specialSponsorsList"
              :key="sponsor.nameEn"
              class="w-full p-2 my-1 lg:w-1/3"
              :class="{ 'touch-action-none': sponsor.link === '#' }"
            >
              <a
                :href="sponsor.link"
                target="_blank"
                rel="noopener noreferrer"
                :class="{ 'pointer-events-none': sponsor.link === '#' }"
              >
                <div class="p-3 lg:p-6 v-card v-sheet theme-light">
                  <div class="z-0 v-responsive">
                    <div style="padding-bottom: 66.6667%"></div>
                    <div
                      class="bg-contain v-image-image"
                      :style="{
                        backgroundImage:
                          'url(' +
                          require(`@/assets/images/${sponsor.imgURL}`) +
                          ')',
                        backgroundPosition: 'center center',
                      }"
                    ></div>
                  </div></div
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '../components/Domains/Header.vue'
import { getSponsrList } from '../lib/sponsor_list'

export default {
  components: { CustomHeader },

  data() {
    return {
      ...getSponsrList(),
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

.img-items-list {
  @apply flex flex-wrap justify-center items-center px-9 py-3 mb-3;
}
.text-items-list {
  @apply grid grid-cols-1 gap-4 text-center px-5 lg:px-9 lg:grid-cols-3  place-items-center;
}

.v-sheet {
  display: block;
  border-radius: 2px;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
.v-responsive {
  position: relative;
  overflow: hidden;
  flex: 1 0 auto;
  display: flex;
}

.v-image-image {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
}

.v-card {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.theme-light.v-sheet {
  background-color: #fff;
  border-color: #fff;
  color: rgba(0, 0, 0, 0.87);
}

.heading {
  @apply font-bold text-center font-mont;
}

.sp-name {
  @apply w-full text-xl mt-2 font-bold text-blue-green lg:text-2xl;
}

.sp-intro {
  @apply w-full text-base leading-7  text-gray-600   font-noto px-1 whitespace-pre-line;
}

@media screen and (min-width: 1024px) {
  .fixed-height {
    height: 33rem;
  }
}

/* disable mobile click event */
.touch-action-none {
  pointer-events: none;
  touch-action: none;
}
</style>
