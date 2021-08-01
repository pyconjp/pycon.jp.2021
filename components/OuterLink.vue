<template>
  <a :href='to' target='_blank' rel='noopener noreferrer'>{{ label }}</a>
</template>

<script>
export default {
  name: 'OuterLink',
  props: {
    'label': {
      type: String,
      default: ''
    },
    'to': {
      type: String,
      default: '#'
    }
  }
}
</script>
