<template>
  <div class="form-group">
    <label v-if="attributes && attributes.label">
      {{attributes.label}}
    </label>
    <input class="form-control border-input"
           v-bind="attributes"
           :value="value"
           @input="$emit('input',$event.target.value)">
  </div>
</template>
<script>
  export default{
    props: {
      attributes: Object,
      default: () => {
        return {
          type: "text",
        }
      },
      value: [String, Number]
    }
  }
</script>
<style>
</style>
