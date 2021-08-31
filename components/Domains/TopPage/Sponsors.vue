<template>
  <div class="text-black font-mont">
    <div>
      <p
        class="-mb-8 font-bold text-center  text-shadow text-7xl lg:text-9xl lg:-mb-14"
      >
        Sponsors
      </p>
      <p class="text-4xl font-bold text-center lg:text-6xl text-blue-green">
        Sponsors
      </p>
    </div>

    <div
      class="flex flex-col items-center justify-center pb-20 text-2xl font-bold  sponsors-background"
    >
      <div class="container pt-14">
        <p class="text-center">Platinum</p>
        <div class="img-items-list">
          <div
            v-for="sponsor in platinumSponsorsList"
            :key="sponsor.nameJp"
            class="w-full p-2 my-1 lg:w-1/3"
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
                class="m-2 text-3xl text-center break-all lg:text-4xl"
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
          </div>
        </div>
      </div>
      <div class="container">
        <p class="mt-10 text-center">Gold</p>
        <div class="img-items-list">
          <div
            v-for="sponsor in goldSponsorsList"
            :key="sponsor.nameEn"
            class="w-1/2 p-2 my-1 lg:w-1/4"
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
      <div>
        <p class="my-10 text-center">Silver</p>
        <div class="text-items-list text-blue-green">
          <a
            v-for="sponsor in silverSponsorsList"
            :key="sponsor.nameJp"
            :href="sponsor.link"
            target="_blank"
            rel="noopener noreferrer"
            :class="{ 'pointer-events-none': sponsor.link === '#' }"
          >
            <p class="m-2 text-2xl break-all">
              {{ $i18n.locale === 'ja' ? sponsor.nameJp : sponsor.nameEn }}
            </p>
          </a>
        </div>
      </div>
      <div class="container mb-20">
        <p class="my-10 text-center">Special</p>
        <div class="img-items-list">
          <div
            v-for="sponsor in specialSponsorsList"
            :key="sponsor.nameEn"
            class="w-1/2 p-2 my-1 lg:w-1/4"
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
</template>

<script>
import { getSponsrList } from '../../../lib/sponsor_list'
export default {
  data() {
    return { ...getSponsrList() }
  },
}
</script>

<style scoped>
.sponsors-background {
  background: rgba(221, 221, 221, 0.2);
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

/* disable mobile click event */
.touch-action-none {
  pointer-events: none;
  touch-action: none;
}
</style>
