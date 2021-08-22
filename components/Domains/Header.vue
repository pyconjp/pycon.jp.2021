<template>
  <div class="relative">
    <nav
      class="relative z-40 flex items-center justify-between pl-4 pr-4  lg:pl-0 lg:justify-center navbar"
    >
      <!-- ヘッダーのロゴ(PC、モバイル共通) -->
      <div class="flex items-center justify-center w-1/2 lg:w-1/4">
        <nuxt-link :to="localePath('/')"
          ><img src="~/assets/images/header-pyconjp.svg" alt=""
        /></nuxt-link>
      </div>

      <!-- モバイルの全画面メニュー -->
      <transition>
        <SPHeader
          v-if="showMobileMenu"
          class="mobile-menu"
          @close="closeMobileMenu"
        />
      </transition>

      <!-- モバイルヘッダーのボタン -->
      <div
        v-if="isMobile"
        :class="[{ active: showMobileMenu }]"
        class="openbtn"
        @click="openMobileMenu"
      >
        <span></span><span></span><span></span>
      </div>

      <!-- PC用のヘッダー要素 -->
      <div v-if="!isMobile" class="w-3/4 font-bold font-noto">
        <ul class="flex items-center justify-around">
          <li class="relative">
            <p
              class="relative cursor-pointer headear-options"
              @click="selectMenu(0)"
            >
              {{ $t('common.abstract') }}
            </p>
            <div v-if="showAbstractMenu" class="list-menu">
              <nuxt-link
                :to="localePath('/code-of-conduct')"
                class="hover:text-blue-green focus:text-blue-green"
                >{{ $t('common.codeOfConduct') }}</nuxt-link
              >
            </div>
          </li>
          <li class="relative">
            <p class="relative headear-options-disable disable-message">
              {{ $t('common.eventList') }}
            </p>
          </li>
          <li class="">
            <a
              class=""
              href="https://pyconjp.blogspot.com/search/label/pyconjp2021"
              target="_blank"
              rel="noopener noreferrer"
            >
              News
            </a>
          </li>
          <li class="relative">
            <p
              class="relative cursor-pointer headear-options"
              @click="selectMenu(2)"
            >
              {{ $t('common.sponsor') }}
            </p>
            <div v-if="showSponsorMenu" class="list-menu">
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
          </li>
          <li class="">
            <a class="pointer-events-none disable-message" href="">
              {{ $t('common.staffList') }}
            </a>
          </li>
          <!-- <li class="">
            <a class="pointer-events-none disable-message" href="">
              {{ $t('common.access') }}
            </a>
          </li>
          <li class="">
            <a class="pointer-events-none disable-message" href=""> FAQ </a>
          </li> -->
          <li class="">
            <nuxt-link
              v-if="$i18n.locale === 'en'"
              class="language-switch"
              :to="switchLocalePath('ja')"
              >JA</nuxt-link
            >
            <nuxt-link
              v-if="$i18n.locale === 'ja'"
              class="language-switch"
              :to="switchLocalePath('en')"
              >EN</nuxt-link
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
import SPHeader from './SPHeader.vue'
export default {
  components: { SPHeader },
  data() {
    return {
      showMenuBackground: false,
      showAbstractMenu: false,
      showEventListMenu: false,
      showSponsorMenu: false,
      isMobile: false,
      showMobileMenu: false,
      linkList: [
        {
          text: 'NEWS',
          link: 'https://pyconjp.blogspot.com/search/label/pyconjp2021',
          disable: false,
        },
        {
          text: 'STAFF',
          link: 'https://pyconjp.blogspot.com/2021/01/2021-staff-application-start.html',
          disable: false,
        },
        {
          text: 'PROPOSAL',
          link: 'https://pyconjp.blogspot.com/2021/05/start-proposal.html',
          disable: false,
        },
        {
          text: 'SPONSOR',
          link: 'https://pyconjp.blogspot.com/2021/05/pycon-jp-2021_01988973482.html',
          disable: false,
        },
        {
          text: 'TICKET',
          link: '#',
          disable: true,
        },
        {
          text: 'REVIEWER',
          link: '#',
          disable: true,
        },
        {
          text: 'CODE OF CONDUCT',
          link: 'https://drive.google.com/file/d/1iNF7VvDCd_gWDsSn2i5U8FB1IQWkWOM9/view',
          disable: false,
        },
      ],
    }
  },
  mounted() {
    const mediaQuery = window.matchMedia('(max-width: 1023px)')
    if (mediaQuery.matches) {
      this.isMobile = true
    }
  },
  beforeDestroy() {
    this.closeMobileMenu()
  },
  methods: {
    selectMenu(menuNumber) {
      if (menuNumber === 0) {
        // 自分のメニュー以外を閉じる
        this.showMenuBackground = false
        this.showEventListMenu = false
        this.showSponsorMenu = false

        this.showAbstractMenu = !this.showAbstractMenu
        this.showMenuBackground = !this.showMenuBackground
      } else if (menuNumber === 1) {
        // 自分のメニュー以外を閉じる
        this.showMenuBackground = false
        this.showAbstractMenu = false
        this.showSponsorMenu = false

        this.showEventListMenu = !this.showEventListMenu
        this.showMenuBackground = !this.showMenuBackground
      } else if (menuNumber === 2) {
        // 自分のメニュー以外を閉じる
        this.showMenuBackground = false
        this.showAbstractMenu = false
        this.showEventListMenu = false

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
    preventDefault(event) {
      event.preventDefault()
    },
    openMobileMenu() {
      this.showMobileMenu = true
      document.addEventListener('touchmove', this.preventDefault, {
        passive: false,
      })
      document.addEventListener('mousewheel', this.preventDefault, {
        passive: false,
      })
    },
    closeMobileMenu() {
      this.showMobileMenu = false
      document.removeEventListener('touchmove', this.preventDefault, {
        passive: false,
      })
      document.removeEventListener('mousewheel', this.preventDefault, {
        passive: false,
      })
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
  width: 14rem;
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

/* header button */
.openbtn {
  /*ボタン内側の基点となるためrelativeを指定。
追従するナビゲーションの場合はfixed＋top、rightといった位置をセットで指定*/
  position: relative;
  background: white;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 5px;
}
/*ボタン内側*/
.openbtn span {
  display: inline-block;
  transition: all 0.4s; /*アニメーションの設定*/
  position: absolute;
  /* left: 14px; */
  height: 3px;
  border-radius: 2px;
  background: black;
}
.openbtn span:nth-of-type(1) {
  position: absolute;
  top: 15px;
  right: 14px;
  width: 20%;
}
.openbtn span:nth-of-type(2) {
  top: 23px;
  left: 14px;
  width: 45%;
}
.openbtn span:nth-of-type(3) {
  top: 31px;
  left: 14px;
  width: 45%;
}

.mobile-menu {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 10;
}
.mobile-menu-content {
  margin: 22% auto;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
