<template>
  <component
    :is="tag"
    :type="nativeType"
    class="btn"
    :class="[
      {'btn-round': round},
      {'btn-block': block},
      {'btn-just-icon': icon},
      {[`btn-${type}`]: type && !outline},
      {[`btn-outline-${type}`]: type && outline},
      {[`btn-${size}`]: size},
      {'btn-link': simple}
    ]"
  >
    <slot name="loading">
      <i v-if="loading" class="fa fa-spinner fa-spin"></i>
    </slot>
    <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: "button"
    },
    round: Boolean,
    icon: Boolean,
    outline: Boolean,
    block: Boolean,
    loading: Boolean,
    type: {
      type: String,
      default: "default"
    },
    nativeType: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: ""
    },
    simple: Boolean
  }
};
</script>
<style>
</style>
