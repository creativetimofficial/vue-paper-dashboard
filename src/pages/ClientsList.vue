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
import api  from '@/api/api.js';
const tableColumns = ["Nombre", "Apellidos", "Cédula", "Ciudad", 'Teléfono', 'Email', 'Negocio', 'Dirección'];
const tableAttrs = ["name", "lastName", "document", "city", 'phone', 'email', 'business', 'address'];

export default {
  components: {
    PaperTable
  },
  created() {
    api.getClients().then(clients => {
      this.tableClient.data = clients;
    });
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
