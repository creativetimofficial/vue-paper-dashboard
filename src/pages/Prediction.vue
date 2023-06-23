<template>
    <div class="d-flex flex-column justify-content-center align-items-center" style="height: 80vh">
      <div class="p-2">
        <h1 v-if="!APIResult.length">Enter to predict Iris type</h1>
        <h1 v-else style="font-size:4rem">{{APIResult}}</h1>
      </div>
      <div class="p-2">
        <form @submit.prevent>
          <div class="form-row" style="max-width:500px">
            <div class="form-group col-md-3">
              <label class="col-12 px-0" for="sepal_length">Sepal Length</label>
              <input
                class="form-control"
                v-model.trim="irisdata.sepal_length"
                type="number"
                id="sepal_length"
              />
            </div>
            <div class="form-group col-md-3">
              <label class="col-12 px-0" for="sepal_length">Sepal Width</label>
              <input
                class="form-control"
                v-model.trim="irisdata.sepal_width"
                type="number"
                id="sepal_width"
              />
            </div>
            <div class="form-group col-md-3">
              <label class="col-12 px-0" for="sepal_length">Petal Length</label>
              <input
                class="form-control"
                v-model.trim="irisdata.petal_length"
                type="number"
                id="petal_length"
              />
            </div>
            <div class="form-group col-md-3">
              <label class="col-12 px-0" for="sepal_length">Petal Width</label>
              <input
                class="form-control"
                v-model.trim="irisdata.petal_width"
                type="number"
                id="petal_width"
              />
            </div>
            <button @click="predict" type="button" class="btn btn-primary btn-lg btn-block">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { getAPI } from '../axios-api';
  export default {
    name: "Posts",
    data() {
      return {
        irisdata: {
          sepal_length: "",
          sepal_width: "",
          petal_length: "",
          petal_width: ""
        },
        APIResult: []
      };
    },
    methods: {
      predict() {
        getAPI
          .get("/posts", {
            params: {
              sepal_length: this.irisdata.sepal_length,
              sepal_width: this.irisdata.sepal_width,
              petal_length: this.irisdata.petal_length,
              petal_width: this.irisdata.petal_width
            }
          })
          .then(response => {
            console.log("Recieved data successfully");
            this.APIResult = response.data;
            console.log(response.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };
  </script>
  
  <style>
  </style>
  