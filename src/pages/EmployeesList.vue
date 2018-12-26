<template>
    <div class="row">
      <div class="col-12">
        <div class="row d-flex justify-content-center">
            <div class="col-md-8">
              <fg-input type="search" placeholder="Buscar cliente" v-model="searchText"></fg-input>
            </div>
            <div class="col-md-2">
              <p-button block outline :disabled="!searchText" @click.native="clearInput">Cancelar</p-button>
            </div>
            <div class="col-md-2">
              <p-button block>Agregar cliente</p-button>
            </div>
        </div>
        <card :title="tableEmployees.title" :subTitle="tableEmployees.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="tableEmployees.data" :attrs="tableEmployees.attrs" :columns="tableEmployees.columns">
            </paper-table>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import { PaperTable } from "@/components";
import api  from '@/api/api.js';
const tableColumns = ['Nombre', 'Apellidos', 'Cédula', 'Teléfono', 'Email', 'Salario', 'Dirección'];
const tableAttrs = ['name', 'lastName', 'document', 'phone', 'email', 'salary', 'address'];


export default {
  components: {
    PaperTable
  },
  created() {
    api.getEmployees().then(employees => {
      this.tableEmployees.data = employees;
    });
  },
  data() {
    return {
      tableEmployees: {
        title: "Lista de empleados",
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
