<template>
  <div class="flex justify-center w-full">
    <div class="relative flex flex-col items-start w-2/3 font-bold font-noto">
      <div class="absolute w-8 h-8 -right-4 top-8" @click="$emit('close')">
        <span class="dli-close"></span>
      </div>
      <div class="mb-4 mt-28">
        <Accordion>
          <div slot="title">
            <p class="relative inline headear-options">
              {{ $t('common.abstract') }}
            </p>
          </div>
          <div slot="body" class="js-accordion--body">
            <a
              href="https://drive.google.com/file/d/1iNF7VvDCd_gWDsSn2i5U8FB1IQWkWOM9/view"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-blue-green focus:text-blue-green"
            >
              {{ $t('common.codeOfConduct') }}</a
            >
          </div>
        </Accordion>
      </div>
      <div class="mb-4">
        <Accordion :disable="true">
          <div slot="title">
            <p class="relative inline headear-options-disable">
              {{ $t('common.eventList') }}
            </p>
          </div>
          <div slot="body" class="js-accordion--body">
            <p>{{ $t('common.timeTable') }}</p>
          </div>
        </Accordion>
      </div>
      <div class="mb-4">
        <a
          class=""
          href="https://pyconjp.blogspot.com/2021/"
          target="_blank"
          rel="noopener noreferrer"
        >
          News
        </a>
      </div>
      <div class="mb-4">
        <Accordion>
          <div slot="title" class="relative inline headear-options">
            {{ $t('common.sponsor') }}
          </div>
          <div slot="body" class="js-accordion--body">
            <a
              href="https://drive.google.com/file/d/11HUcTjrLDiB7DMh5Sg0ol_NCiTN7Pttx/view"
              target="_blank"
              rel="noopener noreferrer"
              class="block hover:text-blue-green focus:text-blue-green"
            >
              {{ $t('common.sponsorApplication') }}</a
            >
            <a
              href="https://pyconjp.blogspot.com/2021/06/pycon-jp-2021-2notice-of-start-of.html"
              target="_blank"
              rel="noopener noreferrer"
              class="block mt-2 hover:text-blue-green focus:text-blue-green"
            >
              {{ $t('common.sponsorApplicationForm') }}</a
            >
          </div>
        </Accordion>
      </div>
      <div class="mb-4 text-custom-gray">
        <p>{{ $t('common.staffList') }}</p>
      </div>
      <!-- <div class="mb-4">
        <p>会場アクセス {{ $t('common.staffList') }}</p>
      </div> -->
      <!-- <div class="mb-4">
        <p>FAQ</p>
      </div> -->
      <div class="mt-16 header-border"></div>
      <div class="flex flex-col items-center justify-center w-full mt-6">
        <p class="inline">Language</p>
        <nuxt-link
          v-if="$i18n.locale === 'en'"
          class="language-switch"
          :to="switchLocalePath('ja')"
          >EN</nuxt-link
        >
        <nuxt-link
          v-if="$i18n.locale === 'ja'"
          class="language-switch"
          :to="switchLocalePath('en')"
          >JA</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '../Elements/Accordion.vue'
export default { components: { Accordion } }
</script>

<style scoped>
.header-border {
  width: 100%;
  height: 0px;
  left: 77px;
  top: 661px;

  /* blue-green */

  border: 1px solid #1097aa;
}
.dli-close {
  display: inline-block;
  vertical-align: middle;
  color: #333;
  line-height: 1;
  width: 2em;
  height: 0.1em;
  background: currentColor;
  border-radius: 0.1em;
  position: relative;
  transform: rotate(45deg);
}
.dli-close::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  transform: rotate(90deg);
}
.headear-options::after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 12px;
  right: -14px;
  border-style: solid;
  border-width: 6px 5px 0 5px;
  border-color: black transparent transparent transparent;
}
.headear-options-disable::after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 12px;
  right: -14px;
  border-style: solid;
  border-width: 6px 5px 0 5px;
  border-color: #cecece transparent transparent transparent;
}
.language-switch {
  padding: 0.2rem 1.5rem 0.2rem 1.5rem;
  margin-top: 1rem;
  color: white;
  background: #1097aa;
  border-radius: 100px;
}
</style>
