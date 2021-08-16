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
                    v-bind:style="{
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
                    v-bind:style="{
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
            <p v-if="$i18n.locale === 'ja'" class="m-2 text-2xl break-all">
              {{ sponsor.nameJp }}
            </p>
            <p v-else class="m-2 text-2xl break-all">
              {{ sponsor.nameEn }}
            </p>
          </a>
        </div>
      </div>
      <!-- <div class="mb-20">
        <p class="text-center">Special</p>
        <div class="img-items-list">
          <p class="w-1/2 p-2 lg:w-1/4">
            <img src="~/assets/images/slide-sample.png" alt="sponsor-logo" />
          </p>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      platinumSponsorsList: [
        {
          nameEn: 'HENNGE 株式会社',
          nameJp: 'HENNGE株式会社',
          link: 'https://hennge.com/jp/',
          imgURL: 'logo-hennge.jpg',
        },
        {
          nameEn: 'ChuraDATA Inc',
          nameJp: 'ちゅらデータ株式会社',
          link: 'https://churadata.okinawa/',
          imgURL: 'logo-ChuraDATA.png',
        },
        {
          nameEn: '',
          nameJp: '日本マイクロソフト株式会社',
          link: '#',
          imgURL: '',
        },
      ],

      goldSponsorsList: [
        {
          nameEn: 'Python Engineer Development Association',
          nameJp: '',
          link: 'https://www.pythonic-exam.com/exam',
          imgURL: 'logo-pythoned.png',
        },
        {
          nameEn: 'Slack Technologies, Inc.',
          nameJp: '',
          link: 'https://qiita.com/organizations/slack',
          imgURL: 'logo-Slack.png',
        },
        {
          nameEn: 'Japan System Laboratory Co.,Ltd.',
          nameJp: '',
          link: 'https://jsl.co.jp',
          imgURL: 'logo-jsl.png',
        },
        {
          nameEn: 'iRidge, Inc.',
          nameJp: '',
          link: 'https://iridge.jp',
          imgURL: 'logo-iRidge.png',
        },
        {
          nameEn: 'WED, Inc.',
          nameJp: '',
          link: 'https://wed.company/',
          imgURL: 'logo-wed.svg',
        },
        {
          nameEn: 'JX Press Corporation',
          nameJp: '',
          link: 'https://jxpress.net/',
          imgURL: 'logo-JX.png',
        },
        {
          nameEn: 'Kurusugawa Computer Inc.',
          nameJp: '',
          link: 'https://kurusugawa.jp/',
          imgURL: 'logo-kci.png',
        },
      ],
      silverSponsorsList: [
        {
          nameEn: 'OpenGroove,Inc.',
          nameJp: '株式会社オープングルーヴ',
          link: 'https://tracpath.com/',
          imgURL: '',
        },
        {
          nameEn: 'Nexedi',
          nameJp: 'Nexedi',
          link: 'https://www.nexedi.com/',
          imgURL: '',
        },
        {
          nameEn: '株式会社LegalForce',
          nameJp: '株式会社LegalForce',
          link: 'https://legalforce-cloud.com/',
          imgURL: '',
        },
        {
          nameEn: 'BeProud',
          nameJp: '株式会社ビープラウド',
          link: 'https://www.beproud.jp/',
          imgURL: '',
        },
        {
          nameEn: 'OLTA株式会社',
          nameJp: 'OLTA株式会社',
          link: '#',
          imgURL: '',
        },
        {
          nameEn: 'SQUEEZE Inc.',
          nameJp: '株式会社SQUEEZE',
          link: 'https://squeeze-inc.co.jp/',
          imgURL: '',
        },
        {
          nameEn: 'Elastic',
          nameJp: 'Elasticsearch KK (Tokyo)',
          link: 'http://www.elastic.co/',
          imgURL: '',
        },
        {
          nameEn: 'BrainPad Inc.',
          nameJp: '株式会社ブレインパッド',
          link: 'https://www.brainpad.co.jp/',
          imgURL: '',
        },
        {
          nameEn: 'Classi Corp.',
          nameJp: 'Classi株式会社',
          link: 'https://classi.jp/',
          imgURL: '',
        },
        {
          nameEn: 'Hatena Co., Ltd.',
          nameJp: '株式会社はてな',
          link: 'https://hatenacorp.jp/',
          imgURL: '',
        },
        {
          nameEn: '株式会社スカラコミュニケーションズ',
          nameJp: '株式会社スカラコミュニケーションズ',
          link: 'https://scala-com.jp/',
          imgURL: '',
        },
      ],
    }
  },
}
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
</style>
