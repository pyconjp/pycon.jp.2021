<template>
  <div>
    <div>
      <div>
        1日目のタイトル
      </div>
      <div>
        <div v-for='talk in day1' :key='talk.id'>
          <div>
            {{ talk.title }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <div>
        2日目のタイトル
      </div>
      <div v-for='talk in day2' :key='talk.id'>
        <div>
          {{ talk.title }}
        </div>
      </div>
    </div>
    <div>
      <div>
        room: '#pyconjp_3' No.: '1'のタイトル
      </div>
      <div>
        {{ talks.filter(talk => talk.room === '#pyconjp_3' && talk.no === '1')[0].title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timetable',
  async asyncData({ $content }) {
    const sample = await $content('sample').fetch()
    const talks = sample.body;

    const day1 = talks.filter(talk => talk.day === '10/15')
    const day2 = talks.filter(talk => talk.day === '10/16')

    return {
      talks,
      day1,
      day2
    }
  },
  data() {
    return {
      talks: [],
      day1: [],
      day2: []
    }
  }
}
</script>

<style scoped>

</style>
