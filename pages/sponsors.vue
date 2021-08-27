<template>
  <div class="relative">
    <div class="absolute w-full h-screen overflow-hidden">
      <div class="circle"></div>
    </div>
    <div
      class="z-20 flex items-center justify-center w-full mt-6 sticky-header"
    >
      <CustomHeader class="w-11/12" />
    </div>
    <div class="text-black">
      <div class="mx-4 my-14 lg:m-20">
        <p
          class="-mb-8 font-bold  font-mont text-shadow text-7xl lg:text-9xl lg:-mb-14"
        >
          Sponsors
        </p>
        <p class="text-4xl font-bold font-mont lg:text-6xl text-blue-green">
          Sponsors
        </p>
      </div>

      <div class="flex flex-col items-center justify-center pb-20 text-2xl">
        <div class="container lg:pt-14">
          <p class="heading">Platinum</p>
          <div class="img-items-list">
            <div
              v-for="sponsor in platinumSponsorsList"
              :key="sponsor.nameJp"
              class="w-full p-2 my-1 lg:w-1/2"
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
                  class="m-2 text-xl text-center break-all lg:text-2xl"
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
              <div class="py-4 lg:h-96">
                <a
                  :href="sponsor.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full text-center"
                  :class="{ 'pointer-events-none': sponsor.link === '#' }"
                >
                  <div class="sp-name">
                    {{
                      $i18n.locale === 'ja' ? sponsor.nameJp : sponsor.nameEn
                    }}
                  </div>
                </a>
                <p class="sp-intro">
                  {{
                    $i18n.locale === 'ja' ? sponsor.introJP : sponsor.introEn
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <p class="mt-10 heading">Gold</p>
          <div class="img-items-list">
            <div
              v-for="sponsor in goldSponsorsList"
              :key="sponsor.nameEn"
              class="w-full p-2 my-1 lg:w-1/3"
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
              <div class="py-4 fixed-height">
                <a
                  :href="sponsor.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full text-center"
                  :class="{ 'pointer-events-none': sponsor.link === '#' }"
                >
                  <div class="sp-name">
                    {{
                      $i18n.locale === 'ja' ? sponsor.nameJp : sponsor.nameEn
                    }}
                  </div>
                </a>
                <p class="sp-intro">
                  {{
                    $i18n.locale === 'ja' ? sponsor.introJP : sponsor.introEn
                  }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p class="my-10 heading">Silver</p>
          <div class="text-items-list text-blue-green">
            <a
              v-for="sponsor in silverSponsorsList"
              :key="sponsor.nameJp"
              :href="sponsor.link"
              target="_blank"
              rel="noopener noreferrer"
              :class="{ 'pointer-events-none': sponsor.link === '#' }"
            >
              <p class="m-2 text-xl break-all lg:text-2xl">
                {{ $i18n.locale === 'ja' ? sponsor.nameJp : sponsor.nameEn }}
              </p>
            </a>
          </div>
        </div>
        <div class="container mb-20">
          <p class="mt-10 heading">Special</p>
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
  </div>
</template>

<script>
import CustomHeader from '../components/Domains/Header.vue'

export default {
  components: { CustomHeader },

  data() {
    return {
      platinumSponsorsList: [
        {
          nameEn: 'HENNGE 株式会社',
          nameJp: 'HENNGE 株式会社',
          link: 'https://hennge.com/jp/',
          imgURL: 'logo-hennge.png',
          introJP: `今年も Pythonista のみなさまの活動を支援できることをとても嬉しく思います。
          HENNGE は「テクノロジーの解放」というヴィジョンのもと、多くの人々がテクノロジーの恩恵を享受できるよう SaaS を通じて支援する B2B 企業です。
          主力サービスである「HENNGE One」は、クラウドサービスによってもたらされる働く環境の柔軟性と、クラウドサービスをどこからでも活用するために必要な安全性を両立させるためのソリューションです。
          私たち自身も、日々変わる働き方の最前線で、よりよい働き方、働く環境を常に模索しています。
          HENNGE では現在 Python エンジニアを積極採用中です！`,
          introEn: `Hello, Pythonistas!
          We are HENNGE and we are thrilled to be a part of PyCon JP once again!
          Our product, HENNGE One, is a leading cloud security service in Japan,
          enabling customers to adopt flexible work environments and safely harness the power of the cloud from any location.
          With cloud security taken care of, you can focus on achieving results by working smartly.
          We continuously bridge the gap between tomorrow's ideas and today's real-world needs through SaaS.
          Together with you, we are striving to inspire change in the world through the liberation of technology.
          Python Engineers wanted!`,
        },
        {
          nameEn: 'ChuraDATA Inc.',
          nameJp: 'ちゅらデータ株式会社',
          link: 'https://churadata.okinawa/',
          imgURL: 'logo-ChuraDATA.png',
          introJP: `ちゅらデータは、『最高に面白い仕事』を沖縄に創りたい！という想いのもと創業しました。
          ちゅらデータでは、受託分析・アプリケーション開発・データ基盤構築・データ分析研修など様々な事業を行っており、その多くで Python が使われています。
          沖縄で最先端かつやりがいのある仕事を一緒にやっていってくれる Python エンジニアの方を積極採用しています！`,
          introEn: '',
        },
        {
          nameEn: '',
          nameJp: '日本マイクロソフト株式会社',
          link: '#',
          imgURL: '',
          introJP: '',
          introEn: '',
        },
      ],
      goldSponsorsList: [
        {
          nameEn: 'Python Engineer Development Association',
          nameJp: '一般社団法人 Python エンジニア育成推進協会',
          link: 'https://www.pythonic-exam.com/exam',
          imgURL: 'logo-pythoned.png',
          introJP: `Python3 エンジニア認定基礎試験と Python3 エンジニア認定データ分析試験を全国 300 か所で実施しています。
          現在、年間 1 万人の方に受験いただいています。`,
          introEn: `We originated to authorize tests and learning materials,
          which serve as guidelines for study, in addition to schools in order to support the
          training of sound Python programmers who understand Pythonic as the market for the language
          grows.`,
        },
        {
          nameEn: 'Slack Technologies, Inc.',
          nameJp: 'Slack Japan 株式会社',
          link: 'https://qiita.com/organizations/slack',
          imgURL: 'logo-Slack.png',
          introJP: 'Slack Japan 株式会社',
          introEn: `Connect, simplify, and automate your work with Slack apps!
          The Slack Developer Relations team helps you build for your team or millions of Slack users.
          Discover what the platform makes possible & recent API changes at https://api.slack.com/ `,
        },
        {
          nameEn: 'Japan System Laboratory Co.,Ltd.',
          nameJp: '株式会社日本システム技研',
          link: 'https://jsl.co.jp',
          imgURL: 'logo-jsl.png',
          introJP: `株式会社日本システム技研(JSL)は「「技術力×人間力」で社会から注目され続ける企業になること」をビジョンに長野で Python と AWS を中心とした Web の業務を中心に開発を行い、
          変化の激しいフロントエンドに関してもモダンな開発に注力しています。
          積極的に外部への情報発信を行うためコワーキングスペース GEEKLAB.NAGANO (ギークラボ・ナガノ)を運営しています。
          GEEKLAB.NAGANO は、Python や Django、AWS、IoT、フロントエンドなど新しい技術に関心があるエンジニアが集まり勉強会を開催しています。`,
          introEn: `Japan System Laboratory Co.,Ltd. (JSL) has been developing in Nagano centering on Web operations centered on Python and AWS,
          aiming to be a company that continues to attract the attention of society with “technical power x human power”.
          We are also focusing on the latest development of rapidly changing front ends.
          We operate a coworking space, GEEKLAB.NAGANO, to actively disseminate information to the outside world.
          GEEKLAB.NAGANO holds study sessions for engineers interested in new technologies such as Python, Django, AWS, IoT, and front end.`,
        },
        {
          nameEn: 'iRidge, Inc.',
          nameJp: '株式会社アイリッジ',
          link: 'https://iridge.jp',
          imgURL: 'logo-iRidge.png',
          introJP: `「Tech Tomorrow」をミッションに掲げ、自社プロダクトであるインターネットサービスの開発やスマートフォンアプリの受託開発を行なっています。
          Python/Django を使った O2O/OMO ソリューション「FANSHIP」や音声アシスタント対応アプリ制作ツール「NOID」、
          スマートフォンアプリのバックエンドサーバーから業務を改善するちょっとしたスクリプトまで Python で開発しています。
          技術カンファレンスへの協賛や、社内勉強会（FlyHigh Friday/毎週行う個人の取組に関するもくもく会、Issue Bash/毎月行う集中開発）の開催をしており、技術力向上に積極的です。`,
          introEn: `iRidge, Inc. provides solutions of web services and smartphone applications with "Tech Tomorrow" as our mission.
          We use Python/Django for our products such as O2O/OMO solution 'FANSHIP', development tool for voice assistant 'NOID', and the script improvement tool to support backend operation.
          We actively sponsors technical conferences and holds in-house study sessions.
          Development Environment - ES6, TypeScript, Vue.js, Nuxt.js, Storybook, GraphQL - Python, Django, Docker, Go - AWS(ECS, etc..), Terraform, Datadog, Pagerduty, GitLab/CI.`,
        },
        {
          nameEn: 'WED, Inc.',
          nameJp: 'WED 株式会社',
          link: 'https://wed.company/',
          imgURL: 'logo-wed.svg',
          introJP: `WED は、『消費の未来を追求する』をミッションに、レシート買取アプリ ONE をはじめ、消費関連事業を展開しています。
          ONE は累計 DL 数 170 万、買取レシート総数 1 億枚を突破しました。
          レシートから取得した消費者の購買行動をデータ化し、それを活用して企業のマーケティングやプロモーション、商品開発を支援しています。
          昨年には、ONE の OCR 技術を活用し、丸井グループと売上管理ソフトウェア Zero を共同開発。大型商業施設で利用された購買データの収集を始めています。
          ONE と Zero から取得した購買情報を用いて最適な商品を開発/支援し、最適な形で消費者に届けるという、『消費の最適化』を目指しています。`,
          introEn: `Our philosophy is "Pursue the future of consumption".
          WED, Inc. is developing businesses related to consumption such as "ONE", a mobile app that enables users to sell their receipts instantly.
          The app passed 1.7 million downloads and had 100 million receipts uploaded.
          It collects a huge amount of consumption data from users.
          We support our clients in marketing.In 2020, we also released “Zero” with MARUI GROUP.
          It is an application for shopping malls, and they can manage their tenants’ sales easily.
          We will optimize consumption.
          The consumer market will be more efficient and more effective by it.`,
        },
        {
          nameEn: 'JX Press Corporation',
          nameJp: '株式会社 JX 通信社',
          link: 'https://jxpress.net/',
          imgURL: 'logo-JX.png',
          introJP: `JX 通信社は、【データインテリジェンス】を武器とした新しい報道機関です。
          報道価値の高いニュースを、AI が圧倒的スピードで速報する総ダウンロード数 500 万件の社会派ニュースアプリ「NewsDigest」、
          SNS をはじめとする各種ビッグデータから、リスク情報を検知・配信する「FASTALERT」 (国内の大半の報道機関や政府・自治体が導入) を主事業とし、最近は自動電話調査ソリューション「JX 通信社 情勢調査」も展開しています。
          当社は、共にビジョンを実現する Python エンジニアや機械学習のスペシャリストを募集しております。
          弊社に興味がある方、ぜひお問い合わせください！`,
          introEn: '',
        },
        {
          nameEn: 'Kurusugawa Computer Inc.',
          nameJp: '有限会社来栖川電算',
          link: 'https://kurusugawa.jp/',
          imgURL: 'logo-kci.png',
          introJP: `来栖川電算は自動車メーカー・通信キャリア・大学など様々なお客様と自動運転・ヘルスケア・ロボットに関わる技術やサービスを研究開発するベンチャー企業です。
          自らの生産性を高める道具を作る文化があり、そこから多くの人に使われるサービスも生まれています。
          機械学習に必要な高品質なアノテーション(教師データ)を効率的に量産できるクラウドサービス「ANNOFAB※基本無料」もその1つです。
          ラジオ体操などを採点する体操採点アプリ「毎朝体操」のような一風変わったサービスもやっています。
          機械学習・画像処理・自然言語処理・ロボット・UX・UIが分かる研究者・エンジニア・デザイナ・マネージャ・プロデューサを募集中です。`,
          introEn: `Kusugawa Computer Inc. is a AI/ML venture company to develops technologies and services for automated driving, healthcare and
          robotics. Our engineers loves a culture called "Hack Ourselves".
          It means not only working but also developing tools that reinforce our own productivity.
          The culture produce great tools that are loved by engineers.
          One such tool is ANNOFAB, a cloud-based annotation tool for efficiently creating high-quality annotations.
          We are looking for researchers, engineers, designers, managers and producers to develop our products.
          Join us and creating the future of AI/ML together!`,
        },
      ],
      silverSponsorsList: [
        {
          nameEn: 'OpenGroove,Inc.',
          nameJp: '株式会社オープングルーヴ',
          link: 'https://tracpath.com/',
          imgURL: '',
          introJP: '',
          introEn: '',
        },
        {
          nameEn: 'Nexedi',
          nameJp: 'Nexedi',
          link: 'https://www.nexedi.com/',
          imgURL: '',
          introJP: '',
          introEn: '',
        },
        {
          nameEn: '株式会社LegalForce',
          nameJp: '株式会社LegalForce',
          link: 'https://legalforce-cloud.com/',
          imgURL: '',
          introJP: '',
          introEn: '',
        },
        {
          nameEn: 'BeProud',
          nameJp: '株式会社ビープラウド',
          link: 'https://www.beproud.jp/',
          imgURL: '',
          introJP: '',
          introEn: '',
        },
        {
          nameEn: 'OLTA株式会社',
          nameJp: 'OLTA株式会社',
          link: '#',
          imgURL: '',
          introJP: '',
          introEn: '',
        },
        {
          nameEn: 'SQUEEZE Inc.',
          nameJp: '株式会社SQUEEZE',
          link: 'https://squeeze-inc.co.jp/',
          imgURL: '',
          introJP: '',
          introEn: '',
        },
        {
          nameEn: 'Elastic',
          nameJp: 'Elasticsearch KK (Tokyo)',
          link: 'http://www.elastic.co/',
          imgURL: '',
          introJP: '',
          introEn: '',
        },
        {
          nameEn: 'BrainPad Inc.',
          nameJp: '株式会社ブレインパッド',
          link: 'https://www.brainpad.co.jp/',
          imgURL: '',
          introJP: '',
          introEn: '',
        },
        {
          nameEn: 'Classi Corp.',
          nameJp: 'Classi株式会社',
          link: 'https://classi.jp/',
          imgURL: '',
          introJP: '',
          introEn: '',
        },
        {
          nameEn: 'Hatena Co., Ltd.',
          nameJp: '株式会社はてな',
          link: 'https://hatenacorp.jp/',
          imgURL: '',
          introJP: '',
          introEn: '',
        },
        {
          nameEn: '株式会社スカラコミュニケーションズ',
          nameJp: '株式会社スカラコミュニケーションズ',
          link: 'https://scala-com.jp/',
          imgURL: '',
          introJP: '',
          introEn: '',
        },
      ],
      specialSponsorsList: [
        {
          nameEn: 'Pizza Hut Japan Ltd.',
          nameJp: '日本ピザハット・コーポレーション株式会社',
          link: 'https://www.pizzahut.jp/',
          imgURL: 'logo-pizzahut.jpg',
          introJP: `ピザハットは世界 110 以上の国と地域に 18,000 店舗を有する世界最大のピザチェーンです。
          アメリカ・カンザス州で創業し、今年で63周年を迎えました。
          日本では 1973 年に第一号店がオープンして以来、現在は全国で 440 店舗以上を展開中です。いつだっておいしいこと。おトクなこと。
          それが想像以上であること。
          商品サービスはもちろん、ウェブサイトやアプリなどお客様と私たちを結ぶすべてにおいてどんな時でもそうありたいとピザハットは思います。
          これはお客様との約束であり、自分たちとの約束。これからもお客さんがワクワクできる「想像以上」の価値をお届けしていきます。
          ピザハットの本気に是非ご期待ください。`,
          introEn: `Pizza Hut is the world's largest restaurant with 18,000 stores in more than 110 countries and regions.
          Founded in 1958 in Kansas, it marks its 63rd anniversary this year.
          Since the first store opened in Japan in 1973, we have focused on delivery. We now have more than 440 stores nationwide.
          Always tasty. Always reasonable.
          We want to always exceed people’s expectations in everything that connects us to our customers. Our food, services, websites, and apps.
          This is our promise to our customers, and to ourselves.
          We will keep delivering values that excite our customers.
          Check us out! `,
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

.heading {
  @apply font-bold text-center font-mont;
}

.sp-name {
  @apply w-full text-xl mt-2 font-bold text-blue-green lg:text-2xl;
}

.sp-intro {
  @apply w-full text-base leading-7  text-gray-600   font-noto px-1 whitespace-pre-line;
}

@media screen and (min-width: 1024px) {
  .fixed-height {
    height: 33rem;
  }
}

/* disable mobile click event */
.touch-action-none {
  pointer-events: none;
  touch-action: none;
}
</style>
