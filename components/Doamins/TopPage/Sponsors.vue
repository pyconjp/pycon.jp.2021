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
      <div class="pt-14">
        <p class="mb-10 text-center">Platinum</p>
        <div class="text-items-list">
          <a
            v-for="sponsor in platinumSponsorsList"
            :key="sponsor.nameJp"
            :href="sponsor.link"
            target="_blank"
            rel="noopener noreferrer"
            :class="{ 'pointer-events-none': sponsor.link === '#' }"
          >
            <p class="m-2 text-3xl break-all lg:text-4xl">
              {{ sponsor.nameJp }}
            </p>
          </a>
        </div>
      </div>
      <div>
        <p class="mt-10 text-center">Gold</p>
        <div class="img-items-list">
          <a
            v-for="sponsor in goldSponsorsList"
            :key="sponsor.nameEn"
            :href="sponsor.link"
            target="_blank"
            rel="noopener noreferrer"
            class="w-1/2 px-2 py-8 lg:w-1/4"
          >
            <img
              :src="require(`@/assets/images/${sponsor.imgURL}`)"
              :alt="sponsor.nameEn"
            />
          </a>
        </div>
      </div>
      <div>
        <p class="my-10 text-center">Silver</p>
        <div class="text-items-list" style="color: #1097aa">
          <a
            v-for="sponsor in silverSponsorsList"
            :key="sponsor.nameJp"
            :href="sponsor.link"
            target="_blank"
            rel="noopener noreferrer"
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
          nameEn: '',
          nameJp: 'HENNGE株式会社',
          link: '#',
          imgURL: '',
        },
        {
          nameEn: '',
          nameJp: 'ちゅらデータ株式会社',
          link: '#',
          imgURL: '',
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
          imgURL: 'logo-wed.png',
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
          link: '#',
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
          nameEn: 'Classi株式会社',
          nameJp: 'Classi株式会社',
          link: '#',
          imgURL: '',
        },
        {
          nameEn: 'Hatena Co., Ltd.',
          nameJp: '株式会社はてな',
          link: 'https://hatenacorp.jp/',
          imgURL: '',
        },
        {
          nameEn: 'スカラコミュニケーションズ',
          nameJp: 'スカラコミュニケーションズ',
          link: '#',
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
  @apply grid grid-cols-1 gap-4 text-center lg:grid-cols-3;
}
</style>
