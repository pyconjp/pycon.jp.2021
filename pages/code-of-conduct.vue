<template>
  <div class="flex flex-col items-center">
    <CustomHeader class="w-11/12 mt-6 lg:w-5/6" />
    <div
      class="relative flex flex-col items-center justify-center mt-8 overflow-hidden "
    >
      <div class="sp-width">
        <p
          class="absolute left-0 -mb-8 font-bold text-center  lg:relative text-shadow text-7xl lg:text-9xl lg:-mb-14 font-mont whitespace-nowrap"
        >
          Code of Conduct
        </p>
        <div class="mt-12 lg:mt-2">
          <p
            class="text-4xl font-bold text-left  lg:text-6xl text-blue-green font-mont"
          >
            Code of Conduct
          </p>
        </div>
      </div>
      <div class="coc-content">
        <div class="text-custom-black">
          <p
            class="mt-16 mb-16 text-2xl font-bold text-center opacity-100  font-mont"
          >
            {{ $t('common.codeOfConduct') }}
          </p>
          <div class="font-medium font-noto">
            <p>{{ $t('coc.p1') }}</p>
            <p class="mt-8">{{ $t('coc.p2') }}</p>
            <p class="mt-8 text-xl font-bold">{{ $t('coc.p3') }}</p>
            <p class="mt-8">{{ $t('coc.p4') }}</p>
            <ul class="mt-8">
              <li
                v-for="message in $t('coc.p5-list')"
                :key="message"
                class="mt-3"
              >
                {{ message }}
              </li>
            </ul>
            <p class="mt-8">{{ $t('coc.p6') }}</p>
            <p class="mt-8">{{ $t('coc.p7') }}</p>
            <p v-if="$i18n.locale === 'en'" class="mt-8">
              {{ $t('coc.p7-2') }}
            </p>

            <p class="mt-8">{{ $t('coc.p8') }}</p>
            <p class="mt-8">{{ $t('coc.p9') }}</p>
            <p class="mt-8 text-xl font-bold">{{ $t('coc.p10') }}</p>
            <ul class="mt-8">
              <li
                v-for="message in $t('coc.p11-list')"
                :key="message"
                class="mt-3"
              >
                {{ message }}
              </li>
            </ul>
            <p class="mt-8">{{ $t('coc.p12') }}</p>
            <p class="">{{ $t('coc.p13') }}</p>
            <ul class="mt-8">
              <li
                v-for="message in $t('coc.p14-list')"
                :key="message"
                class="mt-3"
              >
                {{ message }}
              </li>
            </ul>
            <p class="mt-8">{{ $t('coc.p15') }}</p>
            <p class="mt-8">{{ $t('coc.p16') }}</p>
            <p class="mt-8">{{ $t('coc.p17') }}</p>
            <p class="mt-8">{{ $t('coc.p18') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '../components/Domains/Header.vue'

export default {
  name: 'CodeOfConduct',
  components: { CustomHeader },
}
</script>

<style scoped>
.coc-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    237.35deg,
    rgba(161, 228, 43, 0.2) 1.58%,
    rgba(47, 154, 207, 0.2) 83.64%
  );
}

@media screen and (max-width: 1023px) {
  .coc-content {
    margin-top: 60px;
    margin-bottom: 80px;
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 64px;
  }
  .sp-width {
    width: 100%;
  }
}

@media screen and (min-width: 1024px) {
  .coc-content {
    margin-top: 112px;
    margin-bottom: 160px;
    width: 80%;
    padding-left: 6rem;
    padding-right: 6rem;
    padding-bottom: 64px;
  }
}

li {
  list-style-type: none;
  position: relative;
  padding-left: 12px;
}
li:before {
  border-radius: 50%;
  width: 6px;
  height: 6px;
  display: block;
  position: absolute;
  left: 0;
  top: 0.6em;
  content: '';
  background: #1097aa;
}
</style>

<i18n>
  {
    "en": {
      "coc": {
        "p1":"PyCon JP Code of Conduct (hereinafter referred to as the \"Code of Conduct\") is an event (hereinafter referred to as the \"Event\") held by the General Incorporated Association PyCon JP Association (hereinafter referred to as the \"PyCon JP\"). All the participants who participate in this event are required to read all the terms of this agreement and agree to this code of conduct.",
        "p2":"PyCon JP is a conference organized and run by volunteers in the Japanese Python community that is dedicated to advancing and promoting the Python programming language. Through holding the PyCon JP conference, Python users can gather and exchange information with other developers from a wide variety of fields. It is our aim to create new relationships between the different communities and businesses using Python.",
        "p3":"Inappropriate Behavior",
        "p4":"Examples of unacceptable behavior by participants include:",
        "p5-list":[
          "Harassment of any participants in any form",
          "Deliberate intimidation, stalking, or following",
          "Logging or taking screenshots of online activity for harassment purposes",
          "Publishing others’ private information, such as a physical or electronic address, without explicit permission",
          "Violent threats or language directed against another person",
          "Incitement of violence or harassment towards any individual, including encouraging a person to commit suicide or to engage in self-harm",
          "Creating additional online accounts in order to harass another person or circumvent a ban",
          "Sexual language and imagery in online communities or in any conference venue, including talks",
          "Insults, put downs, or jokes that are based upon stereotypes, that are exclusionary, or that hold others up for ridicule",
          "Excessive swearing",
          "Unwelcome sexual attention or advances",
          "Unwelcome physical contact, including simulated physical contact without consent or after a request to stop",
          "Sustained disruption of online community discussions, in-person presentations, or other in-person events",
          "Continued one-on-one communication after requests to cease",
          "Other conduct that is inappropriate for a professional audience including people of many different backgrounds",
          "Harassment includes offensive verbal comments related to gender, age, sexual orientation, disability, physical appearance, body size, race, religion, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention."
        ],
        "p6":"Participants asked to stop any harassing behavior are expected to comply immediately.",
        "p7":"Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualised images, activities, or other material. Booth staff (including volunteers) should not use sexualised clothing/uniforms/costumes, or otherwise create a sexualised environment.",
        "p7-2":"If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.",
        "p8":"If you are harassed, someone else is harassed, or if you have any other concerns, immediately contact the Code of Conduct Inquiries posted on the event's website. Please contact the Code of Conduct Inquiry Desk instead of reporting by posting on blogs, SNS, etc.",
        "p9":"Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.",
        "p10":"Weapons Policy",
        "p11-list":[
          "No weapons are allowed at PyCon JP or Association PyCon JP Association events.",
          "Weapons include but are not limited to explosives (including fireworks), guns, and large knives such as those used for hunting or display, as well as any other item used for the purpose of causing injury or harm to others. Anyone seen in possession of one of these items will be asked to leave immediately, and will only be allowed to return without the weapon"
        ],
        "p12":"All participants should follow instructions from the meeting staff.",
        "p13":"Examples of instructions from staff include:",
        "p14-list":[
          "Instructions to ensure physical and psychological safety",
          "Infectious diseases, earthquakes, typhoons, tsunamis and other natural disasters",
          "War, riots, civil war, terrorism, serious illness",
          "Establishment, revision or abolition of laws and regulations, orders and dispositions by public authorities and other acts by the government",
          "Acts of dispute, accidents involving transportation and communication lines",
          "Other Force Majeure Responses"
        ],
        "p15":"In order to ensure the above, the meeting staff may request the participants to leave the event if deemed necessary. Participants need to follow it.",
        "p16":"In this case, we will not refund the participation fee that has already been paid.",
        "p17":"Attendees should observe this Code of Conduct in the conference room, workshop venue, social events associated with the conference, conference website, and applications used.",
        "p18":"For inquiries about the Code of Conduct, please contact the desk for inquiries about the Code of Conduct, not by posting on a blog or SNS."
      }
    },
    "ja": {
      "coc": {
        "p1":"PyCon JP Code of Conduct （以下「行動規範」といいます。）は、一般社団法人PyCon JP Association（以下「PyCon JP」といいます。）が開催するイベント（以下「本イベント」といいます。）に対して参加される方全員に（以下「参加者」といいます。）と守っていただきたい内容を定めるものです。本イベントに参加していただく参加者の方には、本規約の全ての条項を確認のうえ、本行動規範に同意していただく必要があります。",
        "p2":"本イベントは、Pythonユーザが集まり、PythonやPythonを使ったソフトウェアについて情報交換、交流をするためのカンファレンスです。 PyCon JPの開催を通じて、Pythonの使い手が一堂に集まり、Pythonにまつわる様々な分野の知識や情報を交換し、新たな友達やコミュニティとのつながり、仕事やビジネスチャンスを増やせる場所とすることが目標です。",
        "p3":"ハラスメント行為の禁止",
        "p4":"参加者による不適切な行動、ハラスメント行為の例は次のとおりです。",
        "p5-list":[
          "あらゆる形態の参加者への嫌がらせ",
          "言葉による性別、性的指向、障碍の有無、外見、身体の大きさ、人種、宗教に関する攻撃的なコメント",
          "オンラインイベント会場、会議会場およびコミュニティ、公的空間での（講演を含む）性的な言葉や性的な映像表現、意図的な威力行為、ストーキング、つきまとい、写真撮影や録音によるいやがらせ",
          "トークやその他の会議イベントに対して繰り返して中断しようとする行為",
          "オンラインコミュニティでのディスカッション、対面でのプレゼンテーション、またはその他の対面でのイベントの継続的な中断",
          "嫌がらせを目的としたオンライン活動のログ記録またはスクリーンショットの撮影",
          "明示的な許可の無い、住所などの他人の個人情報の公開",
          "自殺や自傷行為を奨励することを含む、個人に対する暴力や嫌がらせの扇動",
          "他の人に嫌がらせをしたり、禁止を回避したりするために、追加のオンラインアカウントの作成",
          "望まれない性的な注意を引きつける行為",
          "不適切な身体接触 (同意なしまたは中止要請後の擬似的な身体的接触を含む)",
          "相手からの中止要請後にも1対1のコミュニケーションを継続する行為",
          "様々な背景を持つ人々を含む専門家の参加者聴衆に不適切なその他の行為"
        ],
        "p6":"参加者は、これらのハラスメント行為を止めるように求められた場合、すぐに従わなければなりません。",
        "p7":"スポンサーもまた反ハラスメント行為ポリシーに従わなければなりません。特に、スポンサーは性的な関心を引き起こす映像表現、活動、あるいはその他の物品を使うべきではありません。ボランティアを含め、ブースのスタッフは、性的な関心を引き起こすような服装/制服/コスチュームを使うべきではありませんし、その他の手段で性的な関心を引き起こすような環境を作ることもすべきではありません。",
        "p8":"もしあなたがハラスメントに遭った場合、他の人がハラスメントに遭っている場合、あるいは他に気になることがあった時は、直ぐに本イベントのウェブサイト上に記載する行動規範の問い合わせ窓口に連絡していただくようお願いします。",
        "p9":"会議スタッフは、ハラスメントを経験した人が、会議期間中安全かつ安心と感じられるように、参加者がホテル/会場の警備や近隣の警察に連絡すること、付き添い者の提供、およびその他の支援を行います。私達にとってあなたが参加しているのは大事なことなのです。",
        "p10":"武器の携帯の禁止",
        "p11-list":[
          "武器には、爆発物（花火を含む）、銃、大型ナイフ、および他の人に怪我や危害を加える目的で使用されるその他の物品を含む",
          "これらの物品のいずれかを所持している人は、すぐに会場から立ち去るように求められ、武器なしでのみ戻ることができます。"
        ],
        "p12":"全ての参加者は会議スタッフからの指示に従ってください。",
        "p13":"スタッフからの指示の例は次のとおりです。",
        "p14-list":[
          "物理的安全、心理的安全を確保するための物",
          "感染症、地震、台風、津波その他の天変地異",
          "戦争、暴動、内乱、テロ行為、重大な疾病",
          "法令・規則の制定・改廃、公権力による命令・処分その他の政府による行為",
          "争議行為、輸送機関・通信回線等の事故",
          "その他の不可抗力に対応する物"
        ],
        "p15":"会議スタッフは上記に対応し、安全を確保するため、必要と判断した場合、参加者の本イベントからの退去を求めることがあり、参加者はそれに従う必要があります。",
        "p16":"この場合でも、すでに支払い済みの参加費の返金は行いません。",
        "p17":"参加者は会議場、ワークショップ会場、また会議に関連したソーシャルイベント、カンファレンスのウェブサイトや使用するアプリケーションで、この行動規範を守ってください。",
        "p18":"行動規範についての問い合わせはblog、SNS等への投稿による報告ではなく、行動規範の問い合わせ窓口へのご連絡をお願いします。"
      }
    }
  }
</i18n>
