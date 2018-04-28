<template>
  <div class="form-group">
    <slot name="label">
      <label v-if="label">
        {{label}}
      </label>
    </slot>
    <slot>
      <input class="form-control border-input"
             :class="inputClasses"
             v-bind="$attrs"
             :value="value"
             v-on="listeners"/>
    </slot>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    value: [String, Number],
    label: String,
    inputClasses: [String, Array]
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.onInput
      };
    }
  },
  methods: {
    onInput(evt) {
      this.$emit('input', evt.target.value)
    }
  }
};
</script>
<style>
</style>
