<template>
  <div class='relative time-table-area'>
    <div class='z-20 flex items-center justify-center w-full mt-6 sticky-header'>
      <CustomHeader class='w-11/12 lg:w-5/6' />
    </div>

    <div class='relative flex flex-col mt-8 overflow-hidden title-area mt-12'>
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

    <div
      class='sponsor-area flex justify-center lg:justify-between items-center gap-y-5 lg:gap-y-0 flex-col lg:flex-row'>
      <div class='sponsor-image bg-gray-300' />
      <div class='sponsor-image bg-gray-300' />
      <div class='sponsor-image bg-gray-300' />
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
        <div class='flex time-table-grid time-table-gap flex-col-reverse lg:flex-row'>
          <div class='flex-1 lg:flex-none lg:w-14 relative text-center end-time py-2 lg:py-0'>
                <span class='lg:absolute lg:-bottom-3 lg:left-0'>
                  {{ END_TIMES[selectedDay]['0'] }}
                </span>
          </div>
          <div class='flex flex-1 flex-col lg:flex-row time-table-gap'>
            <div v-for='room in ROOMS' :key='`header_${room}`'
                 class='hidden lg:flex time-table-cell justify-center items-center header flex-1'>
              {{ room }}
            </div>
          </div>
        </div>

        <hr class='separator lg:hidden' />

        <div v-for='no in SESSION_NO[selectedDay]' :key='`session_${selectedDay}_${no}`'>
          <div class='flex time-table-grid time-table-gap relative flex-col-reverse lg:flex-row'
               :class='{"lg:h-16": no === "1", "lg:h-24": no !== "1" && talks[selectedDay][no]["#pyconjp"] !== undefined}'>
            <div class='flex-1 lg:flex-none lg:w-14 relative text-center end-time py-2 lg:py-0'>
                <span class='lg:absolute lg:-bottom-3 lg:left-0'>
                  {{ END_TIMES[selectedDay][no] }}
                </span>
            </div>
            <div class='flex flex-1 flex-col lg:flex-row time-table-gap'>
              <div v-for='room in ROOMS' :key='`${selectedDay}_${no}_${room}`'
                   class='time-table-cell flex justify-center items-center flex-1'
                   :class='{"hidden lg:flex": talks[selectedDay][no]["#pyconjp"] !== undefined}'>
                <talk-session v-if='talks[selectedDay][no]["#pyconjp"] === undefined'
                              :session-data='talks[selectedDay][no][room]'></talk-session>
              </div>
            </div>
            <div v-if='talks[selectedDay][no]["#pyconjp"] !== undefined'
                 class='lg:absolute lg:z-10 all-room lg:h-full'
                 :class='{"h-14": no === "1", "h-20": no !== "1" && talks[selectedDay][no]["#pyconjp"] !== undefined}'>
              <div v-if='no === "1"'
                   class='all-room-content bg-blue-green bg-opacity-20 flex justify-center items-center'>
                {{ talks[selectedDay][no]['#pyconjp'].title }}
              </div>
              <button v-else
                      class='all-room-content all-room-session bg-white text-blue-green flex justify-center items-center'>
                {{ talks[selectedDay][no]['#pyconjp'].title }}
              </button>
            </div>
          </div>

          <hr class='separator' />
        </div>
      </div>
    </div>
  </div>
</template>

import CustomHeader from '../components/Domains/Header.vue'

<script>
import CustomHeader from '~/components/Domains/Header'
import TalkSession from '~/components/Elements/TalkSession'

const ROOMS = [
  '#pyconjp_1',
  '#pyconjp_2',
  '#pyconjp_3',
  '#pyconjp_4',
  '#pyconjp_5'
]

const SESSION_NO = {
  '10/15': ['1', '2', '3', '4', '5', '6', '7', '8'],
  '10/16': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
}

const END_TIMES = {
  '10/15': {
    '0': '12:30',
    '1': '13:00',
    '2': '13:30',
    '3': '15:00',
    '4': '16:00',
    '5': '17:00',
    '6': '18:15',
    '7': '18:45',
    '8': '19:00'
  },
  '10/16': {
    '0': '09:30',
    '1': '10:00',
    '2': '10:30',
    '3': '11:40',
    '4': '12:40',
    '5': '13:50',
    '6': '14:50',
    '7': '16:20',
    '8': '17:20',
    '9': '17:50',
    '10': '18:50',
    '11': '19:00'
  }
}

export default {
  name: 'Timetable',
  components: { TalkSession, CustomHeader },
  async asyncData({ $content }) {
    const originTalks = await $content('talk/session').only(['body']).fetch()
    const body = originTalks.body
    const talks = {}

    const initObject = (obj, key) => {
      obj[key] = obj[key] ?? {}
    }

    for (const index in body) {
      const talk = body[index]
      talk.room = talk.room === '#pyconjp_1 (15th: onsite)' ? '#pyconjp_1' : talk.room

      initObject(talks, talk.day)
      initObject(talks[talk.day], talk.no)
      initObject(talks[talk.day][talk.no], talk.room)
      talks[talk.day][talk.no][talk.room] = talk
    }

    return {
      talks
    }
  },
  data() {
    return { ROOMS, SESSION_NO, END_TIMES, talks: {}, selectedDay: '10/15' }
  },
  methods: {
    selectDay(day) {
      if (this.selectedDay !== day) {
        this.selectedDay = day
      }
    }
  }
}
</script>

<style scoped>
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

.sponsor-image {
  width: 328px;
  height: 184px;
  @media (min-width: 1024px) {
    width: 373px;
    height: 210px;
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

.end-time {
  background-color: #F4F4F4;
  @media (min-width: 1024px) {
    background-color: inherit;
  }
}

</style>
