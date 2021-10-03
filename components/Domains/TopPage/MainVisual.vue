<template>
  <div class="flex flex-col items-center justify-center">
    <img
      src="~/assets/images/background-message.png"
      alt="PyCon JP 2021"
      class="background-message"
    />

    <div
      class="flex flex-col-reverse flex-wrap justify-center w-5/6 mt-4 font-semibold  lg:flex-row lg:mt-44 text-base-message font-source"
    >
      <div class="w-full lg:w-1/2">
        <p class="top-text">PyCon JP 2021</p>
        <div class="flex mt-8 mb-2 lg:mb-4">
          <img
            src="~/assets/images/icon-calendar.svg"
            alt="icon calendar"
            class="w-8"
          />
          <p class="ml-4 text-lg lg:text-2xl">2021.10.15(Fri.)-16(Sat.)</p>
        </div>

        <div class="flex mb-2 lg:mb-4">
          <img
            src="~/assets/images/icon_conference.svg"
            alt="icon people"
            class="w-8"
          />
          <p class="ml-4 text-lg lg:text-2xl">
            Online &amp; Onsite Hybrid Conference
          </p>
        </div>

        <div class="flex mb-2 lg:mb-4">
          <img
            src="~/assets/images/icon-location.svg"
            alt="icon location"
            class="w-6 h-10"
          />
          <div class="ml-4 text-lg lg:text-2xl">
            <p>match PyCon JP(2021):</p>
            <p class="ml-4">case "ONLINE": Zoom</p>
            <a
              href="https://www.bellesalle.co.jp/shisetsu/tokyo/bs_kanda/access/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p class="relative ml-4">
                case "ONSITE": ベルサール神田
                <img
                  src="~/assets/images/icon_external-link.svg"
                  alt="icon link"
                  class="absolute w-6 top-1 -right-8"
                />
              </p>
            </a>
          </div>
        </div>
        <div class="flex">
          <a
            href="https://twitter.com/hashtag/pyconjp"
            target="_blank"
            rel="noopener noreferrer"
            class=""
          >
            <img src="~/assets/images/icon-twitter.svg" alt="icon twitter" />
          </a>
          <a
            href="https://twitter.com/hashtag/pyconjp"
            target="_blank"
            rel="noopener noreferrer"
            class=""
          >
            <p class="ml-4 text-lg lg:text-2xl">#pyconjp</p>
          </a>
        </div>
      </div>
      <div class="w-full lg:w-1/2">
        <swiper ref="mySwiper" :options="swiperOption">
          <swiper-slide class="flex items-center justify-center"
            ><img
              src="~/assets/images/slide-sample2.jpg"
              alt="slide show"
              class="swiper-image"
          /></swiper-slide>
          <swiper-slide class="flex items-center justify-center"
            ><img
              src="~/assets/images/slide-sample3.jpg"
              alt="slide show"
              class="swiper-image"
          /></swiper-slide>
          <swiper-slide class="flex items-center justify-center"
            ><img
              src="~/assets/images/slide-sample4.jpg"
              alt="slide show"
              class="swiper-image"
          /></swiper-slide>
          <swiper-slide class="flex items-center justify-center"
            ><img
              src="~/assets/images/slide-sample5.jpg"
              alt="slide show"
              class="swiper-image"
          /></swiper-slide>
          <swiper-slide class="flex items-center justify-center"
            ><img
              src="~/assets/images/slide-sample6.jpg"
              alt="slide show"
              class="swiper-image"
          /></swiper-slide>
        </swiper>
        <div v-if="!isMobile" class="relative">
          <div ref="slideBar" class="bar"></div>
          <div class="bar-background"></div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-around w-5/6 mt-16 mb-16  lg:w-3/4 lg:flex-row"
    >
      <div class="flex justify-center w-5/6 text-center lg:mr-4 lg:w-1/4">
        <nuxt-link
          class="w-full custom-button-enable ticket-button"
          :to="localePath('/time-table')"
        >
          Timetable</nuxt-link
        >
      </div>
      <div class="flex justify-center w-5/6 mt-4 text-center lg:ml-4 lg:w-1/4 lg:mt-0">
        <outer-link
          label="Ticket"
          to="https://pyconjp.connpass.com/event/221241/"
          class="w-full custom-button-enable ticket-button"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OuterLink from '~/components/OuterLink'
export default {
  components: { OuterLink },
  data() {
    return {
      swiperOption: {
        speed: 1200, // スライドが切り替わる時の速さ
        effect: 'fade',
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3600, // 次のスライドまでの秒数
          disableOnInteraction: false, // スライダー操作後、自動再生が止まるかどうか
        },
        fadeEffect: {
          crossFade: true, // クロスフェードさせる
        },
        on: {
          slideChange: () => {
            if (
              this.$refs.mySwiper.$swipe &&
              this.$refs.mySwiper.$swipe.realIndex > 0
            ) {
              this.$refs.mySwiper.$swipe.params.autoplay.delay = 2700
              this.barDuration = 2700
            }
          },
          // スライド（次または前）へのアニメーションの開始時にイベント発生
          slideChangeTransitionStart: () => {
            if (this.$refs && this.$refs.slideBar) {
              this.$refs.slideBar.style.transitionDuration = '0s'
              this.$refs.slideBar.style.transform = 'scaleX(0)'
            }
          },
          // // スライド（次または前）へのアニメーションの開始後にイベント発生
          slideChangeTransitionEnd: () => {
            if (this.$refs && this.$refs.slideBar) {
              this.$refs.slideBar.style.transitionDuration =
                this.barDuration + 'ms'
              this.$refs.slideBar.style.transform = 'scaleX(1)'
            }
          },
        },
      },
      barDuration: 3000,
      isMobile: false,
    }
  },

  mounted() {
    const mediaQuery = window.matchMedia('(max-width: 1023px)')
    if (mediaQuery.matches) {
      this.isMobile = true
    }
  },
}
</script>

<style scoped>
.top-text {
  font-family: Montserrat;
  vertical-align: top;
  font-weight: 700;
  background: linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
.background-message {
  position: absolute;
  top: 64px;
  width: 100vw;
  object-fit: cover;
}
.sticky-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.custom-button-enable {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 18px;
  color: white;
  background: linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%);
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1), 0px 2px 24px rgba(0, 0, 0, 0.08);
  border-radius: 100px;
  padding: 0.4rem 4rem 0.4rem 4rem;
}
.custom-button-disable {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 18px;
  color: white;
  background: #cecece;
  border-radius: 100px;
  padding: 0.4rem 4rem 0.4rem 4rem;
}
.bar {
  position: absolute;
  top: -40px;
  left: 80px;
  z-index: 20;
  transform: scaleX(0);
  transform-origin: 0 0;
  width: 300px;
  height: 4px;
  border-radius: 10px;
  background: linear-gradient(237.35deg, #a1e42b 1.58%, #2f9acf 83.64%);
  transition: transform 3s linear;
}
.bar-background {
  position: absolute;
  z-index: 10;
  top: -40px;
  left: 80px;
  width: 300px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
.swiper-image {
  max-height: 400px;
  object-fit: cover;
}
.ticket-button {
  line-height: 3.375rem;
}

@media screen and (max-width: 1023px) {
  .top-text {
    font-size: 40px;
    /* margin-top: -24px; */
  }
  .background-message {
    top: 220px;
    width: 600px;
    left: -20px;
  }
}

@media screen and (min-width: 1024px) {
  .top-text {
    font-size: 72px;
    margin-top: -24px;
  }
  .background-message {
    top: 64px;
    width: 100vw;
  }
}
</style>
