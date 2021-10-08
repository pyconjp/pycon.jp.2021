<template>
  <div class="flex justify-center w-full">
    <div class="relative flex flex-col items-start w-2/3 font-bold font-noto">
      <div class="absolute w-8 h-8 -right-4 top-8" @click="$emit('close')">
        <span class="dli-close"></span>
      </div>
      <div class="w-full mb-4 mt-28">
        <Accordion
          :menu-name='"about"'
          :toggle-menu="toggleMenu"
          :opened="opened">
          <div slot="title">
            <p class="relative inline headear-options">
              {{ $t('common.about') }}
            </p>
          </div>
          <div slot="body" class="js-accordion--body">
            <nuxt-link
              :to="localePath('/code-of-conduct')"
              class="hover:text-blue-green focus:text-blue-green block"
              >{{ $t('common.codeOfConduct') }}</nuxt-link
            >
            <outer-link
              to="https://drive.google.com/file/d/1abgh7glVaUsYnlRf_v2RLYw2V3ZAGnjt/view?usp=sharing"
              :label="$t('common.infectionControlGuidelines')"
              class="hover:text-blue-green focus:text-blue-green block mt-2">
            </outer-link>
          </div>
        </Accordion>
      </div>
      <div class="w-full mb-4">
        <Accordion
          :menu-name='"events"'
          :toggle-menu='toggleMenu'
          :opened='opened'>
          <div slot="title">
            <p class="relative inline headear-options">
              {{ $t('common.events') }}
            </p>
          </div>
          <div slot="body" class="js-accordion--body">
            <nuxt-link
              :to="localePath('/time-table')"
              class="hover:text-blue-green focus:text-blue-green"
              >{{ $t('common.timeTable') }}</nuxt-link
            >
          </div>
        </Accordion>
      </div>
      <div class="mb-4">
        <outer-link
          label="news"
          class="hover:text-blue-green focus:text-blue-green"
          to="https://pyconjp.blogspot.com/2021/"
        />
      </div>
      <div class="w-full mb-4">
        <Accordion
          :menu-name='"sponsors"'
          :toggle-menu='toggleMenu'
          :opened='opened'>
          <div slot="title" class="relative inline headear-options">
            {{ $t('common.sponsors') }}
          </div>
          <div slot="body" class="js-accordion--body">
            <nuxt-link
              class="block hover:text-blue-green focus:text-blue-green"
              :to="localePath('/sponsors')"
            >
              {{ $t('common.sponsorList') }}</nuxt-link
            >
            <outer-link
                :label="$t('common.prospectus')"
                to="https://pyconjp.blogspot.com/2021/09/closed-sponsor-application.html"
                class="block mt-2 line-through text-custom-gray hover:opacity-70"
              />
            <outer-link
                :label="$t('common.applicationForm')"
                to="https://pyconjp.blogspot.com/2021/09/closed-sponsor-application.html"
                class="block mt-2 line-through text-custom-gray hover:opacity-70"
              />
          </div>
        </Accordion>
      </div>
      <div class="mb-4">
        <nuxt-link
              :to="localePath('/staff')"
              class="hover:text-blue-green focus:text-blue-green"
              >{{ $t('common.staff') }}</nuxt-link
            >
      </div>
      <!-- <div class="mb-4">
        <p>会場アクセス {{ $t('common.staff') }}</p>
      </div> -->
      <!-- <div class="mb-4">
        <p>FAQ</p>
      </div> -->
      <div class="mt-16 header-border"></div>
      <div class="flex flex-col items-center justify-center w-full mt-6">
        <p class="inline">Language</p>
        <nuxt-link
          v-if="$i18n.locale === 'en'"
          class="language-switch hover:opacity-70"
          :to="switchLocalePath('ja')"
          >JA</nuxt-link
        >
        <nuxt-link
          v-if="$i18n.locale === 'ja'"
          class="language-switch hover:opacity-70"
          :to="switchLocalePath('en')"
          >EN</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '../Elements/Accordion.vue'
import OuterLink from '~/components/OuterLink'

export default {
  components: { OuterLink, Accordion },
  data() {
    return {
      opened: null
    }
  },
  methods: {
    toggleMenu(menuName) {
      if (this.opened !== menuName) {
        this.opened = menuName;
      } else {
        this.opened = null
      }
    }
  }
}
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
.disable-message {
  color: #cecece;
}
</style>
