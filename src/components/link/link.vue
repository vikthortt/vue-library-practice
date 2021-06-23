<template>
  <a :href="href" target="_blank">{{text}}</a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Link',
  props: {
    href: {
      type: String as () => string,
      required: true
    },
    text: {
      type: String as () => string,
      default: 'click here'
    }
  }
})
</script>

<style lang="scss" scoped>
  a {
    font-weight: 700;
    color: black;

    &:hover {
      font-weight: 900;
    }
    &:visited {
      text-decoration: underline;
    }
  }
</style>