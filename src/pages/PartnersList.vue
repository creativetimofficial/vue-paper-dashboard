<template>
    <div class="row">
      <div class="col-12">
        <card :title="tablePartners.title" :subTitle="tablePartners.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="tablePartners.data" :attrs="tablePartners.attrs" :columns="tablePartners.columns">
            </paper-table>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import { PaperTable } from "@/components";
import api  from '@/api/api.js';
const tableColumns = ['Nombre', 'Apellidos', 'Cédula', 'Teléfono', 'Email', 'Rol', 'Salario'];
const tableAttrs = ["name", "lastName", "document", 'phone', 'email', 'rol', 'salary'];

export default {
  components: {
    PaperTable
  },
  created() {
    api.getPartners().then(partners => {
      this.tablePartners.data = partners;
    });
  },
  data() {
    return {
      tablePartners: {
        title: "Lista de socios",
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
