<template>
  <div class="relative">
    <nav class="relative z-40 flex items-center justify-center pr-4 navbar">
      <div class="flex items-center justify-center w-1/4">
        <img src="~/assets/images/header-pyconjp.svg" alt="" />
      </div>
      <div class="w-3/4 font-bold font-noto">
        <ul class="flex items-center justify-around">
          <li class="relative">
            <p
              class="relative cursor-pointer headear-options"
              @click="selectMenu(0)"
            >
              {{ $t('common.abstract') }}
            </p>
            <div v-if="showAbstractMenu" class="list-menu">
              <p>{{ $t('common.codeOfConduct') }}</p>
            </div>
          </li>
          <li class="relative">
            <p
              class="relative cursor-pointer  headear-options-disable disable-message"
            >
              {{ $t('common.eventList') }}
            </p>
          </li>
          <li class="">
            <a class="" href=""> News </a>
          </li>
          <li class="relative">
            <p
              class="relative cursor-pointer headear-options"
              @click="selectMenu(2)"
            >
              {{ $t('common.sponsor') }}
            </p>
            <div v-if="showSponsorMenu" class="list-menu">
              <p>{{ $t('common.sponsorApplication') }}</p>
              <p>{{ $t('common.sponsorApplicationForm') }}</p>
            </div>
          </li>
          <li class="">
            <a class="pointer-events-none disable-message" href="">
              {{ $t('common.staffList') }}
            </a>
          </li>
          <li class="">
            <a class="pointer-events-none disable-message" href="">
              {{ $t('common.access') }}
            </a>
          </li>
          <li class="">
            <a class="pointer-events-none disable-message" href=""> FAQ </a>
          </li>
          <li class="">
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
          </li>
        </ul>
      </div>
    </nav>
    <div
      v-if="showMenuBackground"
      class="fixed top-0 left-0 z-30 w-screen h-screen"
      @click="selectMenu(99)"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenuBackground: false,
      showAbstractMenu: false,
      showEventListMenu: false,
      showSponsorMenu: false,
    }
  },
  methods: {
    selectMenu(menuNumber) {
      // 最初にメニューをリセット
      this.showMenuBackground = false
      this.showAbstractMenu = false
      this.showEventListMenu = false
      this.showSponsorMenu = false

      if (menuNumber === 0) {
        this.showAbstractMenu = !this.showAbstractMenu
        this.showMenuBackground = !this.showMenuBackground
      } else if (menuNumber === 1) {
        this.showEventListMenu = !this.showEventListMenu
        this.showMenuBackground = !this.showMenuBackground
      } else if (menuNumber === 2) {
        this.showSponsorMenu = !this.showSponsorMenu
        this.showMenuBackground = !this.showMenuBackground
      } else if (menuNumber === 99) {
        this.showMenuBackground = false
        this.showAbstractMenu = false
        this.showEventListMenu = false
        this.showSponsorMenu = false
      }
    },
    switchLanguage() {
      this.$i18n.locale = 'en'
    },
  },
}
</script>

<style>
.navbar {
  height: 72px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1), 0px 2px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  background: #ffffff;
}
.list-menu {
  position: absolute;
  top: 2rem;
  width: 10rem;
  padding: 0.8rem 1rem;
  background-color: white;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1), 0px 2px 24px rgba(0, 0, 0, 0.08);
}
.language-switch {
  padding: 0.2rem 1.5rem 0.2rem 1.5rem;
  color: white;
  background: #1097aa;
  border-radius: 100px;
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
.disable-message {
  color: #cecece;
}
</style>
