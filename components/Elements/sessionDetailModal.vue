<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="w-11/12 modal-window font-noto lg:w-3/4">
        <!-- ヘッダーエリア -->
        <div
          id="modal-content"
          class="px-3 py-10 modal-content text-py-black lg:py-2"
          :scrollable="true"
        >
          <div class="flex bg-white">
            <div class="flex justify-center w-full mt-6 ml-1 lg:w-11/12">
              <div class="w-10/12">
                <!-- Language and Level -->
                <div class="flex w-2/3 my-2 lg:w-4/12">
                  <div
                    class="p-2 text-xs font-semibold text-center text-gray-700 bg-gray-200 rounded-sm "
                  >
                    {{ sessionLanguage }}
                  </div>
                  <div
                    class="p-2 ml-1 text-xs font-semibold text-center text-white rounded-sm bg-blue-green"
                  >
                    {{ audiencePythonLevel }}
                  </div>
                </div>
                <p class="py-2 text-xl font-bold lg:text-2xl">
                  {{ sessionTitle }}
                </p>
                <div class="flex mb-4">
                  <!-- YouTube Link -->
                  <a
                    :href="youtubeLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex mr-8"
                    :class="{ 'pointer-events-none': youtubeLink === '' }"
                  >
                    <img
                      class="lg:h-full h-4/5"
                      src="~/assets/images/icons/video.svg"
                      alt="video-icon"
                      :class="{ 'filter-blue-green': youtubeLink !== '', 'filter-gray': youtubeLink === '' }"
                    />
                    <p class="ml-2 text-sm "
                      :class="{ 'text-blue-green': youtubeLink !== '', 'text-gray-500': youtubeLink === '' }"
                    >Video</p>
                  </a>

                  <!-- Document Link -->
                  <a
                    :href="documentLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex"
                    :class="{ 'pointer-events-none': youtubeLink === '' }"
                    ><img
                      class="lg:h-full h-4/5 filter-gray"
                      src="~/assets/images/icons/documents.svg"
                      alt="documents-icon"
                      :class="{ 'filter-blue-green': documentLink !== '', 'filter-gray': documentLink === '' }"
                    />
                    <p class="ml-2 text-sm"
                      :class="{ 'text-blue-green': documentLink !== '', 'text-gray-500': documentLink === '' }"
                    >Document</p>
                  </a>
                </div>
              </div>
            </div>
            <div class="relative w-1/12" @click.stop="$emit('close')">
              <div
                class="cursor-pointer close hover:bg-gray-100 lg:top-6 -top-12 -left-5 lg:left-2"
              >
                <img
                  class="h-3/5"
                  src="~/assets/images/icons/close.svg"
                  alt="close-icon"
                />
              </div>
            </div>
          </div>
          <!-- コンテンツエリア -->
          <div class="flex justify-center pb-8 bg-white">
            <div class="w-10/12 pt-4 border-t lg:mb-4">
              <p class="text-xl font-bold">Speaker</p>
              <p class="font-medium leading-7 lg:leading-8 ">{{ speakerName }}</p>
              <div
                class="leading-7 lg:leading-8 list_style"
                v-html="$md.render(speakerProfile)"
              ></div>
              <div class="mt-4">
                <p class="text-xl font-bold">{{ $t('elevatorPitch') }}</p>
                <div
                  class="leading-7 lg:leading-8 list_style"
                  v-html="$md.render(elevatorPitch)"
                ></div>
              </div>
              <div class="mt-4">
                <p class="text-xl font-bold">{{ $t('requiredKnowledge') }}</p>
                <div
                  class="leading-7 lg:leading-8 list_style"
                  v-html="$md.render(prerequisiteKnowledge)"
                ></div>
              </div>
              <div class="mt-4">
                <p class="text-xl font-bold">
                  {{ $t('knowledgeGained') }}
                </p>
                <div
                  class="leading-7 lg:leading-8 list_style"
                  v-html="$md.render(audienceTakeaway)"
                ></div>
              </div>

              <!-- セッション情報 -->
              <div class="grid grid-cols-1 mt-4 lg:grid-cols-3">
                <p class="my-1 font-bold">Track</p>
                <div class="col-span-2 text-blue-green">
                  <p class="my-1">
                    {{ track }}
                  </p>
                </div>
                <p class="my-1 font-bold">Level</p>
                <div class="col-span-2 text-blue-green">
                  <p class="my-1">
                    {{ audiencePythonLevel }}
                  </p>
                </div>

                <p class="my-1 font-bold">Talk Language</p>
                <div class="col-span-2">
                  <p class="my-1">
                    {{ langOfTalk }}
                  </p>
                </div>
                <p class="my-1 font-bold">Slide Language</p>
                <div class="col-span-2">
                  <p class="my-1">
                    {{ langOfSlide }}
                  </p>
                </div>
              </div>

              <div class="mt-4">
                <p class="text-xl font-bold">Description</p>
                <div
                  v-show="!readMore"
                  class="flex flex-col items-center justify-center cursor-pointer "
                  @click.stop="readMore = true"
                >
                  <p class="mt-2 underline">Read more</p>

                  <img
                    class="lg:h-full h-4/5"
                    src="~/assets/images/icons/down-arrow.svg"
                    alt="down-arrow-icon"
                  />
                </div>
                <div
                  v-show="readMore"
                  class="leading-7 lg:leading-8 list_style"
                  v-html="$md.render(description)"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SessionDetailModal',
  props: {
    sessionData: {
      type: Object,
      default() {
        return {
          id: '',
          title: '',
          name: '',
          profile: '',
          elevator_pitch: '',
          prerequisite_knowledge: '',
          audience_takeaway: '',
          track: '',
          audience_python_level: '',
          audience_expertise: '',
          lang_of_talk: '',
          lang_of_slide: '',
          description: '',
          room: '',
        }
      },
    },
  },
  data() {
    return {
      // セッション情報表示用
      sessionTitle: '',
      speakerName: '',
      speakerProfile: '',
      youtubeLink: '',
      documentLink: '',
      elevatorPitch: '',
      prerequisiteKnowledge: '',
      audienceTakeaway: '',
      track: '',
      audiencePythonLevel: '',
      langOfTalk: '',
      langOfSlide: '',
      description: '',

      // Read more表示しているかどうか
      readMore: false,
    }
  },

  computed: {
    sessionLanguage() {
      if (this.langOfTalk === 'Japanese') {
        return 'JA'
      } else {
        return 'EN'
      }
    },
  },
  created() {
    this.sessionTitle = this.sessionData.title
    this.speakerName = this.sessionData.name
    this.speakerProfile = this.sessionData.profile
    this.elevatorPitch = this.sessionData.elevator_pitch
    this.prerequisiteKnowledge = this.sessionData.prerequisite_knowledge
    this.audienceTakeaway = this.sessionData.audience_takeaway
    this.track = this.sessionData.track
    this.audiencePythonLevel = this.sessionData.audience_python_level
      ? this.sessionData.audience_python_level
      : 'All'
    this.langOfTalk = this.sessionData.lang_of_talk
    this.langOfSlide = this.sessionData.lang_of_slide
    this.description = this.sessionData.description
    this.description = this.sessionData.description.replace(/\n/g, '\n\n')
    // TODO: 開催後YouTubeのリンクを修正すること
    // this.youtubeLink = getSessionYoutubeUrl(this.sessionData.id)
    // this.documentLink = getSessionDocumentUrl(this.sessionData.id)
    this.youtubeLink = ''
    this.documentLink = ''
  },
}
</script>

<style lang="scss" scoped>
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    overflow: scroll;
    max-height: 80%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &-content {
    display: flex;
    flex-direction: column;
  }
}

// オーバーレイのトランジション
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;

  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.close {
  position: absolute;
  display: flex;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
}

.filter-gray {
        // filter: invert(99%) sepia(0%) saturate(2424%) hue-rotate(196deg) brightness(113%) contrast(91%);
  filter: invert(49%) sepia(15%) saturate(16%) hue-rotate(314deg) brightness(100%) contrast(89%);
}

.filter-blue-green {
  filter: invert(53%) sepia(35%) saturate(7231%) hue-rotate(157deg) brightness(90%) contrast(87%);
}

ul {
  list-style-type: disc;
}

.list_style {
  ul {
    list-style-type: disc;
    padding-left: 1rem;
  }

  h1 {
    font-size: 1.4rem;
  }
  h2 {
    font-size: 1.3rem;
  }
  h3 {
    font-size: 1.2rem;
  }

  ol {
    list-style-type: decimal;
    padding-left: 1rem;
  }

  a {
    text-decoration: underline;
    color: #1e90ff;
  }
}
</style>

<i18n>
{
  "en": {
    "elevatorPitch": "Elevator Pitch",
    "requiredKnowledge": "Prerequisite knowledge required from the audience",
    "knowledgeGained": "Knowledge that the audience can take home"
  },
  "ja": {
    "elevatorPitch": "エレベーターピッチ",
    "requiredKnowledge": "聴衆に求める前提知識",
    "knowledgeGained": "聴衆が持ち帰ることができるもの"
  }
}
</i18n>
