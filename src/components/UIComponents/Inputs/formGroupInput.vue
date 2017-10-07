<template>
  <div class="form-group">
    <label v-if="label">
      {{label}}
    </label>
    <input class="form-control border-input"
           v-bind="$attrs"
           :value="value"
           @input="$emit('input', $event.target.value)"
           v-on="$listeners">
  </div>
</template>
<script>
  export default {
    inheritAttrs: false,
    props: {
      value: [String, Number],
      label: String
    }
  }

</script>
<style>

</style>
