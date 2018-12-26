<template>
  <table class="table" :class="tableClass">
    <thead>
    <slot name="attrs">
      <th v-for="column in columns" :key="column">{{column}}</th>
    </slot>
    </thead>
    <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <slot :row="item">
        <td v-for="(attr, index) in attrs"
            :key="index"
            v-if="hasValue(item, attr)">
          {{itemValue(item, attr)}}
        </td>
      </slot>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'paper-table',
  props: {
    columns: Array,
    attrs: Array,
    data: Array,
    type: {
      type: String, // striped | hover
      default: "striped"
    },
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    }
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    }
  },
  methods: {
    hasValue(item, attr) {
      return item[attr] !== "undefined";
    },
    itemValue(item, attr) {
      return item[attr];
    }
  }
};
</script>
<style>
</style>
