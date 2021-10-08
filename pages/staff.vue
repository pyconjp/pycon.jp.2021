<template>
  <div class="flex flex-col items-center">
    <div
      class="z-20 flex items-center justify-center w-full mt-6 sticky-header"
    >
      <CustomHeader class="w-11/12 lg:w-5/6" />
    </div>

    <div class="w-11/12 mb-40 text-black">
      <div class="mx-4 my-14 lg:m-20">
        <p
          class="-mb-8 font-bold  font-mont text-shadow text-7xl lg:text-9xl lg:-mb-14"
        >
          Staff
        </p>
        <p class="text-4xl font-bold font-mont lg:text-6xl text-blue-green">
          Staff
        </p>
      </div>
      <div
        class="grid grid-cols-2 mt-4 text-center  lg:grid-cols-4 place-items-center"
      >
        <div
          v-for="staff in staffs"
          :key="staff.id"
          class="flex flex-col items-center object-center my-8"
        >
          <img
            class="block object-cover object-center w-20 h-20 m-auto rounded-full  lg:w-40 lg:h-40"
            :src="
              staff.imgURL
                ? require(`@/assets/images/staff/${staff.imgURL}`)
                : require(`@/assets/images/icons/user.svg`)
            "
            alt="staff"
          />

          <p class="h-6 mx-2 mt-4 text-xs lg:text-base font-noto">
            {{ $i18n.locale === 'ja' ? staff.titleJp : staff.titleEn }}
          </p>
          <p class="h-8 m-2 text-base lg:text-2xl font-moto">
            {{ $i18n.locale === 'ja' ? staff.nameJp : staff.nameEn }}
          </p>

          <div
            class="flex justify-around gap-3 mt-2 mb-4  w-28 lg:w-56 lg:gap-6 lg:place-content-center"
          >
            <a
              :href="`https://twitter.com/${staff.twitter}`"
              target="_blank"
              rel="noopener noreferrer"
              class="flex hover:opacity-70"
              :class="{ 'pointer-events-none': staff.twitter === '' }"
              ><img
                class="w-6 h-6"
                src="~/assets/images/icons/twitter.svg"
                alt="twitter-icon"
                :class="{ 'filter-gray': staff.twitter === '' }"
              />
            </a>
            <a
              :href="`https://facebook.com/${staff.facebook}`"
              target="_blank"
              rel="noopener noreferrer"
              class="flex hover:opacity-70"
              :class="{ 'pointer-events-none': staff.facebook === '' }"
              ><img
                class="w-6 h-6"
                src="~/assets/images/icons/facebook.svg"
                alt="facebook-icon"
                :class="{
                  'filter-gray': staff.facebook === '',
                  'filter-facebook-blue': staff.facebook !== '',
                }"
              />
            </a>
            <a
              :href="`https://github.com/${staff.github}`"
              target="_blank"
              rel="noopener noreferrer"
              class="flex hover:opacity-70"
              :class="{ 'pointer-events-none': staff.github === '' }"
              ><img
                class="w-6 h-6"
                src="~/assets/images/icons/github.svg"
                alt="github-icon"
                :class="{ 'filter-gray': staff.github === '' }"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomHeader from '../components/Domains/Header.vue'

export default {
  components: { CustomHeader },

  data() {
    return {
      staffs: [
        {
          nameJp: 'にっきー',
          nameEn: 'nikkie',
          titleJp: '座長',
          titleEn: 'Chair',
          imgURL: 'nikkie.jpg',
          facebook: '',
          twitter: 'ftnext',
          github: 'ftnext',
          id: 'UDVN3MVL5',
        },
        {
          nameJp: '佐々木 康祐',
          nameEn: 'Sasaki Kosuke',
          titleJp: 'NOC',
          titleEn: 'NOC',
          imgURL: 'SasakiKosuke.jpg',
          facebook: 'profile.php?id=100018498365616',
          twitter: 'NSR1336',
          github: '',
          id: 'U027MPFJCAG',
        },
        {
          nameJp: '松浦 麻奈未',
          nameEn: 'Matsuura Manami',
          titleJp: '',
          titleEn: '',
          imgURL: 'MatsuuraManami.jpg',
          facebook: 'manami.matsuura.227',
          twitter: 'mtmn07384',
          github: 'matsumana07384',
          id: 'U9J3ZUKN2',
        },
        {
          nameJp: '中村 航也',
          nameEn: 'Koya Nakamura',
          titleJp: '',
          titleEn: '',
          imgURL: 'KoyaNakamura.jpg',
          facebook: '',
          twitter: '',
          github: 'k-nakamura',
          id: 'U01V39Z5X5L',
        },
        {
          nameJp: '高倉 佑輔（ヨーシャ）',
          nameEn: 'Iosif Takakura',
          titleJp: '',
          titleEn: '',
          imgURL: 'IosifTakakura.jpg',
          facebook: 'iosif.takakura.yusuke',
          twitter: 'huideyeren',
          github: 'huideyeren',
          id: 'U50LN00RK',
        },
        {
          nameJp: 'Peacock',
          nameEn: 'Peacock',
          titleJp: '',
          titleEn: '',
          imgURL: 'Peacock.jpg',
          facebook: 'peacock0803sz',
          twitter: 'peacock0803sz',
          github: 'peacock0803sz',
          id: 'UNU5JMELS',
        },
        {
          nameJp: '宮脇 一晃',
          nameEn: 'miyawaki kazuaki',
          titleJp: '',
          titleEn: '',
          imgURL: '',
          facebook: '',
          twitter: '',
          github: '',
          id: 'UHEMDNMU5',
        },
        {
          nameJp: 'OJI',
          nameEn: 'OJI',
          titleJp: 'Discord 担当',
          titleEn: 'Cheif Discord Staff',
          imgURL: 'OJI.png',
          facebook: '',
          twitter: 'OldBigBuddha',
          github: 'OldBigBuddha',
          id: 'U01M9DLQ1EW',
        },
        {
          nameJp: '板谷 郷司',
          nameEn: 'Satoshi Itatani',
          titleJp: 'オンサイト会場担当',
          titleEn: 'On-site Venue Staff',
          imgURL: 'SatoshiItatani.jpg',
          facebook: 'hiyou.shinonome',
          twitter: 'H_Shinonome',
          github: 'shinonome',
          id: 'UBF56JMNY',
        },
        {
          nameJp: '宮下 亮太',
          nameEn: 'ミヤシタ　リョウタ',
          titleJp: '',
          titleEn: '',
          imgURL: '',
          facebook: '',
          twitter: '',
          github: '',
          id: 'U018KRQRB7X',
        },
        {
          nameJp: '村上 涼',
          nameEn: 'Ryo Murakami',
          titleJp: '',
          titleEn: '',
          imgURL: 'RyoMurakami.jpg',
          facebook: '',
          twitter: '',
          github: 'kyomukyomupurin',
          id: 'U02AQP58K7E',
        },
        {
          nameJp: '倉本 拓実',
          nameEn: 'Takumi Kuramoto',
          titleJp: '',
          titleEn: '',
          imgURL: 'TakumiKuramoto.jpg',
          facebook: '',
          twitter: 'katura46',
          github: '',
          id: 'UMX263U6L',
        },
        {
          nameJp: 'パナくま',
          nameEn: 'panakuma',
          titleJp: '',
          titleEn: '',
          imgURL: 'panakuma.jpg',
          facebook: 'panakuma8787/',
          twitter: 'pana_pana_kuma',
          github: 'panakuma',
          id: 'U5YQGB4TT',
        },
        {
          nameJp: 'Kima',
          nameEn: 'Kima',
          titleJp: '',
          titleEn: '',
          imgURL: 'Kima.jpg',
          facebook: '',
          twitter: 'kingkoma_',
          github: 'kingkoma',
          id: 'U027RQJM534',
        },
        {
          nameJp: 'nishi',
          nameEn: 'nishi',
          titleJp: '',
          titleEn: '',
          imgURL: 'nishi.jpg',
          facebook: 'yoshiro.nishimura.9/',
          twitter: '',
          github: '',
          id: 'U4K623R2S',
        },
        {
          nameJp: '門脇 優貴',
          nameEn: 'Kadowaki Yuuki',
          titleJp: '',
          titleEn: '',
          imgURL: '',
          facebook: '',
          twitter: '',
          github: '',
          id: 'U01SMHWSUP8',
        },
        {
          nameJp: 'まさもり',
          nameEn: 'masamori',
          titleJp: 'トーク担当',
          titleEn: 'vice-chair-of-talk',
          imgURL: 'masamori.jpg',
          facebook: '',
          twitter: 'masamori0083',
          github: '',
          id: 'U013ZBXU3CL',
        },
        {
          nameJp: '秋田 浩也(あっきー)',
          nameEn: 'Hiroya Akita',
          titleJp: 'ウェブサイト、スポンサー担当',
          titleEn: 'charge of website, sponsor',
          imgURL: 'HiroyaAkita.png',
          facebook: '',
          twitter: 'papi_tokei',
          github: 'papi-tokei',
          id: 'UN47GEU3F',
        },
        {
          nameJp: '神田 佳積',
          nameEn: 'Kazumi Kanda',
          titleJp: 'グッズ担当',
          titleEn: '',
          imgURL: 'KazumiKanda.jpg',
          facebook: 'kazforest/',
          twitter: 'kazumiks',
          github: 'kazkanda',
          id: 'U01V585G6KS',
        },
        {
          nameJp: '渡部 岳郎',
          nameEn: 'WATANABE Takeo',
          titleJp: 'NOC/オフサイト諸々担当',
          titleEn: '',
          imgURL: 'WATANABETakeo.jpg',
          facebook: '',
          twitter: '',
          github: '',
          id: 'U027CH92FM3',
        },
        {
          nameJp: '吉田 俊輔',
          nameEn: 'Shunsuke Yoshida',
          titleJp: '',
          titleEn: '会計、一社理事',
          imgURL: 'ShunsukeYoshida.jpg',
          facebook: 'koedoyoshida',
          twitter: 'koedoyoshida',
          github: 'koedoyoshida',
          id: 'U024HRNSD',
        },
        {
          nameJp: 'Asuka',
          nameEn: 'Asuka',
          titleJp: 'デザイン担当',
          titleEn: 'Design',
          imgURL: 'Asuka.jpg',
          facebook: '',
          twitter: '',
          github: 'noraneko5628',
          id: 'U01NZP7JK60',
        },
        {
          nameJp: '板谷 藍子',
          nameEn: 'itatani aiko',
          titleJp: '',
          titleEn: '',
          imgURL: 'itataniaiko.jpg',
          facebook: 'aiko.miyairi',
          twitter: 'mary_tuba',
          github: '',
          id: 'UBFDUFA2E',
        },
        {
          nameJp: '片岡 直子',
          nameEn: 'Naoko Kataoka',
          titleJp: 'キーノート&英語担当',
          titleEn: 'Keynote and English assistant',
          imgURL: 'NaokoKataoka.jpg',
          facebook: '',
          twitter: '',
          github: '',
          id: 'U02243KE360',
        },
        {
          nameJp: 'よしけん',
          nameEn: 'Yoshiken',
          titleJp: '',
          titleEn: '',
          imgURL: 'Yoshiken.jpg',
          facebook: '',
          twitter: 'yoshiken_tut',
          github: 'yoshiken',
          id: 'UL6D8L3PW',
        },
        {
          nameJp: '成田 孝',
          nameEn: 'Narita Takashi',
          titleJp: 'スポンサー担当',
          titleEn: '',
          imgURL: 'NaritaTakashi.jpg',
          facebook: 'narinarita1980/',
          twitter: 'narinarita1980',
          github: 'narita1980',
          id: 'U026XSKDSMN',
        },

        {
          nameJp: '花井 宏行',
          nameEn: 'Hanai Hiroyuki',
          titleJp: '',
          titleEn: '',
          imgURL: 'HanaiHiroyuki.jpg',
          facebook: '',
          twitter: 'hanahiro_aze',
          github: '',
          id: 'UB5JURRV4',
        },
        {
          nameJp: '稲森 景',
          nameEn: 'Akira Inamori',
          titleJp: 'ネットワーク担当',
          titleEn: 'Network Engineer',
          imgURL: 'AkiraInamori.jpg',
          facebook: 'ainamori01',
          twitter: 'ainamori',
          github: 'ainamori',
          id: 'UL9HPA2PM',
        },
        {
          nameJp: 'natsu',
          nameEn: 'natsu',
          titleJp: '',
          titleEn: '',
          imgURL: 'natsu.jpg',
          facebook: '',
          twitter: 'natsu_bm',
          github: '',
          id: 'U024GT9JB',
        },
        {
          nameJp: '百瀬 秀一',
          nameEn: 'Shuichi Momose',
          titleJp: 'NOC 担当',
          titleEn: 'NOC',
          imgURL: 'ShuichiMomose.jpg',
          facebook: '',
          twitter: '',
          github: '',
          id: 'U0284EJFD1P',
        },
        {
          nameJp: 'ikuru',
          nameEn: 'ikuru',
          titleJp: '',
          titleEn: '',
          imgURL: 'ikuru.jpg',
          facebook: '',
          twitter: '',
          github: '',
          id: 'U02G4N03GJD',
        },
        {
          nameJp: 'エビハラ ユウキ',
          nameEn: 'Ebihara Yuuki',
          titleJp: '',
          titleEn: '',
          imgURL: 'EbiharaYuuki.jpg',
          facebook: '',
          twitter: '',
          github: '',
          id: 'U13M0PE9Y',
        },
        {
          nameJp: '橋本 拓弥 / hassaku',
          nameEn: 'Takuya Hashimoto / hassaku',
          titleJp: '',
          titleEn: '',
          imgURL: '',
          facebook: '',
          twitter: 'hassaku_63',
          github: 'hassaku63',
          id: 'U0293LY8E0G',
        },
        {
          nameJp: 'ひとかむ',
          nameEn: 'hitokamu',
          titleJp: '',
          titleEn: '',
          imgURL: '',
          facebook: '',
          twitter: '',
          github: '',
          id: 'U02GD6U9ZDH',
        },
      ],
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

.filter-gray {
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(95%)
    hue-rotate(141deg) brightness(88%) contrast(81%);
}

.filter-facebook-blue {
  filter: invert(30%) sepia(74%) saturate(2937%) hue-rotate(206deg) 
    brightness(99%) contrast(90%);
}
</style>
