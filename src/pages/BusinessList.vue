<template>
    <div class="row">
      <div class="col-12">
        <card :title="tableClient.title" :subTitle="tableClient.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="tableClient.data" :attrs="tableClient.attrs" :columns="tableClient.columns">

            </paper-table>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import { PaperTable } from "@/components";
const tableColumns = ['Nombre', 'Nit', 'Tipo', 'Ciudad', 'Teléfono', 'Email', 'Dirección'];
const tableAttrs = ['name', 'nit', 'type', 'city', 'phone', 'email', 'address'];

import axios from 'axios';

export default {
  components: {
    PaperTable
  },
  created() {
    
  },
  data() {
    return {
      tableClient: {
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
