<template>
  <div class='relative time-table-area'>
    <div class='z-20 flex items-center justify-center w-full mt-6 sticky-header'>
      <CustomHeader class='w-11/12 lg:w-5/6' />
    </div>

    <div class='relative flex flex-col overflow-hidden title-area mt-12'>
      <div class='sp-width'>
        <p
          class='absolute left-0 -mb-8 font-bold lg:relative text-shadow text-7xl lg:text-9xl lg:-mb-14 font-mont whitespace-nowrap'>
          Time Table
        </p>
        <div class='mt-12 lg:mt-2'>
          <p class='text-4xl font-bold text-left  lg:text-6xl text-blue-green font-mont'>
            Time Table
          </p>
        </div>
      </div>
    </div>

    <div class='img-items-list'>
      <div
        v-for='sponsor in platinumSponsorsList'
        :key='sponsor.nameJp'
        class='w-full p-6 my-1 lg:w-1/3'
        :class="{ 'touch-action-none': sponsor.link === '#' }"
      >
        <a
          :href='sponsor.link'
          target='_blank'
          rel='noopener noreferrer'
          :class="{ 'pointer-events-none': sponsor.link === '#' }"
        >
          <p
            v-if="sponsor.imgURL === ''"
            class='m-2 text-3xl text-center break-all lg:text-4xl'
          >
            {{ sponsor.nameJp }}
          </p>
          <div v-else class='p-3 lg:p-6 v-card v-sheet theme-light'>
            <div class='z-0 v-responsive'>
              <div style='padding-bottom: 66.6667%'></div>
              <div
                class='bg-contain v-image-image'
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
      </div>
    </div>

    <div class='main-area'>
      <div class='flex select-button'>
        <button class='flex-1 h-20 w-full text-center' :class='{active: selectedDay === "10/15"}'
                @click='selectDay("10/15")'>
          DAY1 - 10.15(Fri.)
        </button>
        <button class='flex-1 h-20 w-full text-center' :class='{active: selectedDay === "10/16"}'
                @click='selectDay("10/16")'>
          DAY2 - 10.16(Sat.)
        </button>
      </div>

      <div v-cloak class='mt-8'>
        <div class='hidden lg:flex flex time-table-grid time-table-gap flex-col-reverse lg:flex-row'>
          <div class='flex-1 lg:flex-none lg:w-14 relative text-center start-time py-2 lg:py-0'>
          </div>
          <div class='flex flex-1 flex-col lg:flex-row time-table-gap'>
            <div v-for='room in ROOMS' :key='`header_${room}`'
                 class='flex time-table-cell justify-center items-center header flex-1'>
              {{ room }}
            </div>
          </div>
        </div>

        <div v-for='no in sessionNo[selectedDay]' :key='`session_${selectedDay}_${no}`'>
          <div class='flex time-table-grid time-table-gap relative flex-col lg:flex-row'
               :class='{"lg:h-16": no === 0, "lg:h-24": no !== 0 && talks[selectedDay][no]["#pyconjp"] !== undefined}'>
            <div class='flex-1 lg:flex-none lg:w-14 relative text-center start-time py-2 lg:py-0'>
                <span class='lg:absolute lg:-top-3 lg:left-0'>
                  {{ startTimes[selectedDay][no] }}
                </span>
            </div>

            <hr class='separator lg:hidden' />

            <div class='flex flex-1 flex-col lg:flex-row time-table-gap'>
              <div v-for='room in ROOMS' :key='`${selectedDay}_${no}_${room}`'
                   class='time-table-cell flex justify-center items-center flex-1'
                   :class='{"hidden lg:flex": talks[selectedDay][no]["#pyconjp"] !== undefined, "cursor-pointer": talks[selectedDay][no]["#pyconjp"] === undefined}'
                   @click='openSessionModal(talks[selectedDay][no][room])'>
                <talk-session v-if='talks[selectedDay][no]["#pyconjp"] === undefined'
                              :session-data='talks[selectedDay][no][room]'></talk-session>
              </div>
            </div>
            <div v-if='talks[selectedDay][no]["#pyconjp"] !== undefined'
                 class='lg:absolute lg:z-10 all-room lg:h-full'
                 :class='{"h-14": no === 0, "h-20": no !== 0 && talks[selectedDay][no]["#pyconjp"] !== undefined}'>
              <div v-if='no === 0'
                   class='all-room-content bg-blue-green bg-opacity-20 flex justify-center items-center'>
                {{ talks[selectedDay][no]['#pyconjp'].title }}
              </div>
              <div v-else
                   class='all-room-content all-room-session bg-white text-blue-green flex justify-center items-center'
                   :class='{"cursor-pointer": talks[selectedDay][no]["#pyconjp"]["description"] !== null}'
                   @click='openSessionModal(talks[selectedDay][no]["#pyconjp"])'>
                {{ talks[selectedDay][no]['#pyconjp'].title }}
              </div>
            </div>
          </div>

          <hr class='separator lg:block hidden' />
        </div>

        <div class='flex time-table-grid time-table-gap relative flex-col lg:flex-row'>
          <div class='flex-1 lg:flex-none lg:w-14 relative text-center start-time py-2 lg:py-0'>
                <span class='lg:absolute lg:-top-3 lg:left-0'>
                  {{ CONFERENCE_END_TIME[selectedDay] }}
                </span>
          </div>
          <div class='flex flex-1 flex-col lg:flex-row time-table-gap'></div>
        </div>
      </div>
    </div>
    <SessionDetailModal
      v-if='isModal'
      :session-data='modalDisplaySessionData'
      @close='closeSessionModal'
    ></SessionDetailModal>
  </div>
</template>

import CustomHeader from '../components/Domains/Header.vue'

<script>
import { getSponsrList } from '../lib/sponsor_list'
import CustomHeader from '~/components/Domains/Header'
import TalkSession from '~/components/Elements/TalkSession'
import SessionDetailModal from '~/components/Elements/sessionDetailModal'

const ROOMS = [
  '#pyconjp_1',
  '#pyconjp_2',
  '#pyconjp_3',
  '#pyconjp_4',
  '#pyconjp_5'
]

const CONFERENCE_END_TIME = {
  '10/15': '19:00',
  '10/16': '',
}

export default {
  name: 'Timetable',
  components: { TalkSession, CustomHeader, SessionDetailModal },
  async asyncData({ $content }) {
    const originTalks = await $content('talk/session').only(['body']).fetch()
    const body = originTalks.body
    const talks = {}
    const startTimes = {}
    const sessionNo = {}

    const initObject = (obj, key) => {
      obj[key] = obj[key] ?? {}
    }

    for (const index in body) {
      const talk = body[index]
      talk.room = talk.room === '#pyconjp_1 (15th: onsite)' ? '#pyconjp_1' : talk.room
      talk.no = talk.no === '' ? '0' : talk.no

      initObject(talks, talk.day)
      initObject(talks[talk.day], talk.no)
      initObject(talks[talk.day][talk.no], talk.room)
      talks[talk.day][talk.no][talk.room] = talk

      initObject(startTimes, talk.day)
      initObject(startTimes[talk.day], talk.no)
      startTimes[talk.day][talk.no] = talk.start_time
    }

    Object.keys(talks).forEach(day => {
      sessionNo[day] = Object.keys(talks[day]).map(no => parseInt(no)).sort((a, b) => a - b)
    })

    return {
      talks,
      startTimes,
      sessionNo,
      sessionDataList: originTalks
    }
  },
  data() {
    return {
      ROOMS, CONFERENCE_END_TIME, sessionNo: {}, startTimes: {}, talks: {}, selectedDay: '10/15', isModal: false,
      modalDisplaySessionData: {}, sessionDataList: {}, ...getSponsrList()
    }
  },
  mounted() {
    if (this.$route.query.id !== undefined) {
      const targetSession = this.getTargetSessionDataById(this.$route.query.id)
      this.openSessionModal(targetSession)
    }
    document.onkeydown = (evt) => {
      evt = evt || window.event
      if (evt.key === 'Escape') {
        this.closeSessionModal()
      }
    }
  },
  methods: {
    selectDay(day) {
      if (this.selectedDay !== day) {
        this.selectedDay = day
      }
    },

    getTargetSessionDataById(id) {
      const targetSessionData = this.sessionDataList.body.filter(
        (sessionData) => sessionData.id === id
      )
      const dummyData = {
        title: '',
        talk_format: '',
        name: '',
        lang_of_talk: '',
        description: '',
        audience_python_level: ''
      }
      if (targetSessionData.length <= 0) {
        return dummyData
      } else {
        return targetSessionData[0]
      }
    },

    openSessionModal(sessionData) {
      if (sessionData !== undefined && sessionData.description !== '') {
        this.isModal = true
        this.$router.push({ path: `/time-table/?id=${sessionData.id}` })
        this.modalDisplaySessionData = sessionData
      }
    },

    closeSessionModal() {
      if (this.$route.query.id) {
        this.$router.replace({ query: null })
      }
      this.isModal = false
    }
  }
}
</script>

<style scoped>
.sticky-header {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.img-items-list {
  @apply flex flex-wrap justify-center items-center  p-1 lg:px-24 lg:py-12 mb-3;
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

/* disable mobile click event */
.touch-action-none {
  pointer-events: none;
  touch-action: none;
}

.title-area {
  margin: 1.5rem 1.5rem auto;
  @media (min-width: 1024px) {
    margin: 3rem 7.5rem auto;
  }
}

.sponsor-area {
  margin: 3.875rem 1.5rem auto;
  @media (min-width: 1024px) {
    margin: 7rem 7.5rem auto;
  }
}

.main-area {
  margin: 3.625rem 1.5rem 4.5rem;
  @media (min-width: 1024px) {
    margin: 7rem 7.5rem 10rem;
  }
}

.select-button {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;

  column-gap: 10px;

  & > button {
    color: white;
    background-color: #1097AA;

    &.active {
      background-color: white;
      color: #1097AA;
      border-top: 1px solid #DDDDDD;
      border-left: 1px solid #DDDDDD;
      border-right: 1px solid #DDDDDD;
    }
  }
}

.time-table-gap {
  column-gap: 5px;
}

.time-table-grid {
  & > .all-room {
    background-color: #F4F4F4;

    @media (min-width: 1024px) {
      background-color: transparent;

      left: calc(10px + 3.5rem);
      top: 5px;
      width: calc(100% - 15px - 3.5rem);
      height: calc(100% - 10px);
    }

    & > .all-room-content {
      margin: 5px;
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      @media (min-width: 1024px) {
        margin: 0;
        width: 100%;
        height: 100%;
      }

      &.all-room-session {
        border: 1px solid #dddddd;
        box-sizing: border-box;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
      }
    }
  }
}

.time-table-cell {
  background-color: #F4F4F4;
  padding: 5px;

  &.header {
    height: 3.375rem;
    margin-bottom: 5px;
  }
}

.separator {
  border: 1px solid #DDDDDD;
  @media (min-width: 1024px) {
    margin-left: calc(3.5rem + 5px);
  }
}

.start-time {
  background-color: #F4F4F4;
  @media (min-width: 1024px) {
    background-color: inherit;
  }
}

</style>
