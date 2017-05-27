<template>
  <div class="form-group">
    <label v-if="attributes && attributes.label">
      {{attributes.label}}
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
      disabled: Boolean,
      placeholder: String,
      value: [String, Number]
    },
    mounted () {
    }
  }

</script>
<style>

</style>
