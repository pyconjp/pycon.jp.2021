<template>
  <div v-cloak class="session-talk h-full w-full flex flex-col justify-between">
    <div>
      <div class="flex items-center w-full">
        <div v-show="isMobile" class="session-room">{{ sessionData.room }}</div>
        <div class="session-lang">
          <p>{{ lang }}</p>
        </div>

        <div
          class="ml-1 session-level"
          :style="getLevelColor(sessionData.audience_python_level)"
        >
          <p>{{ sessionData.audience_python_level !== '' ? sessionData.audience_python_level : 'Other' }}</p>
        </div>
      </div>
      <div>
        <p class="mt-2 text-sm font-medium text-base-message">
          {{ sessionData.title }}
        </p>
      </div>
      <div class="mt-1">
        <p class="text-xs text-custom-black font-noto">{{ sessionData.name }}</p>
      </div>
    </div>
    <div>
      <div class="border"></div>
      <div class="text-xs text-sub-message">{{ sessionData.track !== '' ? sessionData.track : 'Other'}}</div>
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
        }
      },
    },
  },
  data() {
    return { isMobile: false }
  },
  computed: {
    lang() {
      return this.sessionData.lang_of_talk === 'English' ? 'EN' : 'JA'
    },
  },
  mounted() {
    const mediaQuery = window.matchMedia('(max-width: 1023px)')
    if (mediaQuery.matches) {
      this.isMobile = true
    }
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
  margin-right: 8px;
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
