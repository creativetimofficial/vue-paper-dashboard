<template>
  <div class="form-group" :class="{'input-group': hasIcon}">
    <slot name="label">
      <label v-if="label" class="control-label">
        {{label}}
      </label>
    </slot>
    <slot name="addonLeft">
      <span v-if="addonLeftIcon" class="input-group-prepend">
        <i :class="addonLeftIcon" class="input-group-text"></i>
      </span>
    </slot>
    <input
      :value="value"
      @input="$emit('input',$event.target.value)"
      v-bind="$attrs"
      class="form-control"
      aria-describedby="addon-right addon-left">
    <slot></slot>
    <slot name="addonRight">
      <span v-if="addonRightIcon" class="input-group-append">
        <i :class="addonRightIcon" class="input-group-text"></i>
      </span>
    </slot>
  </div>
</template>
<script>
  export default {
    inheritAttrs: false,
    name: "fg-input",
    props: {
      label: String,
      value: [String, Number],
      addonRightIcon: String,
      addonLeftIcon: String
    },
    computed: {
      hasIcon() {
        const { addonRight, addonLeft } = this.$slots;
        return addonRight !== undefined || addonLeft !== undefined || this.addonRightIcon !== undefined || this.addonLeftIcon !== undefined;
      }
    }
  }
</script>
<style>

</style>
