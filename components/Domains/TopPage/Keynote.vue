<template>
  <div class="my-8 text-black font-noto">
    <div>
      <div class="lg:ml-28 -mb-36">
        <p
          class="-mb-8 text-4xl font-bold font-mont lg:text-6xl text-blue-green"
        >
          Conference
        </p>
        <p class="text-6xl font-bold font-mont text-shadow lg:text-9xl">
          Conference
        </p>
      </div>
      <div class="w-5/6 mt-10 grey-background lg:w-7/12">
        <div class="w-full mb-16 ml-8 lg:ml-80">
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>{{ $t('pages.index.conference') }}</p>
        </div>
        <div class="content-center w-full m-2 text-center lg:ml-80">
          <div class="text-2xl font-bold font-mont">Keynote</div>
          <div class="text-base text-gray-600">基調講演</div>
          <div class="w-full mt-12 ml-4 text-left">
            <div
              v-for="keynote in $i18n.locale === 'ja' ? keynoteJp : keynoteEn"
              :key="keynote.name"
              class="flex flex-col mt-8 lg:flex-row"
            >
              <div class="flex justify-center w-full mb-6 lg:w-1/4 lg:mb-0">
                <div class="flex lg:h-full lg:justify-end lg:items-start">
                  <img
                    :src="require(`@/assets/images/${keynote.image}`)"
                    class="self-center"
                  />
                </div>
              </div>
              <div class="flex-1 mb-10 ml-6">
                <div class="text-xs text-gray-600">{{ keynote.date }}</div>
                <div
                  v-if="keynote.title"
                  class="my-4 text-lg font-bold  lg:text-xl text-blue-green corner"
                >
                  {{ keynote.title }}
                </div>
                <div class="my-2 text-base font-bold">{{ keynote.name }}</div>
                <p class="text-sm leading-7" v-html="keynote.desc"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keynoteJp: [
        {
          name: '谷合 廣紀',
          title: 'Python × 将棋',
          image: 'keynote1.jpg',
          date: '2021.10.15 13:30 -',
          desc: `2016 年に Python と出会いデータ分析に目覚める。<br/>
          その 2 年後に「Python で理解する統計解析の基礎」を出版。<br/>
          2020 年に将棋のプロ棋士になり、現在は東京大学情報理工学系研究科の博士課程にも籍を置く。<br/>
          「楽しいことを全力で」をモットーに、今日もまた好奇心を満たす旅に出る。`,
        },
        {
          name: 'ブラント ブーカー',
          title: '',
          image: 'keynote2.jpg',
          date: '2021.10.16 10:30 -',
          desc: `Brandt 氏は Python のコア開発者であり、スマートベータとアセットアロケーションについてグローバルなトップ企業である Research Affiliates 社の投資システムチームでシニアソフトウェアエンジニアとして働いています。<br/>
          彼は 2 年以上前から CPython の開発に公式に関わっており、様々な方法で CPython の性能、安定性、表現力を向上させてきました。<br/>
          特に、昨年の多くの時間を、Python 3.10 の重要な新機能である構造的パターンマッチングの実装を設計し、リードするのに費やしました。<br>
          <a href="https://github.com/brandtbucher/brandtbucher" target="_blank" class="text-blue-green" rel="noopener">@brandtbucher</a> として GitHub に新しいコミットをプッシュしていないときは、コーヒーショップで深煎りのエスプレッソをすすりながらノンフィクションを読むなどして余暇を過ごすことが多いです。`,
        },
      ],
      keynoteEn: [
        {
          name: 'HIROKI TANIAI',
          title: 'Python x Shogi',
          image: 'keynote1.jpg',
          date: '2021.10.15 13:30 -',
          desc: `In 2016, he encountered Python and was awakened to data analysis.<br>
          Only two years later, he published a book titled "Statistical Analysis with Python(Japanese title: Understanding the Basics of Statistical Analysis with Python)". <br>
          In 2020, he became a professional Shogi player, and is currently enrolled in a PhD program at the Graduate School of Information Science and Technology of the University of Tokyo.<br>
          With his motto "Do what you enjoy with your whole heart", he goes on another journey to satisfy his curiosity.`,
        },
        {
          name: 'Brandt Bucher',
          title: '',
          image: 'keynote2.jpg',
          date: '2021.10.16 10:30 -',
          desc: `Brandt is a Python core developer and senior software engineer on the Investment Systems team at Research Affiliates, a global leader in smart beta and asset allocation.<br>
          He has been officially involved in CPython development for over two years now, and has improved its performance, stability, and expressiveness in a variety of ways.<br>
          Most notably, he spent most of the past year helping design and lead the implementation of structural pattern matching, a major new feature arriving in Python 3.10.<br>
          When he’s not pushing new commits on GitHub as <a href="https://github.com/brandtbucher/brandtbucher" target="_blank" class="text-blue-green" rel="noopener">@brandtbucher</a>, he spends most of his free time at coffee shops sipping dark roast espresso and reading nonfiction.`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.grey-background {
  background: rgba(221, 221, 221, 0.2);
}

.corner {
  position: relative;
  border: none;
  display: inline-block;
  padding: 2px 20px;
}
.corner::before,
.corner::after {
  position: absolute;
  content: '';
  width: 20px;
  height: 15px;
}

.corner::before {
  left: 0;
  top: 0;
  border-left: 1px solid #dddddd;
  border-top: 1px solid #dddddd;
}
.corner::after {
  right: 0;
  bottom: 0;
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
}
</style>
