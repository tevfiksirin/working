<template>
  <button class="px-4 py-2 font-bold text-white" :class="btnClass">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    round: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
    },
    text: {
      type: String,
      default: 'Button',
    },
  },
  computed: {
    btnClass() {
      const classes = []
      if (this.round) {
        classes.push('rounded-full')
      }
      if (this.type === 'primary') {
        classes.push('bg-blue-500 text-gray-900 hover:bg-blue-700')
      } else if (this.type === 'secondary') {
        classes.push('bg-gray-500 hover:bg-gray-700')
      } else if (this.type === 'hu') {
        classes.push('bg-indigo-500 hover:bg-red-700')
      }
      return classes.join(' ')
    },
  },
}
</script>
