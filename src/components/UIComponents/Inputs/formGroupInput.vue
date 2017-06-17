<template>
  <div class="form-group">
    <label v-if="label">
      {{label}}
    </label>
    <input class="form-control border-input" v-bind="$props" :value="value"
           @input="$emit('input',$event.target.value)">
  </div>
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      label: String,
      name: String,
      disabled: Boolean,
      placeholder: String,
      value: [String, Number]
    }
  }

</script>
<style>

</style>
