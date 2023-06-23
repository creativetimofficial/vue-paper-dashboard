<template>
    <div class="image">
      <Navbar></Navbar> 
        <div class="album py-5 bg-light">
            <div class="container">
              <div class="row">
                <div v-for="image in APIData" :key="image.id" class="col-md-4">
                  <div class="card mb-4 box-shadow">
                    <!-- <img >{{image.image}} > -->
                    <!-- <html> $imagename = {{image.image}} </html> -->
                    <img src="@/media/img05.jpg"/>
                    <!-- <img :src="require('@' + image.image)" /> -->
                    <div class="card-body">
                        <h4 class=""><a class="text-secondary" href="">{{image.title}}</a></h4>
                        <p class="card-text">{{image.title}}</p>
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        <a href="" class="btn btn-sm btn-outline-primary" role="button" aria-pressed="true">View</a>
                        <a href="" class="btn btn-sm btn-outline-secondary" role="button" aria-pressed="true">Edit</a>
                        </div>
                        <small class="text-muted">9 mins</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import { getAPI } from '../axios-api'
    import Navbar from '../components/Navbar'
    export default {
      name: 'ImageNew',
      data () {
        return {
            APIData: []
          }
      },
      components: {
        Navbar
      },
      created () {
          getAPI.get('/image/',)
            .then(response => {
              console.log('Post API has recieved data')
              this.APIData = response.data

            })
            .catch(err => {
              console.log(err)
            })
      }
    }
  </script>
  
  <style scoped>
  
  </style>
  
  