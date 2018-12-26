<template>
    <div class="row">
      <div class="col-12">
        <card :title="tableBusinesses.title" :subTitle="tableBusinesses.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="tableBusinesses.data" :attrs="tableBusinesses.attrs" :columns="tableBusiness.columns">
            </paper-table>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import { PaperTable } from "@/components";
import api  from '@/api/api.js';
const tableColumns = ['Nombre', 'Nit', 'Tipo', 'Ciudad', 'Teléfono', 'Email', 'Dirección'];
const tableAttrs = ['name', 'nit', 'type', 'city', 'phone', 'email', 'address'];

import axios from 'axios';

export default {
  components: {
    PaperTable
  },
  created() {
    api.getBusinesses().then(businesses => {
      this.tableBusinesses.data = businesses;
    });
  },
  data() {
    return {
      tableBusinesses: {
        title: "Lista de clientes",
        subTitle: "Here is a subtitle for this table",
        columns: [...tableColumns],
        attrs: [...tableAttrs],
        data: [],
      },
    };
  }
};
</script>
<style>
</style>
