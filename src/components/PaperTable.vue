<template>
  <table class="table" :class="tableClass">
    <thead>
    <th v-for="(column, index) in columns" :key="index">
      {{column}}
    </th>
    </thead>
    <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <td v-for="(column, index) in columns"
          :key="index"
          v-if="hasValue(item, column)">
        {{itemValue(item, column)}}
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    columns: Array,
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
    hasValue(item, column) {
      return item[column.toLowerCase()] !== "undefined";
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    }
  }
};
</script>
<style>
</style>
