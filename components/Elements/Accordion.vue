<template>
  <div v-cloak class="js-accordion">
    <button
      class="mb-2 js-accordion--trigger"
      type="button"
      :class="{
        '_state-open': isOpened,
        'disable-message': disable,
        'pointer-events-none': disable,
      }"
      @click="accordionToggle()"
    >
      <slot name="title"></slot>
    </button>

    <transition
      name="js-accordion"
      @before-enter="beforeEnter"
      @enter="enter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div
        v-if="isOpened"
        class="pl-8 js-accordion--target"
        :class="{ '_state-open': isOpened }"
      >
        <slot name="body"></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    disable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isOpened: false,
    }
  },
  methods: {
    accordionToggle() {
      this.isOpened = !this.isOpened
    },
    beforeEnter(el) {
      el.style.height = '0'
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      el.style.height = '0'
    },
  },
}
</script>

<style scoped lang="scss">
.js-accordion {
  &--trigger {
    position: relative;
    display: block;
    width: 100%;
    transition: all 0.2s ease-in;
    display: block;
    font-weight: bold;
    text-align: left;
    outline: none;
    border: none;
    cursor: pointer;
    &:after {
      display: inline-block;
      width: 0;
      height: 0;
      border: solid transparent;
      content: '';
      position: absolute;
      top: 50%;
      right: 1em;
      margin-top: -5px;
      transition: all 0.2s ease-in;
    }
    &._state-open {
      text-decoration: none;
      &:after {
        transform: rotateX(180deg);
        margin-top: -10px;
      }
    }
    &:hover {
      text-decoration: none;
    }
  }
  &--target {
    overflow: hidden;
    transition: 0.4s ease-in-out;
  }
  &--body {
    padding: 30px;
  }
  &-enter-active {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: js-accordion--anime__opend;
  }
  &-leave-active {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: js-accordion--anime__closed;
  }
}
@keyframes js-accordion--anime__opend {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes js-accordion--anime__closed {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.disable-message {
  color: #cecece;
}
</style>
