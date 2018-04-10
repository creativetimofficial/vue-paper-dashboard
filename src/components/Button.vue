<template>
    <component :is="tag"
    class="btn"
    :class="[
      {'btn-round': round},
      {'btn-just-icon': icon},
      {[`btn-${type}`]: type && !outline},
      {[`btn-outline-${type}`]: type && outline},
      {[`btn-${size}`]: size},
      {'btn-link': simple}
    ]"
    >
    </component>
</template>
<script>
  export default {
    props: {
      tag: {
        type: String,
        default: 'button'
      },
      round: Boolean,
      icon: Boolean,
      outline: Boolean,
      type: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      },
      simple: Boolean
    }
  }
</script>
<style>
</style>
