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
        <card :title="tableServices.title" :subTitle="tableServices.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="tableServices.data" :attrs="tableServices.attrs" :columns="tableServices.columns">
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

import axios from 'axios';

export default {
  components: {
    PaperTable
  },
  created() {
    api.getServices().then(services => {
      this.tableServices.data = services;
    });
  },
  data() {
    return {
      tableServices: {
        title: "Lista de servicios",
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
