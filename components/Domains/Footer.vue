<template>
  <div class="text-white font-noto">
    <!-- <a
      id="page-top"
      class="absolute inline-block -top-4 lg:-top-5 right-8 lg:right-24"
      @click="scrollTop"
    >
      <img
        src="~/assets/images/icon-top.svg"
        alt="icon top"
        class="w-8 lg:w-10"
      />
    </a> -->
    <div class="footer-upper-background">
      <div class="footer-upper">
        <img src="~/assets/images/footer-2021-logo.svg" alt="2021-logo" />
        <div class="flex flex-col footer-menu lg:flex-row">
          <div class="flex-1">
            <p class="mb-5 text-base">{{ $t('common.about') }}</p>
            <p class="mb-4 text-sm">
              <nuxt-link :to="localePath('/code-of-conduct')">{{
                $t('common.codeOfConduct')
              }}</nuxt-link>
            </p>
            <!--            <p class='mb-8 text-sm opacity-50 lg:mb-0'>{{ $t('common.aboutPyConJP') }}</p>-->
          </div>
          <div class="flex-1">
            <p class="mb-5 text-base opacity-50">
              {{ $t('common.events') }}
            </p>
            <!--            <p class='mb-4 text-sm opacity-50'>{{ $t('common.timeTable') }}</p>-->
            <!--            <p class='mb-4 text-sm opacity-50'>{{ $t('common.specialBooth') }}</p>-->
            <!--            <p class='mb-4 text-sm'>{{ $t('common.tutorial') }}</p>-->
            <!--            <p class='mb-4 text-sm'>{{ $t('common.sprint') }}</p>-->
            <!--            <p class='mb-4 text-sm'>{{ $t('common.handsOn') }}</p>-->
            <!--            <p class='mb-4 text-sm opacity-50'>{{ $t('common.youtubeLive') }}</p>-->
            <!--            <p class='mb-8 text-sm opacity-50 lg:mb-0'>{{ $t('common.onlineParty') }}</p>-->
          </div>
          <div class="flex-1">
            <p class="mb-5 text-base">
              <outer-link
                :label="$t('common.news')"
                to="https://pyconjp.blogspot.com/search/label/pyconjp2021"
              />
            </p>
          </div>
          <div class="flex-1">
            <p class="mb-5 text-base">{{ $t('common.sponsors') }}</p>
            <p class="mb-4 text-sm">
              <nuxt-link :to="localePath('/sponsors')">
                {{ $t('common.sponsorList') }}</nuxt-link
              >
            </p>
            <p class="mb-4 text-sm">
              <outer-link
                :label="$t('common.prospectus')"
                to="https://drive.google.com/file/d/11HUcTjrLDiB7DMh5Sg0ol_NCiTN7Pttx/view?usp=sharing"
              />
            </p>
            <p class="mb-4 text-sm">
              <outer-link
                :label="$t('common.applicationForm')"
                to="https://pyconjp.blogspot.com/2021/06/pycon-jp-2021-2notice-of-start-of.html"
              />
            </p>
            <!--            <p class='mb-8 text-sm opacity-50 lg:mb-0'>{{ $t('common.sponsorPlanning') }}</p>-->
          </div>
          <div class="flex-1">
            <p class="mb-8 text-base opacity-50 lg:mb-0">
              {{ $t('common.staff') }}
            </p>
          </div>
          <!--          <div class='flex-1'>-->
          <!--            <p class='mb-8 text-base opacity-50 lg:mb-0'>{{ $t('common.access') }}</p>-->
          <!--          </div>-->
          <!--          <div class='flex-1'>-->
          <!--            <p class='mb-8 text-base opacity-50 lg:mb-0'>FAQ</p>-->
          <!--          </div>-->
        </div>
        <div class="font-source mb-7">
          <span class="mr-2">Follow US on twitter</span>
          <span>
            <a
              href="https://twitter.com/pyconjapan"
              target="_blank"
              rel="noopener noreferrer"
              >@pyconjapan
              <img
                class="inline h-4"
                src="~/assets/images/twitter.png"
                alt="twitter"
              />
            </a>
          </span>
        </div>
        <div class="flex flex-col lg:items-end lg:flex-row">
          <div class="flex-1 mb-8 text-sm lg:mb-0">
            <p>
              {{ $t('common.contact') }}：<a href="mailto:pyconjp@pycon.jp"
                >pyconjp@pycon.jp</a
              >
            </p>
            <p>{{ $t('pages.index.contactFooterDescription')[0] }}</p>
            <p>{{ $t('pages.index.contactFooterDescription')[1] }}</p>
            <p>{{ $t('pages.index.contactFooterDescription')[2] }}</p>
          </div>
          <div class="flex-1 previous-pages lg:text-right">
            <outer-link
              :label="$t('pages.index.pastPyConJPSites')"
              to="https://www.pycon.jp/organizer/index.html "
            />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-lower-background text-custom-black">
      <div class="flex justify-center">
        <div
          class="flex flex-col pt-8 pb-3 lg:py-10 lg:flex-row lg:items-start"
        >
          <div class="flex-auto mb-2 lg:mb-0 lg:mr-2">
            <a
              href="https://www.pycon.jp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="h-20 mx-auto lg:mr-0 lg:ml-auto"
                src="~/assets/images/logo-association.svg"
                alt="association-logo"
              />
            </a>
          </div>
          <div class="flex-row justify-center pl-8 pr-8 lg:ml-2 lg:p-0">
            <p class="lg:mt-2">主催：一般社団法人PyCon JP Association</p>
            <p class="lg:mt-2">
              PyCon JP 2021 is a production of the PyCon JP Association
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OuterLink from '~/components/OuterLink'

export default {
  components: { OuterLink },

  // methods: {
  //   scrollTop() {
  //     window.scrollTo(0, 0)
  //   },
  // },
}
</script>

<style scoped>
.footer-upper-background {
  background: linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%);
}

.footer-upper {
  padding: 40px 10%;

  @media (min-width: 1024px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}

.footer-menu {
  padding-top: 60px;
  padding-bottom: 40px;
  margin-bottom: 40px;

  border-bottom: solid;
  border-bottom-color: white;

  & > div > p:not(:first-child)::before {
    display: inline-block;
    content: '';
    border-top: 0.1rem solid;
    width: 1rem;
    margin-right: 0.5rem;
    transform: translateY(-0.25rem);
  }
}

.footer-lower-background {
  background-color: #fff;
}

.previous-pages {
  text-decoration: underline;

  &::after {
    content: '→';
  }
}

/* #page-top {
  border-radius: 50%;
  padding: 1px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1), 0px 2px 24px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  cursor: pointer;
  background-color: #fff;
  opacity: 8.49;
}
#page-top:hover {
  opacity: 0.85;
} */
</style>
