<template>
  <div v-cloak 
      class="flex flex-col justify-between w-full h-full session-talk"
      :class="{'on-site-bg':  onSiteTalkIds.includes(sessionData.id)}">
    <div>
      <div class="flex items-center w-full flex-wrap gap-1">
        <div class="session-room lg:hidden">{{ sessionData.room }}</div>
        <div class="session-lang">
          <p>{{ lang }}</p>
        </div>
        <div
          class="session-level"
          :style="getLevelColor(sessionData.audience_python_level)"
        >
          <p>{{ sessionData.audience_python_level }}</p>
        </div>
        <div class="session-duration">
          <p>{{ sessionData.duration_min }} min</p>
        </div>
      </div>
      <div>
        <p class="mt-2 text-sm font-medium text-base-message">
          {{ sessionData.title }}
        </p>
      </div>
      <div class="mt-1">
        <p class="text-xs text-custom-black font-noto">
          {{ sessionData.name }}
        </p>
      </div>
    </div>
    <div>
      <div class="border"></div>
      <div class="text-xs text-sub-message">{{ sessionData.track }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sessionData: {
      type: Object,
      default: () => {
        return {
          audience_python_level: '',
          id: '',
          lang_of_talk: '',
          name: '',
          room: '',
          title: '',
          track: '',
          duration_min: 30,
        }
      },
    },
  },
  data(){
    return {onSiteTalkIds: ['290208', '273758', '273820', '289624']}
  },
  computed: {
    lang() {
      if (this.sessionData.lang_of_talk === 'English') {
        return 'EN'
      } else if (this.sessionData.lang_of_talk === 'Japanese') {
        return 'JA'
      } else {
        return ''
      }
    },
  },
  methods: {
    getLevelColor(level) {
      if (level === 'Beginner') {
        return { color: '#FFFFFF', 'background-color': '#6BC524' }
      } else if (level === 'Intermediate') {
        return { color: '#FFFFFF', 'background-color': '#E77D00' }
      } else if (level === 'Advanced') {
        return { color: '#FFFFFF', 'background-color': '#E64B4B' }
      } else {
        return { color: '#FFFFFF', 'background-color': '#3A93BF' }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.on-site-bg {
  background-color: #eafdf9 !important;
}
.session-talk {
  background: #ffffff;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 12px 16px;
}
.session-room {
  font-family: 'Noto Sans JP';
  font-weight: 500;
  font-size: 10px;
  color: #666666;
}
.session-lang {
  font-family: 'Noto Sans JP';
  background: #f4f4f4;
  border-radius: 2px;
  font-size: 10px;
  color: #666666;
  width: 28px;
  height: 14px;
  display: flex;
  justify-content: center;
}
.session-duration {
  font-family: 'Noto Sans JP';
  background: #f4f4f4;
  border-radius: 2px;
  font-size: 10px;
  color: #666666;
  width: 38px;
  height: 14px;
  display: flex;
  justify-content: center;
}
.session-level {
  font-family: 'Noto Sans JP';
  font-weight: 500;
  padding: 0 8px;
  height: 14px;
  font-size: 10px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
}
.border {
  margin-top: 10px;
  margin-bottom: 8px;
  border: 1px solid #dddddd;
  width: 90%;
}
</style>
