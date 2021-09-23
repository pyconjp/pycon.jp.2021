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

    <div class='sponsor-area flex justify-between'>
      <div class='sponsor-image bg-gray-300' />
      <div class='sponsor-image bg-gray-300' />
      <div class='sponsor-image bg-gray-300' />
    </div>

    <div class='main-area'>
      <div class='flex select-button'>
        <button class='flex-1 h-20 w-full text-center active'>DAY1 - 10.15(Fri.)</button>
        <button class='flex-1 h-20 w-full text-center'>DAY2 - 10.16(Sat.)</button>
      </div>

      <div class='mt-8'>
        <div class='flex time-table-grid'>
          <div class='w-14 relative'>
            <span class='absolute -bottom-3 left-0'>12:00</span>
          </div>
          <div v-for='(room, i) in ROOMS' :key='`header_${i}`'
               class='time-table-cell flex justify-center items-center header flex-1'>
            {{ room }}
          </div>
        </div>

        <div class='flex time-table-grid relative h-16'>
          <div class='w-14 relative'>
            <span class='absolute -bottom-3 left-0'>13:00</span>
          </div>
          <div v-for='(i) in Object.keys(ROOMS)' :key='`open_${i}`'
               class='time-table-cell flex justify-center items-center h-full flex-1'>
          </div>
          <div class='absolute z-10 all-room h-full'>
            <div class='bg-blue-green bg-opacity-20 flex justify-center items-center w-full h-full'>
              開場
            </div>
          </div>
        </div>

        <hr class='separator' />

        <div class='flex time-table-grid relative h-24'>
          <div class='w-14 relative'>
            <span class='absolute -bottom-3 left-0'>13:30</span>
          </div>
          <div v-for='(i) in Object.keys(ROOMS)' :key='`opening_${i}`'
               class='time-table-cell flex justify-center items-center h-full flex-1'>
          </div>
          <div class='absolute z-10 all-room h-full'>
            <button class='bg-white text-blue-green flex justify-center items-center w-full h-full'>
              Opening (Day 1)
            </button>
          </div>
        </div>

        <hr class='separator' />

        <div class='flex time-table-grid relative h-24'>
          <div class='w-14 relative'>
            <span class='absolute -bottom-3 left-0'>15:00</span>
          </div>
          <div v-for='(i) in Object.keys(ROOMS)' :key='`keynote1_${i}`'
               class='time-table-cell flex justify-center items-center h-full flex-1'>
          </div>
          <div class='absolute z-10 all-room h-full'>
            <button class='bg-white text-blue-green flex justify-center items-center w-full h-full'>
              {{ 'Keynote Speech (Day 1  Speaker)：芝世弐氏' }}
            </button>
          </div>
        </div>

        <hr class='separator' />

        <div class='flex time-table-grid'>
          <div class='w-14 relative'>
            <span class='absolute -bottom-3 left-0'>16:00</span>
          </div>
          <div v-for='(i) in Object.keys(ROOMS)' :key='`talk_1_${i}`'
               class='time-table-cell flex justify-center items-center flex-1'>
            <talk-session :session-data='DUMMY[i]'></talk-session>
          </div>
        </div>

        <hr class='separator' />

        <div class='flex time-table-grid'>
          <div class='w-14 relative'>
            <span class='absolute -bottom-3 left-0'>17:00</span>
          </div>
          <div v-for='(i) in Object.keys(ROOMS)' :key='`talk_2_${i}`'
               class='time-table-cell flex justify-center items-center flex-1'>
            <talk-session :session-data='DUMMY[i]'></talk-session>
          </div>
        </div>

        <hr class='separator' />

        <div class='flex time-table-grid'>
          <div class='w-14 relative'>
            <span class='absolute -bottom-3 left-0'>18:15</span>
          </div>
          <div v-for='(i) in Object.keys(ROOMS)' :key='`talk_3_${i}`'
               class='time-table-cell flex justify-center items-center flex-1'>
            <talk-session :session-data='DUMMY[i]'></talk-session>
          </div>
        </div>

        <hr class='separator' />

        <div class='flex time-table-grid relative h-24'>
          <div class='w-14 relative'>
            <span class='absolute -bottom-3 left-0'>18:45</span>
          </div>
          <div v-for='(i) in Object.keys(ROOMS)' :key='`lt_${i}`'
               class='time-table-cell flex justify-center items-center h-full flex-1'>
          </div>
          <div class='absolute z-10 all-room h-full'>
            <button class='bg-white text-blue-green flex justify-center items-center w-full h-full'>
              LT
            </button>
          </div>
        </div>

        <hr class='separator' />

        <div class='flex time-table-grid relative h-24'>
          <div class='w-14 relative'>
            <span class='absolute -bottom-3 left-0'>19:00</span>
          </div>
          <div v-for='(i) in Object.keys(ROOMS)' :key='`closing_${i}`'
               class='time-table-cell flex justify-center items-center h-full flex-1'>
          </div>
          <div class='absolute z-10 all-room h-full'>
            <button class='bg-white text-blue-green flex justify-center items-center w-full h-full'>
              Closing (Day 1)
            </button>
          </div>
        </div>

        <hr class='separator' />

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

const DUMMY = [
  {
    audience_python_level: 'Beginner',
    id: '123456',
    lang_of_talk: 'Japanese',
    name: '登壇者氏名',
    room: '#pyconjp_1',
    title: 'サンプルタイトル1サンプルタイトル1サンプルタイトル1サンプルタイトル1サンプルタイトル1',
    track: 'Web programming'
  },
  {
    audience_python_level: 'Intermediate',
    id: '234567',
    lang_of_talk: 'Japanese',
    name: '登壇者氏名',
    room: '#pyconjp_2',
    title: 'サンプルタイトル2サンプルタイトル2サンプルタイトル2サンプルタイトル2サンプルタイトル2',
    track: 'Machine learning'
  },
  {
    audience_python_level: 'Advanced',
    id: '345678',
    lang_of_talk: 'Japanese',
    name: '登壇者氏名',
    room: '#pyconjp_3',
    title: 'サンプルタイトル3サンプルタイトル3サンプルタイトル3サンプルタイトル3サンプルタイトル3',
    track: 'Python core and around'
  },
  {
    audience_python_level: 'Beginner',
    id: '456789',
    lang_of_talk: 'Japanese',
    name: '登壇者氏名',
    room: '#pyconjp_4',
    title: 'サンプルタイトル4サンプルタイトル4サンプルタイトル4サンプルタイトル4サンプルタイトル4',
    track: 'Approaching to social problem'
  },
  {
    audience_python_level: 'Intermediate',
    id: '567890',
    lang_of_talk: 'English',
    name: '登壇者氏名',
    room: '#pyconjp_5',
    title: 'サンプルタイトル5サンプルタイトル5サンプルタイトル5サンプルタイトル5サンプルタイトル5',
    track: 'Visual / Game / Music'
  }
]

export default {
  name: 'Timetable',
  components: { TalkSession, CustomHeader },
  data() {
    return { ROOMS, DUMMY }
  }
}
</script>

<style scoped>
.title-area {
  margin: 3rem 7.5rem auto;
}

.sponsor-area {
  margin: 7rem 7.5rem auto;
}

.sponsor-image {
  width: 373px;
  height: 210px;
}

.main-area {
  margin: 7rem 7.5rem 10rem;
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

.time-table-grid {
  column-gap: 5px;

  & > .all-room {
    left: calc(10px + 3.5rem);
    top: 5px;
    width: calc(100% - 15px - 3.5rem);
    height: calc(100% - 10px);
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
  margin-left: calc(3.5rem + 5px);
  border: 1px solid #DDDDDD;
}

</style>
