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
            <p-button block @click.native="showForm = !showForm">Agregar cliente</p-button>
          </div>
        </div>
        <card v-show="showForm">
          <div class="row">
            <div class="col-md-4">
              <fg-input 
                type="text"
                label="Nombre"
                v-model="searchText">
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input 
                type="text"
                label="Apellidos"
                v-model="searchText">
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input 
                type="text"
                label="Cédula"
                v-model="searchText">
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input 
                type="text"
                label="Ciudad"
                v-model="searchText">
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input 
                type="text"
                label="Teléfono"
                v-model="searchText">
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input 
                type="text"
                label="Email"
                v-model="searchText">
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input 
                type="text"
                label="Negocio"
                v-model="searchText">
              </fg-input>
            </div>
            <div class="col-md-4">
              <fg-input 
                type="text"
                label="Address"
                v-model="searchText">
              </fg-input>
            </div>
            <div class="col-md-2">
              <p-button block outline @click.native="showForm = !showForm">Cancelar</p-button>
            </div>
            <div class="col-md-2">
              <p-button block>Guardar</p-button>
            </div>
          </div>
        </card>
        <card :title="tableClient.title">
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
      searchText: '',
      showForm: false, 
      tableClient: {
        title: 'Lista de clientes',
        columns: [...tableColumns],
        attrs: [...tableAttrs],
        data: [],
      },
    };
  },
  methods: {
    clearInput() {
      this.searchText = '';
    }
  }
};
</script>
<style>
</style>
